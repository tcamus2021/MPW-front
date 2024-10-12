import CustomCssProperties from "@src/types/CustomCssProperties";
import LosirsType from "@src/types/LoisirsType";

interface LoisirsSectionProps {
    loisir: LosirsType,
    triggerOpenDetails: () => void
};

const LoisirsSection = ({ loisir, triggerOpenDetails }: LoisirsSectionProps) => (
    <button 
        className="btn loisirs-page__container-item" 
        style={{ '--loisirs-section--color': loisir.color } as CustomCssProperties}
        onClick={triggerOpenDetails}
    >
        <div className="loisirs-page__container-item-left">
            <img className="loisirs-page__container-item-left-image" src="/arrow-button-white.svg" aria-hidden="true" />
            <p className="loisirs-page__container-item-left-title">{loisir.nom}</p>
        </div>
        <div className="loisirs-page__container-item-right">
            <img className="loisirs-page__container-item-right-image" src={loisir.image} aria-hidden="true" />
        </div>
    </button>
);

export default LoisirsSection;