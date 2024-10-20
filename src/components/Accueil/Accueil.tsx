import { register } from 'swiper/element/bundle';
import { FormattedMessage, useIntl } from "react-intl";
import './accueil.css';
import CarteSectionType from '@src/types/CarteSectionType';
import CarteSection from './CarteSection/CarteSection';

register();

/**
 * Affichage de la page d'accueil
 * 
 * @return {JSX.Element} l'affichage de la page d'accueil
 */
const Accueil = (): JSX.Element => {
    const intl = useIntl();

    const cartes: CarteSectionType[] = [
        {
            text: intl.formatMessage({ id: 'parcours.scolaire.title' }),
            buttonText: intl.formatMessage({ id: 'accueil.slide.decouvrir' }),
            url: '/parcours-scolaire',
            imageUrl: '/ecole.svg',
            color: "#98C4D9"
        },
        {
            text: intl.formatMessage({ id: 'parcours.professionnel.title' }),
            buttonText: intl.formatMessage({ id: 'accueil.slide.decouvrir' }),
            url: '/parcours-professionnel',
            imageUrl: '/job.svg',
            color: "#F2BF5A"
        },
        {
            text: intl.formatMessage({ id: 'activite.title' }),
            buttonText: intl.formatMessage({ id: 'accueil.slide.decouvrir' }),
            url: '/loisirs',
            imageUrl: '/phare.svg',
            color: "#F2A35A"
        },
    ];

    return (
        <div>
            <h2><FormattedMessage id="accueil.title" defaultMessage="" /></h2>
            <p><FormattedMessage id="accueil.description" /></p>
            <p><FormattedMessage id="accueil.description.part1" /></p>
            <p><FormattedMessage id="accueil.description.part2" /></p>
            <div className='hidden-desktop main-page__cartes-desktop'>
                <swiper-container 
                    slides-per-view="1" 
                    navigation="true"
                    loop="true"
                    autoplay="true"
                >
                    {cartes.map(carte => (
                        <swiper-slide key={carte.url}>
                            <CarteSection carte={carte} />
                        </swiper-slide>
                    ))}
                </swiper-container>
            </div>
            <div className='hidden-mobile main-page__cartes-desktop'>
                {cartes.map(carte => <CarteSection key={carte.url} carte={carte} /> )}
            </div>
            <div className='accueil-page__contact-zone'>
                <a href="/contact" className='unstyled-link accueil-page__contact-zone-link'>
                    <button className='btn accueil-page__contact-zone-button'>
                        <img src="arrow-button.svg" className="arrow-button" aria-hidden="true" />
                        <FormattedMessage id="accueil.contact" />
                    </button>
                </a>
            </div>
        </div>
    );
};

export default Accueil;
