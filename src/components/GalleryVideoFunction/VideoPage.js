import React, { useRef, useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';

const VideoPage = () => {
  const { videoUrl } = useParams();
  const videoRef = useRef(null);
  const history = useHistory();

  useEffect(() => {
    // Scroll the video to the previous position if available
    const scrollPosition = history?.location?.state?.scrollPosition;
    if (videoRef.current && scrollPosition) {
      videoRef.current.currentTime = scrollPosition;
    }

    // Save the current video position to history state when leaving the page
    return () => {
      if (videoRef.current) {
        const currentPosition = videoRef.current.currentTime;
        history.replace(history.location.pathname, { scrollPosition: currentPosition });
      }
    };
  }, [history]);

  const handleGoBack = () => {
    history.goBack();
  };

  return (
    <section id="video" className="video-section pt-3">
      <div className="container video-page-container">
        <div className="video-top-bottom-center">
          <h3 className="about-service-heading">VIDEO</h3>
          <div className="row text-center pt-4">
            <div className="col-12">
              <video
                ref={videoRef}
                width="100%"
                style={{ maxHeight: "80vh", borderRadius: "10px" }}
                controls
                autoPlay
              >
                <source src={decodeURIComponent(videoUrl)} type="video/mp4" />
              </video>
              <button className="btn btn-primary mt-2" onClick={handleGoBack}>
                Go Back
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoPage;

