//check browser and redirect klee v2.0
//added Opera browser ;-)
//added webTV
//This check uses the more reliable  brower's capabilities not the browser version number

if(document.layers){
   document.write("<meta http-equiv='refresh' content='0;URL=ns4.htm'>");
}
if(document.all && !document.getElementById){
   document.write("<meta http-equiv='refresh' content='0;URL=ie4.htm'>");
}
if(document.all && document.getElementById){
   document.write("<meta http-equiv='refresh' content='0;URL=ie5.htm'>");
}
if(!document.all && document.getElementById)
   document.write("<meta http-equiv='refresh' content='0;URL=ns6.htm'>");
}
if (navigator.userAgent.toLowerCase().indexOf( 'opera' ) + 1){
   document.write("<meta http-equiv='refresh' content='0;URL=ie5.htm'>");
}
if (navigator.appName.indexOf( 'WebTV' ) + 1){
   document.write("<meta http-equiv='refresh' content='0;URL=web.htm'>");
}
//check browser end