// We will create a window with 3 buttons
var dlg = new Window("dialog", "Alert Box Builder");
btnPnl = dlg.add("panel", undefined, "Build it");
cancelBtn = btnPnl.add("button", undefined, "Cancel", {name: "cancel"}); 

dlg.show();