/**
 * Permet de récupérer un paramètre d'URL
 *
 * @param {string} name nom du paramètre
 * @return {string | null}
 */
export const getUrlParams = (name: string): string | null => {
	if (window) {
		const urlParams = new URLSearchParams(window.location.search);
		return urlParams.get(name);
	}
	return null;
};
