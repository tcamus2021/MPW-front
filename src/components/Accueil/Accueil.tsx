import Layout from "../Layout";
import { register } from 'swiper/element/bundle';
import Slide from "./Slide";
import { FormattedMessage } from "react-intl";

register();

const Accueil = () => {
    const swiperData = [
        {
            text: 'Parcours scolaire',
            buttonText: 'Découvrir',
            url: '/',
            imageUrl: '/image-paysage-1.jpeg'
        },
        {
            text: 'Parcours Profesionnel',
            buttonText: 'Découvrir',
            url: '/',
            imageUrl: '/image-paysage-2.avif'
        },
        {
            text: 'Activités personnel',
            buttonText: 'Découvrir',
            url: '/',
            imageUrl: '/image-paysage-3.avif'
        },
    ];
    return (
        <Layout>
            <h2>Accueil</h2>
            <p><FormattedMessage id="accueil.description" /></p>
            <p>Bonjour, bienvenue sur l'accueil d'un site inutile</p>
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
        </Layout>
    );
};

export default Accueil;
