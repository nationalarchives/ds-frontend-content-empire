time=0;

function newimg(arg) {
	if (document.images) {
		rst = new Image();
		rst.src = arg;
		return rst;
	}
}

var preflag = false;
function imgs_and_handlers() {
	if (document.images) {
		preflag = true;
	}
	if (document.layers) {
    	window.captureEvents(Event.MOUSEMOVE);
   		window.onmousemove=move; }
	else if (document.all)
   		document.onmousemove=move;
}

function changeimgs() {
	clearTimeout(time);
	if (document.images && (preflag == true)) {
		for (var i=0; i<changeimgs.arguments.length; i+=2) {
			document.images[changeimgs.arguments[i]].src = changeimgs.arguments[i+1];
		}
	}
}

function move(e)  {
   if (document.all) 
        musx=window.event.clientX, musy=window.event.clientY;
    else if (document.layers) 
        musx=e.pageX, musy=e.pageY;
	    menux=musx - 7
	if (menux >= 550)  {
			 menux=550; }
	if (menux <= 17) {
			 menux=17; }
	if (document.all['menu'].style != null){
			 document.all['menu'].style.left = menux; }
	if (document.layers) {
		  	 document.layers['menu'].left = menux;	}
}