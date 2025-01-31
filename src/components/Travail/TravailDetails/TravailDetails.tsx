import TravailType from '@src/types/TravailType';
import { FormattedMessage, useIntl } from 'react-intl';

interface TravailDetailsProps {
	travail: TravailType;
	openDetails: () => void;
}

/**
 * Affiche les détails d'une activité professionnel
 *
 * @param {TravailDetailsProps} props propriétés du composant
 * @return {JSX.Element}
 */
const TravailDetails = ({
	travail,
	openDetails,
}: TravailDetailsProps): JSX.Element => {
	const intl = useIntl();
	return (
		<div className="travail-page__timeline-item">
			<div className="travail-page__timeline-item-entreprise">
				<h3 className="travail-page__timeline-item-title">
					{travail.entreprise}
				</h3>
				<img
					className="travail-page__timeline-item-image"
					src={travail.logoEntreprise}
					aria-hidden="true"
				/>
			</div>
			<div className="travail-page__timeline-item-details">
				<h3 className="travail-page__timeline-item-title">
					<FormattedMessage id={travail.poste} defaultMessage="" />
				</h3>
				<p>
					<FormattedMessage id={travail.contrat} defaultMessage="" />
				</p>
				<button
					className="travail-page__timeline-item-details-button btn"
					onClick={openDetails}
					title={intl.formatMessage({
						id: 'parcours.professionnel.details.more.information',
					})}
				>
					<img
						className="travail-page__timeline-item-details-button-image"
						src="information.svg"
						aria-hidden="true"
					/>
					<p className="travail-page__timeline-item-details-texte">
						<FormattedMessage
							id="parcours.professionnel.details.more.information"
							defaultMessage=""
						/>
					</p>
				</button>
			</div>
			<div className="travail-page__timeline-item-time">
				<p>
					<FormattedMessage
						id={travail.dateDebut}
						defaultMessage=""
					/>
				</p>
				{travail.dateFin && (
					<p>{` - ${intl.formatMessage({ id: travail.dateFin, defaultMessage: '' })}`}</p>
				)}
			</div>
		</div>
	);
};

export default TravailDetails;
