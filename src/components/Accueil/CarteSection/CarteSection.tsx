import LinkedButton from "@src/components/common/LinkedButton/LinkedButton";
import CarteSectionData from "@src/types/CarteSectionData";
import CustomCssProperties from "@src/types/CustomCssProperties";

interface SlideProps {
    carte: CarteSectionData
};

/**
 * Permet d'afficher une prévisualisation d'une page su site sur l'accueil
 * 
 * @param {SlideProps} props propriété de l'objet contenant les données de la slide à afficher 
 * @return l'affichage d'une prévisualisation d'une page su site sur l'accueil
 */
const CarteSection = ({ carte }: SlideProps) => (
    <div className="accueil-swiper__slide" style={{ '--slide-color': carte.color } as CustomCssProperties }>
        <img src={carte.imageUrl} alt="Description de l'image" className="accueil-swiper__slide-image" />
        <div className="accueil-swiper__slide-overlay">
            <h2 className="accueil-swiper__slide-text">{carte.text}</h2>
            <LinkedButton titre={carte.buttonText} description={carte.text} url={carte.url} />
        </div>
    </div>
);

export default CarteSection;
