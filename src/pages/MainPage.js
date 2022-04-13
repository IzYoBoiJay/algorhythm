import React from "react";
import Navbar from "./Navbar";

function Login() {
  return (
    <div className="App">
      <Navbar />
      <header className="App-header">
        <a className="btn-spotify" href="/auth/login">
          Login with Spotify
        </a>
      </header>
    </div>
  );
}

export default Login;
