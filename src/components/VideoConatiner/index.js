import React from "react";
import './styles.css';

const VideoContainer = () => {
    return(
        <div className="video-container">
            <p className="video-container-text" >Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Ut enim ad minim veniam, quis nostrud exercitation ullamco
                laboris nisi ut aliquip ex ea commodo consequat. </p>
                <video controls className="video" autoPlay>
                <source src="https://assets.mixkit.co/videos/preview/mixkit-winter-fashion-cold-looking-woman-concept-video-39874-large.mp4" type="video/mp4" />
                Sorry, your browser doesn't support videos.
                </video>
            <p className="video-container-p" >What If flowers wishes you all the best !</p>
        </div>
    )
}

export default VideoContainer;
