function onOpen() {
  DocumentApp.getUi().createAddonMenu().addItem('Quran Text', 'showSidebar').addToUi()
}

function showSidebar(){
  var html = HtmlService.createTemplateFromFile('SidePanel').evaluate().setTitle('QuranText');
  DocumentApp.getUi().showSidebar(html);
}

function insertResult(textResult, fontSize){
      if(!fontSize){
        fontSize = 20;
    }
    DocumentApp.getActiveDocument().getCursor().insertText(textResult).setFontSize(fontSize);
}

