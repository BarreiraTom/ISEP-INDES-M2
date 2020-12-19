import React, { useState, useEffect } from "react";

import "./miniatureVid.css";
import ScrVideo from "../sourceVid/sourceVid";

export default function MiniatureVid(props) {
    const [sources, setSources] = useState(props.sources);
    const component = "miniature";

    useEffect(() => {
        setSources(props.sources);
    }, [props.sources]);

    //// New sources TESTE
    //
    // const [webcamList, setWebcamList] = useState(props.webcamList);
    // const [ipCamList, setIpCamList] = useState(props.ipCamList);
    // const [youtubeList, setYoutubeList] = useState(props.youtubeList);
    // const [twitchList, setTwitchList] = useState(props.twitchList);
    // const [localVidsList, setLocalVidsList] = useState(props.localVidsList);
    
    //THIS DOES NOT SEEM TO WORK... DON'T KNOW WHY...
    useEffect(() => {
        // setWebcamList(props.webcamList);
        console.log("Updated Sources");
    }, [props.webcamList, props.ipCamList, props.youtubeList, props.twitchList, props.localVidsList]);


    return (
        <div id="miniVids">
            {props.MiniDisabled ? <div className="MiniDisabled">Miniatures Disabled</div> : <></>}
            <div id="miniSources">
                {/* {sources.map((src, key) => {
                    return (
                        <div className="miniStream" key={key} onClick={props.changeLiveVid.bind(this, src)}>
                            <div className={"miniatureVid" + (props.mainSource === src ? " active" : "")}>
                                <div className="screenBlock"></div>
                                <ScrVideo source={src} parentComp={component} />
                            </div>
                            <h3 className="miniatureDesc">{src.name ? src.name : ""}</h3>
                        </div>
                    );
                })}
                <br/> */}

                {/* TESTING FOR MY IDEA OF THE "inUse" dependent show */}
                {props.webcamList.map((src, key) => {
                    return src.inUse ? (
                        <div className="miniStream" key={key} onClick={props.changeLiveVid.bind(this, src)}>
                            <div className={"miniatureVid" + (props.mainSource === src ? " active" : "")}>
                                <div className="screenBlock"></div>
                                <ScrVideo source={src} parentComp={component} />
                            </div>
                            <h3 className="miniatureDesc">{src.name ? src.name : ""}</h3>
                        </div>
                    ) : (<></>);
                })}
                {props.ipCamList.map((src, key) => {
                    return src.inUse ? (
                        <div className="miniStream" key={key} onClick={props.changeLiveVid.bind(this, src)}>
                            <div className={"miniatureVid" + (props.mainSource === src ? " active" : "")}>
                                <div className="screenBlock"></div>
                                <ScrVideo source={src} parentComp={component} />
                            </div>
                            <h3 className="miniatureDesc">{src.name ? src.name : ""}</h3>
                        </div>
                    ) : (<></>);
                })}
                {props.youtubeList.map((src, key) => {
                    return src.inUse ? (
                        <div className="miniStream" key={key} onClick={props.changeLiveVid.bind(this, src)}>
                            <div className={"miniatureVid" + (props.mainSource === src ? " active" : "")}>
                                <div className="screenBlock"></div>
                                <ScrVideo source={src} parentComp={component} />
                            </div>
                            <h3 className="miniatureDesc">{src.name ? src.name : ""}</h3>
                        </div>
                    ) : (<></>);
                })}
                {props.twitchList.map((src, key) => {
                    return src.inUse ? (
                        <div className="miniStream" key={key} onClick={props.changeLiveVid.bind(this, src)}>
                            <div className={"miniatureVid" + (props.mainSource === src ? " active" : "")}>
                                <div className="screenBlock"></div>
                                <ScrVideo source={src} parentComp={component} />
                            </div>
                            <h3 className="miniatureDesc">{src.name ? src.name : ""}</h3>
                        </div>
                    ) : (<></>);
                })}
                {props.localVidsList.map((src, key) => {
                    return src.inUse ? (
                        <div className="miniStream" key={key} onClick={props.changeLiveVid.bind(this, src)}>
                            <div className={"miniatureVid" + (props.mainSource === src ? " active" : "")}>
                                <div className="screenBlock"></div>
                                <ScrVideo source={src} parentComp={component} />
                            </div>
                            <h3 className="miniatureDesc">{src.name ? src.name : ""}</h3>
                        </div>
                    ) : (<></>);
                })}
            </div>
        </div>
    );
}
