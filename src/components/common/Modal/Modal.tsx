import { useClickOutside } from '@custom-react-hooks/use-click-outside';
import './modal.css';
import { useEffect, useRef } from 'react';

interface ModalProps {
    isOpen: boolean,
    children: JSX.Element | string,
    triggerClose: () => void
}

/**
 * Affiche une modale
 * 
 * @param props propriété du composant sous le modèle ModalProps
 * @return {JSX.Element} Affichage d'une modale
 */
const Modal = ({ isOpen, children, triggerClose }: ModalProps): JSX.Element => {
    const modal = useRef<HTMLDivElement>(null);
    const closeButton = useRef<HTMLButtonElement>(null);
    useClickOutside(modal, triggerClose);
    useEffect(() => {
        if (isOpen && closeButton.current){
            closeButton.current.focus();
        }
    }, [isOpen, children]);

    return (
        <div className={"modal__overlay" + (isOpen ? ' open' : '')} role="dialog">
            <div className="modal__popin" ref={modal}>
                <div className='modal__close'>
                    <button className='close-btn' onClick={triggerClose} ref={closeButton}>
                        <img className='close-btn-image' src="./close.svg" />
                    </button>
                </div>
                {children}
            </div>
        </div>
    );
};

export default Modal;