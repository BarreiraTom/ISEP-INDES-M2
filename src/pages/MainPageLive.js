import React from "react";
import ReactDOM from "react-dom";

import { Mirror } from 'react-mirror';
import '../resources/css/index.css';

export default function Page(props) {
    const [reflect, setReflect] = React.useState(null);
    
    return (
        <>  
            <div ref={setReflect}></div> 
            <Mirror reflect={reflect} className='Frame'/>
           
        </>
    );
}