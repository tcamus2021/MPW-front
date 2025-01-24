import { render, screen } from '@testing-library/react';
import { IntlProvider } from 'react-intl';
import Contact from './Contact';

jest.mock('../common/BarreRetour/BarreRetour', () =>
	jest.fn(() => <div data-testid="barre-retour" />),
);

const messages = {
	'contact.linkedin': 'LinkedIn Profile',
};

describe('Contact Component', () => {
	const renderWithIntl = (component: JSX.Element): void => {
		render(
			<IntlProvider locale="en" messages={messages}>
				{component}
			</IntlProvider>,
		);
	};

	test('renders BarreRetour component', () => {
		renderWithIntl(<Contact />);
		expect(screen.getByTestId('barre-retour')).toBeInTheDocument();
	});

	test('renders the contact title', () => {
		renderWithIntl(<Contact />);
		expect(
			screen.getByText('Contact', { selector: 'h3' }),
		).toBeInTheDocument();
	});

	test('renders the email section', () => {
		renderWithIntl(<Contact />);
		expect(
			screen.getByText('tanguycamus.pro@gmail.com'),
		).toBeInTheDocument();
		expect(
			screen.getByRole('link', { name: 'tanguycamus.pro@gmail.com' }),
		).toHaveAttribute('href', 'mailto:tanguycamus.pro@gmail.com');
	});

	test('renders the phone section', () => {
		renderWithIntl(<Contact />);
		expect(screen.getByText('06 17 51 35 24')).toBeInTheDocument();
		expect(
			screen.getByRole('link', { name: '06 17 51 35 24' }),
		).toHaveAttribute('href', 'tel:+33617513524');
	});

	test('renders the LinkedIn section with FormattedMessage', () => {
		renderWithIntl(<Contact />);
		expect(
			screen.getByText(messages['contact.linkedin']),
		).toBeInTheDocument();
		expect(
			screen.getByRole('link', { name: messages['contact.linkedin'] }),
		).toHaveAttribute(
			'href',
			'https://www.linkedin.com/in/tanguy-camus-b71915182',
		);
	});
});
