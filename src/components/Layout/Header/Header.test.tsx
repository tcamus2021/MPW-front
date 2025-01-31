import { render, screen, fireEvent } from '@testing-library/react';
import Header from './Header';
import { IntlProvider } from 'react-intl';
import messages from '@src/lang/fr.json';
import '@testing-library/jest-dom';

describe('Header component', () => {
	const mockSetLocale = jest.fn();

	const renderHeader = () =>
		render(
			<IntlProvider
				locale="fr"
				messages={{
					...messages,
					'layout.header.parametres.langues':
						'layout.header.parametres.langues',
				}}
			>
				<Header locale="fr" setLocale={mockSetLocale} />
			</IntlProvider>,
		);

	it('Init Test', () => {
		renderHeader();
		expect(screen).toBeDefined();
		expect(screen.getByRole('heading')).toBeInTheDocument();
		expect(screen.getByTestId('parameter-desktop')).toBeDefined();
		expect(screen.getByTestId('parameter-mobile')).toBeDefined();
	});

	it('Click test', () => {
		renderHeader();
		const desktopButton = screen.getByTestId('parameter-desktop');
		expect(desktopButton).toBeDefined();
		fireEvent.click(desktopButton);
		expect(
			screen.getByText('layout.header.parametres.langues'),
		).toBeDefined();
	});

	it('Click test', () => {
		renderHeader();
		const mobileButton = screen.getByTestId('parameter-mobile');
		expect(mobileButton).toBeDefined();
		fireEvent.click(mobileButton);
		expect(
			screen.getByText('layout.header.parametres.langues'),
		).toBeDefined();
	});
});
