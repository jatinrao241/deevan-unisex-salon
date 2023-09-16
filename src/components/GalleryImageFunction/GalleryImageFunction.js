import React from 'react';

const galleryImages = require.context('../../assets/galleryimages', true, /\.(png|jpe?g|gif|webp)$/);
const images = galleryImages.keys().map(galleryImages);

const GalleryImageFunction = () => {
  return (
    <div className="row pt-4">
      {images.map((image, index) => (
        <div className="col-12 col-lg-3 col-md-4 col-sm-6 mb-3" key={index}>
          <a href="#!" className="starting-gallery" data-bs-toggle="modal" data-bs-target={`#myModal${index}`}>
            <img
              src={image}
              alt={`Gallery Image ${index + 1}`}
              height="250px"
              width="100%"
            />
          </a>
          <div className="modal fade" id={`myModal${index}`}>
            <div className="modal-dialog modal-dialog-centered">
              <div className="modal-content bg-transparent">
                <div className="modal-body text-right">
                  <a href="#!" className="anchor-crossmark" data-bs-dismiss="modal">
                    <i className="fa-solid fa-xmark"></i>
                  </a>
                  <img
                    src={image}
                    alt={`Gallery Image ${index + 1}`}
                    height="auto"
                    width="100%"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default GalleryImageFunction;
