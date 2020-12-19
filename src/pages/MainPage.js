/* eslint-disable no-unused-vars */
import React, { useState, useEffect, useCallback } from "react";

import MainVid from "../components/mainVid/mainVid";
import MiniatureVids from "../components/miniatureVid/miniatureVid";
import Playslists from "../components/playlistsComponent/paylists";

import ActionButton from "../components/actionButtons/actionButton";
import "../resources/css/index.css";

export default function Page(props) {
    //Creation of the Playlists
    const [webcamList, setWebcamList] = useState([]);
    const [ipCamList, setIpCamList] = useState([
        {
            name: 'Phone1', 
            desc: `192.168.1.2`,
            type: "ipCam", 
            inUse: false
        },{
            name: 'Phone2', 
            desc: `192.168.1.89`,
            type: "ipCam", 
            inUse: false
        }
    ]);
    const [youtubeList, setYoutubeList] = useState([
        {
            name: "eslcsgo",
            desc: "https://www.youtube.com/watch?v=sn6EjlZJzIQ",
            type: "youtube", 
            inUse: false
        },{
            name: "lindinho",
            desc: "https://www.youtube.com/watch?v=VG4YEDBYruo",
            type: "youtube", 
            inUse: false
        }
    ]);
    const [twitchList, setTwitchList] = useState([
        {
            name: "gaules",
            desc: "gaules",
            type: "twitch", 
            inUse: false
        },{
            name: "mibr",
            desc: "mibrtv",
            type: "twitch", 
            inUse: false
        }
    ]);
    const [localVidsList, setLocalVidsList] = useState([
        {
            name: "video1",
            desc: "videos/video1.mp4",
            type: "local",
            inUse: false
        },{
            name: "video2",
            desc: "videos/video2.mp4",
            type: "local",
            inUse: false
        },{
            name: "video3",
            desc: "videos/video3.mp4",
            type: "local",
            inUse: false
        }
    ]);

    //Pre-definition of the Main Source
    const [mainSource, setMainSource] = useState({ type: "none" });
    //Preset for the Activate Playlist button
    const [miniatureDisabled, setMiniatureDisabled] = useState(false);

    //Setup of Webcam Playlist
    const handleDevices = async (mediaDevices) => {
            const webcams = await mediaDevices.filter(({ kind }) => kind === "videoinput");
            const tempArray = [];

            await webcams.forEach(async wbcam => {
                tempArray.push({name: `${wbcam.label}`.replace(" ","_"), desc: `${wbcam.deviceId}` ,type: "webcam", inUse:false})
            });

            setWebcamList([...tempArray])
        }

    useEffect(async () => {
        const mediaDevs = await navigator.mediaDevices.enumerateDevices()
        await handleDevices(mediaDevs)
    }, []);

    //LEGACY SOURCES
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
        },{
            name: "video",
            desc: "videos/video1.mp4",
            type: "local"
        }
    ]);

    //This will change the Main Video from one of the Miniature videos
    const changeLiveVid = (src, el) => {
        el.preventDefault();
        setMainSource(src);
    };

    //This will change the Miniature videos on display
    const changeMinVid = (pos, src, el) => {
        el.preventDefault();
        const arr = [...sources];
        arr[pos] = { ...arr[pos], name: src.name, desc: src.desc };
        setSources(arr);
    };


    /*
    O que eu estava a tentar fazer aqui era, em vez de utilizar as sources e substituir uma posição 
    com o novo video escolhido nas Playlists (Como fizeste em cima),
    eu pensei em usar uma tag (inUse) em todos as sources q alterava entre true/false à medida q carregasses neles.
    Até agr só tentei com a lista das webcams, mas o update n está a ser detetado do lado do miniatureVid, n sei pq...

    EDIT: são 3h da manha... XD 
    Começou a funcionar do nada. Vou criar um branch (newSources) para continuar isto sem vos causar problemas
    */
    const toggleMiniature = async (type, pos, state) => {
        const temp = webcamList;
        temp[pos].inUse = !state;
        await setWebcamList(temp);
    }

    return (
        <>
            <div className="main-area">
                <div className="left-area">
                    <MainVid mainSource={mainSource} sources={sources} miniatureDisabled={miniatureDisabled} />
                    <MiniatureVids
                        sources={sources}

                        webcamList={webcamList}
                        ipCamList={ipCamList}
                        youtubeList={youtubeList}
                        twitchList={twitchList}
                        localVidsList={localVidsList}

                        changeLiveVid={changeLiveVid}
                        mainSource={mainSource}
                        MiniDisabled={miniatureDisabled}
                    />
                </div>
                <div className="right-area">
                    <Playslists 
                        changeMinVid={changeMinVid} 
                        toggleMiniature={toggleMiniature}

                        webcamList={webcamList}
                        ipCamList={ipCamList}
                        youtubeList={youtubeList}
                        twitchList={twitchList}
                        localVidsList={localVidsList}

                        setIpCamList={setIpCamList}
                        setYoutubeList={setYoutubeList}
                        setTwitchList={setTwitchList}
                        setLocalVidsList={setLocalVidsList}
                    ></Playslists>
                    <ActionButton
                        setMiniatureDisabled={setMiniatureDisabled}
                        miniatureDisabled={miniatureDisabled}
                    ></ActionButton>
                </div>
            </div>
        </>
    );
}
