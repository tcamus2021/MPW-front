import { render, screen, fireEvent } from '@testing-library/react';
import { IntlProvider } from 'react-intl';
import EcoleDetails from './EcoleDetails';
import EcoleType from '@src/types/EcoleType';

// Mock des données pour une école
const mockEcole: EcoleType = {
	color: '#FF5733',
	level: 'parcours.scolaire.level.bac',
	logo: 'path/to/logo.png',
	diplome: 'parcours.scolaire.diplome.bac',
	annee: '2023',
	localisation: 'parcours.scolaire.localisation.paris',
	description: [
		'parcours.scolaire.description.point1',
		'parcours.scolaire.description.point2',
	],
};

// Mock des messages pour les traductions
const messages = {
	'parcours.scolaire.level.bac': 'Baccalauréat',
	'parcours.scolaire.diplome.bac': 'Diplôme de Baccalauréat',
	'parcours.scolaire.localisation.paris': 'Paris',
	'parcours.scolaire.description.point1': 'Point de description 1',
	'parcours.scolaire.description.point2': 'Point de description 2',
	'parcours.scolaire.button.description': 'Afficher les détails',
};

// Mock de la fonction openDetails
const mockOpenDetails = jest.fn();

describe('EcoleDetails', () => {
	it('affiche les informations de prévisualisation', () => {
		render(
			<IntlProvider locale="fr" messages={messages}>
				<EcoleDetails
					isOpen={false}
					openDetails={mockOpenDetails}
					ecole={mockEcole}
				/>
			</IntlProvider>,
		);

		// Vérifie l'affichage du niveau
		expect(screen.getByText('Baccalauréat')).toBeInTheDocument();

		// Vérifie la présence du bouton
		expect(screen.getByTitle('Afficher les détails')).toBeInTheDocument();
	});

	it('affiche les détails lorsque isOpen est true', () => {
		render(
			<IntlProvider locale="fr" messages={messages}>
				<EcoleDetails
					isOpen={true}
					openDetails={mockOpenDetails}
					ecole={mockEcole}
				/>
			</IntlProvider>,
		);

		// Vérifie le titre du diplôme
		expect(screen.getByText('Diplôme de Baccalauréat')).toBeInTheDocument();

		// Vérifie l'année et la localisation
		expect(screen.getByText('2023')).toBeInTheDocument();
		expect(screen.getByText('Paris')).toBeInTheDocument();

		// Vérifie les points de description
		expect(screen.getByText('Point de description 1')).toBeInTheDocument();
		expect(screen.getByText('Point de description 2')).toBeInTheDocument();
	});

	it('appelle openDetails lorsque le bouton est cliqué', () => {
		render(
			<IntlProvider locale="fr" messages={messages}>
				<EcoleDetails
					isOpen={false}
					openDetails={mockOpenDetails}
					ecole={mockEcole}
				/>
			</IntlProvider>,
		);

		// Simule un clic sur le bouton
		const button = screen.getByRole('button');
		fireEvent.click(button);

		// Vérifie que la fonction openDetails a été appelée
		expect(mockOpenDetails).toHaveBeenCalledTimes(1);
	});
});
