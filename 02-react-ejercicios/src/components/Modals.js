import { useModal } from "../hooks/useModal";
import ContactForm from "./ContactForm";
import Modal from "./Modal";
import ModalPortal from "./ModalPortal";

const Modals = () => {
    const [isOpenModal1, openModal1, closeModal1] = useModal(false);
    const [isOpenModal2, openModal2, closeModal2] = useModal(false);
    const [isOpenModal3, openModal3, closeModal3] = useModal(false);
    const [isOpenModalPortal, openModalPortal, closeModalPortal] = useModal(false);
    return ( 
        <div>
            <h2>Modales</h2>
            <button onClick={openModal1}>Modal 1</button>
            <Modal isOpen={isOpenModal1} closeModal={closeModal1}>
                <h3>Modal 1</h3>
                <p>Hola, este es el contenido de mi modal 1</p>
                <img src="https://placeimg.com/400/400/animals" alt="Animals" />
            </Modal>

            <button onClick={openModal2}>Modal 2</button>
            <Modal isOpen={isOpenModal2} closeModal={closeModal2}>
                <h3>Modal 2</h3>
                <p>Hola, este es el contenido de mi modal 2</p>
                <img src="https://placeimg.com/400/400/nature" alt="Nature" />
            </Modal>

            <button onClick={openModal3}>Modal 3</button>
            <Modal isOpen={isOpenModal3} closeModal={closeModal3}>                
               <ContactForm />
            </Modal>

            <button onClick={openModalPortal}>Modal en Portal</button>
            <ModalPortal isOpen={isOpenModalPortal} closeModal={closeModalPortal}>                
            <h3>Modal en Portal</h3>
                <p>Hola, este es el contenido de un modal que carga en otro node del DOM diferente a donde carga nuestar app de React, gracias a un React Portal.</p>
                <img src="https://placeimg.com/400/400/tech" alt="tech" />
            </ModalPortal>
        </div>
     );
}
 
export default Modals;