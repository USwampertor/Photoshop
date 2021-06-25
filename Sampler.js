var doc = app.activeDocument;
doc.colorSamplers.removeAll();
var selection = doc.colorSamplers.add([0,0]);
alert(selection.color.rgb.red);
selection.remove();