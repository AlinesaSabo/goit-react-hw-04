import Modal from "react-modal";
import s from "./ImageModal.module.css";

const ImageModal = ({ isOpen, onRequestClose, imageSrc }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      ariaHideApp={false}
      className={s.modal}
      overlayClassName={s.overlay}
    >
      <button className={s.close_btn} onClick={onRequestClose}>
        ×
      </button>
      <img src={imageSrc} alt="" className={s.modal_image} />
    </Modal>
  );
};

export default ImageModal;
