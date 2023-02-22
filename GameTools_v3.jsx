
/*
Code for Import https://scriptui.joonas.me — (Triple click to select): 
{"items":{"item-0":{"id":0,"type":"Dialog","parentId":false,"style":{"enabled":true,"varName":"g_dlg","windowType":"Window","creationProps":{"su1PanelCoordinates":false,"maximizeButton":false,"minimizeButton":false,"independent":false,"closeButton":false,"borderless":false,"resizeable":true},"text":"Game Developer Toolkit v2","preferredSize":[450,0],"margins":16,"orientation":"column","spacing":10,"alignChildren":["center","center"]}},"item-1":{"id":1,"type":"StaticText","parentId":28,"style":{"enabled":true,"varName":"dlgTitle","creationProps":{"truncate":"none","multiline":false,"scrolling":false},"softWrap":false,"text":"Made by Swampertor","justify":"left","preferredSize":[0,0],"alignment":null,"helpTip":null}},"item-3":{"id":3,"type":"Group","parentId":0,"style":{"enabled":true,"varName":"generalGrp","preferredSize":[0,0],"margins":0,"orientation":"row","spacing":10,"alignChildren":["left","center"],"alignment":null}},"item-4":{"id":4,"type":"Button","parentId":16,"style":{"enabled":true,"varName":"loadBtn","text":"Load Scrambled","justify":"center","preferredSize":[0,0],"alignment":null,"helpTip":null}},"item-5":{"id":5,"type":"Button","parentId":3,"style":{"enabled":true,"varName":"reloadBtn","text":"Reload Document","justify":"center","preferredSize":[0,0],"alignment":null,"helpTip":null}},"item-6":{"id":6,"type":"Button","parentId":3,"style":{"enabled":true,"varName":"closeBtn","text":"Close Toolkit","justify":"center","preferredSize":[0,0],"alignment":null,"helpTip":null}},"item-7":{"id":7,"type":"Panel","parentId":33,"style":{"enabled":true,"varName":"savePnl","creationProps":{"borderStyle":"etched","su1PanelCoordinates":false},"text":"Save Options","preferredSize":[0,0],"margins":10,"orientation":"column","spacing":10,"alignChildren":["center","center"],"alignment":"fill"}},"item-11":{"id":11,"type":"Button","parentId":7,"style":{"enabled":true,"varName":"saveBtn","text":"Save","justify":"center","preferredSize":[0,0],"alignment":null,"helpTip":null}},"item-12":{"id":12,"type":"Panel","parentId":33,"style":{"enabled":true,"varName":"compressPnl","creationProps":{"borderStyle":"etched","su1PanelCoordinates":false},"text":"Compression Level","preferredSize":[0,0],"margins":10,"orientation":"column","spacing":10,"alignChildren":["center","center"],"alignment":"fill"}},"item-13":{"id":13,"type":"Slider","parentId":12,"style":{"enabled":true,"varName":"lodSldr","preferredSize":[0,0],"alignment":"fill","helpTip":"This value represents the power you are elevating 2 \\n (i.e a value of 2 means 2`2 in final width and height) \\n The max value is the original width and height of the image"}},"item-14":{"id":14,"type":"StaticText","parentId":12,"style":{"enabled":true,"varName":"lodTxt","creationProps":{"truncate":"none","multiline":false,"scrolling":false},"softWrap":false,"text":"00","justify":"center","preferredSize":[0,0],"alignment":null,"helpTip":null}},"item-15":{"id":15,"type":"StaticText","parentId":12,"style":{"enabled":true,"varName":"compressTxt","creationProps":{"truncate":"none","multiline":false,"scrolling":false},"softWrap":false,"text":"Level of compression","justify":"center","preferredSize":[0,0],"alignment":null,"helpTip":"The amount of power possible for 2 \\n from the width and height of the original image \\n The max number is the original size"}},"item-16":{"id":16,"type":"Panel","parentId":33,"style":{"enabled":true,"varName":"mergePnl","creationProps":{"borderStyle":"etched","su1PanelCoordinates":false},"text":"Merge Settings","preferredSize":[0,0],"margins":10,"orientation":"column","spacing":10,"alignChildren":["center","center"],"alignment":"fill"}},"item-17":{"id":17,"type":"DropDownList","parentId":16,"style":{"enabled":true,"varName":null,"text":"DropDownList","listItems":"PBRM - Rough + Metal + AO,\nPBRM - Rough + AO + Metal,\nPBRM - Metal + Rough + AO,\nPBRM - Metal + AO + Rough,\nPBRM - AO + Metal + Rough,\nPBRM - AO + Rough + Metal,\n,-,\nPBRS - Gloss + AO,\nPBRS - AO + Gloss ","preferredSize":[0,0],"alignment":"fill","selection":5,"helpTip":null}},"item-19":{"id":19,"type":"Checkbox","parentId":7,"style":{"enabled":true,"varName":"compresschk","text":"Compress","preferredSize":[0,0],"alignment":"left","helpTip":null,"checked":false}},"item-20":{"id":20,"type":"Checkbox","parentId":7,"style":{"enabled":true,"varName":"mergechk","text":"Merge","preferredSize":[0,0],"alignment":"left","helpTip":null,"checked":false}},"item-21":{"id":21,"type":"Group","parentId":7,"style":{"enabled":false,"varName":"compressgrp","preferredSize":[0,0],"margins":[0,0,0,30],"orientation":"column","spacing":10,"alignChildren":["left","center"],"alignment":"left"}},"item-22":{"id":22,"type":"RadioButton","parentId":21,"style":{"enabled":true,"varName":"singleOpt","text":"Compress single","preferredSize":[0,0],"alignment":"top","helpTip":"Compress only the compression slider active value","checked":true}},"item-23":{"id":23,"type":"RadioButton","parentId":21,"style":{"enabled":true,"varName":"allOpt","text":"Compress all ","preferredSize":[0,0],"alignment":null,"helpTip":"Compress all values from 0 to the active value","checked":false}},"item-24":{"id":24,"type":"DropDownList","parentId":7,"style":{"enabled":true,"varName":null,"text":"DropDownList","listItems":"PNG,TARGA,TIFF, JPG,-,DDS (requires NVIDIA Export plugin)","preferredSize":[0,0],"alignment":"fill","selection":0,"helpTip":null}},"item-25":{"id":25,"type":"StaticText","parentId":7,"style":{"enabled":true,"varName":"saveTxt","creationProps":{"truncate":"none","multiline":false,"scrolling":false},"softWrap":false,"text":"Save as","justify":"left","preferredSize":[0,0],"alignment":"left","helpTip":null}},"item-26":{"id":26,"type":"Progressbar","parentId":7,"style":{"enabled":true,"varName":"progressBar","preferredSize":[50,4],"alignment":"fill","helpTip":null}},"item-27":{"id":27,"type":"Button","parentId":3,"style":{"enabled":true,"varName":"aboutBtn","text":"About this Tool","justify":"center","preferredSize":[0,0],"alignment":null,"helpTip":null}},"item-28":{"id":28,"type":"Group","parentId":0,"style":{"enabled":true,"varName":"titleGrp","preferredSize":[0,0],"margins":0,"orientation":"row","spacing":10,"alignChildren":["center","center"],"alignment":"fill"}},"item-29":{"id":29,"type":"Image","parentId":28,"style":{"enabled":true,"varName":"toolImg","image":["data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAQdJREFUeNrslv0NgyAQxcV0AEZwBEdoN3AEu0E7iSN0hW6gG9gRuoFuQB8NtGg9QSL4R33JixcUf3zcEZiAkg2UJhvpYMRX+BGYl8PVOxJfHV164rsc5j5UydCwdEGnAu4QtnCH+OY7AOcZ410moeJXVegZFzAn2jfJah4afF/Yvg6YMfbE4wz3RnOjSjBcchnfcpUgWbRyUjPv4UatgDmYWtZ3tORSdVzDcrUWwVPLjyu4tEBzI8Pd4dQeq5NJq5zY61ZMq6Pg5h5PgkfQAdwCnYXPggmo1sUBSsJJsAXqowGcArcijD5wE8wiXX3kiXfSmR/z6jMuvYT93WVvB+/gHbyaXgIMAHWCmD3KjfSwAAAAAElFTkSuQmCC"],"alignment":null,"helpTip":null}},"item-30":{"id":30,"type":"Button","parentId":12,"style":{"enabled":true,"varName":"rescaleBtn","text":"Rescale Document","justify":"center","preferredSize":[0,0],"alignment":null,"helpTip":null}},"item-31":{"id":31,"type":"TabbedPanel","parentId":0,"style":{"enabled":true,"varName":"generalTab","preferredSize":[0,0],"margins":10,"alignment":null,"selection":33}},"item-33":{"id":33,"type":"Tab","parentId":31,"style":{"enabled":true,"varName":"compressTab","text":"Export Tools","orientation":"column","spacing":10,"alignChildren":["center","top"]}},"item-34":{"id":34,"type":"Tab","parentId":31,"style":{"enabled":true,"varName":"mappingTab","text":"Mapping Tools","orientation":"column","spacing":10,"alignChildren":["center","top"]}},"item-35":{"id":35,"type":"Divider","parentId":0,"style":{"enabled":true,"varName":"generalDivider"}},"item-36":{"id":36,"type":"Divider","parentId":0,"style":{"enabled":true,"varName":"tabDivider"}},"item-37":{"id":37,"type":"Button","parentId":49,"style":{"enabled":true,"varName":"roughglossBtn","text":"Invert Roughness - Glossiness","justify":"center","preferredSize":[0,0],"alignment":null,"helpTip":"This will just invert the layer of the Roughness/Glosiness map in order to adapt to the pipeline needed"}},"item-42":{"id":42,"type":"StaticText","parentId":49,"style":{"enabled":true,"varName":"roughglossTxt","creationProps":{"truncate":"none","multiline":false,"scrolling":false},"softWrap":false,"text":"Roughness and Glossiness are only inverted values","justify":"center","preferredSize":[0,0],"alignment":null,"helpTip":null}},"item-49":{"id":49,"type":"Panel","parentId":34,"style":{"enabled":true,"varName":"roughglossPnl","creationProps":{"borderStyle":"etched","su1PanelCoordinates":false},"text":"Roughness - Glossiness","preferredSize":[0,0],"margins":10,"orientation":"column","spacing":10,"alignChildren":["center","center"],"alignment":"fill"}},"item-50":{"id":50,"type":"Panel","parentId":34,"style":{"enabled":true,"varName":"createPnl","creationProps":{"borderStyle":"etched","su1PanelCoordinates":false},"text":"Normal","preferredSize":[0,0],"margins":10,"orientation":"column","spacing":10,"alignChildren":["center","center"],"alignment":"fill"}},"item-51":{"id":51,"type":"Button","parentId":50,"style":{"enabled":true,"varName":"normalBtn","text":"Create Normal Map","justify":"center","preferredSize":[0,0],"alignment":"center","helpTip":null}},"item-53":{"id":53,"type":"Button","parentId":50,"style":{"enabled":true,"varName":"specularBtn","text":"Create Specular Map","justify":"center","preferredSize":[0,0],"alignment":null,"helpTip":"The tool will attempt to create a Specular Map from Albedo, AO and "}},"item-54":{"id":54,"type":"Divider","parentId":34,"style":{"enabled":true,"varName":"mapDivider"}},"item-55":{"id":55,"type":"StaticText","parentId":34,"style":{"enabled":true,"varName":"experimentalTxt","creationProps":{"truncate":"none","multiline":false,"scrolling":false},"softWrap":false,"text":"Experimental section","justify":"left","preferredSize":[0,0],"alignment":null,"helpTip":null}},"item-57":{"id":57,"type":"Button","parentId":50,"style":{"enabled":true,"varName":"diffuseBtn","text":"Create Diffuse Map","justify":"center","preferredSize":[0,0],"alignment":null,"helpTip":null}},"item-58":{"id":58,"type":"Tab","parentId":31,"style":{"enabled":true,"varName":"extraTab","text":"Extras","orientation":"column","spacing":10,"alignChildren":["left","top"]}}},"order":[0,28,29,1,35,3,5,27,6,36,31,33,12,15,13,14,30,16,17,4,7,19,21,22,23,20,25,24,11,26,34,49,37,42,54,55,50,51,53,57,58],"settings":{"importJSON":true,"indentSize":false,"cepExport":false,"includeCSSJS":true,"showDialog":true,"functionWrapper":false,"afterEffectsDockable":false,"itemReferenceList":"None"},"activeId":33}
*/ 
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

