import React, { useState, useEffect } from 'react';

import './actionButton.css';

export default function ActionButton(props) {

    const setMiniDisabled = (element) => {
        element.preventDefault();
        props.setMiniatureDisabled(!props.miniatureDisabled);
    };

    return (
        <>
            <button onClick={setMiniDisabled.bind(this)}>Run Playlists</button>
            
        </>
    );
}