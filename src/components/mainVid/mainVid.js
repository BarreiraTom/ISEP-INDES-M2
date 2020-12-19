import React, { useState, useEffect } from 'react';
import { useMirror } from 'react-mirror';

import './mainVid.css';
import SrcVideo from '../sourceVid/sourceVid';

export default function MainVid(props) {
    //MIRROR IN DEBUG (it doesn't want to work)
    const [ref, reflection] = useMirror({ className: 'mirror-frame' });

    const [mainSource, setMainSource] = useState(props.mainSource);
    const component = "mainVid";

    //Toggle for Sleep mode
    useEffect(()=>{
        if (props.miniatureDisabled){
            setMainSource({name:"Playlist Active (Sleep Mode)",type: "sleep"});
        }else{
            setMainSource(props.mainSource);
        }
    },[props.miniatureDisabled, props.mainSource]);

    //Auto update to change the Live video if the selected source gets changed (LEGACY SOURCES)
    useEffect(() => {
        const changedSrc= props.sources.filter(({ type }) => type === mainSource.type);
        console.log(changedSrc);
        if(changedSrc.length>0){setMainSource(...changedSrc)}
    }, [props.sources])

    return (
        <>
            {mainSource.name ? (<h3 className="mainDesc">{mainSource.name}</h3>) : (<h3 className="mainDesc">No Display selected</h3>) }
            <div ref={ref} className="mainVideo">
                <SrcVideo source={mainSource} parentComp={component}/>
            </div>
        </>
    );
}