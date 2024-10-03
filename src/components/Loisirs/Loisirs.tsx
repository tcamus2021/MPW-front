import LosirsData from "@src/types/LoisirsData";
import BarreRetour from "../common/BarreRetour/BarreRetour";
import LoisirsSection from "./LoisirsSection/LoisirsSection";
import './loisirs.css';
import Modal from "../common/Modal/Modal";
import { useState } from "react";
import CustomCssProperties from "@src/types/CustomCssProperties";
import { FormattedMessage, useIntl } from "react-intl";

/**
 * Affiche la section Loisirs du site
 * 
 * @returns {JSX.Element} affichage de la section Loisirs du site
 */
const Loisirs = (): JSX.Element => {
    const [selectedLoisirs, setSelectedLoisirs] = useState<LosirsData | null>(null);
    const intl = useIntl();

    const loisirs: LosirsData[] = [
        { 
            nom: intl.formatMessage({ id: 'activite.bateau.title' }), 
            color: '#D69F81', 
            image: './bateau.svg',
            descriptions: [
                intl.formatMessage({ id: 'activite.bateau.description.1' }),
                intl.formatMessage({ id: 'activite.bateau.description.2' })
            ]
        },
        { 
            nom: intl.formatMessage({ id: 'activite.developpement.title' }), 
            color: '#F2A35A', 
            image: './code.svg',
            descriptions: [
                intl.formatMessage({ id: 'activite.developpement.description.1' }),
                intl.formatMessage({ id: 'activite.developpement.description.2' }),
            ]
        },
        { 
            nom: intl.formatMessage({ id: 'activite.sport.title' }), 
            color: '#F2BF5A', 
            image: './sport.svg',
            descriptions: [
                intl.formatMessage({ id: 'activite.sport.description.1' }),
                intl.formatMessage({ id: 'activite.sport.description.2' }),
                intl.formatMessage({ id: 'activite.sport.description.3' }),
            ]
        },
        { 
            nom: intl.formatMessage({ id: 'activite.peche.title' }), 
            color: '#98C4D9', 
            image: './peche.svg',
            descriptions: [
                intl.formatMessage({ id: 'activite.peche.description.1' }),
            ]
        },
        { 
            nom: intl.formatMessage({ id: 'activite.detente.title' }), 
            color: '#638CA8', 
            image: './detente.svg',
            descriptions: [
                intl.formatMessage({ id: 'activite.detente.description.1' }),
                intl.formatMessage({ id: 'activite.detente.description.2' }),
            ]
        }
    ];

    return (
        <div>
            <BarreRetour />
            <h2><FormattedMessage id="activite.title" /></h2>
            <div className="loisirs-page__container">
                {loisirs.map(loisir => (
                    <LoisirsSection loisir={loisir} triggerOpenDetails={() => setSelectedLoisirs(loisir)} />
                ))}
            </div>
            <div className="loisirs-page__detail">
                <Modal isOpen={!!selectedLoisirs} triggerClose={() => setSelectedLoisirs(null)}>
                    <div className="loisirs-page__modal">
                        <div className="loisirs-page__modal-presentation" style={{ '--loisirs-section--color': selectedLoisirs?.color } as CustomCssProperties}>
                            <img className="loisirs-page__modal-image" src={selectedLoisirs?.image} />
                            <h3 className="loisirs-page__modal-title">{selectedLoisirs?.nom}</h3>
                        </div>
                        <div className="loisirs-page__modal-descriptions">
                            {selectedLoisirs?.descriptions.map(description => (
                                <p className="loisirs-page__modal-description">{description}</p>
                            ))}
                        </div>
                    </div>
                </Modal>
            </div>
        </div>
    );
}

export default Loisirs;