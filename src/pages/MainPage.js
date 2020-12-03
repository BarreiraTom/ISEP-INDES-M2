import React, { useState, useEffect } from 'react';

import MainVid from '../components/mainVid/mainVid'
import MiniatureVids from '../components/miniatureVid/miniatureVid'

export default function Page(props) {

  const [sources, setSources] = useState([{
      id: "1",
      name: "rocketleague",
      desc: "rocketleague",
      type: "twitch"
  },{
      id: "2",
      name: "ipCam",
      desc: "192.168.137.101:8080/video",
      type: "ipCam"
  },{
      id: "3",
      name: "Youtube-vid1",
      desc: "https://www.youtube.com/watch?v=LXb3EKWsInQ",
      type: "youtube"
  },{
    id:"4",
    name:"LocalCamera",
    desc:"VYRMPfKvZ2ogcK7tcVBgsbgwwGnastO3xo46",
    type:"webcam"
  }]);

  const [mainSource, setMainSource] = useState({
      type: "none"
  })

  const changeLiveVid = (src, el) =>{
        el.preventDefault();
        setMainSource(src);
  }

  return (
    <>
        <MainVid mainSource={mainSource}/>
        <MiniatureVids sources={sources} changeLiveVid={changeLiveVid} mainSource={mainSource}/>
    </>
  );
}