function LODSettings(w,h,s)
{
  this.docWidth   = w;
  this.docHeight  = h;
  this.squaredMax = s;
}

var scriptPath = File($.fileName).path + "/";
var reloadFile = false;
var g_doc = null;
var g_LOD = new LODSettings(0,0,0);

// G_DLG
// =====
var g_dlg = new Window("palette", undefined, undefined, {closeButton: false, resizeable: true}); 
    g_dlg.text = "Game Developer Toolkit v2"; 
    g_dlg.preferredSize.width = 450; 
    g_dlg.orientation = "column"; 
    g_dlg.alignChildren = ["center","center"]; 
    g_dlg.spacing = 10; 
    g_dlg.margins = 16; 

// TITLEGRP
// ========
var titleGrp = g_dlg.add("group", undefined, {name: "titleGrp"}); 
    titleGrp.orientation = "row"; 
    titleGrp.alignChildren = ["center","center"]; 
    titleGrp.spacing = 10; 
    titleGrp.margins = 0; 
    titleGrp.alignment = ["fill","center"]; 

var imageFile = new File(File.encode(scriptPath + 'icon.png'));
var toolImg = titleGrp.add("image", undefined, imageFile, {name: "toolImg"}); 
    toolImg.size = [100,100];


var dlgTitle = titleGrp.add("statictext", undefined, undefined, {name: "dlgTitle"}); 
    dlgTitle.text = "Game Developer Toolkit v2 \nMade by Swampertor"; 

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
    reloadBtn.text = "Reload"; 

