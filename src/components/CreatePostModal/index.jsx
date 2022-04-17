import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import SongCard from "../SongCard/index";
import axios from "axios";

import PlaybackContext from "../../contexts/PlaybackContext";

import UserContext from "../../contexts/UserContext";
import DefaultUserSvg from "../../assets/default-user.svg";

import {
  ModalContainer,
  ModalOverlay,
  CloseButton,
  ModalForm,
  CurrentlyPlaying,
  TextBox,
  HashtagsBox,
  SubmitButton,
} from "./CreatePostModalElements";

const CreatePostModal = () => {
  const navigate = useNavigate();
  const [input, setInput] = useState();
  const [playbackState, setPlaybackState] = useContext(PlaybackContext);
  const profile = useContext(UserContext).user;

  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post(
        window.location.protocol +
          "//" +
          window.location.hostname +
          ":4001/create_post",
        {
          text: input.text,
          tags: input.tags.split(" "),
          username: profile.display_name,
          userLink: profile.uri,
          profilepic: (profile.images.length > 0 && profile.images[0].url ? profile.images[0].url : DefaultUserSvg),
          picture: playbackState.picture,
          title: playbackState.songName,
          album: playbackState.album,
          artist: playbackState.artist,
          songLink: playbackState.songLink,
          created_at: Date.now(),
        }
      )
      .then((response) => {
        if (response.status === 200) {
          navigate(-1);
        }
      });
  };

  const handleChange = (event) => {
    setInput((prev) => ({ ...prev, [event.target.id]: event.target.value }));
  };

  return (
    <ModalOverlay>
      <ModalContainer>
        <CloseButton onClick={() => navigate(-1)} />
        <ModalForm onSubmit={handleSubmit}>
          <TextBox
            type="text"
            id="text"
            placeholder="What's happening?"
            onChange={handleChange}
          />
          <HashtagsBox
            type="text"
            id="tags"
            placeholder="#bambamdoggo #cheems #sebbynosleepy #pineapplesbelongonpizza #peepthefire"
            onChange={handleChange}
          />
          <SubmitButton type="submit" />
          <CurrentlyPlaying>
            Sharing the following banger: <br />
            {playbackState.songName}
          </CurrentlyPlaying>
        </ModalForm>
      </ModalContainer>
    </ModalOverlay>
  );
};

export default CreatePostModal;
