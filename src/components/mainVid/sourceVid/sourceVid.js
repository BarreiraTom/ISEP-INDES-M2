import React, { useState, useEffect } from 'react';

import './../mainVid.css';

export default function SourceVid(props) {

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
                    {/* <object id={"ip-cam-"+props.source.name} data={"http://"+props.source.desc}></object> */}
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
            let videosrc = props.source.desc.match("v=")!=null ? props.source.desc.split("v=")[1] : props.source.desc
            return(
                <>
                    <iframe src={"https://www.youtube.com/embed/"+videosrc+"?autoplay=1"} frameborder="0" allow="autoplay; clipboard-write; encrypted-media; gyroscope;"></iframe>
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
                    <h2 className="noDisplay">No display selected</h2>
                </>
            );
            break;
    }
    
}