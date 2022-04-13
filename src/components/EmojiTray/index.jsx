import React, { useState } from "react";

import {
  Tray,
  TrayButtonIcon,
  Emojis,
  EmojiButton,
  Counter,
} from "./EmojiTrayElements";

const emoji_map = {
  fire: "🔥",
  heart: "❤️",
  smile: "😊",
  thumbsup: "👍",
};

const EmojiTray = () => {
  const [showEmojis, setShowEmojis] = useState(false);

  const [fireCount, setFC] = useState(0);
  const [heartCount, setHC] = useState(0);
  const [smileCount, setSC] = useState(0);
  const [thumbsupCount, setTUC] = useState(0);

  function sendEmoji(emoji) {
    console.log(emoji);

    if (emoji == "fire") {
      setFC(fireCount + 1);
    } else if (emoji == "heart") {
      setHC(heartCount + 1);
    } else if (emoji == "smile") {
      setSC(smileCount + 1);
    } else if (emoji == "thumbsup") {
      setTUC(thumbsupCount + 1);
    }
  }

  return (
    <Tray>
      {showEmojis && (
        <Emojis>
          <EmojiButton onClick={() => sendEmoji("fire")}>🔥</EmojiButton>
          <EmojiButton onClick={() => sendEmoji("heart")}>❤️</EmojiButton>
          <EmojiButton onClick={() => sendEmoji("smile")}>😊</EmojiButton>
          <EmojiButton onClick={() => sendEmoji("thumbsup")}>👍</EmojiButton>
        </Emojis>
      )}
      <TrayButtonIcon
        label="Emojis"
        onClick={() => setShowEmojis(!showEmojis)}
      />
    </Tray>
  );
};

export default EmojiTray;
