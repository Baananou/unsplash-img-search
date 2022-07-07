import { useState, useEffect } from "react";
import Image from "./Image";
export default function GetImages() {
  const [images, setImages] = useState([]);
  useEffect(() => {
    const fetchImages = async () => {
      const res = await fetch(
        `https://api.unsplash.com/photos/?client_id=${process.env.REACT_APP_UNSPLASH_API_KEY}&per_page=20`
      );
      const data = await res.json();
      setImages(data);
    };
    fetchImages();
  }, []);

  return (
    <>
      {!images ? (
        <h3 className="ImageErr">Loading...</h3>
      ) : (
        <section className="Body">
          <h1> Your Images Selection </h1>
          <div className="Imgs">
            {images.map((image) => (
              <Image key={image.id} {...image} />
            ))}
          </div>
        </section>
      )}
    </>
  );
}
