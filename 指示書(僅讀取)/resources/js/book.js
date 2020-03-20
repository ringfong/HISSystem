//拖曳選單dict
var dict = {'db1_1':'貴重金屬 87%Au(J"O")',
            'db1_2':'貴重金屬 74%Au',
            'db1_3':'貴重金屬 50%Au(Cameo)',
            'db1_4':'貴重金屬 15%Au',
            'db1_5':'半貴金屬 Ag-Pd(Jelstar)',
            'db1_6':'數位生物合金 AG Sintron',
            'db1_7':'含鈦合金 Titanium',
            'db1_8':'基本金屬',
            'db2_1':'金合金 75%Au',
            'db2_2':'金合金 50%Au',
            'db2_3':'金合金 40%Au',
            'db2_4':'金合金 20%Au',
            'db2_5':'銀鈀合金 Pd-Ag',
            'db2_6':'數位生物合金 AG Sintron',
            'db2_7':'含鈦合金 Titanium',
            'db2_8':'基本金屬',
            'db3_1':'e.max',
            'db3_2':'二氧化鋯',
            'db3_3':'Full crown',
            'db3_4':'Inlay',
            'db3_5':'Onlay',
            'db3_6':'Veneer',
            'db3_7':'Overlay',
            'db3_8':'燒瓷全瓷冠',
            'db3_9':'加牙肉色瓷:顏色',
            'db4_1':'偏側型',
            'db4_2':'衛生型',
            'db4_3':'子彈型',
            'db4_4':'馬鞍型',
            'db5_1':'Bite',
            'db5_2':'Tray',
            'db5_3':'舊牙',
            'db5_4':'參考模',
            'db5_5':'客製化支台齒',
            'db5_6':'Transfer Cap',
            'db5_7':'Transfer Post',
            'db5_8':'Abutment',
            'db5_9':'Analog',
            'db6_1':'Cement typ X',
            'db6_2':'Screw type X',
            'db6_3':'Screw-Cement type X',
            'db7_1':'Post 印模',
            'db7_2':'Post 樹酯',
            'db7_3':'材質 NPG',
            'db7_4':'材質 NI',
            'db7_5':'固定臨時假牙',
            'db7_6':'自填',
            }
//牙位調用
var dict2 = {'righttop':'1', 
             'rightbottom':'2',
             'leftbottom':'3',
             'lefttop':'4',
            }
//ajax調用
//上方
var Clinic_Name = $("input[id='form1_input1']").val();
var Doctor_Name = $("input[id='form1_input2']").val();
var Laboratory_Name = $("select[id='form1_input3']").val();
var Patient_Name = $("input[id='form1_input4']").val();
var Age = $("input[id='form1_input5']").val();
var Gender = $('input[type="radio"]:checked').val();
//上方日期
var ReceiveTime_Date = $("input[id='form1_input7_1']").val();
var ReceiveTime_AMPM = $("select[id='form1_input7_2']").val();
var ReceiveTime_Time = $("input[id='form1_input7_3']").val();
var TryOnTime_Date = $("input[id='form1_input8_1']").val();
var TryOnTime_AMPM = $("select[id='form1_input8_2']").val();
var TryOnTime_Time = $("input[id='form1_input8_3']").val();
var CompleteTime_Date = $("input[id='form1_input9_1']").val();
var CompleteTime_AMPM = $("select[id='form1_input9_2']").val();
var CompleteTime_Time = $("input[id='form1_input9_3']").val();
//拖曳
var db1_1, db1_2, db1_3, db1_4, db1_5, db1_6, db1_7, db1_8,
    db2_1, db2_2, db2_3, db2_4, db2_5, db2_6, db2_7, db2_8,
    db3_1, db3_2, db3_3, db3_4, db3_5, db3_6, db3_7, db3_8, db3_9,
    db4_1, db4_2, db4_3, db4_4,
    db5_1, db5_2, db5_3, db5_4, db5_5, db5_6, db5_7, db5_8, db5_9,
    db6_1, db6_2, db6_3,
    db7_1, db7_2, db7_3, db7_4, db7_5, db7_6, db7_7;
