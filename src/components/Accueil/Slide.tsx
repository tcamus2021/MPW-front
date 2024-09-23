const Slide = ({ slide }) => (
        <div className="accueil-swiper__slide">
            <img src={slide.imageUrl} alt="Description de l'image" className="accueil-swiper__slide-image" />
            <div className="accueil-swiper__slide-overlay">
                <h2 className="accueil-swiper__slide-text">{slide.text}</h2>
                <button className="btn accueil-swiper__slide-button">{slide.buttonText}</button>
            </div>
        </div>
);

export default Slide;
