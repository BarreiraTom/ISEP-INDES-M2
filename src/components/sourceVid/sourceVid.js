/* eslint-disable jsx-a11y/iframe-has-title */
import React, { useState, useEffect } from "react";
import Webcam from "react-webcam";

export default function SourceVid(props) {
    const webcamRef = React.useRef(null);
    const [videoNumber, setVideoNumber] = React.useState(0);
    
    const setCount = () => {
        setVideoNumber(videoNumber + 1);
    };
    const resetCount = async () => {
        await setVideoNumber(0);
    };

    const [source, setSources] = useState(props.source);

    useEffect(() => {
        setSources(props.source);
    }, [props.source]);

    switch (props.source.type) {
        case "webcam":
            const videoConstraints = {
                //environment || user
                // facingMode: "environment"
                deviceId: props.source.desc
            };
            return (
                <>
                    <Webcam audio={false} ref={webcamRef} videoConstraints={videoConstraints} />
                </>
            );

        case "ipCam":
            return (
                <>
                    <img id={"ip-cam-" + props.source.name} border="0" src={"http://" + props.source.desc}></img>
                </>
            );

        case "local":
            return props.parentComp === "miniature" ? (
                <>
                    <video
                        id={"local-" + props.source.name}
                        src={props.source.desc}
                        controls
                        autoPlay
                        muted
                        loop
                    ></video>
                </>
            ) : (
                <>
                    <video id={"local-" + props.source.name} src={props.source.desc} controls autoPlay loop></video>
                </>
            );

        case "sleep":
            
            const arrVid = [...props.localVidsList];
            if (arrVid.length>0) {
                let vid;
                if (videoNumber>=arrVid.length){
                    resetCount();
                    vid = arrVid[0].desc;
                }else {
                    vid = arrVid[videoNumber].desc;
                }
                

                return (
                    <>
                        <video
                            id="local-sleep"
                            src={vid}
                            controls
                            autoPlay
                            onEnded={() => {
                                setCount();
                            }}
                            onError={() => {
                                resetCount();
                            }}
                        ></video>
                    </>
                );
            }else{
                return(<>
                    <h2 className="noDisplay">No Videos on the Playlist</h2>
                </>)
            }
            
            break;

        case "youtube":
            let videosrc = props.source.desc.match("v=") != null ? props.source.desc.split("v=")[1] : props.source.desc;

            return props.parentComp === "miniature" ? (
                <>
                    <iframe
                        src={"https://www.youtube.com/embed/" + videosrc + "?controls=0&autoplay=1&mute=1"}
                        frameBorder="0"
                        allow="autoplay; clipboard-write; encrypted-media; gyroscope;"
                        volume="0"
                    ></iframe>
                </>
            ) : (
                <>
                    <iframe
                        src={"https://www.youtube.com/embed/" + videosrc + "?controls=1&autoplay=1"}
                        frameBorder="0"
                        allow="autoplay; clipboard-write; encrypted-media; gyroscope;"
                        volume="80"
                    ></iframe>
                </>
            );

        case "twitch":
            return props.parentComp === "miniature" ? (
                <>
                    <iframe
                        id={"twitch-" + props.source.name}
                        src={
                            "https://player.twitch.tv/?channel=" +
                            props.source.desc +
                            "&parent=localhost" +
                            "&muted=true&autoplay=true&controls=0"
                        }
                        frameBorder="0"
                        allowFullScreen={false}
                        scrolling="no"
                    ></iframe>
                </>
            ) : (
                <>
                    <iframe
                        id={"twitch-" + props.source.name}
                        src={
                            "https://player.twitch.tv/?channel=" +
                            props.source.desc +
                            "&parent=localhost" +
                            "&autoplay=true&controls=1"
                        }
                        frameBorder="0"
                        allowFullScreen={true}
                        scrolling="no"
                    ></iframe>
                </>
            );

        default:
            return (
                <>
                    <h2 className="noDisplay">No display selected</h2>
                </>
            );
    }
}
