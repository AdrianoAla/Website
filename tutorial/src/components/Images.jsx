import React, { useState } from "react";
import Lightbox from "react-image-lightbox";

const ImageGrid = ({ images }) => {
  const [photoIndex, setPhotoIndex] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  console.log(images, photoIndex, isOpen)

  return (
    <div>
      <div className="grid">
        {images.map((src, i) => (
          <img
            key={i}
            src={src}
            onClick={() => {
              setPhotoIndex(i);
              setIsOpen(true);
            }}
            alt=""
          />
        ))}
      </div>
      {isOpen && (
        <Lightbox
          mainSrc={images[photoIndex]}
          nextSrc={images[(photoIndex + 1) % images.length]}
          prevSrc={images[(photoIndex + images.length - 1) % images.length]}
          onCloseRequest={() => setIsOpen(false)}
          onMovePrevRequest={() =>
            setPhotoIndex((photoIndex + images.length - 1) % images.length)
          }
          onMoveNextRequest={() =>
            setPhotoIndex((photoIndex + 1) % images.length)
          }
        />
      )}
    </div>
  );
};

export default ImageGrid;