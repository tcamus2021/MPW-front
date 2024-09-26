import { render, screen } from '@testing-library/react';
import Slide from './Slide';
import '@testing-library/jest-dom';

// Mock des données de test
const mockSlide = {
  text: 'Parcours scolaire',
  buttonText: 'Découvrir',
  url: '/parcours-scolaire',
  imageUrl: '/image-parcours-scolaire.jpg',
};

// Test 1: Vérification du rendu de base de la slide
test('renders the slide with correct text, button, and image', () => {
  render(<Slide slide={mockSlide} />);

  // Vérifie que le texte est rendu correctement
  const textElement = screen.getByText(mockSlide.text);
  expect(textElement).toBeInTheDocument();

  // Vérifie que le bouton est rendu avec le bon texte
  const buttonElement = screen.getByText(mockSlide.buttonText);
  expect(buttonElement).toBeInTheDocument();

  // Vérifie que l'image est bien rendue avec la bonne source et l'attribut alt
  const imageElement = screen.getByAltText("Description de l'image");
  expect(imageElement).toHaveAttribute('src', mockSlide.imageUrl);
  expect(imageElement).toBeInTheDocument();
});

// Test 2: Vérification de l'attribut alt de l'image
test('renders the image with the correct alt text', () => {
  render(<Slide slide={mockSlide} />);
  const imageElement = screen.getByAltText("Description de l'image");
  expect(imageElement).toBeInTheDocument();
  expect(imageElement).toHaveAttribute('alt', "Description de l'image");
});

// Test 3: Vérification que le bouton contient le bon texte
test('renders the button with correct buttonText', () => {
  render(<Slide slide={mockSlide} />);
  const buttonElement = screen.getByText(mockSlide.buttonText);
  expect(buttonElement).toBeInTheDocument();
  expect(buttonElement).toHaveClass('btn accueil-swiper__slide-button');
});

// Test 4: Vérification de la structure HTML générale
test('renders the slide with the correct structure', () => {
  const { container } = render(<Slide slide={mockSlide} />);

  // Vérifie que la classe CSS de la slide est présente
  const slideElement = container.querySelector('.accueil-swiper__slide');
  expect(slideElement).toBeInTheDocument();

  // Vérifie que la classe CSS de l'image est présente
  const imageElement = container.querySelector('.accueil-swiper__slide-image');
  expect(imageElement).toBeInTheDocument();

  // Vérifie que la classe CSS de l'overlay est présente
  const overlayElement = container.querySelector('.accueil-swiper__slide-overlay');
  expect(overlayElement).toBeInTheDocument();

  // Vérifie que la classe CSS du texte est présente
  const textElement = container.querySelector('.accueil-swiper__slide-text');
  expect(textElement).toBeInTheDocument();

  // Vérifie que la classe CSS du bouton est présente
  const buttonElement = container.querySelector('.accueil-swiper__slide-button');
  expect(buttonElement).toBeInTheDocument();
});
