import React, { useState, useEffect } from "react";

import "./miniatureVid.css";
import ScrVideo from "../sourceVid/sourceVid";

export default function MiniatureVid(props) {
    const [sources, setSources] = useState(props.sources);
    const component = "miniature";

    useEffect(() => {
        setSources(props.sources);
    }, [props.sources]);

    return (
        <div id="miniVids">
            {props.MiniDisabled ? <div className="MiniDisabled">Miniatures Disabled</div> : <></>}
            <div id="miniSources">
                {sources.map((src, key) => {
                    return (
                        <div className="miniStream" key={key} onClick={props.changeLiveVid.bind(this, src)}>
                            <div className={"miniatureVid" + (props.mainSource === src ? " active" : "")}>
                                <div className="screenBlock"></div>
                                <ScrVideo source={src} parentComp={component} />
                            </div>
                            <h3 className="miniatureDesc">{src.name ? src.name : ""}</h3>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
