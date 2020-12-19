# React-INDES

##INDES-Broadcaster React App

###1. Overview
This app was developed in Javascript/NodeJs with the help of the React library.

It is able to access many pre-recorded video and live video stream and display them in a Main screen to be streamed with a 3rd party application.

###2. Current Status (Entrega Intermédia)

#####DONE:

- Multiple sources list can be added collectively to the miniature videos;
- Multiple miniature video sources can be selected singularly for the "Live preview".
- "Activate Playlist" (Sleep mode) Button
- Live Preview Logo

#####TODO:

- "Live preview" button to open a Live Preview ALONE in a page to be used by a 3rd party Application
- "Add sources" button for the user to add new sources to a playlists

###3. Instructions

- To install the App it's necessary to run the latest version of the INDES-Broadcaster Application in the "/dist" directory.

    ```
    INDES-Broadcaster Setup 1.0.0.exe
    ```

    The application will open automatically.

.
- To test the application it's necessary to run one of two commands in a terminal opened in the root of the project directory.
(Requirements: run "npm install" before the next command)
    ```shell
    In the browser:
    - npm run react-start

    In the native app:
    - npm run start
    ```

- To build the application (for the Install and usage) it's necessary to run one command in a terminal opened in the root of the project directory.
(Requirements: run "npm install" and "npm install --global yarn" before the next command)
    ```shell
    - npm run build
    ```