var aboutBtn = generalGrp.add("button", undefined, undefined, {name: "aboutBtn"}); 
    aboutBtn.text = "About"; 

var closeBtn = generalGrp.add("button", undefined, undefined, {name: "closeBtn"}); 
    closeBtn.text = "Close"; 

var scriptBtn = generalGrp.add("button", undefined, undefined, {name: "scriptBtn"}); 
  scriptBtn.text = "Load Script"; 

// G_DLG
// =====
var tabDivider = g_dlg.add("panel", undefined, undefined, {name: "tabDivider"}); 
    tabDivider.alignment = "fill"; 

// GENERALTAB
// ==========
var generalTab = g_dlg.add("tabbedpanel", undefined, undefined, {name: "generalTab"}); 
    generalTab.alignChildren = "fill"; 
    generalTab.preferredSize.width = 363.094; 
    generalTab.margins = 0; 

// COMPRESSTAB
// ===========
var compressTab = generalTab.add("tab", undefined, undefined, {name: "compressTab"}); 
    compressTab.text = "Export Tools"; 
    compressTab.orientation = "column"; 
    compressTab.alignChildren = ["center","top"]; 
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
    compressPnl.alignment = ["fill","top"]; 

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
    lodSldr.minvalue = 0; 
    lodSldr.maxvalue = g_LOD.squaredMax + 1;
    lodSldr.value = g_LOD.squaredMax + 1; 
    lodSldr.alignment = ["center","top"]; 


var lodTxt = compressPnl.add("statictext", undefined, undefined, {name: "lodTxt"}); 
    lodTxt.justify = "center"; 
    lodTxt.text = (g_LOD.squaredMax + 1).toString();

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
    mergePnl.alignment = ["fill","top"]; 

var dropdown1_array = ["PBRM - Rough + Metal + AO","PBRM - Rough + AO + Metal","PBRM - Metal + Rough + AO","PBRM - Metal + AO + Rough","PBRM - AO + Metal + Rough","PBRM - AO + Rough + Metal","Unity Mask Map - Metal + AO + Detail + Smoothness","","-","PBRS - Gloss + AO","PBRS - AO + Gloss"]; 
var dropdown1 = mergePnl.add("dropdownlist", undefined, undefined, {name: "dropdown1", items: dropdown1_array}); 
    dropdown1.selection = 0; 
    dropdown1.alignment = ["fill","center"]; 
    dropdown1.title = "Merge Order: ";

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
    savePnl.alignment = ["fill","top"]; 

var compresschk = savePnl.add("checkbox", undefined, undefined, {name: "compresschk"}); 
    compresschk.text = "Compress"; 
    compresschk.alignment = ["left","center"]; 

// COMPRESSGRP
// ===========
var compressgrp = savePnl.add("group", undefined, {name: "compressgrp"}); 
    compressgrp.enabled = false; 
    compressgrp.orientation = "column"; 
    compressgrp.alignChildren = ["left","center"]; 
    compressgrp.spacing = 10; 
    compressgrp.margins = [30,0,0,0]; 
    compressgrp.alignment = ["left","center"]; 

var singleOpt = compressgrp.add("radiobutton", undefined, undefined, {name: "singleOpt"}); 
    singleOpt.helpTip = "Compress only the compression slider active value"; 
    singleOpt.text = "Compress single"; 
    singleOpt.value = true; 
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

var dropdown2_array = ["PNG","TARGA","TIFF","JPG","-","DDS (requires NVIDIA Export plugin)"]; 
var dropdown2 = savePnl.add("dropdownlist", undefined, undefined, {name: "dropdown2", items: dropdown2_array}); 
    dropdown2.selection = 0; 
    dropdown2.alignment = ["fill","center"]; 
    dropdown2.title = "Format: ";

var saveBtn = savePnl.add("button", undefined, undefined, {name: "saveBtn"}); 
    saveBtn.text = "Save"; 

var progressBar = savePnl.add("progressbar", undefined, undefined, {name: "progressBar"}); 
    progressBar.maxvalue = 100; 
    progressBar.value = 0; 
    progressBar.preferredSize.width = 50; 
    progressBar.preferredSize.height = 4; 
    progressBar.alignment = ["fill","center"]; 

// MAPPINGTAB
// ==========
var mappingTab = generalTab.add("tab", undefined, undefined, {name: "mappingTab"}); 
    mappingTab.text = "Mapping Tools"; 
    mappingTab.orientation = "column"; 
    mappingTab.alignChildren = ["center","top"]; 
    mappingTab.spacing = 10; 
    mappingTab.margins = 10; 

// ROUGHGLOSSPNL
// =============
var roughglossPnl = mappingTab.add("panel", undefined, undefined, {name: "roughglossPnl"}); 
    roughglossPnl.text = "Roughness - Glossiness"; 
    roughglossPnl.orientation = "column"; 
    roughglossPnl.alignChildren = ["center","center"]; 
    roughglossPnl.spacing = 10; 
    roughglossPnl.margins = 10; 
    roughglossPnl.alignment = ["fill","top"]; 

