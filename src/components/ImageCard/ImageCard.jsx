import s from "./ImageCard.module.css";

const ImageCard = ({ item, onImageClick }) => {
  return (
    <li onClick={() => onImageClick(item.urls.regular)}>
      <div className={s.imageContainer}>
        <img
          src={item.urls.small}
          alt={item.alt_description}
          className={s.image}
        />
      </div>
    </li>
  );
};

export default ImageCard;
