/* eslint-disable no-unused-vars */
import React, { useState, useEffect, useCallback } from "react";

import MainVid from "../components/mainVid/mainVid";
import MiniatureVids from "../components/miniatureVid/miniatureVid";
import Playslists from "../components/playlistsComponent/paylists";

import ActionButton from "../components/actionButtons/actionButton";
import "../resources/css/index.css";

export default function Page(props) {
    const [webcamList, setWebcamList] = useState([]);
    const [ipCamList, setIpCamList] = useState([]);
    const [youtubeList, setYoutubeList] = useState([]);
    const [twitchList, setTwitchList] = useState([]);
    const [localVidsList, setLocalVidsList] = useState([]);

    const [miniatureDisabled, setMiniatureDisabled] = useState(false);

    const handleDevices = useCallback(
        (mediaDevices) => setWebcamList(mediaDevices.filter(({ kind }) => kind === "videoinput")),
        [setWebcamList]
    );

    useEffect(() => {
        navigator.mediaDevices.enumerateDevices().then(handleDevices);
    }, [handleDevices]);

    const [sources, setSources] = useState([
        {
            id: "1",
            name: "rocketleague",
            desc: "rocketleague",
            type: "twitch"
        },
        {
            id: "2",
            name: "ipCam",
            desc: "192.168.137.101:8080/video",
            type: "ipCam"
        },
        {
            id: "3",
            name: "Youtube-vid1",
            desc: "https://www.youtube.com/watch?v=LXb3EKWsInQ",
            type: "youtube"
        },
        {
            id: "4",
            name: "webcam",
            desc: "",
            type: "webcam"
        }
    ]);

    const [mainSource, setMainSource] = useState({
        type: "none"
    });

    const changeLiveVid = (src, el) => {
        el.preventDefault();
        setMainSource(src);
    };

    const changeMinVid = (pos, src, el) => {
        el.preventDefault();
        const arr = [...sources];
        arr[pos] = { ...arr[pos], name: src.name, desc: src.desc };
        setSources(arr);
    };

    return (
        <>
            <div className="main-area">
                <div className="left-area">
                    <MainVid mainSource={mainSource} miniatureDisabled={miniatureDisabled} />
                    <MiniatureVids
                        sources={sources}
                        changeLiveVid={changeLiveVid}
                        mainSource={mainSource}
                        MiniDisabled={miniatureDisabled}
                    />
                </div>
                <div className="right-area">
                    <Playslists changeMinVid={changeMinVid}></Playslists>
                    <ActionButton
                        setMiniatureDisabled={setMiniatureDisabled}
                        miniatureDisabled={miniatureDisabled}
                    ></ActionButton>
                </div>
            </div>
        </>
    );
}