//拖曳內填值
var db3_9_text, db5_5_text, db5_6_text, db5_7_text, db5_8_text, db5_9_text, db6_1_text, db6_2_text, db6_3_text, db7_6_text;
//附加檔案
var File_Input1, File_Input2, File_Input3;
//齒位
var cb_tp_lefttop1, cb_tp_lefttop2, cb_tp_lefttop3, cb_tp_lefttop4, cb_tp_lefttop5, cb_tp_lefttop6, cb_tp_lefttop7, cb_tp_lefttop8,
    cb_tp_righttop1, cb_tp_righttop2, cb_tp_righttop3, cb_tp_righttop4, cb_tp_righttop5, cb_tp_righttop6, cb_tp_righttop7, cb_tp_righttop8,
    cb_tp_leftbottom1, cb_tp_leftbottom2, cb_tp_leftbottom3, cb_tp_leftbottom4, cb_tp_leftbottom5, cb_tp_leftbottom6, cb_tp_leftbottom7, cb_tp_leftbottom8,
    cb_tp_rightbottom1, cb_tp_rightbottom2, cb_tp_rightbottom3, cb_tp_rightbottom4, cb_tp_rightbottom5, cb_tp_rightbottom6, cb_tp_rightbottom7, cb_tp_rightbottom8 = '0';
var Textarea;
var now_tooth






//12小時制驗證判斷
jQuery.validator.addMethod("time12", function (value, element) {
                    return this.optional(element) || /^((0[0-9]|1[0-2]):([0-5][0-9]))$/gi.test(value);                    
                }, "</br>時間格式錯誤");

// 呼叫jquery日期格式
$(function() {    
  $(".form1_date").datepicker({
    changeMonth: true,
    changeYear: true,
    //showButtonPanel: true    
  });
  $(".form1_date").change(function(){
      $(this).css("color","#5A5A5A");      
    });
});
// 下拉選單hover(因瀏覽器問題無法起作用)
// $(document).ready(function (event) {   
//     $('option').on('mouseenter', 'option', function (e) {
//         this.style.background = "#F3FEFF";
//     });
//     $('option').on('mouseleave', 'option', function (e) {
//         this.style.background = "none";
//     });
// });

//日期恢復文字
function reset_input_text(id){
   if(id.value == ""){
    id.value = id.defaultValue;
    id.style.color = "#BDBDBD";
   }
};
//日期清除文字
function clear_input_text (id){
    id.value ="";
    id.style.color = "#5A5A5A";
};
// 表單驗證
$(function(){
    $("#bookform").validate({
        // 新增自訂驗證規則
        rules:{            
            // Clinic:{
            //     required:true,
            //     minlength:1
            // },
            // Doctor:{
            //     required:true,
            //     minlength:1
            // },
            // Patient:{
            //     required:true,
            //     minlength:1
            // },
            // Age:{
            //     required:true,
            //     number:true,                
            //     digits:true
            // },
            // ReceiveTime:{                
            //     dateISO:true
            // },
            // TryOnTime:{                
            //     dateISO:true
            // },
            // CompleteTime:{                
            //     dateISO:true 
            // },
            // Time1:{                
            //     time12: true
            // },
            // Time2:{                
            //     time12: true
            // },
            // Time3:{                
            //     time12: true
            // }
        },
        messages:{
            Age:{
                required: "</br></br></br>格式錯誤",
                number: "</br></br></br>請輸入有效的數字",
                digits: "</br></br></br>只能輸入數字"
            }
        }
    });
})

