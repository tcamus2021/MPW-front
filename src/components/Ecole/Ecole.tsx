import { useState } from "react";
import BarreRetour from "../common/BarreRetour/BarreRetour";
import EcoleDetails from "./EcoleDetails/EcoleDetails";
import './ecole.css';
import EcoleData from "@src/types/EcoleData";
import { FormattedMessage, useIntl } from "react-intl";

const Ecole = () => {
    const intl = useIntl();
    const [openedIndex, setOpenedIndex] = useState<number | null>(null);
    const handleOpenedIndexChange = (index: number | null): void => setOpenedIndex(openedIndex === index ? null : index);

    /*
    "parcours.scolaire.BAC.level": "BAC",
    "parcours.scolaire.BAC.title": "BAC Sciences et Technologies de l'Industrie et du Développement Durable",
    "parcours.scolaire.BAC.city": "Lycée Yves Thépot, Quimper",
    "parcours.scolaire.BAC.description.1": 
    */
    const ecoles: EcoleData[] = [
        {
            level: intl.formatMessage({ id: "parcours.scolaire.MS2D.level" }),
            color: "#F26666",
            description: [
                intl.formatMessage({ id: "parcours.scolaire.MS2D.description.1" }),
                intl.formatMessage({ id: "parcours.scolaire.MS2D.description.2" }),
                intl.formatMessage({ id: "parcours.scolaire.MS2D.description.3" })
            ],
            diplome: intl.formatMessage({ id: "parcours.scolaire.MS2D.title" }),
            logo: "./logo_ENI.png",
            annee: "2022 - 2023",
            localisation: intl.formatMessage({ id: "parcours.scolaire.MS2D.city" })
        },
        {
            level: intl.formatMessage({ id: "parcours.scolaire.CDA.level" }),
            color: "#F28963",
            description: [
                intl.formatMessage({ id: "parcours.scolaire.CDA.description.1" }),
                intl.formatMessage({ id: "parcours.scolaire.CDA.description.2" }),
                intl.formatMessage({ id: "parcours.scolaire.CDA.description.3" })
            ],
            diplome: intl.formatMessage({ id: "parcours.scolaire.CDA.title" }),
            logo: "./logo_ENI.png",
            annee: "2021",
            localisation: intl.formatMessage({ id: "parcours.scolaire.CDA.city" })
        },
        {
            level: intl.formatMessage({ id: "parcours.scolaire.DUT.level" }),
            color: "#F2BC79",
            description: [
                intl.formatMessage({ id: "parcours.scolaire.DUT.description.1" }),
                intl.formatMessage({ id: "parcours.scolaire.DUT.description.2" })
            ],
            diplome: intl.formatMessage({ id: "parcours.scolaire.DUT.title" }),
            logo: "./Logo_IUT_Nantes.png",
            annee: "2018 - 2020",
            localisation: intl.formatMessage({ id: "parcours.scolaire.DUT.city" })
        },
        {
            level: intl.formatMessage({ id: "parcours.scolaire.BAC.level" }),
            color: "#F2CDA0",
            description: [intl.formatMessage({ id: "parcours.scolaire.BAC.description.1" })],
            diplome: intl.formatMessage({ id: "parcours.scolaire.BAC.title" }),
            logo: "./logo_lycee.png",
            annee: "2016 - 2018",
            localisation: intl.formatMessage({ id: "parcours.scolaire.BAC.city" })
        },
    ];

    return (
        <div className="ecole-page">
            <BarreRetour />
            <h2><FormattedMessage id="parcours.scolaire.title" /></h2>
            <div className="ecole-page__list">
                {ecoles.map((ecole, index) => (
                    <EcoleDetails isOpen={openedIndex === index} openDetails={() => handleOpenedIndexChange(index)} ecole={ecole} />
                ))}
            </div>
        </div>
    );
};

export default Ecole;