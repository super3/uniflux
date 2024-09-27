const { app, BrowserWindow } = require('electron');
const path = require('path');

// Function to create the main application window
function createWindow() {
    // Create a new browser window with specified dimensions and settings
    const win = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            nodeIntegration: true
        }
    });

    // Load the index.html file into the window
    win.loadFile('index.html');
}

// Create a window when Electron has finished initializing
app.whenReady().then(createWindow);

// Quit the application when all windows are closed
app.on('window-all-closed', () => {
    app.quit();
});
