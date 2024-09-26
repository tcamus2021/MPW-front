import { useClickOutside } from "@custom-react-hooks/use-click-outside";
import { useRef, useState } from "react";
import MonCompteInfoBulle from "../ParameterDetails/ParameterDetails";
import { FormattedMessage } from "react-intl";

const Header = ({ locale, setLocale } : any) => {
    const popinButton = useRef(null);
    const [isPopinOpen, setPopinOpen] = useState(false);
    useClickOutside(popinButton, () => setPopinOpen(false));

    return (
        <header className="main-page__header">
            <img src="/vite.svg" className="main-page__logo" />
            <h1 className="main-page__title"><FormattedMessage id="layout.header.title" defaultMessage="" /></h1>
            <div ref={popinButton}>
                <button className="main-page__account hidden-mobile" onClick={() => setPopinOpen(!isPopinOpen)}>
                    <img className="parameter__image" src="parametre_icon.png" aria-hidden="true" />
                </button>
                <button
                    className={`main-page__account btn hidden-desktop ${isPopinOpen ? 'rotated' : ''}`}
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
