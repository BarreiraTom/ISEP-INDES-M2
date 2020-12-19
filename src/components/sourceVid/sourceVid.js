/* eslint-disable jsx-a11y/iframe-has-title */
import React, { useState, useEffect } from "react";
import Webcam from "react-webcam";

export default function SourceVid(props) {
    const webcamRef = React.useRef(null);
    const [videoNumber, setVideoNumber] = React.useState(1);
    const setCount = () => {
        setVideoNumber(videoNumber + 1);
    };
    const resetCount = () => {
        setVideoNumber(1);
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
            // fs detetar ficheiros no resource/videos
            // acaba um video e começa outro
            // acaba a lista, recomeça
            //listReactFiles("videos/").then(files => console.log(files))
            // require the module
            var vid = "videos/video" + videoNumber + ".mp4";
            return (
                <>
                    <video
                        id="local-sleep"
                        src={vid}
                        type="video/mp4"
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

        case "youtube":
            let videosrc = props.source.desc.match("v=") != null ? props.source.desc.split("v=")[1] : props.source.desc;

            return (
                <>
                    <iframe
                        src={"https://www.youtube.com/embed/" + videosrc + "?controls=0&autoplay=1&mute=1"}
                        frameBorder="0"
                        allow="autoplay; clipboard-write; encrypted-media; gyroscope;"
                        volume="0"
                    ></iframe>
                    ~
                    {/*<div id={"miniYT-"+props.source.name} onLoad={onYouTubeIframeAPIReady.bind(this, "YT")}></div> */}
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
            return props.parentComp === "miniature" ? (
                <>
                    <i className="fa fa-plus"></i>
                </>
            ) : (
                <>
                    <h2 className="noDisplay">No display selected</h2>
                </>
            );
    }
}
