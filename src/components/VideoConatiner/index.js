import React from "react";
import './styles.css';

const VideoContainer = () => {
    return(
        <div className="video-container">
            <p className="video-container-text" >Սիրելի՜ Լիանա և Գարիկ, Team2B-ի ողջ թիմը շնորհավորում է Ձեզ նշանադրության կապակցությամբ: <br/> Մաղթում ենք միայն երջանիկ, միայն լուսավոր ու միայն ջերմ օրեր թե՛ միմյանց, թե՛ նաև թիմի հետ միասին: Շա՜տ ժպտացե՜ք, շա՜տ սիրե՜ք ու անսահման երջանիկ եղե՜ք:
            </p>
            <video controls className="video" autoPlay>
                <source src="//cdn-cf-east.streamable.com/video/mp4/9tig14.mp4?Expires=1700077320&Signature=g~kFNIQ31bb0Ji3mjxZnAtd9AW5uct5uJIyvxAyWLzhlvfqWLw7w1mY6z3amEztMBMuXFLZx9wwkQsPc8DO0aUkiN6bqFtY4HBYoG3KdRBj8yU5ZQWjch70vBFzDfMQx3qL5rRTj1SOT2FYPOTNUL67EMA9zPxF~I8ZdLiw-gKjG5Y3y-HroWkXzCZaz5U57FHGwNwSJ-D1n3Ah27rGwU3ZD8eoaYHVZTM2JhUmkCZ4gWI0J0xvs8vOgb89F-hgcJWWbMhmQWEMJbst~UhBwFQRGZT3DdGMAMhgEQMRdumAYizG8SVYzIWEcVJOri9iEgA3hGZTl6Ge3HmJufddIOg__&Key-Pair-Id=APKAIEYUVEN4EVB2OKEQ" type="video/mp4" />
                Sorry, your browser doesn't support videos.
            </video>
            <p className="video-container-p" >What If flowers wishes you all the best !</p>
        </div>
    )
}

export default VideoContainer;
