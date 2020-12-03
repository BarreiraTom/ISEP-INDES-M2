import React, { useState, useEffect } from 'react';

import './mainVid.css';
import SrcVideo from './sourceVid/sourceVid';

export default function MainVid(props) {

    const [mainSource, setMainSource] = useState(props.mainSource);

    useEffect(()=>{
        setMainSource(props.mainSource);
    });

    return (
        <>
            {mainSource.name ? (<h3 className="mainDesc">{mainSource.name}</h3>) : (<h3 className="mainDesc">{mainSource.desc}</h3>) }
            <div className="mainVideo">
                <SrcVideo source={mainSource}/>
            </div>
        </>
    );
}