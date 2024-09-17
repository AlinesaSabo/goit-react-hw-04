const ImageCard = ({ item, onImageClick }) => {
  return (
    <li onClick={() => onImageClick(item.urls.regular)}>
      <div>
        <img src={item.urls.small} alt={item.alt_description} />
      </div>
    </li>
  );
};

export default ImageCard;
