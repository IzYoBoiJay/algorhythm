import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import UserContext from "./contexts/UserContext";

//Pages
import Dashboard from "./pages/Dashboard";
import PageNotFound from "./pages/404";

//Global Style
import { GlobalStyle } from "./globalStyles";
import Login from "./components/Login";

const App = (props) => {
  const [location, setLocation] = useState(props.location);
  const [authState, setAuthState] = useState({
    token: null,
    user: null,
  });

  useEffect(() => {
    const getToken = async () => {
      const response = await fetch("/auth/token");
      const json = await response.json();
      setAuthState((prevState) => ({ ...prevState, token: json.access_token }));
    };
    getToken();
  }, []);

  useEffect(() => {
    const getUserData = async () => {
      if (authState.token != null) {
        const settings = {
          headers: { Authorization: "Bearer " + authState.token },
        };
        const response = await fetch("https://api.spotify.com/v1/me", settings);
        const data = await response.json();
        setAuthState((prevState) => ({ ...prevState, user: data }));
      }
    };
    getUserData();
  }, [authState.token]);

  return (
    <Router>
      <UserContext.Provider value={authState}>
        <GlobalStyle />

        <Routes>
          {/* <Route exact path="/"  element={ (token === '') ? <Login/> : <WebPlayback token={token} /> } /> */}
          <Route
            exact
            path="/"
            element={authState.token == null ? <Login /> : <Dashboard />}
          />
          <Route path="/404" element={<PageNotFound />} />
        </Routes>
      </UserContext.Provider>
    </Router>
    /*
    <>
        { (token === '') ? <Login/> : <WebPlayback token={token} /> }
    </>
    */
  );
};

export default App;
