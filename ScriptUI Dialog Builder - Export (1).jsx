
/*
Code for Import https://scriptui.joonas.me — (Triple click to select): 
{"items":{"item-0":{"id":0,"type":"Dialog","parentId":false,"style":{"enabled":true,"varName":"g_dlg","windowType":"Window","creationProps":{"su1PanelCoordinates":false,"maximizeButton":false,"minimizeButton":false,"independent":false,"closeButton":false,"borderless":false,"resizeable":true},"text":"Game Developer Toolkit v2","preferredSize":[450,0],"margins":16,"orientation":"column","spacing":10,"alignChildren":["center","center"]}},"item-1":{"id":1,"type":"StaticText","parentId":28,"style":{"enabled":true,"varName":"dlgTitle","creationProps":{"truncate":"none","multiline":false,"scrolling":false},"softWrap":false,"text":"Made by Swampertor","justify":"left","preferredSize":[0,0],"alignment":null,"helpTip":null}},"item-3":{"id":3,"type":"Group","parentId":0,"style":{"enabled":true,"varName":"generalGrp","preferredSize":[0,0],"margins":0,"orientation":"row","spacing":10,"alignChildren":["left","center"],"alignment":null}},"item-4":{"id":4,"type":"Button","parentId":16,"style":{"enabled":true,"varName":"loadBtn","text":"Load Scrambled","justify":"center","preferredSize":[0,0],"alignment":null,"helpTip":null}},"item-5":{"id":5,"type":"Button","parentId":3,"style":{"enabled":true,"varName":"reloadBtn","text":"Reload Document","justify":"center","preferredSize":[0,0],"alignment":null,"helpTip":null}},"item-6":{"id":6,"type":"Button","parentId":3,"style":{"enabled":true,"varName":"closeBtn","text":"Close Toolkit","justify":"center","preferredSize":[0,0],"alignment":null,"helpTip":null}},"item-7":{"id":7,"type":"Panel","parentId":33,"style":{"enabled":true,"varName":"savePnl","creationProps":{"borderStyle":"etched","su1PanelCoordinates":false},"text":"Save Options","preferredSize":[0,0],"margins":10,"orientation":"column","spacing":10,"alignChildren":["center","center"],"alignment":"fill"}},"item-11":{"id":11,"type":"Button","parentId":7,"style":{"enabled":true,"varName":"saveBtn","text":"Save","justify":"center","preferredSize":[0,0],"alignment":null,"helpTip":null}},"item-12":{"id":12,"type":"Panel","parentId":33,"style":{"enabled":true,"varName":"compressPnl","creationProps":{"borderStyle":"etched","su1PanelCoordinates":false},"text":"Compression Level","preferredSize":[0,0],"margins":10,"orientation":"column","spacing":10,"alignChildren":["center","center"],"alignment":"fill"}},"item-13":{"id":13,"type":"Slider","parentId":12,"style":{"enabled":true,"varName":"lodSldr","preferredSize":[0,0],"alignment":"fill","helpTip":"This value represents the power you are elevating 2 \\n (i.e a value of 2 means 2`2 in final width and height) \\n The max value is the original width and height of the image"}},"item-14":{"id":14,"type":"StaticText","parentId":12,"style":{"enabled":true,"varName":"lodTxt","creationProps":{"truncate":"none","multiline":false,"scrolling":false},"softWrap":false,"text":"00","justify":"center","preferredSize":[0,0],"alignment":null,"helpTip":null}},"item-15":{"id":15,"type":"StaticText","parentId":12,"style":{"enabled":true,"varName":"compressTxt","creationProps":{"truncate":"none","multiline":false,"scrolling":false},"softWrap":false,"text":"Level of compression","justify":"center","preferredSize":[0,0],"alignment":null,"helpTip":"The amount of power possible for 2 \\n from the width and height of the original image \\n The max number is the original size"}},"item-16":{"id":16,"type":"Panel","parentId":33,"style":{"enabled":true,"varName":"mergePnl","creationProps":{"borderStyle":"etched","su1PanelCoordinates":false},"text":"Merge Settings","preferredSize":[0,0],"margins":10,"orientation":"column","spacing":10,"alignChildren":["center","center"],"alignment":"fill"}},"item-17":{"id":17,"type":"DropDownList","parentId":16,"style":{"enabled":true,"varName":null,"text":"DropDownList","listItems":"PBRM - Rough + Metal + AO,\nPBRM - Rough + AO + Metal,\nPBRM - Metal + Rough + AO,\nPBRM - Metal + AO + Rough,\nPBRM - AO + Metal + Rough,\nPBRM - AO + Rough + Metal,\n,-,\nPBRS - Gloss + AO,\nPBRS - AO + Gloss ","preferredSize":[0,0],"alignment":"fill","selection":1,"helpTip":null}},"item-19":{"id":19,"type":"Checkbox","parentId":7,"style":{"enabled":true,"varName":"compresschk","text":"Compress","preferredSize":[0,0],"alignment":"left","helpTip":null,"checked":false}},"item-20":{"id":20,"type":"Checkbox","parentId":7,"style":{"enabled":true,"varName":"mergechk","text":"Merge","preferredSize":[0,0],"alignment":"left","helpTip":null,"checked":false}},"item-21":{"id":21,"type":"Group","parentId":7,"style":{"enabled":false,"varName":"compressgrp","preferredSize":[0,0],"margins":[0,0,0,30],"orientation":"column","spacing":10,"alignChildren":["left","center"],"alignment":"left"}},"item-22":{"id":22,"type":"RadioButton","parentId":21,"style":{"enabled":true,"varName":"singleOpt","text":"Compress single","preferredSize":[0,0],"alignment":"top","helpTip":"Compress only the compression slider active value","checked":true}},"item-23":{"id":23,"type":"RadioButton","parentId":21,"style":{"enabled":true,"varName":"allOpt","text":"Compress all ","preferredSize":[0,0],"alignment":null,"helpTip":"Compress all values from 0 to the active value","checked":false}},"item-24":{"id":24,"type":"DropDownList","parentId":7,"style":{"enabled":true,"varName":null,"text":"DropDownList","listItems":"PNG, JPG,-,DDS (requires NVIDIA Export plugin)","preferredSize":[0,0],"alignment":"fill","selection":0,"helpTip":null}},"item-25":{"id":25,"type":"StaticText","parentId":7,"style":{"enabled":true,"varName":"saveTxt","creationProps":{"truncate":"none","multiline":false,"scrolling":false},"softWrap":false,"text":"Save as","justify":"left","preferredSize":[0,0],"alignment":"left","helpTip":null}},"item-26":{"id":26,"type":"Progressbar","parentId":7,"style":{"enabled":true,"varName":"progressBar","preferredSize":[50,4],"alignment":"fill","helpTip":null}},"item-27":{"id":27,"type":"Button","parentId":3,"style":{"enabled":true,"varName":"aboutBtn","text":"About this Tool","justify":"center","preferredSize":[0,0],"alignment":null,"helpTip":null}},"item-28":{"id":28,"type":"Group","parentId":0,"style":{"enabled":true,"varName":"titleGrp","preferredSize":[0,0],"margins":0,"orientation":"row","spacing":10,"alignChildren":["center","center"],"alignment":"fill"}},"item-29":{"id":29,"type":"Image","parentId":28,"style":{"enabled":true,"varName":"toolImg","image":["data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAQdJREFUeNrslv0NgyAQxcV0AEZwBEdoN3AEu0E7iSN0hW6gG9gRuoFuQB8NtGg9QSL4R33JixcUf3zcEZiAkg2UJhvpYMRX+BGYl8PVOxJfHV164rsc5j5UydCwdEGnAu4QtnCH+OY7AOcZ410moeJXVegZFzAn2jfJah4afF/Yvg6YMfbE4wz3RnOjSjBcchnfcpUgWbRyUjPv4UatgDmYWtZ3tORSdVzDcrUWwVPLjyu4tEBzI8Pd4dQeq5NJq5zY61ZMq6Pg5h5PgkfQAdwCnYXPggmo1sUBSsJJsAXqowGcArcijD5wE8wiXX3kiXfSmR/z6jMuvYT93WVvB+/gHbyaXgIMAHWCmD3KjfSwAAAAAElFTkSuQmCC"],"alignment":null,"helpTip":null}},"item-30":{"id":30,"type":"Button","parentId":12,"style":{"enabled":true,"varName":"rescaleBtn","text":"Rescale Document","justify":"center","preferredSize":[0,0],"alignment":null,"helpTip":null}},"item-31":{"id":31,"type":"TabbedPanel","parentId":0,"style":{"enabled":true,"varName":"generalTab","preferredSize":[0,0],"margins":10,"alignment":null,"selection":34}},"item-33":{"id":33,"type":"Tab","parentId":31,"style":{"enabled":true,"varName":"compressTab","text":"Export Tools","orientation":"column","spacing":10,"alignChildren":["center","top"]}},"item-34":{"id":34,"type":"Tab","parentId":31,"style":{"enabled":true,"varName":"mappingTab","text":"Mapping Tools","orientation":"column","spacing":10,"alignChildren":["center","top"]}},"item-35":{"id":35,"type":"Divider","parentId":0,"style":{"enabled":true,"varName":"generalDivider"}},"item-36":{"id":36,"type":"Divider","parentId":0,"style":{"enabled":true,"varName":"tabDivider"}},"item-37":{"id":37,"type":"Button","parentId":49,"style":{"enabled":true,"varName":"roughglossBtn","text":"Invert Roughness - Glossiness","justify":"center","preferredSize":[0,0],"alignment":null,"helpTip":"This will just invert the layer of the Roughness/Glosiness map in order to adapt to the pipeline needed"}},"item-42":{"id":42,"type":"StaticText","parentId":49,"style":{"enabled":true,"varName":"roughglossTxt","creationProps":{"truncate":"none","multiline":false,"scrolling":false},"softWrap":false,"text":"Roughness and Glossiness are only inverted values","justify":"center","preferredSize":[0,0],"alignment":null,"helpTip":null}},"item-49":{"id":49,"type":"Panel","parentId":34,"style":{"enabled":true,"varName":"roughglossPnl","creationProps":{"borderStyle":"etched","su1PanelCoordinates":false},"text":"Roughness - Glossiness","preferredSize":[0,0],"margins":10,"orientation":"column","spacing":10,"alignChildren":["center","center"],"alignment":"fill"}},"item-50":{"id":50,"type":"Panel","parentId":34,"style":{"enabled":true,"varName":"createPnl","creationProps":{"borderStyle":"etched","su1PanelCoordinates":false},"text":"Normal","preferredSize":[0,0],"margins":10,"orientation":"column","spacing":10,"alignChildren":["center","center"],"alignment":"fill"}},"item-51":{"id":51,"type":"Button","parentId":50,"style":{"enabled":true,"varName":"normalBtn","text":"Create Normal Map","justify":"center","preferredSize":[0,0],"alignment":"center","helpTip":null}},"item-53":{"id":53,"type":"Button","parentId":50,"style":{"enabled":true,"varName":"specularBtn","text":"Create Specular Map","justify":"center","preferredSize":[0,0],"alignment":null,"helpTip":"The tool will attempt to create a Specular Map from Albedo, AO and "}},"item-54":{"id":54,"type":"Divider","parentId":34,"style":{"enabled":true,"varName":"mapDivider"}},"item-55":{"id":55,"type":"StaticText","parentId":34,"style":{"enabled":true,"varName":"experimentalTxt","creationProps":{"truncate":"none","multiline":false,"scrolling":false},"softWrap":false,"text":"Experimental section","justify":"left","preferredSize":[0,0],"alignment":null,"helpTip":null}},"item-57":{"id":57,"type":"Button","parentId":50,"style":{"enabled":true,"varName":"diffuseBtn","text":"Create Diffuse Map","justify":"center","preferredSize":[0,0],"alignment":null,"helpTip":null}},"item-58":{"id":58,"type":"Tab","parentId":31,"style":{"enabled":true,"varName":"extraTab","text":"Extras","orientation":"column","spacing":10,"alignChildren":["left","top"]}}},"order":[0,28,29,1,35,3,5,27,6,36,31,33,12,15,13,14,30,16,17,4,7,19,21,22,23,20,25,24,11,26,34,49,37,42,54,55,50,51,53,57,58],"settings":{"importJSON":true,"indentSize":false,"cepExport":false,"includeCSSJS":true,"showDialog":true,"functionWrapper":false,"afterEffectsDockable":false,"itemReferenceList":"None"},"activeId":34}
*/ 

