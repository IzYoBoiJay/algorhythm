import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import SongCard from "../SongCard/index";
import axios from "axios";

import PlaybackContext from "../../contexts/PlaybackContext";

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

  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post(
        window.location.protocol +
          "//" +
          window.location.hostname +
          ":5001/create_post",
        {
          text: input.text,
          tags: input.tags.split(" "),
          songLink: playbackState.songLink,
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
