import axios from "axios";
import { useState, useEffect } from "react";
import "./ImageList.css";
import Gallery from "../Gellery/Gallery.jsx";

function ImageList() {
  const [imagelist, setImagelist] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const url = `https://api.slingacademy.com/v1/sample-data/photos`;

  async function downloadImages() {
    try {
      const response = await axios.get(url);
      const imageResults = response.data.photos;
      console.log(imageResults);
      

      // Update the imagelist state with the fetched data
      setImagelist(imageResults);
      setIsLoading(false);
    } catch (error) {
      console.error("Error fetching images:", error);
    }
  }

  useEffect(() => {
    downloadImages();
  }, []);

  return (
    <>
      <div className="galleryImagesWrapper">
        {isLoading ? (
          <div className="loader">
            <div className="rotator"></div>
          </div>
        ) : (
          imagelist.map((img, index) => (
            <div key={index} className="item">
              <Gallery
                src={img.url}
                title={img.title}
                description={img.description}
                id={img.id}
              />
            </div>
          ))
        )}
      </div>
       
    </>
  );
}

export default ImageList;
