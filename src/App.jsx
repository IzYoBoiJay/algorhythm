import React, { useState, useEffect } from "react";
import { useLocation, Routes, Route, Navigate } from "react-router-dom";

import UserContext from "./contexts/UserContext";
import PlaybackContext from "./contexts/PlaybackContext";

//Pages
import Dashboard from "./pages/Dashboard";
import PageNotFound from "./pages/404";
import CreatePostModal from "./components/CreatePostModal/index";

//Global Style
import { GlobalStyle } from "./globalStyles";
import Login from "./components/Login";

const App = (props) => {
  let location = useLocation();
  const [authState, setAuthState] = useState({
    token: null,
    user: null,
  });

  const [playbackState, setPlaybackState] = useState({
    albumArt: null,
    albumName: null,
    songName: null,
    artists: null,
    isPaused: null,
    songLink: null,
  });

  useEffect(() => {
    const getToken = async () => {
      const response = await fetch(
        window.location.protocol +
          "//" +
          window.location.hostname +
          ":5000/auth_token"
      );
      const json = await response.json();
      console.log(response);
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
      } else {
        setAuthState((prevState) => ({ ...prevState, user: null }));
      }
    };
    getUserData();
  }, [authState.token]);

  return (
    <UserContext.Provider value={authState}>
      <PlaybackContext.Provider value={[playbackState, setPlaybackState]}>
        <GlobalStyle />

        <Routes>
          {/* <Route exact path="/"  element={ (token === '') ? <Login/> : <WebPlayback token={token} /> } /> */}
          <Route
            exact
            path="/"
            element={authState.token == null ? <Login /> : <Dashboard />}
          >
            <Route exact path="/share" element={<CreatePostModal />} />
          </Route>
          <Route path="/404" element={<PageNotFound />} />
        </Routes>
      </PlaybackContext.Provider>
    </UserContext.Provider>

    /*
    <>
        { (token === '') ? <Login/> : <WebPlayback token={token} /> }
    </>
    */
  );
};

export default App;
