import React from "react";
import Post from "../components/Post";
import Navbar from "../components/Navbar";

function Login() {
  return (
    <div className="App">
      <Navbar />

      <Post />
      <header className="App-header">
        <a className="btn-spotify" href="/auth/login">
          Login with Spotify
        </a>
      </header>
    </div>
  );
}

export default Login;
