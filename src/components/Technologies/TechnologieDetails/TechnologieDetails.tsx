import TechnologieType from '@src/types/TechnologieType';

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
}: TechnologieDetailsProps): JSX.Element => (
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
						<button>MORE</button>
						{technologie.additionnalData.map((subTech) => (
							<p>{subTech.title}</p>
						))}
					</div>
				)}
		</div>
	</div>
);

export default TechnologieDetails;
