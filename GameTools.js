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

Image.prototype.onDraw = function()
{ 
  // written by Marc Autret
  // "this" is the container; "this.image" is the graphic
  if( !this.image ) return;
  var WH = this.size,
  wh = this.image.size,
  k = Math.min(WH[0]/wh[0], WH[1]/wh[1]), 
  xy;
  // Resize proportionally:
  wh = [k*wh[0],k*wh[1]];
  // Center:
  xy = [ (WH[0]-wh[0])/2, (WH[1]-wh[1])/2 ];
  this.graphics.drawImage(this.image,xy[0],xy[1],wh[0],wh[1]);
  WH = wh = xy = null;
}

// DLG
// ===
var dlg = new Window("palette"); 
    dlg.text = "Game Development Tools"; 
    dlg.orientation = "column"; 
    dlg.alignChildren = ["center","top"]; 
    dlg.spacing = 10; 
    dlg.margins = 16; 

    var imageFile = new File(File.encode('C:/Users/toa_l/Pictures/ahit6.png'));
    var lodImg = dlg.add("image", undefined, imageFile, {name: "lodImg"}); 
        lodImg.size=[150,150];

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
    lodSldr.value = i + 1; 
    lodSldr.alignment = ["center","top"]; 
    // lodSldr.preferredSize.width = 300; 

var lodTxt = lodPnl.add("statictext", undefined, undefined, {name: "lodTxt"}); 
    lodTxt.alignment = ["center","top"]; 
    lodTxt.text = (i + 1).toString(); 

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

  var newHeight = originalHeight;
  var newWidth = originalWidth;

  if (lodSldr.value != i + 1)
  {
    newHeight = Math.pow(2, i);
    newWidth = Math.pow(2, i);
  }

  doc.resizeImage(newWidth, newHeight);

  var name = app.activeDocument.artLayers[0].name;
  var file = new File(doc.path + '/' + doc.name + "_" + lodSldr.value.toString() + ".png");
  var opts = new PNGSaveOptions();
  opts.quality = lodSldr.value;
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
