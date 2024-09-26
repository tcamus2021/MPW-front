import { useClickOutside } from "@custom-react-hooks/use-click-outside";
import { useRef, useState } from "react";
import { FormattedMessage } from "react-intl";
import MonCompteInfoBulle from "../ParameterDetails/ParameterDetails";
import './header.css';

interface HeaderProps {
    locale: string,
    setLocale(locale: string): void
};

/**
 * Entête de l'application
 * 
 * @param props propriété du composant avec comme attribut :
 * - locale : langue du site
 * - setLocale : fonction permettant le changement de la langue
 * @return affichage de l'entête de l'application
 */
const Header = ({ locale, setLocale }: HeaderProps) => {
    const popinButton = useRef(null);
    const [isPopinOpen, setPopinOpen] = useState(false);
    useClickOutside(popinButton, () => setPopinOpen(false));

    return (
        <header className="main-page__header">
            <img src="/vite.svg" className="main-page__logo" />
            <h1 className="main-page__title"><FormattedMessage id="layout.header.title" defaultMessage="" /></h1>
            <div ref={popinButton}>
                <button className="main-page-header__parameter hidden-mobile" onClick={() => setPopinOpen(!isPopinOpen)}>
                    <img className="parameter__image" src="parametre_icon.png" aria-hidden="true" />
                </button>
                <button
                    className={`main-page-header__parameter btn hidden-desktop ${isPopinOpen ? 'rotated' : ''}`}
                    onClick={() => setPopinOpen(!isPopinOpen)}
                >
                    <img className="burger-menu__image" src="burger-menu.svg" aria-hidden="true" />
                </button>
                {isPopinOpen && (
                    <MonCompteInfoBulle locale={locale} setLocale={setLocale} />
                )}
            </div>
        </header>
    );
};

export default Header;
