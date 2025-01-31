import { render, screen } from '@testing-library/react';
import TravailModal from './TravailModal';
import TravailType from '@src/types/TravailType';
import { IntlProvider } from 'react-intl';

// Mock messages for react-intl
const messages = {
	'parcours.professionnel.modal.information.title': 'Information',
	'parcours.professionnel.modal.informations.poste': 'Poste',
	'parcours.professionnel.modal.informations.contrat': 'Contrat',
	'parcours.professionnel.modal.informations.duree': 'Durée',
	'parcours.professionnel.modal.informations.duree.actuel': 'Actuel',
	'parcours.professionnel.details.etude': 'Lien vers étude',
	'parcours.professionnel.modal.description.title': 'Description',
	'parcours.professionnel.modal.competences.title': 'Compétences',
	'parcours.professionnel.modal.competences.generales.title':
		'Compétences générales',
	'parcours.professionnel.modal.competences.tech.title':
		'Compétences techniques',
	'parcours.professionnel.mock.softskill1': 'softskill1',
	'parcours.professionnel.mock.softskill2': 'softskill2',
	'parcours.professionnel.mock.poste': 'poste1',
	'parcours.professionnel.mock.dateDebut': '15/02/2000',
	'parcours.professionnel.mock.contrat': 'contrat',
	'parcours.professionnel.mock.description': 'job description',
};

// Mock data for selectedTravail
const mockTravail: TravailType = {
	entreprise: 'Mock Entreprise',
	logoEntreprise: 'mock-logo.png',
	poste: 'parcours.professionnel.mock.poste',
	contrat: 'parcours.professionnel.mock.contrat',
	lienEtude: 'https://mockstudy.com',
	dateDebut: 'parcours.professionnel.mock.dateDebut',
	description: 'parcours.professionnel.mock.description',
	softSkills: [
		'parcours.professionnel.mock.softskill1',
		'parcours.professionnel.mock.softskill2',
	],
	competenceTechnique: ['Tech Skill 1', 'Tech Skill 2'],
};

describe('TravailModal Component', () => {
	it('renders the modal title and company logo', () => {
		const screen = render(
			<IntlProvider locale="fr" messages={messages}>
				<TravailModal selectedTravail={mockTravail} />
			</IntlProvider>,
		);
		expect(screen.getByText(mockTravail.entreprise)).toBeInTheDocument();
		expect(screen.getByRole('img', { hidden: true })).toHaveAttribute(
			'src',
			mockTravail.logoEntreprise,
		);
	});

	it('displays the job information correctly', () => {
		const screen = render(
			<IntlProvider locale="fr" messages={messages}>
				<TravailModal selectedTravail={mockTravail} />
			</IntlProvider>,
		);
		expect(
			screen.getByText(
				`${messages['parcours.professionnel.modal.informations.poste']} : ${messages[mockTravail.poste as keyof typeof messages]}`,
			),
		).toBeInTheDocument();
		expect(
			screen.getByText(
				`${messages['parcours.professionnel.modal.informations.contrat']} : ${messages[mockTravail.contrat as keyof typeof messages]}`,
			),
		).toBeInTheDocument();
		expect(
			screen.getByText(
				`${messages['parcours.professionnel.modal.informations.duree']} : ${messages[mockTravail.dateDebut as keyof typeof messages]} - ${messages['parcours.professionnel.modal.informations.duree.actuel']}`,
			),
		).toBeInTheDocument();
	});

	it('renders the study link if provided', () => {
		const screen = render(
			<IntlProvider locale="fr" messages={messages}>
				<TravailModal selectedTravail={mockTravail} />
			</IntlProvider>,
		);
		expect(
			screen.getByText(messages['parcours.professionnel.details.etude']),
		).toHaveAttribute('href', mockTravail.lienEtude);
	});

	it('renders the description section', () => {
		const screen = render(
			<IntlProvider locale="fr" messages={messages}>
				<TravailModal selectedTravail={mockTravail} />
			</IntlProvider>,
		);
		expect(
			screen.getByText(
				messages['parcours.professionnel.modal.description.title'],
			),
		).toBeInTheDocument();
		expect(
			screen.getByText(
				messages[mockTravail.description as keyof typeof messages],
			),
		).toBeInTheDocument();
	});

	it('renders the soft skills list', () => {
		const screen = render(
			<IntlProvider locale="fr" messages={messages}>
				<TravailModal selectedTravail={mockTravail} />
			</IntlProvider>,
		);
		expect(
			screen.getByText(
				messages[
					'parcours.professionnel.modal.competences.generales.title'
				],
			),
		).toBeInTheDocument();
		mockTravail.softSkills.forEach((skill) => {
			expect(
				screen.getByText(messages[skill as keyof typeof messages]),
			).toBeInTheDocument();
		});
	});

	it('renders the technical skills list if provided', () => {
		const screen = render(
			<IntlProvider locale="fr" messages={messages}>
				<TravailModal selectedTravail={mockTravail} />
			</IntlProvider>,
		);
		expect(
			screen.getByText(
				messages['parcours.professionnel.modal.competences.tech.title'],
			),
		).toBeInTheDocument();
		mockTravail.competenceTechnique?.forEach((skill) => {
			expect(screen.getByText(skill)).toBeInTheDocument();
		});
	});

	it('render the technical skills section if skills are provided', () => {
		render(
			<IntlProvider locale="fr" messages={messages}>
				<TravailModal selectedTravail={mockTravail} />
			</IntlProvider>,
		);
		expect(
			screen.getByText(
				messages['parcours.professionnel.modal.competences.tech.title'],
			),
		).toBeInTheDocument();
	});
});
