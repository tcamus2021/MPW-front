import LosirsType from '@src/types/LoisirsType';
import BarreRetour from '../common/BarreRetour/BarreRetour';
import LoisirsSection from './LoisirsSection/LoisirsSection';
import './loisirs.css';
import Modal from '../common/Modal/Modal';
import { useState } from 'react';
import CustomCssProperties from '@src/types/CustomCssProperties';
import { FormattedMessage } from 'react-intl';
import loisirsData from './loisirs-data.json';
import { v4 as uuidv4 } from 'uuid';

/**
 * Affiche la section Loisirs du site
 *
 * @return {JSX.Element} affichage de la section Loisirs du site
 */
const Loisirs = (): JSX.Element => {
	const [selectedLoisirs, setSelectedLoisirs] = useState<LosirsType | null>(
		null,
	);
	const loisirs: LosirsType[] = loisirsData;

	return (
		<div>
			<BarreRetour />
			<h2>
				<FormattedMessage id="activite.title" />
			</h2>
			<div className="loisirs-page__container">
				{loisirs.map((loisir) => (
					<LoisirsSection
						key={loisir.nom}
						loisir={loisir}
						triggerOpenDetails={() => setSelectedLoisirs(loisir)}
					/>
				))}
			</div>
			<div className="loisirs-page__detail">
				{selectedLoisirs && (
					<Modal
						isOpen={!!selectedLoisirs}
						triggerClose={() => setSelectedLoisirs(null)}
					>
						<div className="loisirs-page__modal">
							<div
								className="loisirs-page__modal-presentation"
								style={
									{
										'--loisirs-section--color':
											selectedLoisirs.color,
									} as CustomCssProperties
								}
							>
								<img
									className="loisirs-page__modal-image"
									src={selectedLoisirs.image}
								/>
								<h3 className="loisirs-page__modal-title">
									<FormattedMessage
										id={selectedLoisirs.nom}
									/>
								</h3>
							</div>
							<div className="loisirs-page__modal-descriptions">
								{selectedLoisirs?.descriptions.map(
									(description) => (
										<p
											key={uuidv4()}
											className="loisirs-page__modal-description"
										>
											<FormattedMessage
												id={description}
											/>
										</p>
									),
								)}
							</div>
						</div>
					</Modal>
				)}
			</div>
		</div>
	);
};

export default Loisirs;
