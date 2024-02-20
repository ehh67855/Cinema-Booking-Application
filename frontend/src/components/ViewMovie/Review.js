import React from "react";

function Review({ review }) {
  return (
    <div className="review">
      <p><strong>{review.author}:</strong> {review.content}</p>
    </div>
  );
}

export default Review;