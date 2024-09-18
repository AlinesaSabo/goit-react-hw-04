import ImageCard from "../ImageCard/ImageCard";
import s from "./ImageGallery.module.css";

const ImageGallery = ({ articles, onImageClick }) => {
  return (
    <div className={s.div}>
      <ul className={s.list}>
        {articles.map((item) => (
          <ImageCard key={item.id} item={item} onImageClick={onImageClick} />
        ))}
      </ul>
    </div>
  );
};

export default ImageGallery;
