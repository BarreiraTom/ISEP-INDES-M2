import React from "react";

import { Mirror } from 'react-mirror';
import '../resources/css/index.css';

export default function Page(props) {
    const [reflect, setReflect] = React.useState(null);
    
    return (
        <>  
            <div ref={setReflect}> <Mirror reflect={reflect} className='mirror-frame'/></div>
           
        </>
    );
}
