import TravailType from "@src/types/TravailType";
import BarreRetour from "../common/BarreRetour/BarreRetour";
import './travail.css';
import TravailDetails from "./TravailDetails/TravailDetails";
import { useState } from "react";
import Modal from "../common/Modal/Modal";
import TravailModal from "./TravailModal/TravailModal";
import travailData from './travail-data.json';
import { FormattedMessage } from "react-intl";

/**
 * Affiche la page du parcours professionnel
 * 
 * @return {JSX.Element}
 */
const Travail = (): JSX.Element => {
    const [selectedTravail, setSelectedTravail] = useState<TravailType | null>(null);
    const historiqueTravail: TravailType[] = travailData;
    return (
        <div>
            <BarreRetour />
            <h2 className="travail-page__title"><FormattedMessage id="parcours.professionnel.title" /></h2>
            <div className="travail-page__container">
                <div className="travail-page__timeline-container">
                    {historiqueTravail.map(travail => (
                        <TravailDetails key={travail.dateDebut} travail={travail} openDetails={() => setSelectedTravail(travail)} />
                    ))}
                </div>
            </div>
            {!!selectedTravail && (
                <Modal isOpen={!!selectedTravail} triggerClose={() => setSelectedTravail(null)}>
                    <TravailModal selectedTravail={selectedTravail} />
                </Modal>
            )}
        </div>
    );
}

export default Travail;