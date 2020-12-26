const electron = require("electron");
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;
const path = require("path");
const isDev = require("electron-is-dev");

let mainWindow;
let liveWindow;

//Main Window
function createMainWindow(){
    mainWindow = new BrowserWindow({
        width: 1270, 
        height: 800,
        webPreferences: {
            nativeWindowOpen:true
        }
    });
    mainWindow.loadURL(
        isDev
        ? 'http://localhost:3000?main'
        : `file://${path.join(__dirname, '../build/index.html?main')}`
    );

    mainWindow.on("closed", () => {mainWindow = null; liveWindow = null});
    
}

//Live Preview Window - NOT USED
function createLiveWindow(){
    liveWindow = new BrowserWindow({
        width: 400, 
        height: 300,
    });
    liveWindow.loadURL(
        isDev
        ? 'http://localhost:3000?Live'
        : `file://${path.join(__dirname, '../build/index.html?Live')}`
    );
    
    liveWindow.on("closed", () => {liveWindow = null});
}

app.on("ready", createMainWindow);

app.on("window-all-closed", () => {
    if (process.platform !== "darwin") {
        app.quit();
    }
});
app.on("activate", () => {
    if (mainWindow === null) {
        createMainWindow();
    }
});