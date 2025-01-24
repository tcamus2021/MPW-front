import { getDefaultLanguage } from './lang';

describe('Test utilitaire de langue', () => {
	test('Langue par défaut prise du navigateur (fr)', () => {
		// Given
		jest.spyOn(window.navigator, 'language', 'get').mockReturnValue('fr');
		//When
		const langue = getDefaultLanguage();
		//Then
		expect(langue).toBe('fr');
	});

	test('Langue par défaut prise du navigateur (en)', () => {
		// Given
		jest.spyOn(window.navigator, 'language', 'get').mockReturnValue('en');
		//When
		const langue = getDefaultLanguage();
		//Then
		expect(langue).toBe('en');
	});

	test('Langue par défaut prise du navigateur (sans traduction existante)', () => {
		// Given
		jest.spyOn(window.navigator, 'language', 'get').mockReturnValue('ja');
		//When
		const langue = getDefaultLanguage();
		//Then
		expect(langue).toBe('fr');
	});

	test('Langue récupérée du localstorage (fr)', () => {
		// Given
		localStorage.setItem('appLanguage', 'fr');
		//When
		const langue = getDefaultLanguage();
		//Then
		expect(langue).toBe('fr');
	});

	test('Langue récupérée du localstorage (en)', () => {
		// Given
		localStorage.setItem('appLanguage', 'en');
		//When
		const langue = getDefaultLanguage();
		//Then
		expect(langue).toBe('en');
	});

	test('Langue récupérée du localstorage (sans traduction existante)', () => {
		// Given
		localStorage.setItem('appLanguage', 'ja');
		//When
		const langue = getDefaultLanguage();
		//Then
		expect(langue).toBe('fr');
	});
});
