function doPost(e){
const sh=SpreadsheetApp.getActive().getSheets()[0];
const d=JSON.parse(e.postData.contents);
sh.appendRow([new Date(),d.name,d.time,d.attire,d.drink]);
return ContentService.createTextOutput("ok");
}