//拖曳式選項點選轉換
$(document).ready(function(){
    //上方表單聚焦變色
    $(".form1_input").click(function(){
        var input_id = $(this).attr("id");
        var label_count = input_id.substring(11, 12);
        var label_id = "#form1_text" + label_count;
        $(label_id).css('color','#77AAAD');        
    });
    $(".form1_input").blur(function(){
        var input_id = $(this).attr("id");
        var label_count = input_id.substring(11, 12);
        var label_id = "#form1_text" + label_count;
        $(label_id).css('color','#656B74');        
    });
    $(".area1_button").click(function(){
        //點擊轉換按鈕css變更        
        $(".area1_button").css('background','');
        $(".area1_button").css('color','');
        $(this).css('background','#6E7783');
        $(this).css('color','#FFFFFF');

        var value = $(this).attr("value");
        //三角形出現隱藏                
        var trianglename = "#triangle_" + value;
        $(".triangle").hide();
        $(trianglename).show();
        //拖拉區拖曳出現隱藏
        var area_display = "#form2_kind" + value;
        $(".form2_area2").css('display','none');
        $(area_display).css('display','flex');
        //拖放區放置區域開關 
        var area_can_drop = "#put_area_" + value; 
        $(".area3_put_border").css('pointer-events','');
        $(area_can_drop).css('pointer-events','auto');        
    });
    //齒位
    $(".tooth_position_fake").click(function(){
        var tpid = $(this).attr("id");        
        $(this).toggleClass("tooth_position_fake_up");
        $(this).toggleClass("tooth_position_fake_down");
        $(this).toggleClass(tpid + "_up");
        $(this).toggleClass(tpid + "_down");
        var count = $(".tooth_position_fake_down").length;
        $(tooth_position_count).val(count);
    });    
    //性別選擇
    $("input[name='Gender']").click(function(){
        var checkGender=$(this).val();               
        Gender = checkGender;
    });
    //齒位隱藏選擇的checkbox
    $("input[type='checkbox']").change(function() {
        if(this.checked) {            
            eval(this.id + "= '1" +"'");
        }else{
            eval(this.id + "= '0" +"'");
        };
        //選擇牙位數字顯示
        var strall = '目前選擇牙位:'
        var obj = $("input[type='checkbox']");
        for (var i=0; i < obj.length; i++) {
            if (obj[i].checked) {
                var cb_tp_id = obj[i].id;
                var str01 = cb_tp_id.substring(6);
                var str02 = str01.substring(0, str01.length-1);
                var str03 = dict2[str02];
                var str04 = str01.substring(str01.length-1);
                var str05 = str03 + str04;
                strall = strall + str05 + ','                
            }
        }
        strall = strall.substring(0, strall.length-1);
        $("#now_tooth").text(strall);
        $("#now_tooth").css('display', 'block');
        if ($(".tooth_position_fake_down").length == 0){
            $("#now_tooth").css('display', 'none');
        }
    });    
    //拖曳選項刪除按鈕作用
    $('.area3_put_border').on('click', '.put_receive_cancel', function(){
        var cacel_id = $(this).attr("id");        
        var receive_id = cacel_id.split('cancel_').join("");        
        var receive_id_ctrl = "#"+ receive_id;
        //刪除上方不可拖曳選項
        var undrop_class = "." + receive_id;        
        $(undrop_class).remove();
        //清空傳送資料
        eval(receive_id + "= null");
        //回彈拖曳按鈕(刪除原有，建立新的並賦予相同id)
        var kind_count = receive_id.substring(2, 3);
        var kind_id = '#form2_kind' + kind_count;        
        $(this).remove();        
        $(kind_id).append($(receive_id_ctrl));        
        $(receive_id_ctrl).removeClass("area3_put_receive");
        $(receive_id_ctrl).addClass("area2_dropbutton");                
        var dvalue = "&emsp;"+dict[receive_id];
        $(receive_id_ctrl).html(dvalue);
        document.getElementById(receive_id).draggable = "true";        
    });
    // 圖片轉換base64存入資料庫
    $("#file_input1").change(function() {       
        var base64_code=document.getElementById("file1_64");        
        var file=this.files[0];            
        var reader=new FileReader();
        reader.readAsDataURL(file);        
        reader.onload=function(){
           base64_code.innerHTML = this.result;               
        }       
    });
    $("#file_input2").change(function() {       
        var base64_code=document.getElementById("file2_64");        
        var file=this.files[0];            
        var reader=new FileReader();
        reader.readAsDataURL(file);        
        reader.onload=function(){
           base64_code.innerHTML = this.result;               
        }       
    });
    $("#file_input3").change(function() {       
        var base64_code=document.getElementById("file3_64");        
        var file=this.files[0];            
        var reader=new FileReader();
        reader.readAsDataURL(file);        
        reader.onload=function(){
           base64_code.innerHTML = this.result;               
        }       
    });
});
        
