import React from 'react'
import SongCard from '../SongCard';
import { PostContainer, PostText, ProfilePicture, Username } from './PostElements'

const Post = () => {
  return (
    <PostContainer>

        <ProfilePicture/>
        <Username>Mike Wazowski</Username>
        
        <PostText>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Morbi tincidunt ornare massa eget egestas purus. Donec adipiscing tristique risus nec feugiat. Aliquam faucibus purus in massa tempor. Faucibus et molestie ac feugiat. Non diam phasellus vestibulum lorem sed risus ultricies tristique nulla.</PostText>

        <SongCard/>

    </PostContainer>
  )
}

export default Post;