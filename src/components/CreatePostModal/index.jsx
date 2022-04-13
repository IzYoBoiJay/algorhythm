import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import {
  ModalContainer,
  ModalOverlay,
  CloseButton,
} from "./CreatePostModalElements";

const CreatePostModal = () => {
  const navigate = useNavigate();
  const [input, setInput] = useState();

  console.log("modal is shown");

  return (
    <ModalOverlay>
      <ModalContainer>
        <span>THIS IS A MODAL</span>
        <CloseButton onClick={() => navigate(-1)}>
          Click here to close
        </CloseButton>
      </ModalContainer>
    </ModalOverlay>
  );
};

export default CreatePostModal;
