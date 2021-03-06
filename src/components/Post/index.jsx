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
        {props.post.tags.map((hashtag, idx) => (
          <span key={"tag" + idx}>{hashtag}&ensp;</span>
        ))}
      </PostFooter>
      {/* <EmojiTray postID={props.post._id} /> */}
      <EmojiReaction reactions={props.post.reactions} postID={props.post._id} />
    </PostContainer>
  );
};

export default Post;
