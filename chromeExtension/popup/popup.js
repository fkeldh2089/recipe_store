document.addEventListener("DOMContentLoaded", function () {
  let btn1 = document.getElementById("btn1");
  btn1.addEventListener("click", async function () {
    const addRecipe = (recipeData) => {
      axios
        .post("http://localhost:8080/recipe", recipeData, {
          headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
          },
        })
        .then((res) => {
          let container1 = document.getElementById("beforeSave");
          let container2 = document.getElementById("afterSave");
          container1.className = "contaierFalse";
          container2.className = "container2";
          btn1.value = "성공!";
        })
        .catch((res) => (btn1.value = "문제 발생"));
    };
    chrome.identity.getProfileUserInfo(async (accountInfo) => {
      let userInfo = accountInfo.email;
      chrome.tabs.query({ active: true, lastFocusedWindow: true }, (tabs) => {
        let recipeUrl = tabs[0].url;
        reqRecipePost(userInfo, recipeUrl);
      });
    });
    const reqRecipePost = (userInfo, recipeUrl) => {
      let recipename = document.getElementById("recipename");
      let recipedesc = document.getElementById("recipedesc");
      let recipeName = recipename.value;
      let recipeDesc = recipedesc.value;
      const exData = {
        recipeUserEmail: userInfo,
        recipeName: recipeName,
        recipeUrl: recipeUrl,
        recipeDescription: recipeDesc,
        recipeProfileImg: "no img",
        recipeAnnotation: "no annotation",
      };
      addRecipe(exData);
    };
    // btn1.value = recipeUrl;
    // http://localhost:8080/recipe
    // https://22cc-182-219-247-111.jp.ngrok.io/recipe
  });
});