var roughglossBtn = roughglossPnl.add("button", undefined, undefined, {name: "roughglossBtn"}); 
    roughglossBtn.helpTip = "This will just invert the layer of the Roughness/Glosiness map in order to adapt to the pipeline needed"; 
    roughglossBtn.text = "Invert Roughness - Glossiness"; 

var roughglossTxt = roughglossPnl.add("statictext", undefined, undefined, {name: "roughglossTxt"}); 
    roughglossTxt.text = "Roughness and Glossiness are only inverted values"; 
    roughglossTxt.justify = "center"; 

// MAPPINGTAB
// ==========
var mapDivider = mappingTab.add("panel", undefined, undefined, {name: "mapDivider"}); 
    mapDivider.alignment = "fill"; 

var experimentalTxt = mappingTab.add("statictext", undefined, undefined, {name: "experimentalTxt"}); 
    experimentalTxt.text = "Experimental section"; 

// CREATEPNL
// =========
var createPnl = mappingTab.add("panel", undefined, undefined, {name: "createPnl"}); 
    createPnl.text = "Normal"; 
    createPnl.orientation = "column"; 
    createPnl.alignChildren = ["center","center"]; 
    createPnl.spacing = 10; 
    createPnl.margins = 10; 
    createPnl.alignment = ["fill","top"]; 

var normalBtn = createPnl.add("button", undefined, undefined, {name: "normalBtn"}); 
    normalBtn.text = "Create Normal Map"; 
    normalBtn.alignment = ["center","center"]; 

var specularBtn = createPnl.add("button", undefined, undefined, {name: "specularBtn"}); 
    specularBtn.helpTip = "The tool will attempt to create a Specular Map from Albedo, AO and "; 
    specularBtn.text = "Create Specular Map"; 

var diffuseBtn = createPnl.add("button", undefined, undefined, {name: "diffuseBtn"}); 
    diffuseBtn.text = "Create Diffuse Map"; 

// EXTRATAB
// ========
var extraTab = generalTab.add("tab", undefined, undefined, {name: "extraTab"}); 
    extraTab.text = "Extras"; 
    extraTab.orientation = "column"; 
    extraTab.alignChildren = ["left","top"]; 
    extraTab.spacing = 10; 
    extraTab.margins = 10; 

// BATCHLOADPNL
// ============
var batchLoadPnl = extraTab.add("panel", 
                                undefined, 
                                undefined, 
                                {name: "batchLoadPnl"}); 
    batchLoadPnl.text = "Batch Load"; 
    batchLoadPnl.orientation = "column"; 
    batchLoadPnl.alignChildren = ["fill","center"]; 
    batchLoadPnl.spacing = 10; 
    batchLoadPnl.margins = 10; 
    batchLoadPnl.alignment = ["fill","top"]; 

var batchLoadTxt = batchLoadPnl.add("statictext", 
                                    undefined, 
                                    undefined, 
                                    {name: "batchLoadTxt"}); 
    batchLoadTxt.text = "Search all files in folder..."; 

var batchLoadBtn = batchLoadPnl.add("button", 
                                    undefined, 
                                    undefined, 
                                    {name: "batchLoadBtn"}); 
    batchLoadBtn.text = "Load All"; 

// BATCHSAVEPNL
// ============
var batchSavePnl = extraTab.add("panel", 
                                undefined, 
                                undefined, 
                                {name: "batchSavePnl"}); 
    batchSavePnl.text = "Save Batch"; 
    batchSavePnl.orientation = "column"; 
    batchSavePnl.alignChildren = ["fill","center"]; 
    batchSavePnl.spacing = 10; 
    batchSavePnl.margins = 10; 
    batchSavePnl.alignment = ["fill","top"]; 

var batchSaveBtn = batchSavePnl.add("button", 
                                    undefined, 
                                    undefined, 
                                    {name: "batchSaveBtn"}); 
    batchSaveBtn.text = "Save All"; 


