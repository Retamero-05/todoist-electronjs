const { app, BrowserWindow } = require("electron");

const path = require("path");

require("electron-reload")(__dirname, {
    electron: path.join(__dirname, "node_modules", ".bin", "electron"),
});

const createWindow = () => {
    const win = new BrowserWindow({
        width: 1000,
        height: 900,
        icon: `${__dirname}/assets/icon.png`,
    });

    win.loadFile("index.html");
};

app.whenReady().then(() => {
    createWindow();
});