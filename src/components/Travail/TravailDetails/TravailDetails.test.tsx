import { render, screen, fireEvent } from '@testing-library/react';
import { IntlProvider } from 'react-intl';
import TravailDetails from './TravailDetails';
import TravailType from '@src/types/TravailType';

// Mock de données pour un travail
const mockTravail: TravailType = {
	entreprise: 'Capgemini',
	logoEntreprise: 'path/to/logo.png',
	poste: 'poste.id',
	contrat: 'contrat.id',
	dateDebut: 'dateDebut.id',
	dateFin: 'dateFin.id',
	softSkills: ['skill.id.1', 'skill.id.2'],
	description: 'description.id',
};

// Fonction mockée pour openDetails
const mockOpenDetails = jest.fn();

// Messages de test pour les traductions
const messages = {
	'poste.id': 'Développeur',
	'contrat.id': 'Contrat à durée indéterminée (CDI)',
	'dateDebut.id': 'Janvier 2023',
	'dateFin.id': 'Janvier 2024',
	'skill.id.1': 'Janvier 2024',
	'skill.id.2': 'Janvier 2024',
	'description.id': 'Janvier 2024',
	'parcours.professionnel.details.more.information': "Plus d'informations",
};

describe('TravailDetails', () => {
	it("affiche les informations de l'entreprise, du poste et des dates", () => {
		render(
			<IntlProvider locale="fr" messages={messages}>
				<TravailDetails
					travail={mockTravail}
					openDetails={mockOpenDetails}
				/>
			</IntlProvider>,
		);

		// Vérifie l'affichage du nom de l'entreprise
		expect(screen.getByText('Capgemini')).toBeInTheDocument();

		// Vérifie l'affichage du poste
		expect(screen.getByText('Développeur')).toBeInTheDocument();

		// Vérifie l'affichage du contrat
		expect(
			screen.getByText('Contrat à durée indéterminée (CDI)'),
		).toBeInTheDocument();

		// Vérifie l'affichage des dates
		expect(screen.getByText('Janvier 2023')).toBeInTheDocument();
		expect(screen.getByText('- Janvier 2024')).toBeInTheDocument();

		// Vérifie la présence du bouton avec le texte correct
		expect(screen.getByText("Plus d'informations")).toBeInTheDocument();
	});

	it("appelle openDetails lorsqu'on clique sur le bouton", () => {
		render(
			<IntlProvider locale="fr" messages={messages}>
				<TravailDetails
					travail={mockTravail}
					openDetails={mockOpenDetails}
				/>
			</IntlProvider>,
		);

		// Simuler un clic sur le bouton
		const button = screen.getByTitle("Plus d'informations");
		fireEvent.click(button);

		// Vérifie que la fonction openDetails a été appelée
		expect(mockOpenDetails).toHaveBeenCalledTimes(1);
	});
});
