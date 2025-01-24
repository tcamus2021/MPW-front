import { render, screen } from '@testing-library/react';
import Layout from './Layout';
import Header from './Header/Header';

jest.mock('./Header/Header', () => jest.fn(() => <div data-testid="header" />));
jest.mock('./Footer/Footer', () => jest.fn(() => <div data-testid="footer" />));

describe('Layout Component', () => {
	const mockSetLocale = jest.fn();

	test('renders the Header component with correct props', () => {
		render(
			<Layout locale="fr" setLocale={mockSetLocale}>
				<div>Test Content</div>
			</Layout>,
		);

		expect(screen.getByTestId('header')).toBeInTheDocument();
		expect(Header).toHaveBeenCalledWith(
			expect.objectContaining({
				locale: 'fr',
				setLocale: mockSetLocale,
			}),
			{},
		);
	});

	test('renders the Footer component', () => {
		render(
			<Layout locale="fr" setLocale={mockSetLocale}>
				<div>Test Content</div>
			</Layout>,
		);

		expect(screen.getByTestId('footer')).toBeInTheDocument();
	});

	test('renders the children inside the main content', () => {
		render(
			<Layout locale="fr" setLocale={mockSetLocale}>
				<div>Test Content</div>
			</Layout>,
		);

		const mainContent = screen.getByRole('main');
		expect(mainContent).toBeInTheDocument();
		expect(mainContent).toHaveClass('main-page__content');
		expect(screen.getByText('Test Content')).toBeInTheDocument();
	});
});