// FUNCTIONS
// =========
function setLODValues()
{
  if (documents.length > 0)
  {
    // Defining variables to return
    var docHeight = g_doc.width;
    var docWidth = g_doc.height;
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
  else 
  {
    return new LODSettings(0,0,0);
  }
}

// METHODS
// =======

lodSldr.onChanging = function() {
  lodSldr.value = Math.round(this.value.toFixed(0));
  lodTxt.text = this.value.toString();
};

lodTxt.addEventListener("keyup", function(event) {
  if (event.keyCode === 13) {
    lodSldr.value = Math.round(parseInt(this.text));
    lodTxt.text = this.value.toString();
  }
});

reloadBtn.onClick = function() {
  // g_doc = app.activeDocument;
  // g_LOD = setLODValues();
  // lodSldr.maxvalue  = g_LOD.squaredMax + 1;
  // lodSldr.value     = g_LOD.squaredMax + 1; 
  // lodTxt.text       = g_LOD.squaredMax.toString();
  reloadFile = true;
  isDone = true;
}

scriptBtn.onClick = function() {
  var inputFile = File.openDialog("Select Script to run");
  if (inputFile != null) {
    $.evalFile(inputFile.absoluteURI);
  }
}

roughglossBtn.onClick = function() {
  var toInvert = null;
  var toGloss = false;
  for(var i = 0; i < g_doc.artLayers.length; ++i) {
    if (g_doc.artLayers[i].name.indexOf("~GL") != -1) {
      toInvert = g_doc.artLayers[i];
    }
    else if (g_doc.artLayers[i].name.indexOf("~RO") != -1) {
      toInvert = g_doc.artLayers[i];
      toGloss = true;
    }
    if (toInvert != null) {
      break;
    }
  }

  if (toInvert == null) {
    alert("There is no layer with suffix" + (toGloss ? "~RO" : "~GL") + " in the project");
    return;
  }
  toInvert.name = "Converted to " + (toGloss ? "~GL" : "~RO");
  toInvert.invert();

}

compresschk.onClick = function() {
  compressgrp.enabled = compresschk.value;
}

batchLoadBtn.onClick = function() {
  var inputFolder = Folder.selectDialog("Select Folder to open");
  if (inputFolder != null) {
    var fileList = inputFolder.getFiles();
    for (i = 0; i < fileList.length; ++i) {
      if (fileList[i] instanceof File) {
          app.open(fileList[i]);
      }
    }
  }
}

batchSaveBtn.onClick = function() {
  
}

saveBtn.onClick = function()
{
  progressBar.value = 0;
  if (documents.length > 0)
  {
    var savedState = g_doc.activeHistoryState;
    var ogWidth = g_doc.width;
    var ogHeight = g_doc.height;
    var mergeOptionStr = "";
    
    // Check if it should merge and how
    if (mergechk.value)
    {
      var selectedLayers;
      // Metal Pipeline
      if (dropdown1.selection.index < 6)
      {

        var metal = null;
        var ambient = null;
        var roughness = null;
        for(var i = 0; i < g_doc.artLayers.length; ++i)
        {
          if (g_doc.artLayers[i].name.indexOf("~AO") != -1)
          {
            ambient = g_doc.artLayers[i];
          }
          else if (g_doc.artLayers[i].name.indexOf("~ME") != -1)
          {
            metal = g_doc.artLayers[i];
          }
          else if (g_doc.artLayers[i].name.indexOf("~RO") != -1)
          {
            roughness = g_doc.artLayers[i];
          }

          if (ambient != null && metal != null && roughness != null)
          {
            break;
          }
        }

        if (ambient == null)
        {
          alert("There is no Ambient Occlusion Layer with suffix ~AO");
          return;
        }
        if (roughness == null)
        {
          alert("There is no Roughness Layer with suffix ~RO");
          return;
        }
        if (metal == null)
        {
          alert("There is no Metalness Layer with suffix ~ME");
          return;
        }

        selectedLayers = [metal, roughness, ambient];

        // Check the merge order
        if (0 == dropdown1.selection.index) 
        {
          mergeOptionStr = "~RMA";
          selectedLayers[0] = roughness;
          selectedLayers[1] = metal;
          selectedLayers[2] = ambient;
        }
        if (1 == dropdown1.selection.index)
        {
          mergeOptionStr = "~RAM";
          selectedLayers[0] = roughness;
          selectedLayers[1] = ambient;
          selectedLayers[2] = metal;
        }
        if (2 == dropdown1.selection.index)
        {
          mergeOptionStr = "~MRA";
          selectedLayers[0] = metal;
          selectedLayers[1] = roughness;
          selectedLayers[2] = ambient;
        }
        if (3 == dropdown1.selection.index)
        {
          mergeOptionStr = "~MAR";
          selectedLayers[0] = metal;
          selectedLayers[1] = ambient;
          selectedLayers[2] = roughness;
        }
        if (4 == dropdown1.selection.index)
        {
          mergeOptionStr = "~AMR";
          selectedLayers[0] = ambient;
          selectedLayers[1] = metal;
          selectedLayers[2] = roughness;
        }
        if (5 == dropdown1.selection.index)
        {
          mergeOptionStr = "~ARM";
          selectedLayers[0] = ambient;
          selectedLayers[1] = roughness;
          selectedLayers[2] = metal;
        }

      }
      else if (dropdown1.selection.index == 6) {
        var metal = null;
        var ambient = null;
        var detail = null;
        var smoothness = null;
        for(var i = 0; i < g_doc.artLayers.length; ++i)
        {
          if (g_doc.artLayers[i].name.indexOf("~ME") != -1)
          {
            metal = g_doc.artLayers[i];
          }
          else if (g_doc.artLayers[i].name.indexOf("~AO") != -1)
          {
            ambient = g_doc.artLayers[i];
          }
          else if (g_doc.artLayers[i].name.indexOf("~DE") != -1)
          {
            detail = g_doc.artLayers[i];
          }
          else if (g_doc.artLayers[i].name.indexOf("~GL") != -1)
          {
            smoothness = g_doc.artLayers[i];
          }

          if ( metal != null && ambient != null && detail != null && smoothness != null)
          {
            break;
          }
        }

        if (metal == null)
        {
          alert("There is no Metalness Layer with suffix ~ME");
          return;
        }
        if (ambient == null)
        {
          alert("There is no Ambient Occlusion Layer with suffix ~AO");
          return;
        }
        if (detail == null)
        {
          alert("There is no Detail Layer with suffix ~DE");
          return;
        }
        if (smoothness == null)
        {
          alert("There is no Smoothness Layer with suffix ~GL");
          return;
        }

        selectedLayers = [metal, ambient, detail, smoothness];

      }
      else
      {
        var ambient = null;
        var glossiness = null;

        for(var i = 0; i < g_doc.artLayers.length; ++i)
        {
          if (g_doc.artLayers[i].name.indexOf("~AO") != -1)
          {
            ambient = g_doc.artLayers[i];
          }
          else if (g_doc.artLayers[i].name.indexOf("~GL") != -1)
          {
            glossiness = g_doc.artLayers[i];
          }

          if (ambient != null && glossiness != null)
          {
            break;
          }
        }

        if (ambient == null)
        {
          alert("There is no Ambient Occlusion Layer with suffix ~AO");
          return;
        }
        if (glossiness == null)
        {
          alert("There is no Glossiness Layer with suffix ~GL");
          return;
        }

        selectedLayers = [glossiness, ambient];

        if (7 == dropdown1.selection.index)
        {
          mergeOptionStr = "~GA";
        }
        if (8 == dropdown1.selection.index)
        {
          mergeOptionStr = "~AG";
          selectedLayers = [ ambient, glossiness];
        }

      }

      for (var i = 0; i < selectedLayers.length; i++)
      {
        selectedLayers[i].visible = false;
      }
      
      var newLayer = g_doc.artLayers.add();

      fillColor = new SolidColor;
      fillColor.rgb.red = 0;
      fillColor.rgb.green = 0;
      fillColor.rgb.blue = 0;
      g_doc.selection.fill(fillColor);
      newLayer.visible = false;

      var iMax = selectedLayers.length < 4 ? selectedLayers.length : 4;
      //This is the case for a 4th layer
      if (iMax == 4)
      {
        //We have to check if there is already an alpha channel for this one
          alert("There are 4 layers");
          if (g_doc.channels.length < 4)
        {
          alert("There are 4 layers to merge and just 3 channels. Creating new one...");
          g_doc.channels.add();
          g_doc.channels[3].name = "Alpha";
        }
      }
      alert("a");
      for (var i = 0; i < iMax; i++)
      {
        g_doc.activeLayer = selectedLayers[i];
        g_doc.selection.selectAll();
        g_doc.selection.copy();  
        g_doc.selection.deselect();
        g_doc.activeLayer = newLayer;
        g_doc.activeChannels = [g_doc.channels[i]];
        g_doc.paste();
        selectedLayers[i].visible = false;
      }
      alert("b");

      g_doc.selection.deselect();
      
    }
    
    // Check if it should compress and how
    if (compresschk.value)
    {
      if (singleOpt.value)
      {
        var newWidth, newHeight;
        newWidth = ogWidth;
        newHeight = ogHeight;
  
        if (lodSldr.value != g_LOD.squaredMax + 1)
        {
          newHeight = Math.pow(2, lodSldr.value);
          newWidth  = Math.pow(2, lodSldr.value);
        }
  
        g_doc.resizeImage(newWidth, newHeight);
      }
      else 
      {
        var newWidth, newHeight;
        newWidth = ogWidth;
        newHeight = ogHeight;

        for(var i = lodSldr.value; i >= 0; --i)
        {
          progressBar.value = lodSldr.value > 0 ? 100 - (100 * i / lodSldr.value) : 100;
          newHeight = Math.pow(2, i);
          newWidth  = Math.pow(2, i);
          g_doc.resizeImage(newWidth, newHeight);

          // Check the saving format
          var saveValue = dropdown2.selection.index;
          var savePath = g_doc.path + '/' + g_doc.name +
          "_" + i.toString() +
          (mergechk.value ? (mergeOptionStr) : "");
          // PNG
          if (0 == saveValue)
          {
            var file = new File(savePath + ".png");
            var opts = new PNGSaveOptions();
            opts.quality = lodSldr.value;
            g_doc.saveAs(file, opts, true);
          }
          // TARGA
          if (1 == saveValue)
          {
            var file = new File(savePath + ".targa");
            opts = new TargaSaveOptions();
            opts.alphaChannels = true;
            opts.resolution = TargaBitsPerPixels.THIRTYTWO;
            g_doc.saveAs(file, opts, true);
          }
          // TIFF
          if (2 == saveValue)
          {
            var file = new File(savePath + ".tiff");
            opts = new TiffSaveOptions();
            g_doc.saveAs(file, opts, true);
          }
          // JPG
          if (3 == saveValue)
          {
            var file = new File(savePath + ".jpg");
            opts = new JPEGSaveOptions();
            g_doc.saveAs(file, opts, true);
          }
          // DDS
          if (5 == saveValue)
          {
            var idsave = charIDToTypeID( "save" );
            var desc14 = new ActionDescriptor();
            var idAs = charIDToTypeID( "As  " );
            var desc15 = new ActionDescriptor();
            var idsFoI = charIDToTypeID( "sFoI" );
            desc15.putInteger( idsFoI, 0 );
            var idsASC = charIDToTypeID( "sASC" );
            desc15.putInteger( idsASC, 0 );
            var idsTxT = charIDToTypeID( "sTxT" );
            var idenTT = charIDToTypeID( "enTT" );
            var idtxtwoD = charIDToTypeID( "tx2D" );
            desc15.putEnumerated( idsTxT, idenTT, idtxtwoD );
            var idmipF = charIDToTypeID( "mipF" );
            desc15.putBoolean( idmipF, true );
            var idmpFT = charIDToTypeID( "mpFT" );
            desc15.putInteger( idmpFT, 0 );
            var idmOFW = charIDToTypeID( "mOFW" );
            desc15.putBoolean( idmOFW, false );
            var idmFOV = charIDToTypeID( "mFOV" );
            desc15.putDouble( idmFOV, 2.000000 );
            var idmpPA = charIDToTypeID( "mpPA" );
            desc15.putBoolean( idmpPA, true );
            var idiOOM = charIDToTypeID( "iOOM" );
            var ideIOM = charIDToTypeID( "eIOM" );
            var ideICo = charIDToTypeID( "eICo" );
            desc15.putEnumerated( idiOOM, ideIOM, ideICo );
            var idiOBS = charIDToTypeID( "iOBS" );
            desc15.putBoolean( idiOBS, false );
            var idiOBr = charIDToTypeID( "iOBr" );
            desc15.putDouble( idiOBr, 0.000000 );
            var idiOBg = charIDToTypeID( "iOBg" );
            desc15.putDouble( idiOBg, 0.000000 );
            var idiOBb = charIDToTypeID( "iOBb" );
            desc15.putDouble( idiOBb, 0.000000 );
            var idiOBa = charIDToTypeID( "iOBa" );
            desc15.putDouble( idiOBa, 1.000000 );
            var idiOCQ = charIDToTypeID( "iOCQ" );
            desc15.putInteger( idiOCQ, 0 );
            var idiOSr = charIDToTypeID( "iOSr" );
            desc15.putDouble( idiOSr, 1.000000 );
            var idiOSg = charIDToTypeID( "iOSg" );
            desc15.putDouble( idiOSg, 1.000000 );
            var idiOSb = charIDToTypeID( "iOSb" );
            desc15.putDouble( idiOSb, 1.000000 );
            var idiOSa = charIDToTypeID( "iOSa" );
            desc15.putDouble( idiOSa, 1.000000 );
            var idiBir = charIDToTypeID( "iBir" );
            desc15.putDouble( idiBir, 0.000000 );
            var idiBig = charIDToTypeID( "iBig" );
            desc15.putDouble( idiBig, 0.000000 );
            var idiBib = charIDToTypeID( "iBib" );
            desc15.putDouble( idiBib, 0.000000 );
            var idiBia = charIDToTypeID( "iBia" );
            desc15.putDouble( idiBia, 0.000000 );
            var idiOWr = charIDToTypeID( "iOWr" );
            desc15.putBoolean( idiOWr, false );
            var idiOAZ = charIDToTypeID( "iOAZ" );
            desc15.putBoolean( idiOAZ, false );
            var idiOBA = charIDToTypeID( "iOBA" );
            desc15.putBoolean( idiOBA, false );
            var idiOSu = charIDToTypeID( "iOSu" );
            desc15.putBoolean( idiOSu, false );
            var idiOBT = charIDToTypeID( "iOBT" );
            desc15.putInteger( idiOBT, 127 );
            var idiOBD = charIDToTypeID( "iOBD" );
            desc15.putBoolean( idiOBD, false );
            var idiOPA = charIDToTypeID( "iOPA" );
            desc15.putBoolean( idiOPA, false );
            var idiOonezero = charIDToTypeID( "iO10" );
            desc15.putBoolean( idiOonezero, false );
            var idiZsd = charIDToTypeID( "iZsd" );
            desc15.putBoolean( idiZsd, true );
            var idiZlv = charIDToTypeID( "iZlv" );
            desc15.putInteger( idiZlv, 5 );
            var idnFTy = charIDToTypeID( "nFTy" );
            desc15.putInteger( idnFTy, 5 );
            var idnWrp = charIDToTypeID( "nWrp" );
            desc15.putBoolean( idnWrp, true );
            var idnIvX = charIDToTypeID( "nIvX" );
            desc15.putBoolean( idnIvX, false );
            var idnIvY = charIDToTypeID( "nIvY" );
            desc15.putBoolean( idnIvY, false );
            var idnMnZ = charIDToTypeID( "nMnZ" );
            desc15.putDouble( idnMnZ, 0.000000 );
            var idnNSc = charIDToTypeID( "nNSc" );
            desc15.putDouble( idnNSc, 1.000000 );
            var idnCSr = charIDToTypeID( "nCSr" );
            desc15.putInteger( idnCSr, 1 );
            var idnAFi = charIDToTypeID( "nAFi" );
            desc15.putInteger( idnAFi, 0 );
            var idnNNl = charIDToTypeID( "nNNl" );
            desc15.putBoolean( idnNNl, true );
            var idnNCF = charIDToTypeID( "nNCF" );
            var idenCD = charIDToTypeID( "enCD" );
            var idecnZ = charIDToTypeID( "ecnZ" );
            desc15.putEnumerated( idnNCF, idenCD, idecnZ );
            var idnNCU = charIDToTypeID( "nNCU" );
            var idenCD = charIDToTypeID( "enCD" );
            var idecpY = charIDToTypeID( "ecpY" );
            desc15.putEnumerated( idnNCU, idenCD, idecpY );
            var idnNCR = charIDToTypeID( "nNCR" );
            var idenCD = charIDToTypeID( "enCD" );
            var idecpX = charIDToTypeID( "ecpX" );
            desc15.putEnumerated( idnNCR, idenCD, idecpX );
            var idiOFV = charIDToTypeID( "iOFV" );
            desc15.putBoolean( idiOFV, false );
            var idfxSt = charIDToTypeID( "fxSt" );
            desc15.putString( idfxSt, """0 """ );
            var idsirV = charIDToTypeID( "sirV" );
            desc15.putInteger( idsirV, 1 );
            var idNVIDIADDSNVIDIATextureToolsExporter = stringIDToTypeID( "NVIDIA DDS - NVIDIA Texture Tools Exporter" );
            desc14.putObject( idAs, idNVIDIADDSNVIDIATextureToolsExporter, desc15 );
            var idIn = charIDToTypeID( "In  " );
            desc14.putPath( idIn, new File( savePath + ".dds" ) );
            var idDocI = charIDToTypeID( "DocI" );
            desc14.putInteger( idDocI, 219 );
            var idCpy = charIDToTypeID( "Cpy " );
            desc14.putBoolean( idCpy, true );
            var idsaveStage = stringIDToTypeID( "saveStage" );
            var idsaveStageType = stringIDToTypeID( "saveStageType" );
            var idsaveSucceeded = stringIDToTypeID( "saveSucceeded" );
            desc14.putEnumerated( idsaveStage, idsaveStageType, idsaveSucceeded );
            executeAction( idsave, desc14, DialogModes.NO );
          }
        }
        return;
      }
    }
    // Check the saving format
    var saveValue = dropdown2.selection.index;
    var savePath = g_doc.path + '/' + g_doc.name +
    "_" + lodSldr.value.toString() +
    (mergechk.value ? (mergeOptionStr) : "");
    // PNG
    if (0 == saveValue)
    {
      var file = new File(savePath + ".png");
      var opts = new PNGSaveOptions();
      opts.quality = lodSldr.value;
      g_doc.saveAs(file, opts, true);
    }
    // TARGA
    if (1 == saveValue)
    {
      var file = new File(savePath + ".targa");
      opts = new TargaSaveOptions();
      opts.alphaChannels = true;
      opts.resolution = TargaBitsPerPixels.THIRTYTWO;
      g_doc.saveAs(file, opts, true);
    }
    // TIFF
    if (2 == saveValue)
    {
      var file = new File(savePath + ".tiff");
      opts = new TiffSaveOptions();
      g_doc.saveAs(file, opts, true);
    }
    // JPG
    if (3 == saveValue)
    {
      var file = new File(savePath + ".jpg");
      opts = new JPEGSaveOptions();
      g_doc.saveAs(file, opts, true);
    }
    // DDS
    if (5 == saveValue)
    {
      var idsave = charIDToTypeID( "save" );
      var desc14 = new ActionDescriptor();
      var idAs = charIDToTypeID( "As  " );
      var desc15 = new ActionDescriptor();
      var idsFoI = charIDToTypeID( "sFoI" );
      desc15.putInteger( idsFoI, 0 );
      var idsASC = charIDToTypeID( "sASC" );
      desc15.putInteger( idsASC, 0 );
      var idsTxT = charIDToTypeID( "sTxT" );
      var idenTT = charIDToTypeID( "enTT" );
      var idtxtwoD = charIDToTypeID( "tx2D" );
      desc15.putEnumerated( idsTxT, idenTT, idtxtwoD );
      var idmipF = charIDToTypeID( "mipF" );
      desc15.putBoolean( idmipF, true );
      var idmpFT = charIDToTypeID( "mpFT" );
      desc15.putInteger( idmpFT, 0 );
      var idmOFW = charIDToTypeID( "mOFW" );
      desc15.putBoolean( idmOFW, false );
      var idmFOV = charIDToTypeID( "mFOV" );
      desc15.putDouble( idmFOV, 2.000000 );
      var idmpPA = charIDToTypeID( "mpPA" );
      desc15.putBoolean( idmpPA, true );
      var idiOOM = charIDToTypeID( "iOOM" );
      var ideIOM = charIDToTypeID( "eIOM" );
      var ideICo = charIDToTypeID( "eICo" );
      desc15.putEnumerated( idiOOM, ideIOM, ideICo );
      var idiOBS = charIDToTypeID( "iOBS" );
      desc15.putBoolean( idiOBS, false );
      var idiOBr = charIDToTypeID( "iOBr" );
      desc15.putDouble( idiOBr, 0.000000 );
      var idiOBg = charIDToTypeID( "iOBg" );
      desc15.putDouble( idiOBg, 0.000000 );
      var idiOBb = charIDToTypeID( "iOBb" );
      desc15.putDouble( idiOBb, 0.000000 );
      var idiOBa = charIDToTypeID( "iOBa" );
      desc15.putDouble( idiOBa, 1.000000 );
      var idiOCQ = charIDToTypeID( "iOCQ" );
      desc15.putInteger( idiOCQ, 0 );
      var idiOSr = charIDToTypeID( "iOSr" );
      desc15.putDouble( idiOSr, 1.000000 );
      var idiOSg = charIDToTypeID( "iOSg" );
      desc15.putDouble( idiOSg, 1.000000 );
      var idiOSb = charIDToTypeID( "iOSb" );
      desc15.putDouble( idiOSb, 1.000000 );
      var idiOSa = charIDToTypeID( "iOSa" );
      desc15.putDouble( idiOSa, 1.000000 );
      var idiBir = charIDToTypeID( "iBir" );
      desc15.putDouble( idiBir, 0.000000 );
      var idiBig = charIDToTypeID( "iBig" );
      desc15.putDouble( idiBig, 0.000000 );
      var idiBib = charIDToTypeID( "iBib" );
      desc15.putDouble( idiBib, 0.000000 );
      var idiBia = charIDToTypeID( "iBia" );
      desc15.putDouble( idiBia, 0.000000 );
      var idiOWr = charIDToTypeID( "iOWr" );
      desc15.putBoolean( idiOWr, false );
      var idiOAZ = charIDToTypeID( "iOAZ" );
      desc15.putBoolean( idiOAZ, false );
      var idiOBA = charIDToTypeID( "iOBA" );
      desc15.putBoolean( idiOBA, false );
      var idiOSu = charIDToTypeID( "iOSu" );
      desc15.putBoolean( idiOSu, false );
      var idiOBT = charIDToTypeID( "iOBT" );
      desc15.putInteger( idiOBT, 127 );
      var idiOBD = charIDToTypeID( "iOBD" );
      desc15.putBoolean( idiOBD, false );
      var idiOPA = charIDToTypeID( "iOPA" );
      desc15.putBoolean( idiOPA, false );
      var idiOonezero = charIDToTypeID( "iO10" );
      desc15.putBoolean( idiOonezero, false );
      var idiZsd = charIDToTypeID( "iZsd" );
      desc15.putBoolean( idiZsd, true );
      var idiZlv = charIDToTypeID( "iZlv" );
      desc15.putInteger( idiZlv, 5 );
      var idnFTy = charIDToTypeID( "nFTy" );
      desc15.putInteger( idnFTy, 5 );
      var idnWrp = charIDToTypeID( "nWrp" );
      desc15.putBoolean( idnWrp, true );
      var idnIvX = charIDToTypeID( "nIvX" );
      desc15.putBoolean( idnIvX, false );
      var idnIvY = charIDToTypeID( "nIvY" );
      desc15.putBoolean( idnIvY, false );
      var idnMnZ = charIDToTypeID( "nMnZ" );
      desc15.putDouble( idnMnZ, 0.000000 );
      var idnNSc = charIDToTypeID( "nNSc" );
      desc15.putDouble( idnNSc, 1.000000 );
      var idnCSr = charIDToTypeID( "nCSr" );
      desc15.putInteger( idnCSr, 1 );
      var idnAFi = charIDToTypeID( "nAFi" );
      desc15.putInteger( idnAFi, 0 );
      var idnNNl = charIDToTypeID( "nNNl" );
      desc15.putBoolean( idnNNl, true );
      var idnNCF = charIDToTypeID( "nNCF" );
      var idenCD = charIDToTypeID( "enCD" );
      var idecnZ = charIDToTypeID( "ecnZ" );
      desc15.putEnumerated( idnNCF, idenCD, idecnZ );
      var idnNCU = charIDToTypeID( "nNCU" );
      var idenCD = charIDToTypeID( "enCD" );
      var idecpY = charIDToTypeID( "ecpY" );
      desc15.putEnumerated( idnNCU, idenCD, idecpY );
      var idnNCR = charIDToTypeID( "nNCR" );
      var idenCD = charIDToTypeID( "enCD" );
      var idecpX = charIDToTypeID( "ecpX" );
      desc15.putEnumerated( idnNCR, idenCD, idecpX );
      var idiOFV = charIDToTypeID( "iOFV" );
      desc15.putBoolean( idiOFV, false );
      var idfxSt = charIDToTypeID( "fxSt" );
      desc15.putString( idfxSt, """0 """ );
      var idsirV = charIDToTypeID( "sirV" );
      desc15.putInteger( idsirV, 1 );
      var idNVIDIADDSNVIDIATextureToolsExporter = stringIDToTypeID( "NVIDIA DDS - NVIDIA Texture Tools Exporter" );
      desc14.putObject( idAs, idNVIDIADDSNVIDIATextureToolsExporter, desc15 );
      var idIn = charIDToTypeID( "In  " );
      desc14.putPath( idIn, new File( savePath + ".dds" ) );
      var idDocI = charIDToTypeID( "DocI" );
      desc14.putInteger( idDocI, 219 );
      var idCpy = charIDToTypeID( "Cpy " );
      desc14.putBoolean( idCpy, true );
      var idsaveStage = stringIDToTypeID( "saveStage" );
      var idsaveStageType = stringIDToTypeID( "saveStageType" );
      var idsaveSucceeded = stringIDToTypeID( "saveSucceeded" );
      desc14.putEnumerated( idsaveStage, idsaveStageType, idsaveSucceeded );
      executeAction( idsave, desc14, DialogModes.NO );
    }


    // Return to previous history state before the shitshow
    g_doc.activeHistoryState = savedState;
  }
  else 
  {
    alert("There is no document opened or active!");
  }


}



// GENERALTAB
// ==========
generalTab.selection = compressTab; 

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
      lodSldr.maxvalue = g_LOD.squaredMax + 1;
      lodSldr.value = g_LOD.squaredMax + 1;
      lodTxt.text = g_LOD.squaredMax.toString();
    }
  }
}

if (reloadFile) {
  $.evalFile($.fileName);
}