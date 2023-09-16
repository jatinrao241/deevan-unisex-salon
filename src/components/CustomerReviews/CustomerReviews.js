import React, { useState } from "react";

const CustomerReviews = () => {
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState("");

  const handleRatingChange = (event) => {
    const selectedRating = parseInt(event.target.value);
    setRating(selectedRating);
  };

  const handleCommentChange = (event) => {
    setComment(event.target.value);
  };

  const handleLinkClick = () => {
    console.log(`Submitted rating: ${rating}`);
    console.log(`Submitted comment: ${comment}`);
    window.location.href =
      "https://example.com/submit-review?rating=" +
      rating +
      "&comment=" +
      comment;
  };

  return (
    <>
      <div className="col-sm-5 col-md-4 col-12 star-rating-wrapper">
        {[5, 4, 3, 2, 1].map((star) => (
          <React.Fragment key={star}>
            <input
              type="radio"
              name="rating"
              id={`star-${star}`}
              value={star}
              onChange={handleRatingChange}
            />
            <label htmlFor={`star-${star}`}></label>
          </React.Fragment>
        ))}
      </div>
      {/* <div className="col-12">
        <div className="comment-box pt-3">
          <textarea
            placeholder="Leave a comment"
            value={comment}
            onChange={handleCommentChange}
          ></textarea>
        </div>
      </div>
      <div className="col-12">
        <a
          href="#!"
          onClick={handleLinkClick}
          className="submit-feedback-button"
        >
          Submit Feedback
        </a>
      </div> */}
    </>
  );
};

export default CustomerReviews;
