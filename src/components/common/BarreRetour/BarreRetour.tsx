import { useIntl } from "react-intl";
import LinkedButton from "../LinkedButton/LinkedButton";
import './barreRetour.css';

/**
 * Affichage de la barre permettant de retourner à l'accueil
 * 
 * @return {JSX.Element}
 */
const BarreRetour = (): JSX.Element => {
    const intl = useIntl();
    return (
        <div className="back-section">
            <LinkedButton 
                titre={intl.formatMessage({ id: 'back.button.title' })}
                description={intl.formatMessage({ id: 'back.button.description' })}
                url="/" 
                additionnalClass="back-btn" 
            />
        </div>
    );
}

export default BarreRetour;