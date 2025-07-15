# Laravel 12 使用 FilePond 處理拆成多個給定大小的較小集合檔案

引入 rahulhaque 的 laravel-filepond 套件來擴增使用 FilePond 處理拆成多個給定大小的較小集合檔案，將大於傳送到伺服器的最小位元組數設定的檔案切成幾個部分，以便在網路上進行有效傳輸。

## 使用方式
- 把整個專案複製一份到你的電腦裡，這裡指的「內容」不是只有檔案，而是指所有整個專案的歷史紀錄、分支、標籤等內容都會複製一份下來。
```sh
$ git clone
```
- 將 __.env.example__ 檔案重新命名成 __.env__，如果應用程式金鑰沒有被設定的話，你的使用者 sessions 和其他加密的資料都是不安全的！
- 當你的專案中已經有 composer.lock，可以直接執行指令以讓 Composer 安裝 composer.lock 中指定的套件及版本。
```sh
$ composer install
```
- 產生 Laravel 要使用的一組 32 字元長度的隨機字串 APP_KEY 並存在 .env 內。
```sh
$ php artisan key:generate
```
- 執行 __Artisan__ 指令的 __migrate__ 來執行所有未完成的遷移。
```sh
$ php artisan migrate
```
- 執行安裝 Vite 和 Laravel 擴充套件引用的依賴項目。
```sh
$ npm install
```
- 執行正式環境版本化資源管道並編譯。
```sh
$ npm run build
```
- 在瀏覽器中輸入已定義的路由 URL 來訪問，例如：http://127.0.0.1:8000。
- 你可以經由 `/register` 來進行註冊。
- 完成註冊後，可以經由 `/login` 來進行登入。
- 完成登入後，可以經由 `/dashboard` 來進行檔案上傳。

----

## 畫面截圖
![](https://i.imgur.com/kVMIr51.png)
> 以分塊方式傳送資料資料
