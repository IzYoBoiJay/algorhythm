import React from 'react'
import { AlbumName, ArtistName, SongContainer, SongPicture, Title } from './SongCardElements'

const SongCard = (props) => {
  return (
    <SongContainer>
      <SongPicture image={props.song.picture}/>
      <Title>{props.song.title}</Title>
      <AlbumName>{props.song.album}</AlbumName>
      <ArtistName>{props.song.artist}</ArtistName>
    </SongContainer>
  )
}

export default SongCard;