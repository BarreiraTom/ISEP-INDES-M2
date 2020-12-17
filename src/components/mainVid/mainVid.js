import React, { useState, useEffect } from 'react';
import { useMirror } from 'react-mirror';

import './mainVid.css';
import SrcVideo from '../sourceVid/sourceVid';

export default function MainVid(props) {

    const [ref, reflection] = useMirror({ className: 'mirror-frame' });

    const [mainSource, setMainSource] = useState(props.mainSource);
    const component = "mainVid";

    useEffect(()=>{
        if (props.miniatureDisabled){
            setMainSource({name:"Playlist Active (Sleep Mode)",type: "sleep"});
        }else{
            setMainSource(props.mainSource);
        }
    },[props.miniatureDisabled, props.mainSource]);

    return (
        <>
            {mainSource.name ? (<h3 className="mainDesc">{mainSource.name}</h3>) : (<h3 className="mainDesc">No Display selected</h3>) }
            <div ref={ref} className="mainVideo">
                <SrcVideo source={mainSource} parentComp={component}/>
            </div>
        </>
    );
}