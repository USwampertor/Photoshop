// Previous Photoshop Code
// Embedding code


// This code will let us edit text in the activeDocument
var titleGroup = app.activeDocument.layerSets.getByName('Example');
var titleLayer = titleGroup.layers[0];

titleLayer.name = "Engine Text"
titleLayer.textItem.contents = "Herramientas para motores";
titleLayer.textItem.size = 10;
titleLayer.textItem.font = "Impact";

alert(titleLayer.name);
alert(titleGroup.name);