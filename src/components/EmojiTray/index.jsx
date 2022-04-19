import React, { useState, useContext } from "react";
import axios from "axios";

import UserContext from "../../contexts/UserContext";

import {
  Tray,
  TrayButtonIcon,
  Emojis,
  EmojiButton,
  Counter,
} from "./EmojiTrayElements";

/*
const reactions = [
  {
    emoji: "fire",
    reactedBy: [],
  },
  {
    emoji: "heart",
    reactedBy: [],
  },
  {
    emoji: "smile",
    reactedBy: [],
  },
  {
    emoji: "thumbsup",
    reactedBy: [],
  },
];
*/

const EmojiTray = (props) => {
  const profile = useContext(UserContext).user;

  const [showEmojis, setShowEmojis] = useState(false);

  //const [emojiReactions, setEmojiReactions] = useState(reactions);

  function sendEmoji(emoji) {
    console.log("Emoji Object: ");
    console.log(emoji);

    axios
      .post(process.env.REACT_APP_SERVER_DOMAIN + "/posts/add_reaction", emoji) //end post
      .then((res) => {
        console.log("Emoji Tray Response: ");
        console.log(res);
      }) //end then
      .catch((err) => {
        console.log("EmojiTray Error: ");
        console.log(err);
      }); //end catch
  } //end sendEmoji

  return (
    <Tray>
      {showEmojis && (
        <Emojis>
          <EmojiButton
            onClick={() =>
              sendEmoji({
                postID: props.postID,
                emoji: "fire",
                reactedBy: profile.uri,
              })
            }
          >
            🔥
          </EmojiButton>

          <EmojiButton
            onClick={() =>
              sendEmoji({
                postID: props.postID,
                emoji: "heart",
                reactedBy: profile.uri,
              })
            }
          >
            ❤️
          </EmojiButton>
          <EmojiButton
            onClick={() =>
              sendEmoji({
                postID: props.postID,
                emoji: "smile",
                reactedBy: profile.uri,
              })
            }
          >
            😊
          </EmojiButton>
          <EmojiButton
            onClick={() =>
              sendEmoji({
                postID: props.postID,
                emoji: "thumbsup",
                reactedBy: profile.uri,
              })
            }
          >
            👍
          </EmojiButton>
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
