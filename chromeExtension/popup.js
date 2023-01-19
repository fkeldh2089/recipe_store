document.addEventListener("DOMContentLoaded", function async() {
  let btn1 = document.getElementById("btn1");
  let userInfo;
  btn1.addEventListener("click", function async() {
    chrome.identity.getProfileUserInfo(async (accountInfo) => {
      console.log(accountInfo);
      userInfo = accountInfo.email;
    });
    btn1.value = "눌렸다!";
    // http://localhost:8080/recipe
    // https://22cc-182-219-247-111.jp.ngrok.io/recipe
    const addRecipe = (recipeData) => {
      axios
        .post("http://localhost:8080/recipe", recipeData, {
          headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
          },
        })
        .then((res) => (btn1.value = "성공!"))
        .catch((res) => (btn1.value = "실패!"));
    };
    const exData = {
      recipeUserId: 1,
      recipeName: "hi",
      recipeUrl: "https://www.10000recipe.com/recipe/6858156",
      recipeDescription: "Oh Jing Uh",
      recipeProfileImg: "no img",
      recipeAnnotation: "no annotation",
    };
    addRecipe(exData);
  });
});
