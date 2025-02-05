import TechnologieCategorieType from '@src/types/TechologieCategorieType';
import BarreRetour from '../common/BarreRetour/BarreRetour';
import technologiesDataJson from './technologies-data.json';
import './technologies.css';
import TechnologieDetails from './TechnologieDetails/TechnologieDetails';
import { useIntl } from 'react-intl';

/**
 * Composant de la page qui liste les technologies utilisées
 *
 * @returns {JSX.Element}
 */
const Technologies = (): JSX.Element => {
	const intl = useIntl();
	const technologiesData: TechnologieCategorieType[] = technologiesDataJson;
	return (
		<div className="technologies-page_container">
			<BarreRetour />
			<h2>
				{intl.formatMessage({ id: 'tech.title', defaultMessage: '' })}
			</h2>
			<div className="technologies-page_content">
				{technologiesData.map((categorie) => (
					<div>
						<div className="space-bar" />
						<h3>{categorie.title}</h3>
						<div className="technologies-page_category">
							{categorie.content.map((technologie) => (
								<TechnologieDetails technologie={technologie} />
							))}
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default Technologies;
