import { register } from 'swiper/element/bundle';
import Slide from "./Slide/Slide";
import { FormattedMessage, useIntl } from "react-intl";
import SwiperData from '../../types/SwiperData';

register();

const Accueil = () => {
    const intl = useIntl();

    const swiperData: SwiperData[] = [
        {
            text: intl.formatMessage({ id: 'parcours.scolaire.title' }),
            buttonText: intl.formatMessage({ id: 'accueil.slide.decouvrir' }),
            url: '/',
            imageUrl: '/image-paysage-1.jpeg'
        },
        {
            text: intl.formatMessage({ id: 'parcours.professionnel.title' }),
            buttonText: intl.formatMessage({ id: 'accueil.slide.decouvrir' }),
            url: '/',
            imageUrl: '/image-paysage-2.avif'
        },
        {
            text: intl.formatMessage({ id: 'activite.title' }),
            buttonText: intl.formatMessage({ id: 'accueil.slide.decouvrir' }),
            url: '/',
            imageUrl: '/image-paysage-3.avif'
        },
    ];
    return (
        <div>
            <h2><FormattedMessage id="accueil.title" defaultMessage="" /></h2>
            <p><FormattedMessage id="accueil.description" /></p>
            <p><FormattedMessage id="accueil.description.part1" /></p>
            <p><FormattedMessage id="accueil.description.part2" /></p>
            <swiper-container 
                slides-per-view="1" 
                navigation="true"
                loop="true"
                autoplay="true"
            >
                {swiperData.map(slide => (
                    <swiper-slide>
                        <Slide slide={slide} />
                    </swiper-slide>
                ))}
            </swiper-container>
        </div>
    );
};

export default Accueil;
