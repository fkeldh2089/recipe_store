import React, { useEffect } from "react";

export default function StartPage() {
  const clientId = process.env.REACT_APP_CLIENT_ID;
  function handleCredentialResponse(res) {
    console.log(res);
    console.log(parseJwt(res.credential));
  }
  useEffect(() => {
    // console.log("use Effect");
    window.google.accounts.id.initialize({
      client_id: clientId,
      callback: handleCredentialResponse,
    });
    window.google.accounts.id.renderButton(
      document.getElementById("buttonDiv"),
      { theme: "outline", size: "large" } // customization attributes
    );
  });
  function parseJwt(token) {
    var base64Url = token.split(".")[1];
    var base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
    var jsonPayload = decodeURIComponent(
      atob(base64)
        .split("")
        .map(function (c) {
          return "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2);
        })
        .join("")
    );

    let res = JSON.parse(jsonPayload);
    let result = { name: res.name, email: res.email };
    console.log(result);
    return JSON.parse(jsonPayload);
  }

  return (
    <div>
      <h1>StartPage</h1>
      <div id="buttonDiv"></div>
    </div>
  );
}
