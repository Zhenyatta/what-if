import React from "react";
import './styles.css';

const VideoContainer = () => {
    return(
        <div className="video-container">
            <p className="video-container-text" >Սիրելի՜ Լիանա և Գարիկ, Team2B-ի ողջ թիմը շնորհավորում է Ձեզ նշանադրության կապակցությամբ: <br/> Մաղթում ենք միայն երջանիկ, միայն լուսավոր ու միայն ջերմ օրեր թե՛ միմյանց, թե՛ նաև թիմի հետ միասին: Շա՜տ ժպտացե՜ք, շա՜տ սիրե՜ք ու անսահման երջանիկ եղե՜ք:
            </p>
            {/* <video controls className="video" autoPlay>
                <source src="https://www.youtube.com/embed/exF3s-66yUk" type="video/mp4" />
                Sorry, your browser doesn't support videos.
            </video> process.env */}
            <iframe className="video" src="https://www.youtube.com/embed/exF3s-66yUk" title="Liana x Garik by What If Flowers"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            <p className="video-container-p" >What If flowers wishes you all the best !</p>
        </div>
    )
}

export default VideoContainer;
