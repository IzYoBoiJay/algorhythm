import React, { useContext } from "react";
import styled from "styled-components";
import Post from "../../components/Post";
import WebPlayback from "../../components/WebPlayback/WebPlayback";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";

import PostContext from "../../contexts/PostContext";

export const ExploreContainer = styled.section`
  padding: 50px;
`;

const ExplorePage = (props) => {

  const [posts, setPosts] = useContext(PostContext);
  
  return (
    <ExploreContainer>
      <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 4 }}>
        <Masonry gutter="20px">
          <WebPlayback />
          {posts.map((post) => (
            <Post post={post} />
          ))}
        </Masonry>
      </ResponsiveMasonry>
    </ExploreContainer>
  );
};

export default ExplorePage;

/* Fake data */

//import songPicture from "../images/cheems.jpg";
//import pfp from "../images/bruh.jpg";

/*
const posts = [
  {
    id: 1,
    username: "Mike Wazowski",
    profilepic: pfp,
    postText:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Morbi tincidunt ornare massa eget egestas purus. Donec adipiscing tristique risus nec feugiat. Aliquam faucibus purus in massa tempor. Faucibus et molestie ac feugiat. Non diam phasellus vestibulum lorem sed risus ultricies tristique nulla.",
    songInfo: {
      picture: songPicture,
      title: "Who the hecc is Bam the Dog?",
      album: "Sample Text Album",
      artist: "Cheems",
    },
    datetime: "1 day ago",
    hashtag: ["sad", "very-sad"],
  },
  {
    id: 2,
    username: "Tan",
    profilepic:
      "https://i.pinimg.com/736x/c7/6f/34/c76f34d8e157415d37978883f1b596bc.jpg",
    postText:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Morbi tincidunt ornare massa eget egestas purus.",
    songInfo: {
      picture:
        "http://pm1.narvii.com/7308/c94c95c8e63694384a383a8e480e69f30ee7176ar1-640-640v2_uhq.jpg",
      title: "Tan",
      album: "Tan tan tan",
      artist: "Tannie",
    },
    datetime: "2 days ago",
    hashtag: ["tannie", "tannieee"],
  },
  {
    id: 3,
    username: "Bam",
    profilepic:
      "https://worldhours24.com/wp-content/uploads/2021/11/Screenshot_64.png",
    postText:
      "Non diam phasellus vestibulum lorem sed risus ultricies tristique nulla.",
    songInfo: {
      picture:
        "https://st1.bollywoodlife.com/wp-content/uploads/2022/01/FotoJet-2022-01-01T230946.153.jpg",
      title: "Bam",
      album: "Bam bam bam",
      artist: "Bam Jeon",
    },
    datetime: "3 days ago",
    hashtag: ["bambam", "bam"],
  },
  {
    id: 4,
    username: "Coke",
    profilepic:
      "https://pbs.twimg.com/profile_images/1357949524858306563/orJz7v6J_400x400.jpg",
    postText:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Morbi tincidunt ornare massa eget egestas purus. Donec adipiscing tristique risus nec feugiat. Aliquam faucibus purus in massa tempor. Faucibus et molestie ac feugiat. Non diam phasellus vestibulum lorem sed risus ultricies tristique nulla.",
    songInfo: {
      picture:
        "https://pbs.twimg.com/media/FPg-eNgUcAMz2YP?format=jpg&name=large",
      title: "i am Sneazing",
      album: "Achoo",
      artist: "Coke Zero",
    },
    datetime: "1 week ago",
    hashtag: ["cokezero", "coke"],
  },
  {
    id: 5,
    username: "fatfatpankocat",
    profilepic:
      "https://pbs.twimg.com/media/FQLxfQ0UYAEmk15?format=jpg&name=large",
    postText:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Morbi tincidunt ornare massa eget egestas purus.",
    songInfo: {
      picture:
        "https://pbs.twimg.com/media/FQLtdwFXIAQ7xUp?format=jpg&name=large",
      title: "Meow",
      album: "Pankooooooooo",
      artist: "Panko Cat",
    },
    datetime: "1 week ago",
    hashtag: ["meow"],
  },
  {
    id: 6,
    username: "Sample",
    profilepic: "",
    postText: "Sample",
    songInfo: {
      picture: "",
      title: "Sample Title",
      album: "Sample Text Album",
      artist: "Sample",
    },
    datetime: "1 week ago",
    hashtag: ["sample", "sample2"],
  },
];
*/