import React from 'react'
import SongCard from '../SongCard';
import EmojiReaction from '../EmojiReaction';
import EmojiTray from '../EmojiTray'
import { PostContainer, PostText, ProfilePicture, Username, PostFooter } from './PostElements'

const Post = (props) => {
  return (
    <PostContainer>
        <ProfilePicture image={props.post.profilepic}/>
        <Username>{props.post.username}</Username>
        <PostText>{props.post.postText}</PostText>
        <SongCard song={props.post.songInfo}/>
        <PostFooter>
          {props.post.datetime} &nbsp; &nbsp;
          {props.post.hashtag.map(hashtag => <span>#{hashtag}&nbsp;&nbsp;</span>)}
        </PostFooter>
        <EmojiTray/>
        <EmojiReaction/>
    </PostContainer>
  )
}

export default Post;