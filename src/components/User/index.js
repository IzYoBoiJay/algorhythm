import React, { useState, useEffect } from 'react';
import {UserCointainer, ProfilePicture, Username, UsernameContainer} from './User'

const GetUserData = async (token) => {
    const settings = {
    headers: {'Authorization': 'Bearer ' + token}
    }
    const response = await fetch('https://api.spotify.com/v1/me', settings);
    const data = await response.json()
    console.log(data)
    return data;
}

function GetUserInfo(props) {
    const [profile, setProfile] = useState(null);
    useEffect(() => {
        console.log(props.token);
        async function fetchData() {
        if(props.token != null) {
                setProfile(await GetUserData(props.token));
            }
        }
        fetchData();
    }, [props.token]);

    return (
        <>
        {profile && (
          <UserCointainer>
            {profile.images.length && profile.images[0].url && (
              <ProfilePicture image={profile.images[0].url} alt="Avatar"/>
            )}
            <UsernameContainer width={profile.display_name.length*25}><Username>{profile.display_name}</Username></UsernameContainer>
            {/* <p>{profile.followers.total} Followers</p> */}
          </UserCointainer>
        )}
      </>
    );
  }
  
export default GetUserInfo;