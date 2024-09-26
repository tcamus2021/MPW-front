/**
 * Permet de définir la langue par défaut, la langue du navigateur si c'est supporté, sinon le français
 * 
 * @return {string} locale par défaut
 */
const getDefaultLanguage = () => ['en', 'fr'].some(lang => lang === navigator.language) ? navigator.language : 'fr';

export {
    getDefaultLanguage
};