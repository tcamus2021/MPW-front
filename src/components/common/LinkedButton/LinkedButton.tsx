interface LinkedButtonProps {
    titre: string,
    description: string,
    url: string,
    additionnalClass?: string,
    withArrow?: boolean
}

/**
 * Permet de créer un bouton lien
 * 
 * @param {LinkedButtonProps} prop propriété du composant
 * @return Affichage d'un bouton lien
 */
const LinkedButton = ({ titre, description, url, additionnalClass, withArrow = true }: LinkedButtonProps) => (
    <a href={url} className="unstyled-link" title={description}>
        <button className={"btn accueil-swiper__slide-button " + additionnalClass} tabIndex={-1}>
            {withArrow && <img src='arrow-button.svg' className="arrow-button" aria-hidden='true'/>}
            {titre}
        </button>
    </a>
);

export default LinkedButton;