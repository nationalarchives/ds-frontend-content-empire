//klee screen resolution redirect v1.0
//Stats from TheCounter.com in March 2003
//800x600 - (46%) 
//1024x768 - (41%) 
//1280x1024 - (5%) 
//1152x864 - (3%) 
//640x480 - (2%) 
//1600x1200 - (0%)

if (window.screen){
  var w = screen.width;
  klee_640 = "600.htm";
  klee_800 = "800.htm";
  klee_1024 = "1024.htm";
  klee_1152 = "1152.htm";
  klee_1280 = "1280.htm";
  klee_1600 = "1600.htm";

  if(w<740){
    self.location.replace(klee_640);
  }
  if(w>=740 & w<835){
    self.location.replace(klee_800);
  }
  if(w>=835 & w<1065){
    self.location.replace(klee_1024);
  }
  if(w>=1065 & w<1200){
    self.location.replace(klee_1152);
  }
  if(w>=1200 & w<1540){
    self.location.replace(klee_1280);
  }
  if(w>=1540){
    self.location.replace(klee_1600);
  }
}//end screen resolution redirect