// 拖曳功能
let dragSources = document.querySelectorAll('.area2_dropbutton');
dragSources.forEach(dragSource => {
  dragSource.addEventListener('dragstart', dragStart)
  //dragSource.addEventListener('dragend', dragEnd)  
})

let dropTargets = document.querySelectorAll('.area3_putable');
dropTargets.forEach(dropTarget => {
    dropTarget.addEventListener('drop', dropped)
    dropTarget.addEventListener('dragenter', dragEnter)
    dropTarget.addEventListener('dragover', cancelDefault)
})

function cancelDefault (e) {
    e.preventDefault(e);
    e.stopPropagation(e);    
    return false
}

//新增不可點擊半透明拖曳選項的計數器
var counter = 0

function dragStart (e) {
    createundropbutton(e);    
    e.dataTransfer.setData('text/plain', e.target.id);
}
//新增不可點擊半透明拖曳選項
function createundropbutton(e){
    e.dataTransfer.setData('text/plain', e.target.innerHTML);    
    let nodrop = e.dataTransfer.getData('text/plain');    
    var origin_id =  e.target.id;    
    var createelement = e.target.parentNode;
    var node = document.createElement("div");    
    createelement.appendChild(node);
    node.className = "area2_dropbutton " + origin_id;    
    node.innerHTML = nodrop;
    node.style.opacity = '0.5';
    node.draggable = false;
    node.style.cursor = "not-allowed";    
    counter = counter + 1;
    node.id = 'undrop_' + origin_id + counter;
    var node_class = '.' + origin_id;
    $(node_class).css('display','none');
}


function dragEnd (e) {    
    e.dataTransfer.setData('text/plain', e.target.id);
}

//指定消除"拖曳項目至此"說明
function dragEnter (e) {
    $( e.target ).children(".explain").css('display','none');
    cancelDefault (e);    
}

function dropped (e) {      
    cancelDefault(e);    
    let id = e.dataTransfer.getData('text/plain');    
    var new_id = '#' + id;
    e.target.appendChild(document.querySelector(new_id));
    $(new_id).addClass("area3_put_receive");
    $(new_id).removeClass("area2_dropbutton");    
    $(new_id).draggable = false;
    //創造刪除按鈕
    var receive_cancel = 'cancel_' + id;
    var node2 = document.createElement("div");
    $(new_id).append(node2);
    node2.id = receive_cancel;
    cancel_id = '#' + receive_cancel
    $(cancel_id).addClass("put_receive_cancel");
    $(cancel_id).draggable = true;    
    //傳遞拖拉成功的id與value
    secretinput(id);
    //呈現不可點擊半透明拖曳選項
    var undrop_id = '#undrop_' + id + counter;
    $(undrop_id).css('display','flex');
}

//拖曳成功的id與value對應
function secretinput(id){    
    var dvalue = dict[id];
    eval(id + "= '" + dvalue+"'");
}

//儲存
function save(){
    Clinic_Name = $("input[id='form1_input1']").val();
    Doctor_Name = $("input[id='form1_input2']").val();
    Laboratory_Name = $("select[id='form1_input3']").val();
    Patient_Name = $("input[id='form1_input4']").val();
    Age = $("input[id='form1_input5']").val();
    Gender = $('input[type="radio"]:checked').val();

    ReceiveTime_Date = $("input[id='form1_input7_1']").val();
    ReceiveTime_AMPM = $("select[id='form1_input7_2']").val();
    ReceiveTime_Time = $("input[id='form1_input7_3']").val();
    TryOnTime_Date = $("input[id='form1_input8_1']").val();
    TryOnTime_AMPM = $("select[id='form1_input8_2']").val();
    TryOnTime_Time = $("input[id='form1_input8_3']").val();
    CompleteTime_Date = $("input[id='form1_input9_1']").val();
    CompleteTime_AMPM = $("select[id='form1_input9_2']").val();
    CompleteTime_Time = $("input[id='form1_input9_3']").val();
    
    File_Input1 = $("#file1_64").val();
    File_Input2 = $("#file2_64").val();
    File_Input3 = $("#file3_64").val();

    now_tooth = $("#now_tooth").text();

    Textarea = $("textarea[id='textarea']").val();
}
//取消
function reload(){
    location.reload();
}
//前端測試用按鍵，正式版移除
function test(){    
    console.log(cb_tp_lefttop8);
    console.log(cb_tp_lefttop7);
    console.log(cb_tp_lefttop6);    
}


