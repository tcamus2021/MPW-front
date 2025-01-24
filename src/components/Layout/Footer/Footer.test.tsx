import { render } from '@testing-library/react';
import Footer from './Footer';
import { IntlProvider } from 'react-intl';

describe('Footer Component', () => {
	const messages = {
		'layout.footer.made.in': 'MADE IN TEXT',
		'layout.footer.code': 'CODE TEXT',
	};

	it('renders the footer with the correct messages', () => {
		const { getByText, getByRole } = render(
			<IntlProvider locale="fr" messages={messages}>
				<Footer />
			</IntlProvider>,
		);

		// Vérifie que le texte 'Fabriqué en' s'affiche correctement
		expect(getByText('MADE IN TEXT')).toBeInTheDocument();

		// Vérifie que le lien vers GitHub est présent avec le texte 'Voir le code source'
		const linkElement = getByRole('link');
		expect(linkElement).toBeInTheDocument();
		expect(linkElement).toHaveAttribute(
			'href',
			'https://github.com/tcamus2021/MPW-front',
		);

		// Vérifie que l'image avec la classe 'footer-new-window' est présente
		const imgElement = document.querySelector('.footer-new-window');
		expect(imgElement).toBeInTheDocument();
		expect(imgElement).toHaveAttribute('src', '/new-window.svg');
	});

	it('opens the link in a new tab', () => {
		const { getByRole } = render(
			<IntlProvider locale="fr" messages={messages}>
				<Footer />
			</IntlProvider>,
		);

		// Vérifie que le lien s'ouvre dans un nouvel onglet
		const linkElement = getByRole('link');
		expect(linkElement).toHaveAttribute('target', '_blank');
	});
});
