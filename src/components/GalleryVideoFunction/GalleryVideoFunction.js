import React from 'react';
import { Link } from 'react-router-dom';

const videoContext = require.context('../../assets/videos', true, /\.(mp4|mov|avi)$/);
const videoKeys = videoContext.keys();
const videoUrls = videoKeys.map(videoContext);

const aspectRatio = 1 / 1; // Set your desired aspect ratio here

const GalleryVideoFunction = () => {
  return (
    <section id="video" className="video-section pt-3">
      <div className="container">
        <h3 className="about-service-heading">VIDEO</h3>
        <div className="row pt-4">
          {videoUrls.map((videoUrl, index) => (
            <div className="col-12 col-lg-3 col-md-4 col-sm-6 mb-3" key={index}>
              <Link to={`/video/${encodeURIComponent(videoUrl)}`}>
                <div className="video-wrapper" style={{ paddingTop: `${(1 / aspectRatio) * 100}%` }}>
                  <video className="video-player">
                    <source src={videoUrl} type="video/mp4" />
                    {/* Add additional <source> tags for different video formats if needed */}
                  </video>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section> 
  );
};

export default GalleryVideoFunction;
