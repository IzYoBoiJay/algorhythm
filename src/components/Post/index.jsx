import React from "react";
import SongCard from "../SongCard";
import EmojiReaction from "../EmojiReaction";
import EmojiTray from "../EmojiTray";
import TimeAgo from "timeago-react";
import {
  PostContainer,
  PostText,
  ProfilePicture,
  Username,
  PostFooter,
} from "./PostElements";

const Post = (props) => {
  return (
    <PostContainer>
      <ProfilePicture
        image={props.post.profilepic}
        onClick={() => (window.location.href = props.post.userLink)}
      />
      <Username>{props.post.username}</Username>
      <PostText>{props.post.text}</PostText>
      <SongCard song={props.post} />
      <PostFooter>
      <TimeAgo
          datetime={props.post.created_at}
          opts={{ minInterval: "60" }}
        />
        &ensp;
        {props.post.tags.map((hashtag) => (
          <span>{hashtag}&ensp;</span>
        ))}
      </PostFooter>
<<<<<<< HEAD
      <EmojiTray postID={props.post._id} />
=======
      <EmojiTray />
>>>>>>> dc8da8b942f4d49ae0de1debef510895d07063ea
      <EmojiReaction reactions={props.post.reactions} />
    </PostContainer>
  );
};

export default Post;
