import { render, screen } from '@testing-library/react';
import LinkedButton from './LinkedButton';

const mockProps = {
	titre: 'Voir plus',
	description: 'Découvrez nos services',
	url: '/other-page',
};

describe('LinkedButton Component', () => {
	it('renders the button with the correct title and description', () => {
		render(<LinkedButton {...mockProps} />);
		const linkElement = screen.getByRole('link');
		expect(linkElement).toHaveAttribute('href', mockProps.url);

		const buttonElement = screen.getByRole('button', {
			name: mockProps.titre,
		});
		expect(buttonElement).toBeInTheDocument();
	});

	it('applies the additional class when provided', () => {
		const additionnalClass = 'custom-class';
		render(
			<LinkedButton {...mockProps} additionnalClass={additionnalClass} />,
		);

		const buttonElement = screen.getByRole('button');
		expect(buttonElement).toHaveClass(
			`btn accueil-swiper__slide-button ${additionnalClass}`,
		);
	});

	it('renders the arrow icon by default', () => {
		render(<LinkedButton {...mockProps} />);

		const arrowIcon = screen.getByRole('img', { hidden: true });
		expect(arrowIcon).toHaveAttribute('src', 'arrow-button.svg');
		expect(arrowIcon).toHaveClass('arrow-button');
	});

	it('does not render the arrow icon when withArrow is false', () => {
		render(<LinkedButton {...mockProps} withArrow={false} />);

		const arrowIcon = screen.queryByRole('img', { hidden: true });
		expect(arrowIcon).not.toBeInTheDocument();
	});

	it('applies default class when no additional class is provided', () => {
		render(<LinkedButton {...mockProps} />);

		const buttonElement = screen.getByRole('button');
		expect(buttonElement).toHaveClass('btn accueil-swiper__slide-button');
	});
});
