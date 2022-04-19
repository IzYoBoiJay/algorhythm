import React, { useEffect, useState } from "react";
import EmojiTray from "../EmojiTray";
import { ReactContainer } from "./ReactElements";

const emoji_map = {
  fire: "🔥",
  heart: "❤️",
  smile: "😊",
  thumbsup: "👍",
};

<<<<<<< HEAD
const EmojiReaction = (reactions) => {

=======
const EmojiReaction = () => {
>>>>>>> dc8da8b942f4d49ae0de1debef510895d07063ea
  function sendEmoji(emoji) {
    /* send emoji to the backend here */
  }

  return (
    <ReactContainer>
      <div>
        <span className="emoji" onClick={() => sendEmoji("fire")}>
          🔥
        </span>
        <span className="emoji" onClick={() => sendEmoji("heart")}>
          ❤️
        </span>
        <span className="emoji" onClick={() => sendEmoji("smile")}>
          😊
        </span>
        <span className="emoji" onClick={() => sendEmoji("thumbsup")}>
          👍
        </span>
      </div>
    </ReactContainer>
  );
};

export default EmojiReaction;
