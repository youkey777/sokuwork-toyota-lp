/* 応募フォーム: このページはデザイン確認用。送信先を持たないので、送らずにお知らせだけ出す */
document.addEventListener("submit", function (e) {
  e.preventDefault();
  alert("このページはデザイン確認用のため、入力内容は送信されません。");
});
