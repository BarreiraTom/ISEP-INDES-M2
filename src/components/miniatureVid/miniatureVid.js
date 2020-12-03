import React, { useState, useEffect } from 'react';

import './miniatureVid.css';
import ScrVideo from './sourceVid/sourceVid';

export default function MiniatureVid(props) {

    const [sources, setSources] = useState([...props.sources,{type:"none"}]);



    // useEffect(()=>{
    //     let tempSrcs = props.sources.map((src)=>{if (props.mainSource!=src){return src}});
    //     setSources([props.mainSource,...tempSrcs, {type:"none"}]);
    // })

    return (
        <div id="miniVids">
            <div id="miniSources">
                {sources.map((src, key) => {
                    return(
                        <div className="miniStream" key={key} onClick={props.changeLiveVid.bind(this,src)}>
                            <div className={"miniatureVid"+(props.mainSource==src ? " active" : "")}>
                                <div className="screenBlock"></div>
                                <ScrVideo source={src}/>
                            </div>
                            <h3 className="miniatureDesc">{src.name ? src.name : ""}</h3>
                        </div>
                    );
                })}
            </div>  
        </div>
    );
}