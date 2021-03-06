import React from "react";
import {
  LoginContainer,
  LoginContent,
  LoginItems,
  LoginH1,
  LoginP,
  LoginHyperlink,
} from "./LoginElements";

function Login() {
  return (
    <LoginContainer>
      <LoginContent>
        <LoginItems>
          <LoginH1>Algorhythm</LoginH1>
          <LoginP>
            Hop on the beat and see other people share what they're jamming to
          </LoginP>
          <LoginHyperlink
            href={process.env.REACT_APP_SERVER_DOMAIN + "/auth/login"}
          >
            Login with Spotify
          </LoginHyperlink>
        </LoginItems>
      </LoginContent>
    </LoginContainer>
  );
}

export default Login;
