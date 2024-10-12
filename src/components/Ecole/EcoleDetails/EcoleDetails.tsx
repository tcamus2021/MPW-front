import CustomCssProperties from "@src/types/CustomCssProperties";
import EcoleType from "@src/types/EcoleType";
import { FormattedMessage, useIntl } from "react-intl";
import {v4 as uuidv4} from 'uuid';

interface EcoleDetailsProps {
    isOpen: boolean,
    openDetails: () => void,
    ecole: EcoleType
}

/**
 * Affichage d'une école
 * 
 * @param {EcoleDetailsProps} props propriété du composant qui spécifie s'il est ouvert, comment l'ouvrir ainsi que le contenu
 * @return {JSX.Element}
 */
const EcoleDetails = ({ isOpen, openDetails, ecole }: EcoleDetailsProps): JSX.Element => {
    const intl = useIntl();
    return (
        <div className="ecole-page__element">
            <button 
                className="ecole-page__selector" 
                onClick={openDetails} 
                style={{ "--color-previsualisation": ecole.color } as CustomCssProperties}
                aria-selected={isOpen}
                title={intl.formatMessage({ id: 'parcours.scolaire.button.description' })}
            >
                <div className="ecole-page__previsualisation">
                    <h2 className="ecole-page__element-level"><FormattedMessage id={ecole.level} /></h2>
                    <img className="ecole-page__element-image" src={ecole.logo} aria-hidden="true" />
                </div>
                <img className={"ecole-page__selector-arrow" + (isOpen ? " selected" : "")} src="/arrow-button.svg" aria-hidden="true" />
            </button>
            {isOpen && (
                <div className="ecole-page__details" aria-expanded={isOpen}>
                    <div className="ecole-page__details-title">
                        <h3 className="ecole-page__element-title"><FormattedMessage id={ecole.diplome} /></h3>
                        <div className="ecole-page__details-title-annee">
                            <img className="ecole-page__details-title-image" src="./calendrier.svg" aria-hidden="true" />
                            <p>{ecole.annee}</p>
                        </div>
                        <div className="ecole-page__details-title-localisation">
                            <img className="ecole-page__details-title-image" src="./localisation.svg" aria-hidden="true" />
                            <p><FormattedMessage id={ecole.localisation} /></p>
                        </div>
                    </div>
                    {ecole.description.map(description => (
                        <p key={uuidv4()} className="ecole-page__element-description"><FormattedMessage id={description} /></p>
                    ))}
                </div>
            )}
        </div>
    );
};

export default EcoleDetails;