// G_DLG
// =====
var g_dlg = new Window("window", undefined, undefined, {closeButton: false, resizeable: true}); 
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

var toolImg_imgString = "%C2%89PNG%0D%0A%1A%0A%00%00%00%0DIHDR%00%00%00%1E%00%00%00%1E%08%06%00%00%00%3B0%C2%AE%C2%A2%00%00%00%19tEXtSoftware%00Adobe%20ImageReadyq%C3%89e%3C%00%00%01%07IDATx%C3%9A%C3%AC%C2%96%C3%BD%0D%C2%83%20%10%C3%85%C3%85t%00Fp%04Gh7p%04%C2%BBA%3B%C2%89%23t%C2%85n%C2%A0%1B%C3%98%11%C2%BA%C2%81n%40%1F%0D%C2%B4h%3DA%22%C3%B8G%7D%C3%89%C2%8B%17%14%7F%7C%C3%9C%11%C2%98%C2%80%C2%92%0D%C2%94%26%1B%C3%A9%60%C3%84W%C3%B8%11%C2%98%C2%97%C3%83%C3%95%3B%12_%1D%5Dz%C3%A2%C2%BB%1C%C3%A6%3ET%C3%89%C3%90%C2%B0tA%C2%A7%02%C3%AE%10%C2%B6p%C2%87%C3%B8%C3%A6%3B%00%C3%A7%19%C3%A3%5D%26%C2%A1%C3%A2WU%C3%A8%19%170'%C3%9A7%C3%89j%1E%1A%7C_%C3%98%C2%BE%0E%C2%981%C3%B6%C3%84%C3%A3%0C%C3%B7Fs%C2%A3J0%5Cr%19%C3%9Fr%C2%95%20Y%C2%B4rR3%C3%AF%C3%A1F%C2%AD%C2%809%C2%98Z%C3%96w%C2%B4%C3%A4Ru%5C%C3%83r%C2%B5%16%C3%81S%C3%8B%C2%8F%2B%C2%B8%C2%B4%40s%23%C3%83%C3%9D%C3%A1%C3%94%1E%C2%AB%C2%93I%C2%AB%C2%9C%C3%98%C3%ABVL%C2%AB%C2%A3%C3%A0%C3%A6%1EO%C2%82G%C3%90%01%C3%9C%02%C2%9D%C2%85%C3%8F%C2%82%09%C2%A8%C3%96%C3%85%01J%C3%82I%C2%B0%05%C3%AA%C2%A3%01%C2%9C%02%C2%B7%22%C2%8C%3Ep%13%C3%8C%22%5D%7D%C3%A4%C2%89w%C3%92%C2%99%1F%C3%B3%C3%AA3.%C2%BD%C2%84%C3%BD%C3%9Deo%07%C3%AF%C3%A0%1D%C2%BC%C2%9A%5E%02%0C%00u%C2%82%C2%98%3D%C3%8A%C2%8D%C3%B4%C2%B0%00%00%00%00IEND%C2%AEB%60%C2%82"; 
var toolImg = titleGrp.add("image", undefined, File.decode(toolImg_imgString), {name: "toolImg"}); 

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
    generalTab.preferredSize.width = 363.109; 
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
    mergePnl.alignment = ["fill","top"]; 

var dropdown1_array = ["PBRM - Rough + Metal + AO","PBRM - Rough + AO + Metal","PBRM - Metal + Rough + AO","PBRM - Metal + AO + Rough","PBRM - AO + Metal + Rough","PBRM - AO + Rough + Metal","","-","PBRS - Gloss + AO","PBRS - AO + Gloss"]; 
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

// GENERALTAB
// ==========
generalTab.selection = mappingTab; 

g_dlg.show();

