const Modal = ({ img, onClose }) => {
  return (
    <div className="modal">
      <img src={img} alt="Imagen original" className="imgModal" />
      <button onClick={onClose}>Cerrar</button>
    </div>
  );
};

export default Modal;
