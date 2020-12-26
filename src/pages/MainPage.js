/* eslint-disable no-unused-vars */
import React, { useState, useEffect, useCallback } from "react";
import NewWindow from "react-new-window";

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
            name: "Phone1",
            desc: `192.168.1.2:8080/video`,
            type: "ipCam",
            inUse: false
        },
        {
            name: "Phone2",
            desc: `192.168.1.89:8080/video`,
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
        },
        {
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
        },
        {
            name: "mibr",
            desc: "mibrtv",
            type: "twitch",
            inUse: false
        }
    ]);
    const [localVidsList, setLocalVidsList] = useState([
    ]);

    //Creation of the StreamerLogo variable
    const [liveLogo, setLiveLogo] = useState();

    //Pre-definition of the Main Source
    const [mainSource, setMainSource] = useState({ type: "none" });
    //Preset for the Activate Playlist button
    const [miniatureDisabled, setMiniatureDisabled] = useState(false);

    const [loading, setLoading] = useState(true);

    //Creation of Portal for Live Preview
    const [usingPortal, setUsingPortal] = useState(false);
    const toggleLivePreview = async () => {
        setUsingPortal(!usingPortal);
    };

    /*
    O que eu estava a tentar fazer aqui era, em vez de utilizar as sources e substituir uma posição 
    com o novo video escolhido nas Playlists (Como fizeste em cima),
    eu pensei em usar uma tag (inUse) em todos as sources q alterava entre true/false à medida q carregasses neles.
    Até agr só tentei com a lista das webcams, mas o update n está a ser detetado do lado do miniatureVid, n sei pq...

    EDIT: são 3h da manha... XD 
    Começou a funcionar do nada. Vou criar um branch (newSources) para continuar isto sem vos causar problemas

    EDIT: 4AM LOG... :P
     the toggle only seems to work when the webcams update... Updating the whole list... WIERD
    */
    const toggleMiniature = async (type, pos, state) => {
        await setLoading(true);

        switch (type) {
            case "webcam":
                let tempWebcam = await webcamList;
                tempWebcam[pos].inUse = !state;
                await setWebcamList(tempWebcam);
                break;
            case "ipCam":
                let tempIpCam = await ipCamList;
                tempIpCam[pos].inUse = !state;
                await setIpCamList(tempIpCam);
                break;
            case "youtube":
                let tempYt = await youtubeList;
                tempYt[pos].inUse = !state;
                await setYoutubeList(tempYt);
                break;
            case "twitch":
                let tempTwitch = await twitchList;
                tempTwitch[pos].inUse = !state;
                await setTwitchList(tempTwitch);
                break;
            case "local":
                let tempLocal = await localVidsList;
                tempLocal[pos].inUse = !state;
                await setLocalVidsList(tempLocal);
                break;

            default:
                break;
        }
        await setLoading(false);
    };
    //Setup of Webcam Playlist
    const handleDevices = async (mediaDevices) => {
        const webcams = await mediaDevices.filter(({ kind }) => kind === "videoinput");
        const tempArray = [];

        await webcams.forEach(async (wbcam) => {
            tempArray.push({
                name: `${wbcam.label}`.replace(" ", "_"),
                desc: `${wbcam.deviceId}`,
                type: "webcam",
                inUse: false
            });
        });

        setWebcamList([...tempArray]);
    };

    useEffect(async () => {
        const mediaDevs = await navigator.mediaDevices.enumerateDevices();
        handleDevices(mediaDevs);
    }, []);

    //This will change the Main Video from one of the Miniature videos
    const changeLiveVid = (src, el) => {
        el.preventDefault();
        setMainSource(src);
    };

    // //This will change the Miniature videos on display
    // const changeMinVid = (pos, src, el) => {
    //     el.preventDefault();
    //     const arr = [...sources];
    //     arr[pos] = { ...arr[pos], name: src.name, desc: src.desc };
    //     setSources(arr);
    // };

    return (
        <>
            <div className="main-area">
                <div className="left-area">
                    {usingPortal ? (
                        <NewWindow onUnload={() => setUsingPortal(false)} title="Live Preview" name="Live Preview" features={{height:'720',width:'1280',resizable:'no',title:'Live Preview',name:'Live Preview'}}>
                            <MainVid
                                mainSource={mainSource}
                                setMainSource={setMainSource}
                                sources={[
                                    ...webcamList,
                                    ...ipCamList,
                                    ...youtubeList,
                                    ...twitchList,
                                    ...localVidsList
                                ].filter(({ inUse }) => inUse === true)}
                                miniatureDisabled={miniatureDisabled}
                                liveLogo={liveLogo}
                                localVidsList={localVidsList}
                            />
                        </NewWindow>
                    ) : (
                        <div className="b4MainVid">
                            <MainVid
                                mainSource={mainSource}
                                setMainSource={setMainSource}
                                sources={[
                                    ...webcamList,
                                    ...ipCamList,
                                    ...youtubeList,
                                    ...twitchList,
                                    ...localVidsList
                                ].filter(({ inUse }) => inUse === true)}
                                miniatureDisabled={miniatureDisabled}
                                liveLogo={liveLogo}
                                localVidsList={localVidsList}
                            />
                        </div>
                    )}
                    <MiniatureVids
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
                        //changeMinVid={changeMinVid}
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
                        liveLogo={liveLogo}
                        setLiveLogo={setLiveLogo}
                        usingPortal={usingPortal}
                        toggleLivePreview={toggleLivePreview}
                    ></ActionButton>
                </div>
            </div>
        </>
    );
}
