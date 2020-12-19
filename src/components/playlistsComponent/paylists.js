import React, { useState, useEffect } from "react";
import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

import "./playlists.css";

export default function Playslists(props) {
    //Test Sources (not used)
    const [twitchSources, setTwitchSources] = useState([
        {
            name: "gaules",
            desc: "gaules"
        },
        {
            name: "mibr",
            desc: "mibrtv"
        }
    ]);
    const [youtubeSources, setYoutubeSources] = useState([
        {
            name: "esl csgo",
            desc: "https://www.youtube.com/watch?v=sn6EjlZJzIQ"
        },{
            name: "lindinho",
            desc: "https://www.youtube.com/watch?v=VG4YEDBYruo"
        }
    ]);

    const { changeMinVid, toggleMiniature } = props;

    // const [webcamList, setWebcamList] = useState(props.webcamList);
    // const [ipCamList, setIpCamList] = useState([]);
    // const [youtubeList, setYoutubeList] = useState([]);
    // const [twitchList, setTwitchList] = useState([]);
    // const [localVidsList, setLocalVidsList] = useState([]);

    //My Miniature update along with Miguel's Miniature update
    const smartUpdateWebCam = (src, key, el) => {
        changeMinVid(3, src, el)
        toggleMiniature("webcam",key,src.inUse)
        //toggleMiniature.bind("webcam",key,src.inUse)
    }

    const youtubeUpdate = (type, key, inUse) =>{
        toggleMiniature(type,key,inUse)
    }

    return (
        <>
            <h3 className="mainDesc">Playlists</h3>
            <div className="playlist-area">
                <Accordion>
                    <Card>
                        <Accordion.Toggle as={Card.Header} eventKey="0">
                            WebCams
                        </Accordion.Toggle>
                        {props.webcamList.map((source, key) => {
                            return (
                                <Accordion.Collapse eventKey="0" name={source.name}>
                                    <Card.Body  onClick={smartUpdateWebCam.bind(this, source, key)}>
                                        {source.name}
                                        <div className="plActBtn">
                                            <i className="fa fa-chevron-right"></i>
                                        </div>
                                    </Card.Body>
                                </Accordion.Collapse>
                            );
                        })}
                    </Card>
                    <Card>
                        <Accordion.Toggle as={Card.Header} eventKey="1">
                            IPcams
                        </Accordion.Toggle>
                        {props.ipCamList.map((source, key) => {
                            return (
                                <Accordion.Collapse eventKey="1" name={source.name}>
                                    {/* <Card.Body onClick={changeMinVid.bind(this, 1, source)}>{source.name}</Card.Body> */}
                                    <Card.Body onClick={toggleMiniature.bind(this, "ipCam",key,source.inUse)}>{source.name}</Card.Body>
                                </Accordion.Collapse>
                            );
                        })}
                    </Card>
                    <Card>
                        <Accordion.Toggle as={Card.Header} eventKey="2">
                            Youtube
                        </Accordion.Toggle>
                        {props.youtubeList.map((source, key) => {
                            return (
                                <Accordion.Collapse eventKey="2" name={source.name}>
                                    {/* <Card.Body onClick={changeMinVid.bind(this, 2, source)}>{source.name}</Card.Body> */}
                                    <Card.Body onClick={youtubeUpdate.bind(this, "youtube",key,source.inUse)}>{source.name}</Card.Body>
                                </Accordion.Collapse>
                            );
                        })}
                    </Card>
                    <Card>
                        <Accordion.Toggle as={Card.Header} eventKey="3">
                            Twitch
                        </Accordion.Toggle>
                        {props.twitchList.map((source, key) => {
                            return (
                                <Accordion.Collapse eventKey="3" name={source.name}>
                                    {/* <Card.Body onClick={changeMinVid.bind(this, 0, source)}>{source.name}</Card.Body> */}
                                    <Card.Body onClick={toggleMiniature.bind(this, "twitch",key,source.inUse)}>{source.name}</Card.Body>
                                </Accordion.Collapse>
                            );
                        })}
                    </Card>
                    <Card>
                        <Accordion.Toggle as={Card.Header} eventKey="4">
                            Local
                        </Accordion.Toggle>
                        {props.localVidsList.map((source, key) => {
                            return (
                                <Accordion.Collapse eventKey="4" name={source.name}>
                                    {/* <Card.Body onClick={changeMinVid.bind(this, 4, source)}>{source.name}</Card.Body> */}
                                    <Card.Body onClick={toggleMiniature.bind(this, "local",key,source.inUse)}>{source.name}</Card.Body>
                                </Accordion.Collapse>
                            );
                        })}
                    </Card>
                </Accordion>
            </div>
        </>
    );
}
