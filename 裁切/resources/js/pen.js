const $upload = $('#upload'),
$crop = $('#crop'),
$result = $('#result'),
$croppie = $('#croppie');

var cr,
cr_img = '',
ori_img = '',
img_w = 320,
img_h = 400,
isCrop = 0;

//支援上傳檔案判斷
$(function () {
  if (window.File && window.FileList && window.FileReader)
  fileInit();else

  alert('您的裝置不支援圖片上傳');
});

//********* file select/drop *********
var fileselect = document.getElementById("fileselect"),
filedrag = document.getElementById("filedrag");

function fileInit() {
  // file select
  fileselect.addEventListener("change", FileSelectHandler, false);
  // is XHR2 available?
  var xhr = new XMLHttpRequest();
  // file drop
  if (xhr.upload) {
    filedrag.addEventListener("dragover", FileDragHover, false);
    filedrag.addEventListener("dragleave", FileDragHover, false);
    filedrag.addEventListener("drop", FileSelectHandler, false);
  }
}

// file selection
function FileSelectHandler(e) {
  // cancel event and hover styling
  FileDragHover(e);
  // fetch FileList object
  var files = e.target.files || e.dataTransfer.files;
  if (files[0] && files[0].type.match('image.*')) {
    var reader = new FileReader();
    reader.onload = function (e) {
      $upload.hide();
      if (cr_img == '') {//第一次上傳
        cr_img = e.target.result;
		ori_img = e.target.result;
        cropInit();
      } else
      {// 綁定照片
        cr_img = e.target.result;
        bindCropImg();
      }
      $crop.fadeIn(300);
    };
    reader.readAsDataURL(files[0]);
  }
}

// file drag hover
function FileDragHover(e) {
  e.stopPropagation();
  e.preventDefault();
  filedrag.className = e.type == "dragover" ? "hover" : "";
}

//********* crop *********
//裁切設定
function cropInit() {
  cr = $croppie.croppie({
    viewport: {
      width: img_w,
      height: img_h },

    boundary: {
      width: img_w,
      height: img_h },

    mouseWheelZoom: false,
    enableOrientation: true });

//創造滾動條與旋轉按鈕
 $(".cr-slider-wrap").append('<button id="cr-rotate" onClick="cropRotate(90);"><img src="./img/rotate.png" class="rotate-img">旋轉</button>');

  bindCropImg();
}

//綁定圖片
function bindCropImg() {
  cr.croppie('bind', {
    url: cr_img });

}

//旋轉按鈕
function cropRotate(deg) {
  cr.croppie('rotate', parseInt(deg));
}

//取消裁切
// function cropCancel() {
//   if ($upload.is(':hidden')) {
//     $upload.fadeIn(300).siblings().hide();
//     fileselect.value = "";
//     isCrop = 0;
//   }
// }

//1.圖片裁切與2.貼到背景上以及3.改變底圖高度，被我寫在一起了
function cropResult() {
	if (!isCrop) {
    $("#step3").css("display","block");
		$("#final").css("display","block");
    $("#img-crop").css("width","1020px");
    $("#img-crop").css("height","916px");
    $(".topbar").css("width","1020px");
		$("#target-container").css("backgroundImage","url("+ori_img+")");//set bg image
    var img = new Image();
    img.src = ori_img
		var ori_proportion = img.width/img.height;
    //這裡是改變底圖高度
    if (ori_proportion>1.5) {
      $("#target-container").css("height",782/ori_proportion+"px");
    }else{
      $("#target-container").css("width",521*ori_proportion+"px");
    }
    //到這裡    
    isCrop = 1;
		cr.croppie('result', {
			type: 'canvas', // canvas(base64)|html
			size: { width: img_w, height: img_h }, //'viewport'|'original'|{width:500, height:500}
			format: 'jpeg', //'jpeg'|'png'|'webp'
			quality: 1 //0~1
		}).then(function (resp) {
			$crop.hide();
			$result.find('img').attr('src', resp);
      //貼到背景
      var bigImg = document.getElementById('drag-source');
      var myDiv = document.getElementById('target-container'); //获得dom对象
      myDiv.appendChild(bigImg);
      //到這裡
      $("#result").css("display","none");
      $(".scrollBar").css("display","block");      
		});
  }
}
//關閉截圖頁面
function Close() {
  $("#img-crop").css("display","none");
}