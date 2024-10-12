import TravailType from "@src/types/TravailType";
import { FormattedMessage, useIntl } from "react-intl";

interface TravailModalProps {
    selectedTravail: TravailType
}

/**
 * Affiche le contenu de la modale de la page travail
 * 
 * @param {TravailModalProps} props propriété du comosant
 * @return {JSX.Element}
 */
const TravailModal = ({ selectedTravail }: TravailModalProps): JSX.Element => {
    const intl = useIntl();
    return (
        <div className="travail-page__modal">
            <div className="travail-page__modal-header">
                <p className="travail-page__modal-title">{selectedTravail.entreprise}</p>
                <img className="travail-page__modal-image"src={selectedTravail.logoEntreprise} aria-hidden="true" />
            </div>
            <div className="travail-page__modal-info">
                <h3><FormattedMessage id="parcours.professionnel.modal.information.title" /></h3>
                <p>{`${intl.formatMessage({ id: 'parcours.professionnel.modal.informations.poste' })} : ${intl.formatMessage({ id: selectedTravail.poste })}`}</p>
                <p>{`${intl.formatMessage({ id: 'parcours.professionnel.modal.informations.contrat' })} : ${intl.formatMessage({ id: selectedTravail.contrat })}`}</p>
                {selectedTravail.lienEtude && (
                    <a href={selectedTravail.lienEtude}><FormattedMessage id="parcours.professionnel.details.etude" /></a>
                )}
                <p>{`${intl.formatMessage({ id: 'parcours.professionnel.modal.informations.duree'})} : ${intl.formatMessage({ id: selectedTravail.dateDebut })} - ${intl.formatMessage({ id: selectedTravail.dateFin || 'parcours.professionnel.modal.informations.duree.actuel' })}`}</p>
            </div>
            <div className="travail-page__modal-description">
                <h3><FormattedMessage id="parcours.professionnel.modal.description.title" /></h3>
                <p><FormattedMessage id={selectedTravail.description} /></p>
            </div>
            <div className="travail-page__modal-competences-section">
                <h3><FormattedMessage id="parcours.professionnel.modal.competences.title" /></h3>
                <div className="travail-page__modal-competences">
                    <div className="travail-page__modal-competences-soft-skills">
                        <h4><FormattedMessage id="parcours.professionnel.modal.competences.generales.title"/></h4>
                        <ul>
                            {selectedTravail.softSkills.map(skill => (
                                <li><FormattedMessage id={skill} /></li>
                            ))}
                        </ul>
                    </div>
                    {selectedTravail.competenceTechnique &&(
                        <div className="travail-page__modal-competences-tech-skills">
                        <h4><FormattedMessage id="parcours.professionnel.modal.competences.tech.title"/></h4>
                            <ul>
                                {selectedTravail.competenceTechnique.map(skill => (
                                    <li>{skill}</li>
                                ))}
                            </ul>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default TravailModal;
