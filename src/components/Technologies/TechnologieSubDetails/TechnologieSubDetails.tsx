import TechnologieType from '@src/types/TechnologieType';

interface TechSubDetailsProps {
	subTechnologie: Omit<TechnologieType, 'description' | 'additionnalData'>;
	isDisplayed: boolean;
}

/**
 * Affiche une sous-technologie
 *
 * @param {TechSubDetailsProps} props propriété du composant avec pour attibut UNE sous-technologie
 * @returns {JSX.Element}
 */
const TechnologieSubDetails = ({
	subTechnologie,
	isDisplayed,
}: TechSubDetailsProps): JSX.Element => (
	<div
		className={`technologie-details_content--subdetail ${!isDisplayed ? 'hidden' : ''}`}
	>
		<img
			src={subTechnologie.image}
			aria-hidden="true"
			className="technologie-details_content--subdetail-image"
		/>
		<h5 className="technologie-details_content--subdetail-title">
			{subTechnologie.title}
		</h5>
	</div>
);

export default TechnologieSubDetails;
