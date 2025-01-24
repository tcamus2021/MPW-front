import { render, screen } from '@testing-library/react';
import { IntlProvider } from 'react-intl';
import Accueil from './Accueil';
import messages from '@src/lang/fr.json';
import { ReactNode } from 'react';

// Mocking the Swiper.js bundle
jest.mock('swiper/element/bundle', () => ({
	register: jest.fn(),
}));

// Mocking Slide component
jest.mock('./CarteSection/CarteSection', () => () => (
	<div>Mocked Slide Component</div>
));

// Mock Swiper library
jest.mock('swiper/react', () => ({
	Swiper: ({ children }: { children: ReactNode }) => <div>{children}</div>,
	SwiperSlide: ({ children }: { children: ReactNode }) => (
		<div>{children}</div>
	),
}));
jest.mock('swiper/modules', () => ({
	A11y: () => {},
	Navigation: () => {},
}));
jest.mock('swiper/css', () => {});
jest.mock('swiper/css/navigation', () => {});

describe('Accueil Component', () => {
	const renderWithIntl = (component: JSX.Element): void => {
		render(
			<IntlProvider locale="fr" messages={messages}>
				{component}
			</IntlProvider>,
		);
	};

	test('renders the accueil title and description', () => {
		renderWithIntl(<Accueil />);

		const titleElement = screen.getByText(messages['accueil.title']);
		expect(titleElement).toBeInTheDocument();

		const descriptionElement = screen.getByText(
			messages['accueil.description'],
		);
		expect(descriptionElement).toBeInTheDocument();

		const part1Element = screen.getByText(
			messages['accueil.description.part1'],
		);
		expect(part1Element).toBeInTheDocument();

		const part2Element = screen.getByText(
			messages['accueil.description.part2'],
		);
		expect(part2Element).toBeInTheDocument();
	});

	test('renders the Swiper component with the correct slides', () => {
		renderWithIntl(<Accueil />);

		// Verify the Swiper slides are rendered
		const swiperElements = screen.getAllByText('Mocked Slide Component');
		expect(swiperElements.length).toBe(6); // Trois slides mockées en desktop et 3 en mobile
	});
});
