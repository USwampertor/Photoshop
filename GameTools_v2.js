/*
Code for Import https://scriptui.joonas.me — (Triple click to select): 
{"items":{"item-0":{"id":0,"type":"Dialog","parentId":false,"style":{"enabled":true,"varName":"g_dlg","windowType":"Window","creationProps":{"su1PanelCoordinates":false,"maximizeButton":false,"minimizeButton":false,"independent":false,"closeButton":false,"borderless":false,"resizeable":true},"text":"Game Developer Toolkit v2","preferredSize":[0,0],"margins":16,"orientation":"column","spacing":10,"alignChildren":["center","center"]}},"item-1":{"id":1,"type":"StaticText","parentId":28,"style":{"enabled":true,"varName":"dlgTitle","creationProps":{"truncate":"none","multiline":false,"scrolling":false},"softWrap":false,"text":"Made by Swampertor","justify":"left","preferredSize":[0,0],"alignment":null,"helpTip":null}},"item-3":{"id":3,"type":"Group","parentId":0,"style":{"enabled":true,"varName":"generalGrp","preferredSize":[0,0],"margins":0,"orientation":"row","spacing":10,"alignChildren":["left","center"],"alignment":null}},"item-4":{"id":4,"type":"Button","parentId":16,"style":{"enabled":true,"varName":"loadBtn","text":"Load Scrambled","justify":"center","preferredSize":[0,0],"alignment":null,"helpTip":null}},"item-5":{"id":5,"type":"Button","parentId":3,"style":{"enabled":true,"varName":"reloadBtn","text":"Reload Document","justify":"center","preferredSize":[0,0],"alignment":null,"helpTip":null}},"item-6":{"id":6,"type":"Button","parentId":3,"style":{"enabled":true,"varName":"closeBtn","text":"Close Toolkit","justify":"center","preferredSize":[0,0],"alignment":null,"helpTip":null}},"item-7":{"id":7,"type":"Panel","parentId":33,"style":{"enabled":true,"varName":"savePnl","creationProps":{"borderStyle":"etched","su1PanelCoordinates":false},"text":"Save Options","preferredSize":[0,0],"margins":10,"orientation":"column","spacing":10,"alignChildren":["center","center"],"alignment":"fill"}},"item-11":{"id":11,"type":"Button","parentId":7,"style":{"enabled":true,"varName":"saveBtn","text":"Save","justify":"center","preferredSize":[0,0],"alignment":null,"helpTip":null}},"item-12":{"id":12,"type":"Panel","parentId":33,"style":{"enabled":true,"varName":"compressPnl","creationProps":{"borderStyle":"etched","su1PanelCoordinates":false},"text":"Compression Level","preferredSize":[0,0],"margins":10,"orientation":"column","spacing":10,"alignChildren":["center","center"],"alignment":"fill"}},"item-13":{"id":13,"type":"Slider","parentId":12,"style":{"enabled":true,"varName":"lodSldr","preferredSize":[0,0],"alignment":"fill","helpTip":"This value represents the power you are elevating 2 \\n (i.e a value of 2 means 2`2 in final width and height) \\n The max value is the original width and height of the image"}},"item-14":{"id":14,"type":"StaticText","parentId":12,"style":{"enabled":true,"varName":"lodTxt","creationProps":{"truncate":"none","multiline":false,"scrolling":false},"softWrap":false,"text":"00","justify":"center","preferredSize":[0,0],"alignment":null,"helpTip":null}},"item-15":{"id":15,"type":"StaticText","parentId":12,"style":{"enabled":true,"varName":"compressTxt","creationProps":{"truncate":"none","multiline":false,"scrolling":false},"softWrap":false,"text":"Level of compression","justify":"center","preferredSize":[0,0],"alignment":null,"helpTip":"The amount of power possible for 2 \\n from the width and height of the original image \\n The max number is the original size"}},"item-16":{"id":16,"type":"Panel","parentId":33,"style":{"enabled":true,"varName":"mergePnl","creationProps":{"borderStyle":"etched","su1PanelCoordinates":false},"text":"Merge Settings","preferredSize":[0,0],"margins":10,"orientation":"column","spacing":10,"alignChildren":["center","center"],"alignment":"fill"}},"item-17":{"id":17,"type":"DropDownList","parentId":16,"style":{"enabled":true,"varName":null,"text":"DropDownList","listItems":"Use AO + ROUGHNESS + METALNESS, Use ROUGHNESS + METALNESS + AO, Use SMOOTHNESS + AO + METALNESS","preferredSize":[0,0],"alignment":"fill","selection":1,"helpTip":null}},"item-19":{"id":19,"type":"Checkbox","parentId":7,"style":{"enabled":true,"varName":"compresschk","text":"Compress","preferredSize":[0,0],"alignment":"left","helpTip":null,"checked":false}},"item-20":{"id":20,"type":"Checkbox","parentId":7,"style":{"enabled":true,"varName":"mergechk","text":"Merge","preferredSize":[0,0],"alignment":"left","helpTip":null,"checked":false}},"item-21":{"id":21,"type":"Group","parentId":7,"style":{"enabled":true,"varName":"compressgrp","preferredSize":[0,0],"margins":[0,0,0,30],"orientation":"column","spacing":10,"alignChildren":["left","center"],"alignment":"left"}},"item-22":{"id":22,"type":"RadioButton","parentId":21,"style":{"enabled":true,"varName":"singleOpt","text":"Compress single","preferredSize":[0,0],"alignment":"top","helpTip":"Compress only the compression slider active value","checked":false}},"item-23":{"id":23,"type":"RadioButton","parentId":21,"style":{"enabled":true,"varName":"allOpt","text":"Compress all ","preferredSize":[0,0],"alignment":null,"helpTip":"Compress all values from 0 to the active value","checked":false}},"item-24":{"id":24,"type":"DropDownList","parentId":7,"style":{"enabled":true,"varName":null,"text":"DropDownList","listItems":"PNG, JPG,-,DDS (requires NVIDIA Export plugin)","preferredSize":[0,0],"alignment":"fill","selection":0,"helpTip":null}},"item-25":{"id":25,"type":"StaticText","parentId":7,"style":{"enabled":true,"varName":"saveTxt","creationProps":{"truncate":"none","multiline":false,"scrolling":false},"softWrap":false,"text":"Save as","justify":"left","preferredSize":[0,0],"alignment":"left","helpTip":null}},"item-26":{"id":26,"type":"Progressbar","parentId":7,"style":{"enabled":true,"varName":"progressBar","preferredSize":[50,4],"alignment":"fill","helpTip":null}},"item-27":{"id":27,"type":"Button","parentId":3,"style":{"enabled":true,"varName":"aboutBtn","text":"About this Tool","justify":"center","preferredSize":[0,0],"alignment":null,"helpTip":null}},"item-28":{"id":28,"type":"Group","parentId":0,"style":{"enabled":true,"varName":"titleGrp","preferredSize":[0,0],"margins":0,"orientation":"row","spacing":10,"alignChildren":["center","center"],"alignment":"fill"}},"item-29":{"id":29,"type":"Image","parentId":28,"style":{"enabled":true,"varName":"toolImg","image":["data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAQdJREFUeNrslv0NgyAQxcV0AEZwBEdoN3AEu0E7iSN0hW6gG9gRuoFuQB8NtGg9QSL4R33JixcUf3zcEZiAkg2UJhvpYMRX+BGYl8PVOxJfHV164rsc5j5UydCwdEGnAu4QtnCH+OY7AOcZ410moeJXVegZFzAn2jfJah4afF/Yvg6YMfbE4wz3RnOjSjBcchnfcpUgWbRyUjPv4UatgDmYWtZ3tORSdVzDcrUWwVPLjyu4tEBzI8Pd4dQeq5NJq5zY61ZMq6Pg5h5PgkfQAdwCnYXPggmo1sUBSsJJsAXqowGcArcijD5wE8wiXX3kiXfSmR/z6jMuvYT93WVvB+/gHbyaXgIMAHWCmD3KjfSwAAAAAElFTkSuQmCC"],"alignment":null,"helpTip":null}},"item-30":{"id":30,"type":"Button","parentId":12,"style":{"enabled":true,"varName":"rescaleBtn","text":"Rescale Document","justify":"center","preferredSize":[0,0],"alignment":null,"helpTip":null}},"item-31":{"id":31,"type":"TabbedPanel","parentId":0,"style":{"enabled":true,"varName":"generalTab","preferredSize":[0,0],"margins":10,"alignment":null,"selection":33}},"item-33":{"id":33,"type":"Tab","parentId":31,"style":{"enabled":true,"varName":"compressTab","text":"Export Tools","orientation":"column","spacing":10,"alignChildren":["center","center"]}},"item-34":{"id":34,"type":"Tab","parentId":31,"style":{"enabled":true,"varName":"layersTab","text":"Layer Tools","orientation":"column","spacing":10,"alignChildren":["left","top"]}},"item-35":{"id":35,"type":"Divider","parentId":0,"style":{"enabled":true,"varName":"generalDivider"}},"item-36":{"id":36,"type":"Divider","parentId":0,"style":{"enabled":true,"varName":"tabDivider"}},"item-37":{"id":37,"type":"Button","parentId":34,"style":{"enabled":true,"varName":"metalglossBtn","text":"Invert Metalness - Glossiness","justify":"center","preferredSize":[0,0],"alignment":"fill","helpTip":null}},"item-38":{"id":38,"type":"Button","parentId":34,"style":{"enabled":true,"varName":"roughsmoothBtn","text":"Invert Roughness - Smoothness","justify":"center","preferredSize":[0,0],"alignment":"fill","helpTip":null}},"item-39":{"id":39,"type":"Group","parentId":34,"style":{"enabled":true,"varName":"metalglossGrp","preferredSize":[0,0],"margins":0,"orientation":"row","spacing":10,"alignChildren":["center","center"],"alignment":"fill"}},"item-40":{"id":40,"type":"Image","parentId":39,"style":{"enabled":true,"varName":"metalImg","image":["data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAQdJREFUeNrslv0NgyAQxcV0AEZwBEdoN3AEu0E7iSN0hW6gG9gRuoFuQB8NtGg9QSL4R33JixcUf3zcEZiAkg2UJhvpYMRX+BGYl8PVOxJfHV164rsc5j5UydCwdEGnAu4QtnCH+OY7AOcZ410moeJXVegZFzAn2jfJah4afF/Yvg6YMfbE4wz3RnOjSjBcchnfcpUgWbRyUjPv4UatgDmYWtZ3tORSdVzDcrUWwVPLjyu4tEBzI8Pd4dQeq5NJq5zY61ZMq6Pg5h5PgkfQAdwCnYXPggmo1sUBSsJJsAXqowGcArcijD5wE8wiXX3kiXfSmR/z6jMuvYT93WVvB+/gHbyaXgIMAHWCmD3KjfSwAAAAAElFTkSuQmCC"],"alignment":null,"helpTip":null}},"item-41":{"id":41,"type":"Image","parentId":39,"style":{"enabled":true,"varName":"glossImg","image":["data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAQdJREFUeNrslv0NgyAQxcV0AEZwBEdoN3AEu0E7iSN0hW6gG9gRuoFuQB8NtGg9QSL4R33JixcUf3zcEZiAkg2UJhvpYMRX+BGYl8PVOxJfHV164rsc5j5UydCwdEGnAu4QtnCH+OY7AOcZ410moeJXVegZFzAn2jfJah4afF/Yvg6YMfbE4wz3RnOjSjBcchnfcpUgWbRyUjPv4UatgDmYWtZ3tORSdVzDcrUWwVPLjyu4tEBzI8Pd4dQeq5NJq5zY61ZMq6Pg5h5PgkfQAdwCnYXPggmo1sUBSsJJsAXqowGcArcijD5wE8wiXX3kiXfSmR/z6jMuvYT93WVvB+/gHbyaXgIMAHWCmD3KjfSwAAAAAElFTkSuQmCC"],"alignment":null,"helpTip":null}},"item-42":{"id":42,"type":"StaticText","parentId":34,"style":{"enabled":true,"varName":"metalglossTxt","creationProps":{"truncate":"none","multiline":false,"scrolling":false},"softWrap":false,"text":"You can invert the values of Metalness and Glosiness\nto ensure proper format in the game engine used\n\nMetalness and Glosiness are only inverted values","justify":"center","preferredSize":[0,0],"alignment":null,"helpTip":null}},"item-43":{"id":43,"type":"Group","parentId":34,"style":{"enabled":true,"varName":"roughsmoothGrp","preferredSize":[0,0],"margins":0,"orientation":"row","spacing":10,"alignChildren":["center","center"],"alignment":"fill"}},"item-44":{"id":44,"type":"Image","parentId":43,"style":{"enabled":true,"varName":"roughImg","image":["data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAQdJREFUeNrslv0NgyAQxcV0AEZwBEdoN3AEu0E7iSN0hW6gG9gRuoFuQB8NtGg9QSL4R33JixcUf3zcEZiAkg2UJhvpYMRX+BGYl8PVOxJfHV164rsc5j5UydCwdEGnAu4QtnCH+OY7AOcZ410moeJXVegZFzAn2jfJah4afF/Yvg6YMfbE4wz3RnOjSjBcchnfcpUgWbRyUjPv4UatgDmYWtZ3tORSdVzDcrUWwVPLjyu4tEBzI8Pd4dQeq5NJq5zY61ZMq6Pg5h5PgkfQAdwCnYXPggmo1sUBSsJJsAXqowGcArcijD5wE8wiXX3kiXfSmR/z6jMuvYT93WVvB+/gHbyaXgIMAHWCmD3KjfSwAAAAAElFTkSuQmCC"],"alignment":null,"helpTip":null}},"item-45":{"id":45,"type":"Image","parentId":43,"style":{"enabled":true,"varName":"smoothImg","image":["data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAQdJREFUeNrslv0NgyAQxcV0AEZwBEdoN3AEu0E7iSN0hW6gG9gRuoFuQB8NtGg9QSL4R33JixcUf3zcEZiAkg2UJhvpYMRX+BGYl8PVOxJfHV164rsc5j5UydCwdEGnAu4QtnCH+OY7AOcZ410moeJXVegZFzAn2jfJah4afF/Yvg6YMfbE4wz3RnOjSjBcchnfcpUgWbRyUjPv4UatgDmYWtZ3tORSdVzDcrUWwVPLjyu4tEBzI8Pd4dQeq5NJq5zY61ZMq6Pg5h5PgkfQAdwCnYXPggmo1sUBSsJJsAXqowGcArcijD5wE8wiXX3kiXfSmR/z6jMuvYT93WVvB+/gHbyaXgIMAHWCmD3KjfSwAAAAAElFTkSuQmCC"],"alignment":null,"helpTip":null}},"item-46":{"id":46,"type":"StaticText","parentId":34,"style":{"enabled":true,"varName":null,"creationProps":{"truncate":"none","multiline":false,"scrolling":false},"softWrap":false,"text":"You can invert the values of Roughness and Smoothness\nto ensure proper format in the game engine used\n\nRoughness and Smoothness are only inverted values","justify":"center","preferredSize":[0,0],"alignment":null,"helpTip":null}}},"order":[0,28,29,1,35,3,5,27,6,36,31,33,12,15,13,14,30,16,17,4,7,19,21,22,23,20,25,24,11,26,34,37,39,40,41,42,38,43,44,45,46],"settings":{"importJSON":true,"indentSize":false,"cepExport":false,"includeCSSJS":true,"showDialog":true,"functionWrapper":false,"afterEffectsDockable":false,"itemReferenceList":"None"},"activeId":31}
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

// G_DLG
// =====
var g_dlg = new Window("palette", undefined, undefined, {closeButton: false, resizeable: true}); 
    g_dlg.text = "Game Developer Toolkit v2"; 
    g_dlg.orientation = "column"; 
    g_dlg.alignChildren = ["center","center"]; 
    g_dlg.spacing = 10; 
    g_dlg.margins = 16;
    g_dlg.preferredSize.width = 410; 

// TITLEGRP
// ========
var titleGrp = g_dlg.add("group", undefined, {name: "titleGrp"}); 
    titleGrp.orientation = "row"; 
    titleGrp.alignChildren = ["center","center"]; 
    titleGrp.spacing = 10; 
    titleGrp.margins = 0; 
    titleGrp.alignment = ["fill","center"]; 

var imageFile = new File(File.encode('D:/Users/toa_l/Documents/Universidad/Photoshop/icon.png'));
var toolImg = titleGrp.add("image", undefined, imageFile, {name: "toolImg"});
    toolImg.size = [50,50];

var dlgTitle = titleGrp.add("statictext", undefined, undefined, {name: "dlgTitle"}); 
    dlgTitle.text = "Made by Swampertor"; 

// G_DLG
// =====
var generalDivider = g_dlg.add("panel", undefined, undefined, {name: "generalDivider"}); 
    generalDivider.alignment = "fill"; 

// GENERALGRP
// ==========
var generalGrp = g_dlg.add("group", undefined, {name: "generalGrp"}); 
    generalGrp.orientation = "row"; 
    generalGrp.alignChildren = ["left","center"]; 
    generalGrp.spacing = 10; 
    generalGrp.margins = 0; 

var reloadBtn = generalGrp.add("button", undefined, undefined, {name: "reloadBtn"}); 
    reloadBtn.text = "Reload Document"; 

var aboutBtn = generalGrp.add("button", undefined, undefined, {name: "aboutBtn"}); 
    aboutBtn.text = "About this Tool"; 

var closeBtn = generalGrp.add("button", undefined, undefined, {name: "closeBtn"}); 
    closeBtn.text = "Close Toolkit"; 

// G_DLG
// =====
var tabDivider = g_dlg.add("panel", undefined, undefined, {name: "tabDivider"}); 
    tabDivider.alignment = "fill"; 

// GENERALTAB
// ==========
var generalTab = g_dlg.add("tabbedpanel", undefined, undefined, {name: "generalTab"}); 
    generalTab.alignChildren = "fill"; 
    generalTab.preferredSize.width = 374.344; 
    generalTab.margins = 0; 

// COMPRESSTAB
// ===========
var compressTab = generalTab.add("tab", undefined, undefined, {name: "compressTab"}); 
    compressTab.text = "Export Tools"; 
    compressTab.orientation = "column"; 
    compressTab.alignChildren = ["center","center"]; 
    compressTab.spacing = 10; 
    compressTab.margins = 10; 

// COMPRESSPNL
// ===========
var compressPnl = compressTab.add("panel", undefined, undefined, {name: "compressPnl"}); 
    compressPnl.text = "Compression Level"; 
    compressPnl.orientation = "column"; 
    compressPnl.alignChildren = ["center","center"]; 
    compressPnl.spacing = 10; 
    compressPnl.margins = 10; 
    compressPnl.alignment = ["fill","center"]; 

var compressTxt = compressPnl.add("statictext", undefined, undefined, {name: "compressTxt"}); 
    compressTxt.helpTip = "The amount of power possible for 2\nfrom the width and height of the original image\nThe max number is the original size"; 
    compressTxt.text = "Level of compression"; 
    compressTxt.justify = "center"; 

var lodSldr = compressPnl.add("slider", undefined, undefined, undefined, undefined, {name: "lodSldr"}); 
    lodSldr.helpTip = "This value represents the power you are elevating 2\n(i.e a value of 2 means 2`2 in final width and height)\nThe max value is the original width and height of the image"; 
    lodSldr.minvalue = 0; 
    lodSldr.maxvalue = 100; 
    lodSldr.value = 50; 
    lodSldr.alignment = ["fill","center"]; 

var lodTxt = compressPnl.add("statictext", undefined, undefined, {name: "lodTxt"}); 
    lodTxt.text = "00"; 
    lodTxt.justify = "center"; 

var rescaleBtn = compressPnl.add("button", undefined, undefined, {name: "rescaleBtn"}); 
    rescaleBtn.text = "Rescale Document"; 

// MERGEPNL
// ========
var mergePnl = compressTab.add("panel", undefined, undefined, {name: "mergePnl"}); 
    mergePnl.text = "Merge Settings"; 
    mergePnl.orientation = "column"; 
    mergePnl.alignChildren = ["center","center"]; 
    mergePnl.spacing = 10; 
    mergePnl.margins = 10; 
    mergePnl.alignment = ["fill","center"]; 

var dropdown1_array = ["Use AO + ROUGHNESS + METALNESS","Use ROUGHNESS + METALNESS + AO","Use SMOOTHNESS + AO + METALNESS"]; 
var dropdown1 = mergePnl.add("dropdownlist", undefined, undefined, {name: "dropdown1", items: dropdown1_array}); 
    dropdown1.selection = 1; 
    dropdown1.alignment = ["fill","center"]; 

var loadBtn = mergePnl.add("button", undefined, undefined, {name: "loadBtn"}); 
    loadBtn.text = "Load Scrambled"; 

// SAVEPNL
// =======
var savePnl = compressTab.add("panel", undefined, undefined, {name: "savePnl"}); 
    savePnl.text = "Save Options"; 
    savePnl.orientation = "column"; 
    savePnl.alignChildren = ["center","center"]; 
    savePnl.spacing = 10; 
    savePnl.margins = 10; 
    savePnl.alignment = ["fill","center"]; 

var compresschk = savePnl.add("checkbox", undefined, undefined, {name: "compresschk"}); 
    compresschk.text = "Compress"; 
    compresschk.alignment = ["left","center"]; 

// COMPRESSGRP
// ===========
var compressgrp = savePnl.add("group", undefined, {name: "compressgrp"}); 
    compressgrp.orientation = "column"; 
    compressgrp.alignChildren = ["left","center"]; 
    compressgrp.spacing = 10; 
    compressgrp.margins = [30,0,0,0]; 
    compressgrp.alignment = ["left","center"]; 

var singleOpt = compressgrp.add("radiobutton", undefined, undefined, {name: "singleOpt"}); 
    singleOpt.helpTip = "Compress only the compression slider active value"; 
    singleOpt.text = "Compress single"; 
    singleOpt.alignment = ["left","center"]; 

var allOpt = compressgrp.add("radiobutton", undefined, undefined, {name: "allOpt"}); 
    allOpt.helpTip = "Compress all values from 0 to the active value"; 
    allOpt.text = "Compress all "; 

// SAVEPNL
// =======
var mergechk = savePnl.add("checkbox", undefined, undefined, {name: "mergechk"}); 
    mergechk.text = "Merge"; 
    mergechk.alignment = ["left","center"]; 

var saveTxt = savePnl.add("statictext", undefined, undefined, {name: "saveTxt"}); 
    saveTxt.text = "Save as"; 
    saveTxt.alignment = ["left","center"]; 

var dropdown2_array = ["PNG","JPG","-","DDS (requires NVIDIA Export plugin)"]; 
var dropdown2 = savePnl.add("dropdownlist", undefined, undefined, {name: "dropdown2", items: dropdown2_array}); 
    dropdown2.selection = 0; 
    dropdown2.alignment = ["fill","center"]; 

var saveBtn = savePnl.add("button", undefined, undefined, {name: "saveBtn"}); 
    saveBtn.text = "Save"; 

var progressBar = savePnl.add("progressbar", undefined, undefined, {name: "progressBar"}); 
    progressBar.maxvalue = 100; 
    progressBar.value = 50; 
    progressBar.preferredSize.width = 50; 
    progressBar.preferredSize.height = 4; 
    progressBar.alignment = ["fill","center"]; 

// LAYERSTAB
// =========
var layersTab = generalTab.add("tab", undefined, undefined, {name: "layersTab"}); 
    layersTab.text = "Layer Tools"; 
    layersTab.orientation = "column"; 
    layersTab.alignChildren = ["left","top"]; 
    layersTab.spacing = 10; 
    layersTab.margins = 10; 

// GENERALTAB
// ==========
generalTab.selection = compressTab; 

var metalglossBtn = layersTab.add("button", undefined, undefined, {name: "metalglossBtn"}); 
    metalglossBtn.text = "Invert Metalness - Glossiness"; 
    metalglossBtn.alignment = ["fill","top"]; 

// METALGLOSSGRP
// =============
var metalglossGrp = layersTab.add("group", undefined, {name: "metalglossGrp"}); 
    metalglossGrp.orientation = "row"; 
    metalglossGrp.alignChildren = ["center","center"]; 
    metalglossGrp.spacing = 10; 
    metalglossGrp.margins = 0; 
    metalglossGrp.alignment = ["fill","top"]; 

var metalImg = metalglossGrp.add("image", undefined, imageFile, {name: "metalImg"}); 
metalImg.size = [100,100];

var glossImg = metalglossGrp.add("image", undefined, imageFile, {name: "glossImg"}); 
glossImg.size = [100,100];

// LAYERSTAB
// =========
var metalglossTxt = layersTab.add("statictext", undefined, undefined, {name: "metalglossTxt"}); 
    metalglossTxt.text = "You can invert the values of Metalness and Glosiness \n" +
                          "to ensure proper format in the game engine used \n" +
                          "Metalness and Glosiness are only inverted values"; 
    metalglossTxt.justify = "center"; 

var roughsmoothBtn = layersTab.add("button", undefined, undefined, {name: "roughsmoothBtn"}); 
    roughsmoothBtn.text = "Invert Roughness - Smoothness"; 
    roughsmoothBtn.alignment = ["fill","top"]; 

// ROUGHSMOOTHGRP
// ==============
var roughsmoothGrp = layersTab.add("group", undefined, {name: "roughsmoothGrp"}); 
    roughsmoothGrp.orientation = "row"; 
    roughsmoothGrp.alignChildren = ["center","center"]; 
    roughsmoothGrp.spacing = 10; 
    roughsmoothGrp.margins = 0; 
    roughsmoothGrp.alignment = ["fill","top"]; 

var roughImg = roughsmoothGrp.add("image", undefined, imageFile, {name: "roughImg"}); 
roughImg.size = [100,100];

var smoothImg = roughsmoothGrp.add("image", undefined, imageFile, {name: "smoothImg"}); 
smoothImg.size = [100,100];

// LAYERSTAB
// =========
var statictext1 = layersTab.add("statictext", undefined, undefined, {name: "statictext1"}); 
    statictext1.text = "You can invert the values of Roughness and Smoothness \n" +
                        "to ensure proper format in the game engine used \n" +
                        "Roughness and Smoothness are only inverted values"; 
    statictext1.justify = "center"; 

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
}
