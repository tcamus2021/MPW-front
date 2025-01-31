import { fireEvent, render } from '@testing-library/react';
import ParameterDetails from './ParameterDetails';
import { IntlProvider } from 'react-intl';

describe('ParameterDetails test', () => {
	const messages = {
		'layout.header.parametres.langues': 'layout.header.parametres.langues',
	};

	it('Init test', () => {
		const screen = render(
			<IntlProvider locale="fr" messages={messages}>
				<ParameterDetails locale="fr" setLocale={jest.fn()} />
			</IntlProvider>,
		);
		expect(screen).toBeDefined();
		expect(screen.getByText('Français')).toBeDefined();
		expect(screen.getByText('English')).toBeDefined();
	});

	it('Click test (fr)', () => {
		const mockSetLocale = jest.fn();
		const screen = render(
			<IntlProvider locale="fr" messages={messages}>
				<ParameterDetails locale="fr" setLocale={mockSetLocale} />
			</IntlProvider>,
		);
		const frButton = screen.getByRole('button', { name: 'Français' });
		fireEvent.click(frButton);
		expect(mockSetLocale).toHaveBeenCalled();
	});

	it('Click test (en)', () => {
		const mockSetLocale = jest.fn();
		const screen = render(
			<IntlProvider locale="fr" messages={messages}>
				<ParameterDetails locale="fr" setLocale={mockSetLocale} />
			</IntlProvider>,
		);
		const enButton = screen.getByRole('button', { name: 'English' });
		fireEvent.click(enButton);
		expect(mockSetLocale).toHaveBeenCalled();
	});
});