/*=============================================*/
                  /*溝通單部分*/
/*=============================================*/
var message ="";
var message_time = "";

$(document).ready(function(){
    //溝通單開啟
    $("#communication_sheet").click(function(){
        $(this).css("display", "none");
        $("#block_background").css("display", "block");
        $("#chatbox").css("display", "block");
    });
    //溝通單關閉
    $("#chat_close").click(function(){
        $("#communication_sheet").css("display", "flex");
        $("#block_background").css("display", "none");
        $("#chatbox").css("display", "none");
    });
    //輸入訊息聚焦
    $("#chat_send").focus(function(){
        if ($(this).val()=="輸入訊息") {
            $(this).val("")
            $(this).css('color','#5A5A5A');
            $(this).css('line-height','25px');
        }        
    });
    //輸入訊息失焦
    $("#chat_send").blur(function(){
        if ($(this).val()=="") {
            $(this).val("輸入訊息")
            $(this).css('color','#BDBDBD');
            $(this).css('line-height','75px');
        }
    });
    //聊天訊息發送
    $("#chat_send_button").click(function(){
        $("#chat_img").css('display','none');
        message = $("#chat_send").val();
        if (message == "輸入訊息"){
            message = "";            
        };        
        message_div = message.replace(/\n/g,"<br>");
        //抓取日期(可能會有1~9只顯示單個數字的問題)
        var today=new Date();
        message_time = 
        today.getFullYear()+'年'+
        (today.getMonth()+1)+'月'+
        today.getDate()+'日<br/>'+
        today.getHours()+':'+today.getMinutes();
        //抓取舊資料
        var history = document.getElementById('chat_history').innerHTML
        //複寫新資料
        document.getElementById('chat_history').innerHTML =
        history + '<div class="chat_message"><div class="speaker_information chat_me"><div class="speaker_photo photo_me"></div><div class="speaker_name">' + 
        '醫師' + '</div></div><div class="message_recording chat_me"><div class="message_empty"></div><div class="message message_me">' + 
        message_div + '</div><div class="message_time">' + 
        message_time + '</div></div></div>';
        //清空信息欄
        $("#chat_send").val("輸入訊息")
        $("#chat_send").css('color','#BDBDBD');
        $("#chat_send").css('line-height','75px');
        setTimeout("chatrobot()" , 2000); //聊天機器人，記得刪 
        //使每次點選寄送都將scroll下拉到底部
        $("#chat_history").scrollTop($("#chat_history")[0].scrollHeight);        
    });
});

//測試用聊天機器人(記得刪)
var robot = ["你好", "Andy說自己很帥", "Andy是大師", "Gary顏值擔當", "Simon都霸凌我", "人資吸毒<br>人資吸毒<br>人資吸毒<br>人資吸毒"]
function chatrobot(){
    var today=new Date();
        message_time = 
        today.getFullYear()+'年'+
        (today.getMonth()+1)+'月'+
        today.getDate()+'日<br/>'+
        today.getHours()+':'+today.getMinutes();

    var history = document.getElementById('chat_history').innerHTML
    
    var random = Math.floor(Math.random()*6);
    var mes = robot[random];
    document.getElementById('chat_history').innerHTML =
        history + '<div class="chat_message"><div class="speaker_information chat_you"><div class="speaker_photo photo_you"></div><div class="speaker_name">' + 
        '牙技師' + '</div></div><div class="message_recording chat_you"><div class="message_empty"></div><div class="message message_you">' + 
        mes + '</div><div class="message_time">' + 
        message_time + '</div></div></div>';
    $("#chat_history").scrollTop($("#chat_history")[0].scrollHeight);
}
