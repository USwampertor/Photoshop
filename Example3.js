// We will create a window with 3 buttons
var dlg = new Window("dialog", "Alert Box Builder");
var btnPnl = dlg.add("panel", undefined, "Build it");
var cancelBtn = btnPnl.add("button", undefined, "Cancel", {name: "cancel"}); 
var buildBtn = btnPnl.add( "button", undefined, "Build", {name: "ok" } );


dlg.show();