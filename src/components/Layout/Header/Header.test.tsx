import { render, fireEvent } from '@testing-library/react';
import Header from './Header';
import { IntlProvider } from 'react-intl';

const messages = {
	'layout.header.title': 'TITRE',
	'layout.header.image.description': 'DESCRIPTION IMAGE',
	'layout.header.parametres.title': 'TITRE PARAM',
	'layout.header.parametres.description': 'DESCRIPTION PARAM',
	'layout.header.parametres.langues': 'CHOIX LANGUES',
};

// Mock du composant MonCompteInfoBulle
jest.mock('../ParameterDetails/ParameterDetails', () => () => (
	<div>Mocked MonCompteInfoBulle</div>
));

// Mock du hook useClickOutside
jest.mock('@custom-react-hooks/use-click-outside', () => ({
	useClickOutside: jest.fn(),
}));

describe('Header Component', () => {
	const setLocaleMock = jest.fn();

	it('renders the Header component correctly', () => {
		const { getByText, getByTitle } = render(
			<IntlProvider locale="fr" messages={messages}>
				<Header locale="fr" setLocale={setLocaleMock} />
			</IntlProvider>,
		);

		// Vérifie la présence du titre
		expect(getByText('TITRE')).toBeInTheDocument();

		// Vérifie la présence du bouton de paramètres pour mobile et desktop
		expect(getByTitle('DESCRIPTION PARAM')).toBeInTheDocument();
	});

	it('opens the parameter popin when clicking on the desktop button', () => {
		const { getByTitle, getByText } = render(
			<IntlProvider locale="fr" messages={messages}>
				<Header locale="fr" setLocale={setLocaleMock} />
			</IntlProvider>,
		);

		const desktopParameterButton = getByTitle('DESCRIPTION PARAM');

		// Simule un clic sur le bouton de paramètres
		fireEvent.click(desktopParameterButton);

		// Vérifie que le composant MonCompteInfoBulle s'affiche
		expect(getByText('Mocked MonCompteInfoBulle')).toBeInTheDocument();
	});

	it('closes the parameter popin when clicking on the button again', () => {
		const { getByTitle, getByText, queryByText } = render(
			<IntlProvider locale="fr" messages={messages}>
				<Header locale="fr" setLocale={setLocaleMock} />
			</IntlProvider>,
		);

		const desktopParameterButton = getByTitle('DESCRIPTION PARAM');

		// Ouvre la popin
		fireEvent.click(desktopParameterButton);
		expect(getByText('Mocked MonCompteInfoBulle')).toBeInTheDocument();

		// Ferme la popin
		fireEvent.click(desktopParameterButton);
		expect(
			queryByText('Mocked MonCompteInfoBulle'),
		).not.toBeInTheDocument();
	});

	it('closes the parameter popin when clicking outside', () => {
		const { getByTitle, getByText, queryByText } = render(
			<IntlProvider locale="fr" messages={messages}>
				<Header locale="fr" setLocale={setLocaleMock} />
			</IntlProvider>,
		);

		const desktopParameterButton = getByTitle('DESCRIPTION PARAM');

		// Ouvre la popin
		fireEvent.click(desktopParameterButton);
		expect(getByText('Mocked MonCompteInfoBulle')).toBeInTheDocument();

		// Simule un clic à l'extérieur
		fireEvent.click(document);

		// Vérifie que la popin est fermée
		expect(
			queryByText('Mocked MonCompteInfoBulle'),
		).not.toBeInTheDocument();
	});

	it('opens and closes the mobile popin when clicking on the burger menu', () => {
		const { container, getByText, queryByText } = render(
			<IntlProvider locale="fr" messages={messages}>
				<Header locale="fr" setLocale={setLocaleMock} />
			</IntlProvider>,
		);

		const mobileParameterButton = container.querySelector(
			'.main-page-header__parameter.hidden-desktop',
		) as HTMLElement;

		// Ouvre la popin via le menu mobile
		fireEvent.click(mobileParameterButton);
		expect(getByText('Mocked MonCompteInfoBulle')).toBeInTheDocument();

		// Ferme la popin via le menu mobile
		fireEvent.click(mobileParameterButton);
		expect(
			queryByText('Mocked MonCompteInfoBulle'),
		).not.toBeInTheDocument();
	});
});
