// chrome.action.onClicked.addListener((tab) => {
//   console.log("clicked");
//   console.log(tab);
//   // chrome.desktopCapture.chooseDesktopMedia(["tab"], tab, (streamId) => {
//   //   console.log("captured", streamId);
//   // });
//   console.log(chrome.identity);
// });

// let userInfo;
// 유저 정보 확인
// chrome.identity.getProfileUserInfo(async (accountInfo) => {
//   console.log(accountInfo);
//   userInfo = accountInfo.email;
// });
// tab url 확인
// chrome.tabs.query({ active: true, lastFocusedWindow: true }, (tabs) => {
//   let url = tabs[0].url;
//   console.log(url);
// });
// popup
chrome.action.setPopup({ popup: "./popup/popup.html" }, () => {
  console.log("pop");
});

// 설치 시 동작 확인 페이지
// chrome.runtime.onInstalled.addListener(async () => {
//   let url = chrome.runtime.getURL("hello.html");
//   await chrome.tabs.create({ url });

//   console.log(`hello`);
// });
