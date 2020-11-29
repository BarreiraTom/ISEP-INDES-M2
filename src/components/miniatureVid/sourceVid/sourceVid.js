import React, { useState, useEffect } from 'react';

import './../miniatureVid.css';

export default function sourceVid(props) {

    switch (props.source.type) {
        case "webcam":
            // Set constraints for the video stream
            var constraints = { video: { facingMode: "user", deviceId: props.source.desc }, audio: false };

            // Access the device camera and stream to cameraView
            function cameraStart(el) {
                // Define constants
                const cameraView = document.querySelector("#camera-view-"+props.source.name)

                navigator.mediaDevices
                    .getUserMedia(constraints)
                    .then(function(stream) {
                    //track = stream.getTracks()[0];
                    cameraView.srcObject = stream;
                })
                .catch(function(error) {
                    console.error("Oops. Something is broken.", error);
                });
            }

            return(
                <>
                    {/* <!-- Camera sensor --> */}
                    <canvas id={"camera-sensor-"+props.source.name}></canvas>
                    {/* <!-- Camera view --> */}
                    <video id={"camera-view-"+props.source.name} autoplay playsinline onLoad={cameraStart.bind(this)}></video>
                </>
            );
            break;

        case "ipCam":
            return(
                <>
                    <img id={"ip-cam-"+props.source.name} border="0" src={"http://"+props.source.desc}></img>
                </>
            );
            break;
    
        case "local":
            return(
                <>
                    <video id={"local-"+props.source.name} src={props.source.desc} autoplay muted loop></video>
                </>
            );
            break;

        case "youtube":
            return(
                <>
                
                </>
            );
            break;

        case "twitch":
            return(
                <>
                    <iframe id={"twitch-"+props.source.name} src={"https://player.twitch.tv/?channel="+props.source.desc+"&parent=localhost"} frameborder="0" allowfullscreen="false" scrolling="no"></iframe>
                </>
            );
            break;
    
        default:
            return (
                <>
                    <i class="fa fa-plus"></i>
                </>
                );
            break;
    }
    
}