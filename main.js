import { app, BrowserWindow } from 'electron';
function createWindow() {
    const win = new BrowserWindow({
        width: 800,
        height: 600,
        // frame: false
    });

    win.loadURL('http://localhost:5173'); // Vite app runs on port 5173
}

app.whenReady().then(createWindow);

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit();
    }
});

app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
        createWindow();
    }
});
