import React from "react";
import './styles.css';

const VideoContainer = () => {
    return(
        <div className="video-container">
            <p className="video-container-text" >Սիրելի՜ Լիանա և Գարիկ, Team2B-ի ողջ թիմը շնորհավորում է Ձեզ նշանադրության կապակցությամբ: <br/> Մաղթում ենք միայն երջանիկ, միայն լուսավոր ու միայն ջերմ օրեր թե՛ միմյանց, թե՛ նաև թիմի հետ միասին: Շա՜տ ժպտացե՜ք, շա՜տ սիրե՜ք ու անսահման երջանիկ եղե՜ք:
            </p>
            <video controls className="video" autoPlay>
                <source src="//cdn-cf-east.streamable.com/video/mp4/g0ubdw.mp4?Expires=1700111280&Signature=GNt2ZB-p0~PAoWKplszxY~NZGxy6Irxfth79T5Egh5JJtff0-m87Ygr6vRuOdEkHhBYb-5XbcHYvRKDviWhACQIoAIDZpEG1sGl4xF-bgpobofQvAszkmaHq1U41pN~8Vi0cFDaUBWAL-wu6uTphXtlkkFD9nt3vFZW7I40KM2deCa8MlG8~Xynd93U6O5qdKGZ14n11lEqkVb1~BX7cLcVvA~-1nw7E-2xJsq6ZvY6jCRlEM9B9wvJPyuml4HjWVghGZOLDv-qfq8x5ZHK46GW5fkD2fqSOzjrWg5Qn7TQmdAcpob-QQu0EiAvJnqAry5jnHlmBh-Mh8GPPdzOSIg__&Key-Pair-Id=APKAIEYUVEN4EVB2OKEQ" type="video/mp4" />
                Sorry, your browser doesn't support videos.
            </video>
            <p className="video-container-p" >What If flowers wishes you all the best !</p>
        </div>
    )
}

export default VideoContainer;
