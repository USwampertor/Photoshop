var doc  = app.activeDocument;

doc.resizeImage(doc.width / 16, doc.height / 16);

var file = new File( doc.path + "/" + doc.name + ".png");

var opts = new PNGSaveOptions();

doc.saveAs(file, opts, true);

// doc.resizeImage(doc.width * 8, doc.height * 8);
