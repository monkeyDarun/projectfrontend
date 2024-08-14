import React, { useState, useEffect } from 'react';
import './PopupAd.css';

const PopupAd = () => {
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        const timer = setInterval(() => {
            setIsVisible(true);
        }, 15000); // 10 seconds interval

        return () => clearInterval(timer);
    }, []);

    const handleClose = () => {
        setIsVisible(false);
    };

    if (!isVisible) return null;

    return (
        <div className="popup-ad">
            <div className="popup-content">
                <span className="close-button" onClick={handleClose}>&times;</span>
                <a href='https://www.elledecor.com/'><img src="https://www.bocadolobo.com/images/pop-up/boca-do-lobo-book.jpg" alt="Ad" className="ad-image" /></a>
                <div className="ad-text">
                    <h2>Special Offer!</h2>
                    <p>Get 50% off on your next purchase. Limited time offer!</p>
                </div>
            </div>
        </div>
    );
};

export default PopupAd;
