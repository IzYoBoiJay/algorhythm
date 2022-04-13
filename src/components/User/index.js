import React, { useState, useEffect, useContext } from "react";
import {
  UserCointainer,
  ProfilePicture,
  Username,
  UsernameContainer,
} from "./User";

import UserContext from "../../contexts/UserContext";

const GetUserData = async (token) => {
  const settings = {
    headers: { Authorization: "Bearer " + token },
  };
  const response = await fetch("https://api.spotify.com/v1/me", settings);
  const data = await response.json();
  console.log(data);
  return data;
};

function GetUserInfo(props) {
  const token = useContext(UserContext);

  const [profile, setProfile] = useState(null);
  useEffect(() => {
    async function fetchData() {
      if (token != null) {
        setProfile(await GetUserData(token));
      }
    }
    fetchData();
  }, [token]);

  return (
    <>
      {profile && (
        <UserCointainer>
          {profile.images.length && profile.images[0].url && (
            <ProfilePicture image={profile.images[0].url} alt="Avatar" />
          )}
          <UsernameContainer width={profile.display_name.length * 25}>
            <Username>{profile.display_name}</Username>
          </UsernameContainer>
          {/* <p>{profile.followers.total} Followers</p> */}
        </UserCointainer>
      )}
    </>
  );
}

export default GetUserInfo;
