import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import {
  ModalContainer,
  ModalOverlay,
  CloseButton,
  ModalForm,
  ModalFormLabel,
  TextBox,
  HashtagsBox,
  SubmitButton
} from "./CreatePostModalElements";

const track = {
  name: "",
  album: {
    images: [{ url: "" }],
  },
  artists: [{ name: "" }],
};

const CreatePostModal = () => {
  const navigate = useNavigate();
  const [input, setInput] = useState();

  console.log("modal is shown");

  return (
    <ModalOverlay>
      <ModalContainer>
      <CloseButton onClick={() => navigate(-1)}/>
        <ModalForm>
          <TextBox type="text" id="content" placeholder="What's happening?"/>
          <HashtagsBox type="text" id="hashtags" placeholder="#bambamdoggo #cheems #sebbynosleepy #pineapplesbelongonpizza #peepthefire"/>
          <SubmitButton type="submit"/>
        </ModalForm>
      </ModalContainer>
    </ModalOverlay>
  );
};

export default CreatePostModal;
