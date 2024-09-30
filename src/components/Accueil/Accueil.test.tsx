import { render, screen } from '@testing-library/react';
import { IntlProvider } from 'react-intl';
import Accueil from './Accueil';
import messages from '@src/lang/fr.json';

// Mocking the Swiper.js bundle
jest.mock('swiper/element/bundle', () => ({
  register: jest.fn(),
}));

// Mocking Slide component
jest.mock('./Slide/Slide', () => () => <div>Mocked Slide Component</div>);

describe('Accueil Component', () => {
  const renderWithIntl = (component: JSX.Element) => {
    return render(
      <IntlProvider locale="fr" messages={messages}>
        {component}
      </IntlProvider>
    );
  };

  test('renders the accueil title and description', () => {
    renderWithIntl(<Accueil />);

    const titleElement = screen.getByText(messages['accueil.title']);
    expect(titleElement).toBeInTheDocument();

    const descriptionElement = screen.getByText(messages['accueil.description']);
    expect(descriptionElement).toBeInTheDocument();

    const part1Element = screen.getByText(messages['accueil.description.part1']);
    expect(part1Element).toBeInTheDocument();

    const part2Element = screen.getByText(messages['accueil.description.part2']);
    expect(part2Element).toBeInTheDocument();
  });

  test('renders the Swiper component with the correct slides', () => {
    renderWithIntl(<Accueil />);

    // Verify the Swiper slides are rendered
    const swiperElements = screen.getAllByText('Mocked Slide Component');
    expect(swiperElements.length).toBe(3); // Trois slides mockées

    // Verify the Swiper container is rendered
    const swiperContainer = screen.getByRole('region', { name: 'swiper-container' });
    expect(swiperContainer).toBeInTheDocument();
  });

  test('renders the slides with translated data', () => {
    renderWithIntl(<Accueil />);

    // Vérifier les traductions
    const slideTitle1 = screen.getByText(messages['parcours.scolaire.title']);
    expect(slideTitle1).toBeInTheDocument();

    const slideTitle2 = screen.getByText(messages['parcours.professionnel.title']);
    expect(slideTitle2).toBeInTheDocument();

    const slideTitle3 = screen.getByText(messages['activite.title']);
    expect(slideTitle3).toBeInTheDocument();

    // Vérifier le texte du bouton
    const buttonText = screen.getAllByText(messages['accueil.slide.decouvrir']);
    expect(buttonText.length).toBe(3);
  });
});
