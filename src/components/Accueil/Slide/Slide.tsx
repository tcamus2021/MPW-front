import SwiperData from "@src/types/SwiperData";

interface SlideProps {
    slide: SwiperData
};

/**
 * Permet d'afficher une slide de carrousel sur l'accueil
 * 
 * @param {SlideProps} props propriété de l'objet contenant les données de la slide à afficher 
 * @return l'affichage d'une slide de carrousel pour l'accueil
 */
const Slide = ({ slide }: SlideProps) => (
    <div className="accueil-swiper__slide">
        <img src={slide.imageUrl} alt="Description de l'image" className="accueil-swiper__slide-image" />
        <div className="accueil-swiper__slide-overlay">
            <h2 className="accueil-swiper__slide-text">{slide.text}</h2>
            <button className="btn accueil-swiper__slide-button">{slide.buttonText}</button>
        </div>
    </div>
);

export default Slide;
