function report() {
	var target = "target-container";//設定目標框
	//set screen size
	var width = document.getElementById(target).width;
	var height = document.getElementById(target).height;	
	if(width!=0){
		//$("#main").css("width", width);
		//$("#main").css("height", height);
		//$("#controls").css("display", "none");
		$("#screenRes").css("display", "block");
		let region = document.querySelector("#"+target); // whole screen
		html2canvas(region, {
			onrendered: function(canvas) {
			  let pngUrl = canvas.toDataURL(); // png in dataURL format
			  let img = document.querySelector(".screen");
			  img.src = pngUrl; 				
			  // here you can allow user to set bug-region
			  // and send it with 'pngUrl' to server
			},		
		});
		$(".container").css("width", width);
		$(".container").css("height", height);				
		//$("#controls").css("display", "block");
		//console.log($("#"+target).attr("src")); //取圖暫存網址
	}
	else{
		alert("請先上傳圖片，再截圖!");
	}
	$("#fusion").css("z-index", "-1");	
}
function reset() {
	$("#controls").css("display", "block");
	document.getElementById('screen').removeAttribute('src');
}
// click to download
function save(){
	
	$("<a>")
		.attr("href", $("#screen").attr("src") )
		.attr("download", 'img.png')
		[0].click();
	
}

function first(){
	report();
	setTimeout("save();",100);
}
	