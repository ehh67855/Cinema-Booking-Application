import React from "react";
import StarRating from "../../BrowseMovie/StarRating/StarRating";

function Reviews({ reviews }) {
  {reviews.length > 0 ? (
    reviews.map((review, index) => (
      <div key={index} className="review">
        <p><strong>{review.author}</strong></p>
        <StarRating numStars={review.rating}></StarRating>
        <p>{review.reviewContent}</p>
      </div>
    ))
  ) : (
    <p>No reviews yet.</p>
  )}
}

export default Reviews;