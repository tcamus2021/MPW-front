import { FormattedMessage } from "react-intl";

const Footer = () => {
    return (
        <footer className="main-page__footer">
            <p className="footer-text"><FormattedMessage id="layout.footer.made.in" /></p>
        </footer>
    );
};

export default Footer;