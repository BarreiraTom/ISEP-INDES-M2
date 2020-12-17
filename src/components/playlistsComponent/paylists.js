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

    const changeSources = props.changeSources;
/* 
    const changeTwitchMinSource = (e) => {
        console.log(e.target.id);
        sources[0].name = e.target.id;
        sources[0].desc = e.target.id;
    } */

    return (
        <>
            <h3 className="mainDesc">Playlists</h3>
            <div className="playlist-area">
                <Accordion>
                    <Card>
                        <Accordion.Toggle as={Card.Header} eventKey="0">
                            Youtube
                        </Accordion.Toggle>
                        <Accordion.Collapse eventKey="0" as={Button}>
                            <Card.Body>Hello! I'm the body</Card.Body>
                        </Accordion.Collapse>
                    </Card>
                    <Card>
                        <Accordion.Toggle as={Card.Header} eventKey="1">
                            Twitch
                        </Accordion.Toggle>
                        {twitchSources.map((source, key) => {
                            return (
                                <Accordion.Collapse eventKey="1" name={source.name}>
                                    <Card.Body onClick={changeSources.bind(this, 0, source )} id={source.name}>{source.name}</Card.Body>
                                </Accordion.Collapse>
                            );
                        })}
                    </Card>
                </Accordion>
            </div>
        </>
    );
}
