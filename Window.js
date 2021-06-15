var pic1File;
var pic2File;

var dlg = new Window( "dialog", "Alert Box Builder" );
btnPnl = dlg.add( "panel", undefined, "Build it" );
pic1Btn = btnPnl.add( "button", undefined, "Image 1" );
pic2Btn = btnPnl.add( "button", undefined, "Image 2" );
buildBtn = btnPnl.add( "button", undefined, "Build", {name: "ok" } );
cancelBtn = btnPnl.add( "button", undefined, "Cancel", { name: "cancel" } );

pic1Btn.onClick = function() {
    pic1File = new File;
    pic1File = pic1File.openDlg ( "Select Background Image", "Images: *.png; *.jpeg; *.jpg" )
    if( pic1File != null ) { pic1Btn.text = File.decode ( pic1File.name ) }
    else { 
        pic1File = new File;
        pic1Btn.text = "No file selected";
    }
}

pic2Btn.onClick = function() {
    pic2File = new File;
    pic2File = pic2File.openDlg ( "Select Background Image", "Images: *.png; *.jpeg; *.jpg" )
    if( pic2File != null ) { pic2Btn.text = File.decode ( pic2File.name ) }
    else { 
        pic2File = new File;
        pic2Btn.text = "No file selected";
    }
}

dlg.show();