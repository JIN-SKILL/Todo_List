# 代辦清單
使用 Express.js + mongoDB 建置的簡易代辦清單。
https://jin-skill-todo-list.herokuapp.com/
![Todo_List](https://raw.githubusercontent.com/JIN-SKILL/Example_Image/main/Todo_List.png)

## 網站功能
+ 瀏覽代辦事項
+ 新增代辦事項
+ 修改代辦事項與狀態
+ 刪除代辦事項


## 使用工具
+ Node.js 14.15.3
+ Express 4.17.1
+ Express-Handlebars: 5.2.0
+ body-parser 1.19.0
+ mongoose 5.11.9
+ method-override 3.0.0
+ nodemon 2.0.6
+ Bootstrap 5.0.0
+ popper 2.5.4

## 安裝
1. 開啟終端機 (Terminal) 並前往安裝路徑的資料夾內輸入指令
    ```
    git clone https://github.com/JIN-SKILL/Todo_List.git
    ```
2. 進入專案資料夾
    ```
    cd Todo_List
    ```
3. 安裝所需套件
	```
    npm i
    ```
4. 匯入測試資料
	```
    npm run seed
    ```
5. 終端機 (Terminal) 顯示以下內容，即可按兩次 Ctrl+C 跳回控制介面
	```
    mongoDB connected.
    Completed seed loading.
    ```
6. 啟用 localhost 伺服器
	```
    npm run dev
    ```
7. 終端機 (Terminal) 顯示以下內容，即可在瀏覽器輸入 [http://localhost:3000](http://localhost:3000) 使用網站
	```
    The server is listening on http://localhost:3000
    mongoDB connected.
    ```
