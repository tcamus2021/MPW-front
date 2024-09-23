import { useClickOutside } from "@custom-react-hooks/use-click-outside";
import { useRef, useState } from "react";
import MonCompteInfoBulle from "./MonCompteInfoBulle";

const Header = () => {
    const popinButton = useRef(null);
    const [isPopinOpen, setPopinOpen] = useState(false);
    useClickOutside(popinButton, () => setPopinOpen(false));

    return (
        <header className="main-page__header">
            <img src="/vite.svg" className="main-page__logo" />
            <h1 className="main-page__title">My useless website</h1>
            <div ref={popinButton}>
            <button className="main-page__account btn" onClick={() => setPopinOpen(!isPopinOpen)}>Mon compte</button>
            {isPopinOpen && (
                <MonCompteInfoBulle />
            )}
            </div>
        </header>
    );
};

export default Header;
