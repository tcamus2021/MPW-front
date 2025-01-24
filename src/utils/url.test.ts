import { getUrlParams } from './url';

describe('Test de la récupération de paramètres de URL', () => {
	afterAll(() => {
		Object.defineProperty(window, 'location', {
			value: {
				...window.location,
				search: '',
			},
		});
	});

	test('Cas nominal (param seul)', () => {
		// Given
		Object.defineProperty(window, 'location', {
			value: {
				...window.location,
				search: '?param=value',
			},
			writable: true,
		});
		//When
		const result = getUrlParams('param');
		//Then
		expect(result).toBe('value');
	});

	test('Cas nominal (params multiples)', () => {
		// Given
		Object.defineProperty(window, 'location', {
			value: {
				...window.location,
				search: '?param=value&param2=value2',
			},
			writable: true,
		});
		//When
		const result = getUrlParams('param2');
		//Then
		expect(result).toBe('value2');
	});

	test('Cas particulier', () => {
		//When
		const result = getUrlParams('unknownParam');
		//Then
		expect(result).toBe(null);
	});
});
