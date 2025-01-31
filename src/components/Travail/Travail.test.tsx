import { render } from '@testing-library/react';
import { IntlProvider } from 'react-intl';
import Travail from './Travail';
import messages from '@src/lang/fr.json';

describe('Travail Test', () => {
	test('Init Travail', () => {
		const screen = render(
			<IntlProvider locale="fr" messages={messages}>
				<Travail />
			</IntlProvider>,
		);
		expect(screen).toBeDefined();
	});
});
