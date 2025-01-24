import { render, screen } from '@testing-library/react';
import { IntlProvider } from 'react-intl';
import BarreRetour from './BarreRetour';
import messages from '@src/lang/fr.json';

jest.mock('../LinkedButton/LinkedButton', () =>
	jest.fn(({ titre, description, url, additionnalClass }) => (
		<div
			data-testid="linked-button"
			data-titre={titre}
			data-description={description}
			data-url={url}
			data-class={additionnalClass}
		/>
	)),
);

describe('BarreRetour Component', () => {
	const renderWithIntl = (component: JSX.Element) =>
		render(
			<IntlProvider locale="fr" messages={messages}>
				{component}
			</IntlProvider>,
		);

	test('renders the LinkedButton with correct intl messages', () => {
		renderWithIntl(<BarreRetour />);

		const linkedButton = screen.getByTestId('linked-button');
		expect(linkedButton).toBeInTheDocument();
		expect(linkedButton).toHaveAttribute(
			'data-titre',
			messages['back.button.title'],
		);
		expect(linkedButton).toHaveAttribute(
			'data-description',
			messages['back.button.description'],
		);
		expect(linkedButton).toHaveAttribute('data-url', '/');
		expect(linkedButton).toHaveAttribute('data-class', 'back-btn');
	});
});
