import { FormattedMessage } from 'react-intl';
import BarreRetour from '../common/BarreRetour/BarreRetour';
import './contact.css';

/**
 * Affiche la page de contact
 *
 * @return {JSX.Element}
 */
const Contact = (): JSX.Element => (
	<div className="contact-page__container">
		<BarreRetour />
		<div className="contact-page__fiche-contact">
			<h3 className="contact-page__fiche-contact__title">Contact</h3>
			<div className="contact-page__fiche-contact__zones">
				<div className="contact-page__fiche-contact__mail-zone">
					<img
						src="mail-logo.svg"
						className="contact-page__fiche-contact-image"
					/>
					<a
						href="mailto:tanguycamus.pro@gmail.com"
						className="contact-page__fiche-contact-lien"
					>
						tanguycamus.pro@gmail.com
					</a>
				</div>
				<div className="contact-page__fiche-contact__telephone-zone">
					<img
						src="phone-logo.svg"
						className="contact-page__fiche-contact-image"
					/>
					<a
						href="tel:+33617513524"
						className="contact-page__fiche-contact-lien"
					>
						06 17 51 35 24
					</a>
				</div>
				<div className="contact-page__fiche-contact__linkedin-zone">
					<img
						src="linkedin-logo.svg"
						className="contact-page__fiche-contact-image"
					/>
					<a
						href="https://www.linkedin.com/in/tanguy-camus-b71915182"
						className="contact-page__fiche-contact-lien"
					>
						<FormattedMessage id="contact.linkedin" />
					</a>
				</div>
			</div>
		</div>
	</div>
);

export default Contact;
