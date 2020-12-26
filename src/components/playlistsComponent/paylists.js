import React, { useState, useEffect } from "react";
import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

import "./playlists.css";

export default function Playslists(props) {
    const { toggleMiniature, setIpCamList, ipCamList, setTwitchList, twitchList, setYoutubeList, youtubeList, localVidsList, setLocalVidsList } = props;

    const [modalState, setModalState] = useState({
        Ipcam: false,
        Twitch: false,
        Youtube: false,
        Local: false
    });

    const changeIcon = (src, IO, el) => {
        try {
            if (src.inUse) {
                if (IO === "in") {
                    el.currentTarget.children[0].children[0].className = "fa fa-minus";
                } else {
                    el.currentTarget.children[0].children[0].className = "fa fa-check";
                }
            } else {
                el.currentTarget.children[0].children[0].className = "fa fa-chevron-right";
            }
        } catch (err) {
            console.log(err);
        }
    };

    const openModal = (modalName, el) => {
        const newState = { ...modalState };
        newState[modalName] = true;

        setModalState({ ...newState });
    };

    const closeModal = (modalName, el) => {
        const newState = { ...modalState };
        newState[modalName] = false;

        setModalState({ ...newState });
    };

    const addIpCam = (event) => {
        event.preventDefault();
        const arr = [...ipCamList];

        arr.push({
            name: event.currentTarget.formBasicName.value,
            desc: `${event.currentTarget.formBasicIpAddress.value}/video`,
            type: "ipCam",
            inUse: false
        });

        console.log(arr);
        setIpCamList(arr);
        closeModal("Ipcam");
    };

    const addTwitchSource = (event) => {
        event.preventDefault();
        const arr = [...twitchList];

        arr.push({
            name: event.currentTarget.formBasicName.value,
            desc: `${event.currentTarget.formBasicTwitchId.value}`,
            type: "twitch",
            inUse: false
        });

        setTwitchList(arr);
        closeModal("Twitch");
    };

    const addYoutubeSource = (event) => {
      event.preventDefault();
      const arr = [...youtubeList];

      arr.push({
          name: event.currentTarget.formBasicName.value,
          desc: `${event.currentTarget.formBasicUrl.value}`,
          type: "youtube",
          inUse: false
      });

      setYoutubeList(arr);
      closeModal("Youtube");
  };

  const addLocalSource = (event) => {
    event.preventDefault();
    const arr = [...localVidsList];

    console.log(URL.createObjectURL(event.target[1].files[0]));
    console.log(event);

    arr.push({
        name: event.currentTarget.formBasicName.value,
        desc: URL.createObjectURL(event.target[1].files[0]),
        type: "local",
        inUse: false
    });

    setLocalVidsList(arr);
    closeModal("Local");
};

    return (
        <>
            <h3 className="mainDesc">Playlists</h3>
            <div className="playlist-area">
                <Accordion>
                    <Card>
                        <Accordion.Toggle as={Card.Header} eventKey="0">
                            WebCams
                        </Accordion.Toggle>
                        {props.webcamList.map((source, key) => {
                            return (
                                <Accordion.Collapse key={key} eventKey="0" name={source.name}>
                                    <Card.Body
                                        onClick={toggleMiniature.bind(this, "webcam", key, source.inUse)}
                                        onMouseEnter={changeIcon.bind(this, source, "in")}
                                        onMouseLeave={changeIcon.bind(this, source, "out")}
                                    >
                                        {source.name}
                                        <div className="plActBtn">
                                            <i className="fa fa-chevron-right"></i>
                                        </div>
                                    </Card.Body>
                                </Accordion.Collapse>
                            );
                        })}
                    </Card>
                    <Card>
                        <Accordion.Toggle as={Card.Header} eventKey="1">
                            <span class="playlist_title">IPcams</span>
                            <div class="playlist_addBtn">
                                <button class="addButton" onClick={openModal.bind(this, "Ipcam")}>
                                    <i className="fa fa-plus"></i>
                                </button>
                            </div>
                        </Accordion.Toggle>
                        {props.ipCamList.map((source, key) => {
                            return (
                                <Accordion.Collapse key={key} eventKey="1" name={source.name}>
                                    {/* <Card.Body onClick={changeMinVid.bind(this, 1, source)}>{source.name}</Card.Body> */}
                                    <Card.Body
                                        onClick={toggleMiniature.bind(this, "ipCam", key, source.inUse)}
                                        onMouseEnter={changeIcon.bind(this, source, "in")}
                                        onMouseLeave={changeIcon.bind(this, source, "out")}
                                    >
                                        {source.name}
                                        <div className="plActBtn">
                                            <i className="fa fa-chevron-right"></i>
                                        </div>
                                    </Card.Body>
                                </Accordion.Collapse>
                            );
                        })}
                    </Card>
                    <Card>
                        <Accordion.Toggle as={Card.Header} eventKey="2">
                            <span class="playlist_title">Youtube</span>
                            <div class="playlist_addBtn">
                                <button class="addButton" onClick={openModal.bind(this, "Youtube")}>
                                    <i className="fa fa-plus"></i>
                                </button>
                            </div>
                        </Accordion.Toggle>
                        {props.youtubeList.map((source, key) => {
                            return (
                                <Accordion.Collapse key={key} eventKey="2" name={source.name}>
                                    {/* <Card.Body onClick={changeMinVid.bind(this, 2, source)}>{source.name}</Card.Body> */}
                                    <Card.Body
                                        onClick={toggleMiniature.bind(this, "youtube", key, source.inUse)}
                                        onMouseEnter={changeIcon.bind(this, source, "in")}
                                        onMouseLeave={changeIcon.bind(this, source, "out")}
                                    >
                                        {source.name}
                                        <div className="plActBtn">
                                            <i className="fa fa-chevron-right"></i>
                                        </div>
                                    </Card.Body>
                                </Accordion.Collapse>
                            );
                        })}
                    </Card>
                    <Card>
                        <Accordion.Toggle as={Card.Header} eventKey="3">
                            <span class="playlist_title">Twitch</span>
                            <div class="playlist_addBtn">
                                <button class="addButton" onClick={openModal.bind(this, "Twitch")}>
                                    <i className="fa fa-plus"></i>
                                </button>
                            </div>
                        </Accordion.Toggle>
                        {props.twitchList.map((source, key) => {
                            return (
                                <Accordion.Collapse key={key} eventKey="3" name={source.name}>
                                    {/* <Card.Body onClick={changeMinVid.bind(this, 0, source)}>{source.name}</Card.Body> */}
                                    <Card.Body
                                        onClick={toggleMiniature.bind(this, "twitch", key, source.inUse)}
                                        onMouseEnter={changeIcon.bind(this, source, "in")}
                                        onMouseLeave={changeIcon.bind(this, source, "out")}
                                    >
                                        {source.name}
                                        <div className="plActBtn">
                                            <i className="fa fa-chevron-right"></i>
                                        </div>
                                    </Card.Body>
                                </Accordion.Collapse>
                            );
                        })}
                    </Card>
                    <Card>
                        <Accordion.Toggle as={Card.Header} eventKey="4">
                            <span class="playlist_title">Local</span>
                            <div class="playlist_addBtn">
                                <button class="addButton" onClick={openModal.bind(this, "Local")}>
                                    <i className="fa fa-plus"></i>
                                </button>
                            </div>
                        </Accordion.Toggle>
                        {props.localVidsList.map((source, key) => {
                            return (
                                <Accordion.Collapse key={key} eventKey="4" name={source.name}>
                                    {/* <Card.Body onClick={changeMinVid.bind(this, 4, source)}>{source.name}</Card.Body> */}
                                    <Card.Body
                                        onClick={toggleMiniature.bind(this, "local", key, source.inUse)}
                                        onMouseEnter={changeIcon.bind(this, source, "in")}
                                        onMouseLeave={changeIcon.bind(this, source, "out")}
                                    >
                                        {source.name}
                                        <div className="plActBtn">
                                            <i className="fa fa-chevron-right"></i>
                                        </div>
                                    </Card.Body>
                                </Accordion.Collapse>
                            );
                        })}
                    </Card>
                </Accordion>
            </div>
            <Modal show={modalState.Ipcam} onHide={closeModal.bind(this, "Ipcam")}>
                <Modal.Header closeButton>
                    <Modal.Title>Add new Ipcam source</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form onSubmit={addIpCam}>
                        <Form.Group controlId="formBasicName">
                            <Form.Label>Name</Form.Label>
                            <Form.Control type="text" placeholder="Enter Name" required/>
                            <Form.Text className="text-muted">Add name for Ipcam</Form.Text>
                        </Form.Group>
                        <Form.Group controlId="formBasicIpAddress">
                            <Form.Label>IpAddress</Form.Label>
                            <Form.Control type="text" placeholder="Enter Ip address" required/>
                            <Form.Text className="text-muted">Add IP address for Ipcam</Form.Text>
                        </Form.Group>
                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={closeModal.bind(this, "Ipcam")}>Close</Button>
                </Modal.Footer>
            </Modal>
            <Modal show={modalState.Twitch} onHide={closeModal.bind(this, "Twitch")}>
                <Modal.Header closeButton>
                    <Modal.Title>Add new Twitch source</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form onSubmit={addTwitchSource}>
                        <Form.Group controlId="formBasicName">
                            <Form.Label>Name</Form.Label>
                            <Form.Control type="text" placeholder="Enter Name" required/>
                            <Form.Text className="text-muted">Add name for Twitch source</Form.Text>
                        </Form.Group>
                        <Form.Group controlId="formBasicTwitchId">
                            <Form.Label>Twitch Id</Form.Label>
                            <Form.Control type="text" placeholder="Enter Twitch Id" required/>
                            <Form.Text className="text-muted">Add Id for Twitch source</Form.Text>
                        </Form.Group>
                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={closeModal.bind(this, "Twitch")}>Close</Button>
                </Modal.Footer>
            </Modal>
            <Modal show={modalState.Youtube} onHide={closeModal.bind(this, "Youtube")}>
                <Modal.Header closeButton>
                    <Modal.Title>Add new Youtube source</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form onSubmit={addYoutubeSource}>
                        <Form.Group controlId="formBasicName">
                            <Form.Label>Name</Form.Label>
                            <Form.Control type="text" placeholder="Enter Name" required />
                            <Form.Text className="text-muted">Add name for Youtube source</Form.Text>
                        </Form.Group>
                        <Form.Group controlId="formBasicUrl">
                            <Form.Label>Youtube URL</Form.Label>
                            <Form.Control type="text" placeholder="Enter Youtube URL" required/>
                            <Form.Text className="text-muted">Add URL</Form.Text>
                        </Form.Group>
                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={closeModal.bind(this, "Youtube")}>Close</Button>
                </Modal.Footer>
            </Modal>
            <Modal show={modalState.Local} onHide={closeModal.bind(this, "Local")}>
                <Modal.Header closeButton>
                    <Modal.Title>Add new Local source</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form onSubmit={addLocalSource}>
                        <Form.Group controlId="formBasicName">
                            <Form.Label>Name</Form.Label>
                            <Form.Control type="text" placeholder="Enter Name" required />
                            <Form.Text className="text-muted">Add name for Local source</Form.Text>
                        </Form.Group>
                        <Form.Group controlId="formBasicVideoSource">
                            <Form.Label>Youtube URL</Form.Label>
                            <Form.File type="text" placeholder="Enter Youtube URL" required/>
                            <Form.Text className="text-muted">Add URL</Form.Text>
                        </Form.Group>
                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={closeModal.bind(this, "Youtube")}>Close</Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}
