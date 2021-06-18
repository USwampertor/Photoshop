var docHeight = app.activeDocument.width;
var docWidth = app.activeDocument.height;

var squared = 2;
var i = 0;
// This to get the nearest squared value
do
{
  squared = Math.pow(2, i);
  ++i;
}while (squared < docHeight || squared < docWidth)

squared = Math.pow(2, i - 1);

// DLG
// ===
var dlg = new Window("palette"); 
    dlg.text = "Game Development Tools"; 
    dlg.orientation = "column"; 
    dlg.alignChildren = ["center","top"]; 
    dlg.spacing = 10; 
    dlg.margins = 16; 

// COMPRESSPNL
// ===========
var compressPnl = dlg.add("panel", undefined, undefined, {name: "compressPnl"}); 
    compressPnl.text = "Compress Settings"; 
    // compressPnl.preferredSize.width = 600; 
    compressPnl.orientation = "column"; 
    compressPnl.alignChildren = ["center","top"]; 
    compressPnl.spacing = 10;
    compressPnl.margins = 10;

var compressTxt = compressPnl.add("statictext", undefined, undefined, {name: "compressTxt"}); 
    compressTxt.text = "Compress Loading and Saving"; 
    compressTxt.alignment = ["center","top"]; 

var loadBtn = compressPnl.add("button", undefined, undefined, {name: "loadBtn"}); 
    loadBtn.text = "Load"; 
    loadBtn.alignment = ["center","top"]; 

var compressBtn = compressPnl.add("button", undefined, undefined, {name: "compressBtn"}); 
    compressBtn.text = "Compress and Save"; 
    compressBtn.alignment = ["center","top"]; 

// LODPNL
// ======
var lodPnl = dlg.add("panel", undefined, undefined, {name: "lodPnl"}); 
    lodPnl.text = "LOD Settings"; 
    lodPnl.orientation = "column"; 
    lodPnl.alignChildren = ["center","top"]; 
    lodPnl.spacing = 10; 
    lodPnl.margins = 10; 

var lodTitle = lodPnl.add("statictext", undefined, undefined, {name: "lodTitle"}); 
    lodTitle.text = "LOD Level"; 
    lodTitle.alignment = ["center","top"]; 

var lodSldr = lodPnl.add("slider", undefined, undefined, undefined, undefined, {name: "lodSldr"}); 
    lodSldr.minvalue = 0; 
    lodSldr.maxvalue = i + 1; 
    lodSldr.value = 0; 
    lodSldr.alignment = ["center","top"]; 
    // lodSldr.preferredSize.width = 300; 

var lodTxt = lodPnl.add("statictext", undefined, undefined, {name: "lodTxt"}); 
    lodTxt.alignment = ["center","top"]; 
    lodTxt.text = "0"; 

var prvTitle = lodPnl.add("statictext", undefined, undefined, {name: "prvTitle"}); 
    prvTitle.alignment = ["center","top"]; 
    prvTitle.text = "Preview Image"; 

// SETTINGS
// =====

var settingsPnl = dlg.add("panel", undefined, undefined, {name: "settingsPnl"});
    settingsPnl.text = "General Settings"; 
    settingsPnl.orientation = "column"; 
    settingsPnl.alignChildren = ["center","top"]; 
    settingsPnl.spacing = 10; 
    settingsPnl.margins = 10; 

var closeBtn = settingsPnl.add("button", undefined,  undefined, {name: "compressBtn"})
    closeBtn.alignment = ["center","top"]; 
    closeBtn.text = "Close";

// var lodImg = lodPnl.add("image", undefined, File.decode(lodImg_imgString), {name: "lodImg"}); 

lodSldr.onChanging = function() {
  lodSldr.value = Math.round(this.value.toFixed(0));
  lodTxt.text = this.value.toFixed(0);
};

lodTxt.addEventListener("keyup", function(event) {
  if (event.keyCode === 13) {
    lodSldr.value = Math.round(parseInt(this.text));
    lodTxt.text = this.value.toFixed(0);
  }
});

compressBtn.onClick = function() {
  var doc = app.activeDocument;

  var originalWidth = doc.width;
  var originalHeight = doc.height;

  var name = app.activeDocument.artLayers[0].name;
  var file = new File(doc.path + '/' + name + "_" + lodSldr.value.toString() + ".png");
  var opts = new PNGSaveOptions();
  opts.quality = lodSldr.value;
  alert(lodSldr.value);
  doc.saveAs(file, opts, true);
}

// TO KEEP THIS ALIVE
// =====

//sentinel variable
var isDone, s2t, waitForRedraw;

isDone = false;

closeBtn.onClick = function() {
  return isDone = true;
};

dlg.onClose = function() {
  return isDone = true;
};


s2t = function(stringID) {
  return app.stringIDToTypeID(stringID);
};

waitForRedraw = function() {
  var d;
  d = new ActionDescriptor();
  d.putEnumerated(s2t('state'), s2t('state'), s2t('redrawComplete'));
  return executeAction(s2t('wait'), d, DialogModes.NO);
};





dlg.show();

while (isDone === false) {
  app.refresh(); // or, alternatively, waitForRedraw();
}
