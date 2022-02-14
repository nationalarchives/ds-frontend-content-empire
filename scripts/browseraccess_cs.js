//check browser klee v2.0
//added Opera browser 6/7;-)
//added webTV
//added Konqueror / Safari
//This check uses the more reliable  brower's capabilities not the browser version number

css_NS4 = "../../css/ns4.css";
css_NS6 = "../../css/ns6.css";
css_IE4 = "../../css/ie4.css";
css_IE5 = "../../css/ie5access.css";
css_OP6 = "../../css/op6.css";
css_WTV = "../../css/wtv.css";
css_KON = "../../css/kon.css";
if(document.layers){
   document.write("<link rel='stylesheet' href='" + css_NS4 + "' type='text/css'>");
}
if(document.all && !document.getElementById){
   document.write("<link rel='stylesheet' href='" + css_IE4 + "' type='text/css'>");
}
if(document.all && document.getElementById){
   document.write("<link rel='stylesheet' href='" + css_IE5 + "' type='text/css'>");
}
if(!document.all && document.getElementById){
   document.write("<link rel='stylesheet' href='" + css_NS6 + "' type='text/css'>");
}
if (navigator.userAgent.toLowerCase().indexOf( 'opera' ) + 1){
   document.write("<link rel='stylesheet' href='" + css_OP6 + "' type='text/css'>");
}
if (navigator.appName.indexOf( 'WebTV' ) + 1){
   document.write("<link rel='stylesheet' href='" + css_WTV + "' type='text/css'>");
}
if (document.childNodes && !document.all && !navigator.taintEnabled){
   document.write("<link rel='stylesheet' href='" + css_KON + "' type='text/css'>");
}
//check browser end