/**
 * Permet de définir la langue par défaut, la langue du navigateur si c'est supporté, sinon le français
 *
 * @return {string} locale par défaut
 */
const getDefaultLanguage = (): string => {
	const allowedValues: string[] = ['fr', 'en'];
	// On prends en priorité la valeur préalablement par l'utilisateur
	if (
		allowedValues.some(
			(lang) => lang === localStorage.getItem('appLanguage'),
		)
	) {
		return localStorage.getItem('appLanguage') || 'fr';
	}
	// On prends la valeur du navigateur si supporté, sinon on prends la langue française
	return allowedValues.some((lang) => lang === navigator.language)
		? navigator.language
		: 'fr';
};

export { getDefaultLanguage };
