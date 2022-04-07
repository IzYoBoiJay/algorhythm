import React from 'react'
import { AlbumName, ArtistName, SongContainer, SongPicture, Title } from './SongCardElements'

const SongCard = () => {
  return (
    <SongContainer>

    <SongPicture/>

    <Title>Who the hecc is Bam the Dog?</Title>
    <AlbumName>Sample Text Album</AlbumName>
    <ArtistName>Cheems</ArtistName>

    </SongContainer>
  )
}

export default SongCard;