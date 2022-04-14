import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import SongCard from "../SongCard/index";

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

  console.log("modal is shown");

  console.log(playbackState);

  return (
    <ModalOverlay>
      <ModalContainer>
        <CloseButton onClick={() => navigate(-1)} />
        <ModalForm>
          <TextBox type="text" id="content" placeholder="What's happening?" />
          <HashtagsBox
            type="text"
            id="hashtags"
            placeholder="#bambamdoggo #cheems #sebbynosleepy #pineapplesbelongonpizza #peepthefire"
          />
          <SubmitButton type="submit" />
          <CurrentlyPlaying>Sharing the following banger: <br/>{playbackState.songName}
          </CurrentlyPlaying>
        </ModalForm>
      </ModalContainer>
    </ModalOverlay>
  );
};

export default CreatePostModal;
