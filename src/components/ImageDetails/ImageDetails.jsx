import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import "./ImageDetails.css"

function ImageDetails() {
  const { id } = useParams();
  const [galleryimage, setGalleryImage] = useState({});

  async function downloadgalleryImages() {
    try {
      const response = await axios.get(
        `https://api.slingacademy.com/v1/sample-data/photos/${id}`
      );
      const responseResult = response.data;
      setGalleryImage({
        image: responseResult.photo.url,
        title: responseResult.photo.title,
        description: responseResult.photo.description,
      });
    } catch (err) {
      console.log(`Error message: ${err}`);
    }
  }
  useEffect(() => {
    downloadgalleryImages();
  }, []);

  return (
    <>
      <div className="container">
        <img id="individual-image" src={galleryimage.image} />
        <div className="textcontainer">
        <h2 className="title">{galleryimage.title}</h2>
        <p className="description">{galleryimage.description}</p>
        </div>
      </div>
    </>
  );
}
export default ImageDetails;
