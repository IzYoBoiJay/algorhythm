import React, { useState, useEffect } from "react";
import {
  useLocation,
  Routes,
  Route,
  Navigate,
  useSearchParams,
} from "react-router-dom";

import UserContext from "./contexts/UserContext";
import PlaybackContext from "./contexts/PlaybackContext";
import PostContext from "./contexts/PostContext";

import axios from "axios";

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

  const [posts, setPosts] = useState([]);

  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    axios
      .get(process.env.REACT_APP_SERVER_DOMAIN + "/posts/get_posts")
      .then((response) => {
        if (response.status === 200) setPosts(response.data);
      });
    if (searchParams.has("token")) {
      let token = searchParams.get("token");
      let expiration = searchParams.get("expires");
      let refreshToken = searchParams.has("refresh_token")
        ? searchParams.get("refresh_token")
        : null;
      if (token) {
        localStorage.setItem("spotify_access_token", token);
        localStorage.setItem("token_expiration", expiration);
        if (refreshToken) {
          localStorage.setItem("spotify_refresh_token", refreshToken);
        }
        window.history.replaceState(null, null, window.location.pathname);
      }
    }
  }, [location.pathname]);

  useEffect(() => console.log(posts), [posts]);

  const getNewToken = (refreshToken) => {
    axios
      .post(process.env.REACT_APP_SERVER_DOMAIN + "/auth/new_token", {
        refresh_token: refreshToken,
      })
      .then((response) => {
        if (response.status === 200) {
          localStorage.setItem("spotify_access_token", response.data.token);
          localStorage.setItem("token_expiration", response.data.expires);
          console.log("Refreshed token: " + response.data.token);
        }
      });
  };

  useEffect(() => {
    setAuthState((state) => {
      let token = localStorage.getItem("spotify_access_token");
      let expiration = parseInt(localStorage.getItem("token_expiration"));
      let refreshToken = localStorage.getItem("spotify_refresh_token");
      let remainingTime = new Date(expiration) - new Date();
      console.log(
        "The current token expires in " + remainingTime / 60000 + " minutes"
      );
      if (remainingTime > 0) {
        setTimeout(
          () => getNewToken(refreshToken),
          new Date(expiration) - new Date()
        );
      } else {
        getNewToken(refreshToken);
      }
      return {
        ...state,
        token,
        expiration,
        refreshToken,
      };
    });
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
        <PostContext.Provider value={[posts, setPosts]}>
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
        </PostContext.Provider>
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
