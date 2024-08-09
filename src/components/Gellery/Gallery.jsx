import { Link } from "react-router-dom";
import "./Gallery.css";

function Gallery({ src, title, description, id }) {
  return (
    <div className="galleryImagesWrapper">
      <div className="item">
        <Link to={`/ImageList/${id}`} >
          <img id="image" src={src} alt={title} />
        </Link>
        {/* <h3 id="title" >{title}</h3>
        <p id="description" >{description}</p> */}
      </div>
    </div>
  );
}

export default Gallery;
