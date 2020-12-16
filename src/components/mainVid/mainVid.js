import React, { useState, useEffect } from 'react';

import './mainVid.css';
import SrcVideo from '../sourceVid/sourceVid';

export default function MainVid(props) {

    const [mainSource, setMainSource] = useState(props.mainSource);
    const component = "mainVid";

    useEffect(()=>{
        if (props.miniatureDisabled){
            setMainSource({type: "sleep"});
        }else{
            setMainSource(props.mainSource);
        }
    },[props.miniatureDisabled]);

    return (
        <>
            {mainSource.name ? (<h3 className="mainDesc">{mainSource.name}</h3>) : (<h3 className="mainDesc">No Display selected</h3>) }
            <div className="mainVideo">
                <SrcVideo source={mainSource} parentComp={component}/>
            </div>
        </>
    );
}