
function timedCount() {
    for (var i = 0; i <= 100000000000000000000000; i += 1){
   	var j = i;
}
    postMessage(j);
    setTimeout("timedCount()",500);
}

timedCount(); 