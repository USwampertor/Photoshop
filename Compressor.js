var pic1File;
var pic2File;

var dlg = new Window( "dialog", "Game Development Tools" );
btnPnl = dlg.add( "panel", undefined, "Map Compressor" );
lodPnl = dlg.add("panel", undefined, "LOD");
compBtn = btnPnl.add("button", undefined, "Compress");
cancelBtn = btnPnl.add( "button", undefined, "Cancel", { name: "cancel" } );

lodSldr = lodPnl.add("slider");
lodTxt = lodPnl.add("edittext", undefined, "9");

lodSldr.minvalue = 0;
lodSldr.maxvalue = 9;
lodSldr.value = 9;


lodSldr.onChanging = function() {
  lodSldr.value = Math.round(this.value.toFixed(0));
  lodTxt.text = this.value.toFixed(0);
};

compBtn.onClick = function() {
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

dlg.show();