import { FormattedMessage } from "react-intl";
import './footer.css';

/**
 * Affiche le footer du site
 * 
 * @return affichage du footer du site
 */
const Footer = () => (
    <footer className="main-page__footer">
        <p className="footer-text"><FormattedMessage id="layout.footer.made.in" /></p>
    </footer>
);

export default Footer;