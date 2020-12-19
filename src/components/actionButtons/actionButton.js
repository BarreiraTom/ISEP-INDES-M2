import React, { useState, useEffect } from "react";

import "./actionButton.css";

export default function ActionButton(props) {
  const setMiniDisabled = (element) => {
    element.preventDefault();
    props.setMiniatureDisabled(!props.miniatureDisabled);
  };

  const submitLiveLogo = async (event) => {
    if (event.target.files && event.target.files[0]) {
      let img = event.target.files[0];
      await props.setLiveLogo(URL.createObjectURL(img));
    }
  };

  return (
    <div className="actionBtns">
      <button className="playListBtn" onClick={setMiniDisabled.bind(this)}>
        {props.miniatureDisabled ? "Deactivate Playlist" : "Activate Playlist"}
      </button>
      <div class="upload-btn-wrapper playListBtn">
        <button>Live Preview Logo Submition</button>
        <input type="file" name="myfile" accept="image/*" onChange={submitLiveLogo.bind(this)} />
      </div>
    </div>
  );
}
