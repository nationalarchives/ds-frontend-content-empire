//dynamic menu for Learning Curve (lc) - British Empire klee v1.0
//Empire klee v1.1 fix on Opera5 and NS7 and IE cell layer.
function lcLoadMenus() {
  if (window.lc_menu_0) return;
  window.lc_menu_0 = new Menu("root",148,19,"Verdana, Arial, Helvetica, sans-serif",10,"#9193b0","#ffffff","#ffffff","#9193b0","left","middle",0,0,1000,0,0,true,true,true,10,true,true);
  lc_menu_0.addMenuItem("SOURCE&nbsp;ONE","location='g1cs4s1a.htm'");
  lc_menu_0.addMenuItem("SOURCE&nbsp;TWO","location='g1cs4s2.htm'");
  lc_menu_0.addMenuItem("SOURCE&nbsp;THREE","location='g1cs4s3.htm'");
  lc_menu_0.addMenuItem("SOURCE&nbsp;FOUR","location='g1cs4s4.htm'");
  lc_menu_0.addMenuItem("SOURCE&nbsp;FIVE","location='g1cs4s5a.htm'");
  lc_menu_0.addMenuItem("SOURCE&nbsp;SIX","location='g1cs4s6.htm'");
  lc_menu_0.bgImageUp="../images/option_g1_d.gif";
  lc_menu_0.bgImageOver="../images/option_g1_u.gif";
  lc_menu_0.fontWeight="bold";
  lc_menu_0.hideOnMouseOut=true;
  lc_menu_0.writeMenus();
}//dynamic menu for Learning Curve end
