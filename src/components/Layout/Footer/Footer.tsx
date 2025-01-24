import { FormattedMessage } from 'react-intl';
import './footer.css';

/**
 * Affiche le footer du site
 *
 * @return {JSX.Element}
 */
const Footer = (): JSX.Element => (
	<footer className="main-page__footer">
		<p className="footer-text">
			<FormattedMessage id="layout.footer.made.in" />
		</p>
		<a
			className="footer-text footer-link"
			target="_blank"
			href="https://github.com/tcamus2021/MPW-front"
		>
			<FormattedMessage id="layout.footer.code" />
			<img
				className="footer-new-window"
				src="/new-window.svg"
				aria-hidden="true"
			/>
		</a>
	</footer>
);

export default Footer;
