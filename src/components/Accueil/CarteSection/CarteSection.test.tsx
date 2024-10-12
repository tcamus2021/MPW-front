import { render, screen } from '@testing-library/react';
import CarteSectionType from '@src/types/CarteSectionType';
import CarteSection from './CarteSection';

// Mock du composant LinkedButton
jest.mock('@src/components/common/LinkedButton/LinkedButton', () => {
  return ({ titre, url }: { titre: string, url: string }) => (
    <a href={url}>{titre}</a>
  );
});

describe('CarteSection component', () => {
  const carte: CarteSectionType = {
    color: '#ff0000',
    imageUrl: '/test-image.jpg',
    text: 'Sample Text',
    buttonText: 'Learn More',
    url: '/learn-more',
  };

  it('should render the image with correct src and alt attributes', () => {
    render(<CarteSection carte={carte} />);
    const imgElement = screen.getByAltText('Description de l\'image');
    expect(imgElement).toBeInTheDocument();
    expect(imgElement).toHaveAttribute('src', '/test-image.jpg');
  });

  it('should render the correct text inside the overlay', () => {
    render(<CarteSection carte={carte} />);
    const textElement = screen.getByText('Sample Text');
    expect(textElement).toBeInTheDocument();
  });

  it('should render the LinkedButton with correct props', () => {
    render(<CarteSection carte={carte} />);
    const buttonElement = screen.getByText('Learn More');
    expect(buttonElement).toBeInTheDocument();
    expect(buttonElement).toHaveAttribute('href', '/learn-more');
  });

  it('should apply the correct color as an inline style', () => {
    render(<CarteSection carte={carte} />);
    const slideElement = screen.getByRole('img').parentElement;
    expect(slideElement).toHaveStyle('--slide-color: #ff0000');
  });
});
