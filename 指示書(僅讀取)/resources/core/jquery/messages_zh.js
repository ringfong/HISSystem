(function( factory ) {
	if ( typeof define === "function" && define.amd ) {
		define( ["jquery", "../jquery.validate"], factory );
	} else {
		factory( jQuery );
	}
}(function( $ ) {

/*
 * Translated default messages for the jQuery validation plugin.
 * Locale: ZH (Chinese, 中文 (Zhōngwén), 漢語)
 */
$.extend($.validator.messages, {
	required: "</br>格式錯誤",
	remote: "</br>請修正此字段",
	email: "</br>請輸入有效的電子郵件地址",
	url: "</br>請輸入有效的網址",
	date: "</br>請輸入有效的日期",
	dateISO: "</br>請輸入有效的日期 (YYYY-MM-DD)",
	number: "</br>請輸入有效的數字",
	digits: "</br>只能輸入數字",
	creditcard: "</br>請輸入有效的信用卡號碼",
	equalTo: "</br>你的輸入不相同",
	extension: "</br>請輸入有效的後綴",
	maxlength: $.validator.format("</br>最多可以輸入 {0} 個字符"),
	minlength: $.validator.format("</br>最少要輸入 {0} 個字符"),
	rangelength: $.validator.format("</br>請輸入長度在 {0} 到 {1} 之間的字符串"),
	range: $.validator.format("</br>請輸入範圍在 {0} 到 {1} 之間的數值"),
	max: $.validator.format("</br>請輸入不大於 {0} 的數值"),
	min: $.validator.format("</br>請輸入不小於 {0} 的數值")
});

}));