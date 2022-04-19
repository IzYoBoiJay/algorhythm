import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";

import { Emoji, Container } from "./EmojiReactionElements";

import UserContext from "../../contexts/UserContext";

const EmojiReaction = (props) => {
  const defaultEmojiSet = [
    { name: "fire", emoji: "🔥", clicked: false },
    { name: "heart", emoji: "❤️", clicked: false },
    { name: "smile", emoji: "😊", clicked: false },
    { name: "thumbsup", emoji: "👍", clicked: false },
  ];
  const [emojiSet, setEmojiSet] = useState(defaultEmojiSet);
  const profile = useContext(UserContext).user;
  const [reacted, setReacted] = useState(false);

  let location = useLocation();

  const sendEmoji = (props) => {
    if (!emojiSet.find((emoji) => emoji.clicked)) {
      axios
        .post(
          process.env.REACT_APP_SERVER_DOMAIN + "/posts/add_reaction",
          props
        ) //end post
        .then((res) => {
          if (res.status == 200) {
            setReacted(true);
            setEmojiSet((prev) =>
              prev.map((emoji) =>
                emoji.name === props.emoji ? { ...emoji, clicked: true } : emoji
              )
            );
          }
        }) //end then
        .catch((err) => {
          console.log("EmojiTray Error: ");
          console.log(err);
        }); //end catch
    }
  };

  useEffect(() => {
    setReacted(false);
    setEmojiSet(defaultEmojiSet);
    let obj;
    if (profile != null) {
      if (
        (obj = props.reactions.find(
          (reaction) => reaction.reactedBy === profile.uri
        ))
      ) {
        setEmojiSet(
          defaultEmojiSet.map((emoji) =>
            emoji.name === obj.emoji ? { ...emoji, clicked: true } : emoji
          )
        );
      }
    }
  }, [profile, location.pathname, props]);

  return (
    <Container>
      <div>
        <span>{"postID: " + props.postID}</span>
        {emojiSet.map((obj, idx) => (
          <Emoji
            blueNumber={obj.clicked}
            onClick={() =>
              sendEmoji({
                postID: props.postID,
                emoji: obj.name,
                reactedBy: profile.uri,
              })
            }
            key={"emoji" + idx}
          >
            {obj.emoji +
              " " +
              (props.reactions.filter((reaction) => reaction.emoji === obj.name)
                .length +
                (reacted == true && obj.clicked == true ? 1 : 0))}
          </Emoji>
        ))}
      </div>
    </Container>
  );
};

export default EmojiReaction;
