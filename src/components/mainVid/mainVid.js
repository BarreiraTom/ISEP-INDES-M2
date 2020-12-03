import React, { useState, useEffect } from 'react';

import './mainVid.css';
import SrcVideo from './sourceVid/sourceVid';

export default function mainVid(props) {

    const testSrc = {
        id: "1",
        name: "rainbow6",
        desc: "rainbow6",
        type: "twitch"
    }

    // const testSrc = {
    //     id: "1",
    //     name: "ipCam",
    //     desc: "192.168.1.2:4747/video",
    //     type: "ipCam"
    // }

    return (
        <>
            {testSrc.name ? (<h3 className="mainDesc">{testSrc.name}</h3>) : (<></>) }
            <div className="mainVideo">
                <SrcVideo source={testSrc}/>
            </div>
        </>
    );
}