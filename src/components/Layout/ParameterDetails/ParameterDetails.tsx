import { FormattedMessage } from "react-intl";
import flagFr from "flag-icon-css/flags/1x1/fr.svg";
import flagEn from "flag-icon-css/flags/1x1/gb.svg";

const MonCompteInfoBulle = ({ locale, setLocale }: any) => (
    <div className="mon-compte__info-bulle">
        <h2 className="parameter__title"><FormattedMessage id="layout.header.parametres.langues" defaultMessage="" /></h2>
        <div className="choix__langues">
            <button className={locale === 'fr' ? "choix__langue selected" : "choix__langue"} onClick={() => setLocale('fr')}>
                <p>Français</p>
                <img className="choix__langue-flag" src={flagFr} />
            </button>
            <button className={locale === 'en' ? "choix__langue selected" : "choix__langue"} onClick={() => setLocale('en')}>
                <p>English</p>
                <img className="choix__langue-flag" src={flagEn} />
            </button>
        </div>
    </div>
);

export default MonCompteInfoBulle;