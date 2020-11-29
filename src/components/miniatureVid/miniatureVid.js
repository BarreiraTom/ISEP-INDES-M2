import React, { useState, useEffect } from 'react';

import './miniatureVid.css';
import scrVideo from './sourceVid/sourceVid';

export default function miniatureVid(props) {

    const [sources, setSources] = useState(props.sources);

    setSources(...sources,{type:""})

    return (
        <div className="miniatureVid">
            {sources.map(src => {
                return(
                    <>
                        <scrVideo source={src}/>
                        <h3 className="miniatureDesc">{src.name}</h3>
                    </>
                );
            })}
        </div>
    );
}