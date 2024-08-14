import React from 'react';
import './Reviews.css';

const Reviews = () => {
    return (
        <div className="reviews">
            <h2>Customer Reviews</h2>
            <div className="review-list">
                <div className="review-item">
                    <p>"Amazing service! Highly recommend."</p>
                    <span>- John Doe</span>
                </div>
                <div className="review-item">
                    <p>"Beautiful designs, very professional team."</p>
                    <span>- Jane Smith</span>
                </div>
                <div className="review-item">
                    <p>"Our home looks fantastic, thanks to Dechome!"</p>
                    <span>- Alice Johnson</span>
                </div>
            </div>
        </div>
    );
}

export default Reviews;
