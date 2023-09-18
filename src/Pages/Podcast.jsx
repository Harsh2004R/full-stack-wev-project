import React from 'react';
import {Box,Text, Divider, keyframes} from "@chakra-ui/react";
import AudioPlayer from '../Components/AudioPlayer';
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import Navbar2 from "../Components/Navbar2";
const slideInFromLeft = keyframes`
  0% {
    transform: translateX(-100%);
    opacity: 0;
  }
  100% {
    transform: translateX(0);
    opacity: 1;
  }
`;




function Podcast() {
  return (
    <div>


      <Navbar/>
      <Navbar2/>



      <Box
      w='100%'
      h='auto'
      bg='#000000'
      
      >

        <Divider animation={`${slideInFromLeft} 3.5s ease-in-out infinite alternate`} pt="20px"  borderColor={"#FFFFFF"}/>

        <Text p={4}
        // border="1px solid red"
        fontSize={{ base: '3xl', md: '6xl' }}
        fontFamily="quantify"
        textAlign="center"
        color="#FFFFFF"
        transition="transform 0.8s" 
        _hover={{
          transform: 'scale(0.9)',
        }}
        >"The Haunting Hour"</Text>

        <Divider w="100%" animation={`${slideInFromLeft} 2.2s ease-in-out infinite alternate`} borderColor={"#FFFFFF"}/> 

        <Box>

        <AudioPlayer/>
        <Divider mt="50px" />
        <Footer/>
        </Box>



      </Box>
      
    </div>
  )
}

export default Podcast
