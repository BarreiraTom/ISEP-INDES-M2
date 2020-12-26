import React from 'react';
import ReactDOM from "react-dom";

import "../resources/css/index.css";

export default function MainPageLive(props) {

  const portalWindow = React.useMemo(() => {
    const _window = window.open(
        "",
        "_blank",
        "width=1280,height=720"
    );

    if(!_window) return;
    _window.onbeforeunload = props.onClose;
    if (!props.main) return
    return _window;
  }, [props.onClose])

  // const portal = React.useMemo(() => {
  //     if (!portalWindow.document.body) return null;
  //     return ReactDOM.createPortal(props.children, portalWindow.document.body);
  // }, [props.children, portalWindow]);
  //return portal;
  if (!props.main) return;

  props.main = false;
  return portalWindow;
}
