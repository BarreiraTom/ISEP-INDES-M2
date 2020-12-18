import React, { useState, useEffect } from "react";
import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

import "./playlists.css";

export default function Playslists(props) {
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
        },
        {
            name: "lindinho",
            desc: "https://www.youtube.com/watch?v=VG4YEDBYruo"
        }
    ]);

    const { changeMinVid } = props;

    return (
        <>
            <h3 className="mainDesc">Playlists</h3>
            <div className="playlist-area">
                <Accordion>
                    <Card>
                        <Accordion.Toggle as={Card.Header} eventKey="0">
                            Youtube
                        </Accordion.Toggle>
                        {youtubeSources.map((source, key) => {
                            return (
                                <Accordion.Collapse eventKey="0" name={source.name}>
                                    <Card.Body onClick={changeMinVid.bind(this, 2, source)}>{source.name}</Card.Body>
                                </Accordion.Collapse>
                            );
                        })}
                    </Card>
                    <Card>
                        <Accordion.Toggle as={Card.Header} eventKey="1">
                            Twitch
                        </Accordion.Toggle>
                        {twitchSources.map((source, key) => {
                            return (
                                <Accordion.Collapse eventKey="1" name={source.name}>
                                    <Card.Body onClick={changeMinVid.bind(this, 0, source)}>{source.name}</Card.Body>
                                </Accordion.Collapse>
                            );
                        })}
                    </Card>
                </Accordion>
            </div>
        </>
    );
}
