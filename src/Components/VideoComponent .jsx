import React, { useState, useEffect } from 'react';
import {Box,Divider,Text} from '@chakra-ui/react';
const VideoComponent = () => {
  const videoList = [
    {
      url: "https://www.youtube.com/embed/cGFoUtqQbk0",
      title: "5 Creepy Indian Urban Legends"
    },
    {
        url: "https://www.youtube.com/embed/PTFfsxYpdeA",
        title: "Reddit's Darkest Stories || Disturbing story of Redditors"
      },
    {
        url: "https://www.youtube.com/embed/iwnTS0Wj-6Y",
        title: "Noida Ki Iss Factory Mein Hai Bhoot Ka Saya | RealTalk Clips"
      },
      {
        url: "https://www.youtube.com/embed/taKwowH9Fns",
        title: "100 साल se Ghar ki औरतें Pareshan | Real Ghost in House | Asli Bhoot Realhit horror podcast"
      },
      {
        url: "https://www.youtube.com/embed/T9cNktA_7Fk",
        title: "Shaitan Ne Kiya Vash Mein | RealTalk Clips"
      },
       {
      url: "https://www.youtube.com/embed/1GuUvIHJzts",
      title: "Meri Body Mein Ghusa Bhoot | Real Incident Happend In Uttrakhand | RealTalk Clips"
    },
    {
        url: "https://www.youtube.com/embed/waSu-mJW8rI",
        title: "TYPES OF DEMONS || PART 1 ||"
      },
      {
        url: "https://www.youtube.com/embed/S6UUvrg_qzQ",
        title: "TYPES OF DEMONS || PART 2 ||"
      },
      {
        url: "https://www.youtube.com/embed/kgnCHGmHtiU",
        title: "Horrifying Truth of the Worlds Most Haunted House - MCKAMEY MANOR"
      },
    {
        url: "https://www.youtube.com/embed/sCu2Nl3KQmw",
        title: "ARE YOU A VICTIM OF BLACK MAGIC?"
      },
    {
        url: "https://www.youtube.com/embed/nGTmiF498bc",
        title: "Real Ghost Experience, Tiger Attack, Exorcism and More Ft. @TherealOnetr1 | RealTalk "
      },
      {
        url: "https://www.youtube.com/embed/N2PxVtzqgzk",
        title: "WORST TORTURE DEVICE EVER MADE!!!!"
      },
      {
        url: "https://www.youtube.com/embed/17pirVZFjKs",
        title: "10 WEIRD PHOBIAS YOU MIGHT HAVE"
      },
      {
        url: "https://www.youtube.com/embed/k5btJH1TtSo",
        title: "5 Creepy Japanese Urban Legends"
      },
      {
        url: "https://www.youtube.com/embed/OnAUXgkuf4g",
        title: "2 MURDERS, 1 RITUAL || Story of Kerala Human Sacrifice Case || Real Story"
      },
      
      
      
    // Add more video objects here
  ];
  // State to manage current video index
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);

  // Function to update video index
  const updateVideoIndex = () => {
    setCurrentVideoIndex((prevIndex) => (prevIndex + 1) % videoList.length);
  };

  // Set up interval to update video after the peroid of given time.
  useEffect(() => {
    const interval = setInterval(updateVideoIndex, 6000); //  seconds

    // Pick a random starting point if page is refreshed
    const randomIndex = Math.floor(Math.random() * videoList.length);
    setCurrentVideoIndex(randomIndex);

    return () => clearInterval(interval);
  }, []);

  return (
    <Box pb="20px" display="flex" mt="20px" flexDirection={{base:"column",md:"row"}} justifyContent={"space-evenly"} w="100%" h={{base:"45vh",md:"auto"}} >
      <Box border="2px solid red"  mt="20px" w={{base:"100%",md:"50%"}} borderRadius={"8px"} h={{base:"30vh",md:"48vh"}} >
        <iframe
          width={"100%"}
          height="100%"
          borderRadius="18px"
          src={videoList[currentVideoIndex].url}
          frameborder="0"
          allowfullscreen
        ></iframe>
      </Box>
      <Box w={{base:"100%",md:"40%"}}  color="#FFFFFF">
        <Text fontFamily={"my"} fontSize={{base:"16px",md:"35px"}} >{videoList[currentVideoIndex].title}</Text>
        <Divider/>
      </Box>
    </Box>
  );
};

export default VideoComponent;
