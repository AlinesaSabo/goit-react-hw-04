import ImageCard from "../ImageCard/ImageCard";

const ImageGallery = ({ articles, onImageClick }) => {
  return (
    <div>
      <ul>
        {articles.map((item) => (
          <ImageCard key={item.id} item={item} onImageClick={onImageClick} />
        ))}
      </ul>
    </div>
  );
};

export default ImageGallery;
