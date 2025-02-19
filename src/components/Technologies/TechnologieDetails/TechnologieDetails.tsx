import TechnologieType from '@src/types/TechnologieType';
import TechnologieSubDetails from '../TechnologieSubDetails/TechnologieSubDetails';
import { useState } from 'react';

interface TechnologieDetailsProps {
	technologie: TechnologieType;
}

/**
 * Composant pour afficher UNE technologie
 *
 * @param {TechnologieDetailsProps} props propriétés du composant avec les données de la technologie à afficher
 * @returns {JSX.Element}
 */
const TechnologieDetails = ({
	technologie,
}: TechnologieDetailsProps): JSX.Element => {
	const [openDetails, setOpenDetails] = useState(false);
	return (
		<div className="technologie-details_container">
			<img
				src={technologie.image}
				aria-hidden="true"
				className="technologie-details_image"
			/>
			<div className="technologie-details_content">
				<div className="technologie-details_content--title-section">
					<h4>{technologie.title}</h4>
				</div>
				<div className="technologie-details_content--description-section">
					<p>{technologie.description}</p>
				</div>
				{technologie.additionnalData &&
					technologie.additionnalData.length > 0 && (
						<div className="technologie-details_content--more-section">
							<button
								className={`technologie-details_content--more-section-button ${openDetails ? 'button-active' : 'button-inactive'}`}
								onClick={() => setOpenDetails(!openDetails)}
							>
								<p>Technologies liées</p>
								<img
									src="./arrow-button.svg"
									className="technologie-details_content--more-section-image"
									aria-hidden="true"
								/>
							</button>
							<div className="technologie-details_content--subdetails">
								{technologie.additionnalData.map((subTech) => (
									<TechnologieSubDetails
										subTechnologie={subTech}
										isDisplayed={openDetails}
									/>
								))}
							</div>
						</div>
					)}
			</div>
		</div>
	);
};

export default TechnologieDetails;
