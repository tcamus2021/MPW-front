import { useState } from "react";
import BarreRetour from "../common/BarreRetour/BarreRetour";
import EcoleDetails from "./EcoleDetails/EcoleDetails";
import './ecole.css';
import EcoleType from "@src/types/EcoleType";
import { FormattedMessage } from "react-intl";
import { getUrlParams } from "@src/utils/url";
import ecoleData from "./ecole-data.json";

/**
 * Affichage du parcours scolaire
 * 
 * @return {JSX.Element}
 */
const Ecole = (): JSX.Element => {
    const indexToOpen = getUrlParams('index');
    const [openedIndex, setOpenedIndex] = useState<number | null>(indexToOpen ? Number.parseInt(indexToOpen) : null);
    const handleOpenedIndexChange = (index: number | null): void => setOpenedIndex(openedIndex === index ? null : index);
    const ecoles: EcoleType[] = ecoleData;

    return (
        <div className="ecole-page">
            <BarreRetour />
            <h2><FormattedMessage id="parcours.scolaire.title" /></h2>
            <div className="ecole-page__list">
                {ecoles.map((ecole, index) => (
                    <EcoleDetails key={ecole.level} isOpen={openedIndex === index} openDetails={() => handleOpenedIndexChange(index)} ecole={ecole} />
                ))}
            </div>
        </div>
    );
};

export default Ecole;