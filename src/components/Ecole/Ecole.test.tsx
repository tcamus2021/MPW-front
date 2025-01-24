import { render, screen, fireEvent } from '@testing-library/react';
import { IntlProvider } from 'react-intl';
import Ecole from './Ecole';
import messages from '@src/lang/fr.json';
import ecoleData from './ecole-data.json';

jest.mock('../common/BarreRetour/BarreRetour', () =>
	jest.fn(() => <div data-testid="barre-retour" />),
);
jest.mock('./EcoleDetails/EcoleDetails', () =>
	jest.fn(({ isOpen, openDetails, ecole }) => (
		<div data-testid="ecole-details">
			<h3>{ecole.level}</h3>
			<button onClick={openDetails}>{isOpen ? 'Close' : 'Open'}</button>
		</div>
	)),
);

jest.mock('@src/utils/url', () => ({
	getUrlParams: jest.fn(() => null), // Mock returning null for no URL params
}));

describe('Ecole Component', () => {
	const renderWithIntl = (component: JSX.Element): void => {
		render(
			<IntlProvider locale="fr" messages={messages}>
				{component}
			</IntlProvider>,
		);
	};

	test('renders the BarreRetour component', () => {
		renderWithIntl(<Ecole />);
		expect(screen.getByTestId('barre-retour')).toBeInTheDocument();
	});

	test('renders the title with localization', () => {
		renderWithIntl(<Ecole />);
		expect(
			screen.getByText(messages['parcours.scolaire.title']),
		).toBeInTheDocument();
	});

	test('renders the list of ecoles', () => {
		renderWithIntl(<Ecole />);
		expect(screen.getAllByTestId('ecole-details')).toHaveLength(
			ecoleData.length,
		);
		ecoleData.forEach((ecole) => {
			expect(screen.getByText(ecole.level)).toBeInTheDocument();
		});
	});

	test('handles open/close interaction for EcoleDetails', () => {
		renderWithIntl(<Ecole />);

		const openButtons = screen.getAllByRole('button', { name: 'Open' });
		const closeButtons = screen.queryAllByRole('button', { name: 'Close' });

		// Initially all details should be closed
		expect(openButtons).toHaveLength(ecoleData.length);
		expect(closeButtons).toHaveLength(0);

		// Simulate opening the first item
		fireEvent.click(openButtons[0]);

		// After opening the first item
		expect(screen.getAllByRole('button', { name: 'Open' })).toHaveLength(
			ecoleData.length - 1,
		);
		expect(screen.getAllByRole('button', { name: 'Close' })).toHaveLength(
			1,
		);

		// Simulate closing the first item
		fireEvent.click(screen.getByRole('button', { name: 'Close' }));
		expect(screen.getAllByRole('button', { name: 'Open' })).toHaveLength(
			ecoleData.length,
		);
		expect(screen.queryAllByRole('button', { name: 'Close' })).toHaveLength(
			0,
		);
	});

	test('renders with URL parameter to open a specific EcoleDetails', () => {
		// Mock URL parameter
		require('@src/utils/url').getUrlParams.mockReturnValue('1');
		renderWithIntl(<Ecole />);

		// Ensure the second item is open by default
		expect(
			screen.getByRole('button', { name: 'Close' }),
		).toBeInTheDocument();
		expect(screen.getAllByRole('button', { name: 'Open' })).toHaveLength(
			ecoleData.length - 1,
		);
	});
});
