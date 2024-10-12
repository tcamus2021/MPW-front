import { FormattedMessage } from "react-intl";
import flagFr from "flag-icon-css/flags/1x1/fr.svg";
import flagEn from "flag-icon-css/flags/1x1/gb.svg";
import './parameterDetails.css';

interface ParameterDetailsProps {
    locale: string,
    setLocale(locale: string): void
};

/**
 * Permet de gérer les paramètres du site
 * 
 * @param props propriété du composant sous le format ParameterDetailsProps
 * @return {JSX.Element}
 */
const ParameterDetails = ({ locale, setLocale }: ParameterDetailsProps): JSX.Element => (
    <div className="parameter">
        <h2 className="parameter__title"><FormattedMessage id="layout.header.parametres.langues" defaultMessage="" /></h2>
        <div className="choix__langues">
            <button 
                className={locale === 'fr' ? "choix__langue selected" : "choix__langue"} 
                onClick={() => setLocale('fr')}
                title="Français"
            >
                <p>Français</p>
                <img className="choix__langue-flag" src={flagFr} />
            </button>
            <button 
                className={locale === 'en' ? "choix__langue selected" : "choix__langue"} 
                onClick={() => setLocale('en')}
                title="English"
            >
                <p>English</p>
                <img className="choix__langue-flag" src={flagEn} />
            </button>
        </div>
    </div>
);

export default ParameterDetails;