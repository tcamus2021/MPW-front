import { render, screen, fireEvent } from '@testing-library/react';
import { IntlProvider } from 'react-intl';
import Loisirs from './Loisirs';
import loisirsData from './loisirs-data.json';
import messages from '@src/lang/fr.json';

jest.mock('../common/BarreRetour/BarreRetour', () => () => (
	<div data-testid="barre-retour" />
));

jest.mock('./LoisirsSection/LoisirsSection', () =>
	jest.fn(({ loisir, triggerOpenDetails }) => (
		<div
			data-testid="loisirs-section"
			data-nom={loisir.nom}
			onClick={triggerOpenDetails}
		>
			{loisir.nom}
		</div>
	)),
);

jest.mock('../common/Modal/Modal', () =>
	jest.fn(({ isOpen, triggerClose, children }) =>
		isOpen ? (
			<div data-testid="modal">
				<button data-testid="modal-close" onClick={triggerClose}>
					Close
				</button>
				{children}
			</div>
		) : null,
	),
);

describe('Loisirs Component', () => {
	const renderWithIntl = (component: JSX.Element) =>
		render(
			<IntlProvider locale="fr" messages={messages}>
				{component}
			</IntlProvider>,
		);

	test('renders the BarreRetour and title', () => {
		renderWithIntl(<Loisirs />);

		expect(screen.getByTestId('barre-retour')).toBeInTheDocument();
		expect(
			screen.getByText(messages['activite.title']),
		).toBeInTheDocument();
	});

	test('renders all loisirs sections', () => {
		renderWithIntl(<Loisirs />);

		const loisirSections = screen.getAllByTestId('loisirs-section');
		expect(loisirSections.length).toBe(loisirsData.length);

		loisirSections.forEach((section, index) => {
			expect(section).toHaveAttribute('data-nom', loisirsData[index].nom);
		});
	});

	test('opens and closes the modal with the correct data', () => {
		renderWithIntl(<Loisirs />);

		// Trigger opening the modal
		const loisirSection = screen.getAllByTestId('loisirs-section')[0];
		fireEvent.click(loisirSection);

		const modal = screen.getByTestId('modal');
		expect(modal).toBeInTheDocument();
		expect(
			screen.getByText(
				messages[loisirsData[0].nom as keyof typeof messages],
			),
		).toBeInTheDocument();

		// Check modal descriptions
		loisirsData[0].descriptions.forEach((description) => {
			expect(
				screen.getByText(
					messages[description as keyof typeof messages],
				),
			).toBeInTheDocument();
		});

		// Close the modal
		fireEvent.click(screen.getByTestId('modal-close'));
		expect(screen.queryByTestId('modal')).not.toBeInTheDocument();
	});
});
