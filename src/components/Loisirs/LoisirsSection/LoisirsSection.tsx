import CustomCssProperties from '@src/types/CustomCssProperties';
import LosirsType from '@src/types/LoisirsType';
import { FormattedMessage } from 'react-intl';

interface LoisirsSectionProps {
	loisir: LosirsType;
	triggerOpenDetails: () => void;
}

/**
 * Affichage d'une section de loisirs
 *
 * @param {LoisirsSectionProps} props propriétés du composant sous le modèle LoisirsSectionProps
 * @return {JSX.Element}
 */
const LoisirsSection = ({
	loisir,
	triggerOpenDetails,
}: LoisirsSectionProps): JSX.Element => (
	<button
		className="btn loisirs-page__container-item"
		style={
			{ '--loisirs-section--color': loisir.color } as CustomCssProperties
		}
		onClick={triggerOpenDetails}
	>
		<div className="loisirs-page__container-item-left">
			<img
				className="loisirs-page__container-item-left-image"
				src="/arrow-button-white.svg"
				aria-hidden="true"
			/>
			<p className="loisirs-page__container-item-left-title">
				<FormattedMessage id={loisir.nom} />
			</p>
		</div>
		<div className="loisirs-page__container-item-right">
			<img
				className="loisirs-page__container-item-right-image"
				src={loisir.image}
				aria-hidden="true"
			/>
		</div>
	</button>
);

export default LoisirsSection;
