import React, { useState, useEffect, useContext } from "react";
import {
  UserContainer,
  ProfilePicture,
  Username,
  UsernameContainer,
} from "./UserElements";

import DefaultUserSvg from "../../assets/default-user.svg";

import UserContext from "../../contexts/UserContext";

function User(props) {
  const profile = useContext(UserContext).user;

  return (
    <>
      {profile && (
        <UserContainer>
          <ProfilePicture
            image={
              profile.images.length > 0 && profile.images[0].url
                ? profile.images[0].url
                : DefaultUserSvg
            }
            alt="Avatar"
            onClick={() => (window.location.href = profile.uri)}
          />
          <UsernameContainer width={profile.display_name.length * 25}>
            <Username>{profile.display_name}</Username>
          </UsernameContainer>
          {/* <p>{profile.followers.total} Followers</p> */}
        </UserContainer>
      )}
    </>
  );
}

export default User;
