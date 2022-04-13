import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import WebPlayback from "./WebPlayback";

//Pages
import MainPage from "./pages/MainPage";
import PageNotFound from "./pages/404";

//Global Style
import { GlobalStyle } from "./globalStyles";

function App() {
  const [token, setToken] = useState("");

  useEffect(() => {
    async function getToken() {
      const response = await fetch("/auth/token");
      const json = await response.json();
      setToken(json.access_token);
    }

    getToken();
  }, []);

  return (
    <Router>
      <GlobalStyle />

      <Routes>
        <Route
          exact
          path="/"
          element={token === "" ? <MainPage /> : <WebPlayback token={token} />}
        />
        <Route path="/404" element={<PageNotFound />} />
      </Routes>
    </Router>
    /*
    <>
        { (token === '') ? <Login/> : <WebPlayback token={token} /> }
    </>
    */
  );
}

export default App;
