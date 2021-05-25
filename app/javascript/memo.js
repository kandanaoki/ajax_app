function post (){
  const submit = document.getElementById("submit");
  // e:イベント発生時の情報を持ったオブジェクト
  submit.addEventListener("click", (e) => {
    // 既定のイベントを無効化するためのメソッド
    e.preventDefault();
    const form = document.getElementById("form");
    // フォームに入力された値を取得する
    const formData = new FormData(form);
    // 以下サーバー関係
    // JavaScriptを用いてサーバーとHTTP通信を行うときに利用するオブジェクト
    const XHR = new XMLHttpRequest();
    // リクエストの内容を指定するためのメソッド。第一引数にはHTTPメソッド、第二引数にはパス、第三引数には非同期通信であるかをtrueかfalse。
    XHR.open("POST", "/posts", true);
    // JavaScript Object Notation
    XHR.responseType = "json";
    // リクエストを送信するメソッド
    XHR.send(formData);
  });
};
 
 window.addEventListener('load', post);