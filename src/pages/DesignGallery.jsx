import React from 'react';
import './DesignGallery.css';

const DesignGallery = () => {
    return (
        <div className="design-gallery">
            <h2>Design Gallery</h2>
            <div className="gallery">
                <div className="gallery-item">
                    <img src="https://media.designcafe.com/wp-content/uploads/2020/04/23125905/creative-home-decor-ideas.jpg" alt="Design 1" />
                    <p>An elegant and sophisticated home interior with a marble accent wall, modern artwork, and carefully curated decorative items on a sleek console table.</p>
                </div>
                <div className="gallery-item">
                    <img src="https://cityfurnish.com/blog/wp-content/uploads/2023/07/modern-apartment-with-bold-bright-walls-perfect-showcasing-your-art-collection-min.jpg" alt="Design 2" />
                    <p>A colorful wall decor home features vibrant, eye-catching designs that bring energy and personality to the living space, creating a lively and dynamic atmosphere.</p>
                </div>
                <div className="gallery-item">
                    <img src="https://static.asianpaints.com/content/dam/asianpaintsbeautifulhomes/home-decor-advice/guides-and-how-tos/how-to-design-a-minimalist-living-room-perfect-for-indian-homes/wall-art-for-your-living-room-interior.jpg" alt="Design 3" />
                    <p>Minimalistic decor emphasizes simplicity with clean lines and neutral tones, creating serene, uncluttered spaces that evoke calmness and enhance functionality in your home.</p>
                </div>
            </div>
        </div>
    );
}

export default DesignGallery;
