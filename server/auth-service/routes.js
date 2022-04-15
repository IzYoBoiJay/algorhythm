const express = require("express");
const axios = require("axios");
require("dotenv").config();

const generateRandomString = (length) => {
  let text = "";
  let possible =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

  for (let i = 0; i < length; i++) {
    text += possible.charAt(Math.floor(Math.random() * possible.length));
  }
  return text;
};

let spotify_client_id = process.env.SPOTIFY_CLIENT_ID;
let spotify_client_secret = process.env.SPOTIFY_CLIENT_SECRET;

let spotify_redirect_uri = "http://localhost:3000/auth/callback";

const router = express.Router();

router.get("/login", (req, res, next) => {
  let scope = "streaming user-read-email user-read-private";
  let state = generateRandomString(16);
  let auth_query_parameters = new URLSearchParams({
    response_type: "code",
    client_id: spotify_client_id,
    scope: scope,
    redirect_uri: spotify_redirect_uri,
    state: state,
  });

  res.redirect(
    "https://accounts.spotify.com/authorize/?" +
      auth_query_parameters.toString()
  );
});

router.get("/auth/callback", (req, res) => {
  let code = req.query.code;

  const formData = new URLSearchParams({
    code: code,
    redirect_uri: spotify_redirect_uri,
    grant_type: "authorization_code",
  });

  axios
    .request({
      url: "https://accounts.spotify.com/api/token",
      method: "POST",
      headers: {
        Authorization:
          "Basic " +
          Buffer.from(spotify_client_id + ":" + spotify_client_secret).toString(
            "base64"
          ),
        "Content-Type": "application/x-www-form-urlencoded",
      },
      data: formData,
    })
    .then((response) => {
      if (response.status == "200") {
        access_token = response.data.access_token;
        res.redirect("/");
      }
    })
    .catch((error) => {
      console.log(error);
    });
});

router.get("/auth_token", (req, res) => {
  console.log("getting token");
  res.json({ access_token: access_token });
});

router.get("/logout", (req, res) => {
  console.log("logging out...");
  access_token = null;
  res.redirect("http://localhost:3000/");
});

module.exports = router;
