// let allSource = document.querySelector('#next2');
// allSource.addEventListener('click', all);

// let dragSource = document.querySelector('#drag-source');
// dragSource.addEventListener('dragstart', dragStart);

// let dropTarget = document.querySelector('#target-container');
// dropTarget.addEventListener('drop', dropped);
// dropTarget.addEventListener('dragenter', cancelDefault);
// dropTarget.addEventListener('dragover', cancelDefault);


// function all() {		
// 	var bigImg = document.getElementById('drag-source');
// 	var myDiv = document.getElementById('target-container'); //获得dom对象
// 	myDiv.appendChild(bigImg);
// 	$("#result").css("display","none");
// 	$(".scrollBar").css("display","block");
// }



// function cancelDefault(e) {
//   e.preventDefault();
//   e.stopPropagation();
//   return false;
// }

// function dragStart(e) {
//   console.log('dragStart');
//   e.dataTransfer.setData('text/plain', e.target.id);
// }

// function dropped(e) {
//   console.log('dropped');
//   cancelDefault(e);
//   let id = e.dataTransfer.getData('text/plain');
//   e.target.appendChild(document.querySelector('#' + id));
//   $("#result").css("display","none");
//   $(".scrollBar").css("display","block");
// }
//比例
$("#size").change(function () {
	console.log($("#size").val());
	var width = $("#size").val();
	$("#target-container img").css("width",width+"%");
});
//左右
$("#marleft").change(function () {
	console.log($("#marleft").val());
	var marleft = $("#marleft").val();
	$("#target-container img").css("margin-left",marleft+"%");
});
//上下
$("#martop").change(function () {
	console.log($("#martop").val());
	var martop = $("#martop").val();
	$("#target-container img").css("top",martop+"%");
});
//旋轉
var degrees = 90;
$("#rotate").click(function () {
	console.log(degrees);
	$("#target-container img").css(
		{
		  "-webkit-transform" : "rotate("+degrees+"deg)",
			 "-moz-transform" : "rotate("+degrees+"deg)",  
			  "-ms-transform" : "rotate("+degrees+"deg)",  
			   "-o-transform" : "rotate("+degrees+"deg)",  
				  "transform" : "rotate("+degrees+"deg)",  
					   "zoom" : 1

			}
	);
	degrees += 90;
	if(degrees == 360){
		degrees =0;
	}
});