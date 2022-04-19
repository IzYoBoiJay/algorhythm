import React, { useEffect, useState } from "react";
import EmojiTray from "../EmojiTray";
import { ReactContainer } from "./ReactElements";

const emoji_map = {
  fire: "🔥",
  heart: "❤️",
  smile: "😊",
  thumbsup: "👍",
};

const EmojiReaction = () => {
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
