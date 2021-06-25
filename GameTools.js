// Adobe
// @include 'LODSettings.js'

// ES5 
// import {foo, bar} from './LODSettings.js
// import * as FUNCTIONS from './LODSettings.js'

// ES6
// require('./LODSettings.js')

function LODSettings(w,h,s)
{
  this.docWidth   = w;
  this.docHeight  = h;
  this.squaredMax = s;
}

/**
 * Rescales the Image in the container
 * @returns null
 */
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

var g_doc;

var g_LOD = new LODSettings(0,0,0);

var g_dlg = new Window("palette");
var g_lodTxt;
var g_lodSldr;

/**
 * Main function of the script
 */
function main()
{
  // DLG
  // Loading the container
  g_LOD = new LODSettings(0,0,0);
  if (documents.length > 0)
  {
    g_LOD = setLODValues();
    g_doc = app.activeDocument;
  }
  
  var g_dlg = new Window("palette"); 
      g_dlg.text = "Game Development Tools"; 
      g_dlg.orientation = "column"; 
      g_dlg.alignChildren = ["center","top"]; 
      g_dlg.spacing = 10; 
      g_dlg.margins = 16; 

      var imageFile = new File(File.encode('D:/Users/toa_l/Documents/Universidad/Photoshop/icon.png'));
      var lodImg = g_dlg.add("image", undefined, imageFile, {name: "lodImg"}); 
          lodImg.size=[150,150];

  // COMPRESSPNL
  // Panel defined for the compression settings

  var compressPnl = g_dlg.add("panel", undefined, undefined, {name: "compressPnl"}); 
      compressPnl.text = "Compress Settings"; 
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

    var rechannelBtn = compressPnl.add("button", undefined, undefined, {name: "rechannelBtn"}); 
      rechannelBtn.text = "Rechannel and Save"; 
      rechannelBtn.alignment = ["center","top"];

  // LODPNL
  // Panel defined for the LOD settings

  var lodPnl = g_dlg.add("panel", undefined, undefined, {name: "lodPnl"}); 
      lodPnl.text = "LOD Settings"; 
      lodPnl.orientation = "column"; 
      lodPnl.alignChildren = ["center","top"]; 
      lodPnl.spacing = 10; 
      lodPnl.margins = 10; 

  var lodTitle = lodPnl.add("statictext", undefined, undefined, {name: "lodTitle"}); 
      lodTitle.text = "LOD Level"; 
      lodTitle.alignment = ["center","top"]; 

  g_lodSldr = lodPnl.add("slider", undefined, undefined, undefined, undefined, {name: "lodSldr"}); 

  g_lodSldr.minvalue = 0; 
  g_lodSldr.maxvalue = g_LOD.squaredMax + 1;
  g_lodSldr.value = g_LOD.squaredMax + 1; 
  g_lodSldr.alignment = ["center","top"]; 

  g_lodTxt = lodPnl.add("statictext", undefined, undefined, {name: "lodTxt"}); 
  g_lodTxt.alignment = ["center","top"]; 
  g_lodTxt.text = (g_LOD.squaredMax + 1).toString();

  var prvTitle = lodPnl.add("statictext", undefined, undefined, {name: "prvTitle"}); 
      prvTitle.alignment = ["center","top"]; 
      prvTitle.text = "Preview Image"; 

  // SETTINGS
  // General Settings

  var settingsPnl = g_dlg.add("panel", undefined, undefined, {name: "settingsPnl"});
      settingsPnl.text = "General Settings"; 
      settingsPnl.orientation = "column"; 
      settingsPnl.alignChildren = ["center","top"]; 
      settingsPnl.spacing = 10; 
      settingsPnl.margins = 10; 

  var reloadBtn = settingsPnl.add("button", undefined,  undefined, {name: "reloadBtn"})
      reloadBtn.alignment = ["center","top"]; 
      reloadBtn.text = "Reload Document";

  var closeBtn = settingsPnl.add("button", undefined,  undefined, {name: "compressBtn"})
      closeBtn.alignment = ["center","top"]; 
      closeBtn.text = "Close Toolkit";

  // Events

  g_lodSldr.onChanging = function() {
    g_lodSldr.value = Math.round(this.value.toFixed(0));
    g_lodTxt.text = this.value.toString();
  };

  g_lodTxt.addEventListener("keyup", function(event) {
    if (event.keyCode === 13) {
      g_lodSldr.value = Math.round(parseInt(this.text));
      g_lodTxt.text = this.value.toString();
    }
  });

  reloadBtn.onClick = function() {
    g_LOD = setLODValues();
    g_lodSldr.maxvalue = g_LOD.squaredMax + 1;
    g_lodSldr.value = g_LOD.squaredMax + 1; 
    g_lodTxt.text = g_LOD.squaredMax.toString();
  }

  compressBtn.onClick = function() {
    if(documents.length)
    {
      var doc = app.activeDocument;
      var savedState = app.activeDocument.activeHistoryState;
      var originalWidth = g_LOD.width;
      var originalHeight = g_LOD.height;
  
      var newWidth = originalWidth;
      var newHeight = originalHeight;
  
      if (g_lodSldr.value != g_LOD.squaredMax + 1)
      {
        newHeight = Math.pow(2, g_lodSldr.value);
        newWidth  = Math.pow(2, g_lodSldr.value);
      }
  
      doc.resizeImage(newWidth, newHeight);
  
      var file = new File(doc.path + '/' + doc.name + "_" + g_lodSldr.value.toString() + ".png");
      var opts = new PNGSaveOptions();
      opts.quality = g_lodSldr.value;
      doc.saveAs(file, opts, true);
      // doc.resizeImage(originalWidth, originalHeight);
      app.activeDocument.activeHistoryState = savedState;

    }

    else 
    {
      alert("There is no document open");
    }
  }


  rechannelBtn.onClick = function() {
    if (documents.length)
    {
      app.preferences.rulerUnits = Units.PIXELS;

      var doc = app.activeDocument;
      if (doc.mode == DocumentMode.RGB)
      {
        var selectedLayers = [
          doc.artLayers[1],
          doc.artLayers[2],
          doc.artLayers[3]
        ]
  
        for (var i = 0; i < selectedLayers.length; i++)
        {
          selectedLayers[i].visible = false;
        }
        
        var newLayer = doc.artLayers[0];
  
        fillColor = new SolidColor;
        fillColor.rgb.red = 0;
        fillColor.rgb.green = 0;
        fillColor.rgb.blue = 0;
        doc.selection.fill(fillColor);
        newLayer.visible = false;
  
        var iMax = selectedLayers.length < 3 ? selectedLayers.length : 3;
  
        for (var i = 0; i < iMax; i++)
        {
          doc.activeLayer = selectedLayers[i];
          doc.selection.selectAll();
          doc.selection.copy();  
          doc.selection.deselect();
          doc.activeLayer = newLayer;
          doc.activeChannels = [doc.channels[i]];
          doc.paste();
          selectedLayers[i].visible = false;
        }
  
        doc.selection.deselect();
      }
      doc.activeChannels = doc.componentChannels;
    }

    else 
    {
      alert("There is no document open");
    }
  }

  // TO KEEP THIS ALIVE
  // =====

  //sentinel variable
  var isDone, s2t, waitForRedraw;

  isDone = false;

  closeBtn.onClick = function() {
    return isDone = true;
  };

  g_dlg.onClose = function() {
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

  g_dlg.show();

  while (isDone === false) {
    app.refresh(); // or, alternatively, waitForRedraw();
    if (documents.length > 0)
    {
      if (g_doc != app.activeDocument)
      {
        g_doc = app.activeDocument;
        g_LOD = setLODValues();
        g_lodSldr.maxvalue = g_LOD.squaredMax + 1;
        g_lodSldr.value = g_LOD.squaredMax + 1;
        g_lodTxt.text = g_LOD.squaredMax.toString();
      }
    }
  }
}

function setLODValues()
{
  if (documents.length > 0)
  {
    // Defining variables to return
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
    --i;
  
    return new LODSettings(docWidth, docHeight, i);
  }
  return new LODSettings();
}


main();
