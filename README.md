# HIS醫療資訊系統專案
專案以ASP.NET MVC為架構進行開發，資料庫為MySQL Server。
本專案包含登錄系統、掛號系統、牙周、比色、指示書、衛教、圖庫、治療計畫書、報價單、後台系統等多組系統所構成，但因循公司保密協定，僅公開部分前期建構的模組，實際成品屬公司所有。

## 指示書示意說明
![image](https://github.com/ringfong/HISSystem/blob/master/ReadMeImg/%E6%8C%87%E7%A4%BA%E6%9B%B801.png)

前端處理 : 
1. session帶入病患資料。
2. 讀取資料庫排序，創建一個新的流水號在右上角顯示作為唯一值。
3. --請求後台的資料填入表單。
4. 日曆套件為jquery-ui，日期及時間格式資料庫限定，阻擋特殊輸入。
5. checkbox樣式為css特殊樣式動畫，性別為圖片模擬radio，詳見book.css註解。
6. 上傳圖片為label與input，上方顯示圖片名稱，下方預覽上傳圖片(轉成base64進行預覽)。
7. 齒位點選為label觸發隱藏的checkbox進行記錄，並改變class進行標記狀態，label為絕對定位進行對齊。
8. 右下fixed定位溝通單。
9. 圖片全部轉成base64存入資料庫(未來有雲端需進行更改)。
AJAX :
1. 進入頁面請求流水號
2. 請求病患詳細資料，後端由身分證字號(ID)關聯病患資料庫
3. 儲存為變數對應資料型式，交由後端分不同model進行處理

![image](https://github.com/ringfong/HISSystem/blob/master/ReadMeImg/%E6%8C%87%E7%A4%BA%E6%9B%B802.png)

前端處理 : 
1. 打字或有舊有資料消去預設圖片。
2. 向後端傳送布林值或0、1作為分辨依據，姓名和圖片從後台獲取，時間抓取現在時間轉換填入，再將文字內容存入資料庫。
3. 測試用自動回話的機器人。

![image](https://github.com/ringfong/HISSystem/blob/master/ReadMeImg/%E6%8C%87%E7%A4%BA%E6%9B%B803.png)

前端處理 :
1. 為指示書的閱讀版本，除日期可修改以外其他不能修改，採用readonly的模式禁止使用者修改。
2. 全部資料由資料庫讀入，與代寄送版的主要差別在圖片讀取。

## 比色系統示意說明

![image](https://github.com/ringfong/HISSystem/blob/master/ReadMeImg/%E6%AF%94%E8%89%B2%E8%A3%81%E5%88%8701.png)

前端處理 : 
1. 圖片上傳格式限制。
2. 上傳區域為label，觸發input type="file”，檔案上傳後提取Canvas顯示圖片，上傳label隱藏。

![image](https://github.com/ringfong/HISSystem/blob/master/ReadMeImg/%E6%AF%94%E8%89%B2%E8%A3%81%E5%88%8702.png)

前端處理 :
1. 提取圖片名稱，顯示並出現取消符號。
2. 動態抓取游標位置的顏色，顯示在檢色器。
3. 滑鼠點擊Canvas區域，將點擊當下的顏色取色記錄在選擇色碼。
4. 點擊校正將色碼傳給後端進行灰階修正的function，開啟反灰背景與裁切功能，將灰階修正的回傳圖片放入裁切底圖。

![image](https://github.com/ringfong/HISSystem/blob/master/ReadMeImg/%E6%AF%94%E8%89%B2%E8%A3%81%E5%88%8703.png)
![image](https://github.com/ringfong/HISSystem/blob/master/ReadMeImg/%E6%AF%94%E8%89%B2%E8%A3%81%E5%88%8704.png)

前端處理 :
1. 拖曳功能。
2. 圖片合成。
