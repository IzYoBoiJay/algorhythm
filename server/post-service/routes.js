const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();

const router = express.Router();

router.get("/auth/login", (req, res, next) => {
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
