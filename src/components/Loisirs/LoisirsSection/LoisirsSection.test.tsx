import { render, screen, fireEvent } from '@testing-library/react';
import { IntlProvider } from 'react-intl';
import LoisirsSection from './LoisirsSection';
import LoisirsType from '@src/types/LoisirsType';

// Mock de données pour un loisir
const mockLoisir: LoisirsType = {
	nom: 'loisirTest',
	color: '#ff5733',
	image: 'path/to/image.jpg',
	descriptions: [],
};

// Fonction de simulation pour triggerOpenDetails
const triggerOpenDetails = jest.fn();

// Locale utilisée dans le test
const locale = 'fr';

// Messages de test pour FormattedMessage
const messages = {
	loisirTest: 'Loisir Test',
};

describe('LoisirsSection', () => {
	it('devrait afficher un loisir avec les bonnes données', () => {
		render(
			<IntlProvider locale={locale} messages={messages}>
				<LoisirsSection
					loisir={mockLoisir}
					triggerOpenDetails={triggerOpenDetails}
				/>
			</IntlProvider>,
		);

		// Vérifier que le titre du loisir est affiché
		expect(screen.getByText('Loisir Test')).toBeInTheDocument();
	});

	it('devrait appeler triggerOpenDetails lorsque le bouton est cliqué', () => {
		render(
			<IntlProvider locale={locale} messages={messages}>
				<LoisirsSection
					loisir={mockLoisir}
					triggerOpenDetails={triggerOpenDetails}
				/>
			</IntlProvider>,
		);

		// Cliquer sur le bouton pour ouvrir les détails
		fireEvent.click(screen.getByRole('button'));

		// Vérifier que la fonction triggerOpenDetails a été appelée
		expect(triggerOpenDetails).toHaveBeenCalledTimes(1);
	});

	it('devrait appliquer la couleur correcte à la section', () => {
		render(
			<IntlProvider locale={locale} messages={messages}>
				<LoisirsSection
					loisir={mockLoisir}
					triggerOpenDetails={triggerOpenDetails}
				/>
			</IntlProvider>,
		);

		// Vérifier que la couleur est bien appliquée dans le style
		const buttonElement = screen.getByRole('button');
		expect(buttonElement).toHaveStyle(
			`--loisirs-section--color: ${mockLoisir.color}`,
		);
	});
});
