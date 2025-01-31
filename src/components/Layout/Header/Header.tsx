import { useClickOutside } from '@custom-react-hooks/use-click-outside';
import { useRef, useState } from 'react';
import { useIntl } from 'react-intl';
import MonCompteInfoBulle from '../ParameterDetails/ParameterDetails';
import './header.css';

interface HeaderProps {
	locale: string;
	setLocale(locale: string): void;
}

/**
 * Entête de l'application
 *
 * @param props propriété du composant sous le format HeaderProps
 * @return {JSX.Element}
 */
const Header = ({ locale, setLocale }: HeaderProps): JSX.Element => {
	const intl = useIntl();

	const popinButton = useRef(null);
	const [isPopinOpen, setPopinOpen] = useState(false);
	useClickOutside(popinButton, () => setPopinOpen(false));

	return (
		<header className="main-page__header">
			<a
				href="/"
				title={intl.formatMessage({
					id: 'layout.header.image.description',
				})}
			>
				<img
					src="/logo.svg"
					className="main-page__logo"
					aria-hidden="true"
				/>
			</a>
			<h1 className="main-page__title">Tanguy Camus</h1>
			<div ref={popinButton}>
				<button
					id="parameter-desktop"
					data-testid="parameter-desktop"
					className="main-page-header__parameter hidden-mobile"
					onClick={() => setPopinOpen(!isPopinOpen)}
					title={intl.formatMessage({
						id: 'layout.header.parametres.description',
					})}
				>
					<img
						className="parameter__image"
						src="parametre_icon.png"
						aria-hidden="true"
					/>
				</button>
				<button
					id="parameter-mobile"
					data-testid="parameter-mobile"
					className="main-page-header__parameter btn hidden-desktop"
					onClick={() => setPopinOpen(!isPopinOpen)}
					title={intl.formatMessage({
						id: 'layout.header.parametres.description',
					})}
				>
					{!isPopinOpen ? (
						<img
							className="burger-menu__image"
							src="burger-menu.svg"
							aria-hidden="true"
						/>
					) : (
						<img
							className="burger-menu__image"
							src="close.svg"
							aria-hidden="true"
						/>
					)}
				</button>
				{isPopinOpen && (
					<MonCompteInfoBulle locale={locale} setLocale={setLocale} />
				)}
			</div>
		</header>
	);
};

export default Header;
