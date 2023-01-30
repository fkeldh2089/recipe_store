import React, { useEffect } from "react";

const GoogleBtn: React.FC = () => {
  const clientId: String = process.env.REACT_APP_CLIENT_ID || "";

  interface DecodedToken {
    name: String;
    email: String;
  }
  const parseJwt = (token: String): DecodedToken => {
    let base64Url = token.split(".")[1];
    let base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
    let jsonPayload = decodeURIComponent(
      atob(base64)
        .split("")
        .map(function (c) {
          return "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2);
        })
        .join("")
    );
    let parsed = JSON.parse(jsonPayload);
    let result: DecodedToken = { name: parsed.name, email: parsed.email };
    return result;
  };
  const handleCredentialResponse = (res) => {
    console.log(parseJwt(res.credential));
  };
  useEffect(() => {
    // console.log("use Effect");
    // window.google.accounts.id.initialize({
    //   client_id: clientId,
    //   callback: handleCredentialResponse,
    // });
    // window.google.accounts.id.renderButton(
    //   document.getElementById("buttonDiv"),
    //   { theme: "outline", size: "large" } // customization attributes
    // );
  });

  // useEffect(()=>{
  //   window.google
  // })
};
