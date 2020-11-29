import React, { useState, useEffect } from 'react';

import './mainVid.css';
import SrcVideo from '../miniatureVid/sourceVid/sourceVid';

export default function mainVid(props) {

    const testSrc = {
        id: "1",
        name: "rainbow6",
        desc: "rainbow6",
        type: "twitch"
    }

    return (
        <>
            <h3 className="mainDesc">{testSrc.name}</h3>
            <div className="mainVideo">
                <SrcVideo source={testSrc}/>
            </div>
        </>
    );
}