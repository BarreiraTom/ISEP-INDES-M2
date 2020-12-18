import React, { useState, useEffect } from 'react';

import './actionButton.css';

export default function ActionButton(props) {

    const setMiniDisabled = (element) => {
        element.preventDefault();
        props.setMiniatureDisabled(!props.miniatureDisabled);
    };

    return (
        <div className="actionBtns">
            <button className="playListBtn" onClick={setMiniDisabled.bind(this)}>{props.miniatureDisabled ? ("Deactivate Playlist") : ("Activate Playlist")}</button>
        </div>
    );
}