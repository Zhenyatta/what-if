import React from 'react';
import facebook from "../../assets/facebook.svg"
import './index.css';

const ShareToInstaBtn = () => {

  const handleShare = async () => {
    const instagramUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}`; //instagram://story?media=${encodeURIComponent(videoUrl)}
    window.open(instagramUrl, '_blank');
  };

  return (
    <div className="share-btn-cont">
        <button className="share-btn" onClick={handleShare}>
            Share on Facebook
            <img src={facebook} className="facebook-icon" alt="facebook-icon" />
        </button>
    </div> 
  );
};

export default ShareToInstaBtn;
