import React, { useState, useEffect, useRef } from "react";
import ReactDOM from 'react-dom';
import { useMirror } from "react-mirror";

import "./mainVid.css";
import SrcVideo from "../sourceVid/sourceVid";

export default function MainVid(props) {
  const [mainSource, setMainSource] = useState(props.mainSource);
  const component = "mainVid";

  //Toggle for Sleep mode
  useEffect(() => {
    if (props.miniatureDisabled) {
      setMainSource({ name: "Playlist Active (Sleep Mode)", type: "sleep" });
    } else {
      setMainSource(props.mainSource);
    }
  }, [props.miniatureDisabled, props.mainSource]);

  //Auto update to change the Live video if the selected source gets changed (LEGACY SOURCES)
  useEffect(() => {
    
    if (props.sources.length === 0 && !props.miniatureDisabled) {
      setMainSource({ type: "none" });
    } else if (
      props.sources.indexOf(props.mainSource) === -1 &&
      !props.miniatureDisabled
    ) {
      props.setMainSource(props.sources[0]);
    }
  }, [props.sources]);

  return (
    <>  
      {mainSource.name ? (
        <h3 className="mainDesc">{mainSource.name}</h3>
      ) : (
        <h3 className="mainDesc">No Display selected</h3>
      )}
      <div className="mainVideo">
        <img src={props.liveLogo} className="liveLogo"/>
        <SrcVideo source={mainSource} parentComp={component} localVidsList={props.localVidsList} />
      </div>
    </>
  );
}
