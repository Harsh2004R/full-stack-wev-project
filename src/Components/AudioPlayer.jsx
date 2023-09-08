
import React, { useState, useRef } from 'react';
import {
  Box,
  IconButton,
  Slider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
  Flex,
  Text,
  Button,
  keyframes
} from '@chakra-ui/react';
import { FaPlay, FaPause } from 'react-icons/fa';
import MusicBg from "../Photo/MusicBg.png";

const glowAnimation = keyframes`
  0% { box-shadow: 0 0 0px #E3F2FD; }
  50% { box-shadow: 0 0 0px 5px #E3F2FD; }
  100% { box-shadow: 0 0 0px #B3E5FC; }
`;






const AudioPlayer = ({ audioSource }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [playbackSpeed, setPlaybackSpeed] = useState(1);
  const audioRef = useRef(null);
  const handlePlayPause = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const handleTimeUpdate = () => {
    setCurrentTime(audioRef.current.currentTime);
  };

  const handleSliderChange = (value) => {
    audioRef.current.currentTime = value;
    setCurrentTime(value);
  };

  const handlePlaybackSpeedChange = (speed) => {
    setPlaybackSpeed(speed);
    audioRef.current.playbackRate = speed;
  };

  return (
    <>
    <Box
     
         >
    <Box w={{base:"96%",md:"80%"}} m="auto" h="auto">
      <Text pt="15px" pb="15px" textAlign={"justify"} textColor={"#FFFFFF"} fontSize={{base:"12px",md:"14px"}}  fontFamily={"just-die-already"}>

      Discover our website's huge selection of <span style={{color:"#FF0000"}}>podcasts</span>and scary stories! Whether
      you love chilling tales or gripping series, we've got something for everyone.
      Start exploring now!</Text>
    </Box>



      <Box  w={{base:"96%",md:"80%"}} m="auto" h="auto"  ><Text textAlign={"left"} pt="10px" pb="10px"  color="#fff" fontSize={{base:"18px",md:"27px"}}>Kya wo sach tha- <span  style={{ color: "#FF0000" }}>#heighway ka bhoot</span></Text></Box>

    <Box
      m="auto"
      w={{ base: '92%', md: '60%' }}
      mt="2%"
      p={{base:"3%",md:"3%"}}
      backgroundImage={`url(${MusicBg})`}
      border={"0.5px solid #fff"}
      backgroundSize="cover"
      backgroundPosition="center"
      backgroundRepeat="no-repeat"
      borderRadius="md"
    >
      <audio
        ref={audioRef}
        src={audioSource}
        onTimeUpdate={handleTimeUpdate}
      />

      <Flex align="center" justify="space-between">
        <IconButton
      
          aria-label={isPlaying ? 'Pause' : 'Play'}
          icon={isPlaying ? <FaPause /> : <FaPlay />}
          onClick={handlePlayPause}
          m={{base:"10px",md:"15px"}}
          color="#FF0000"
          h={{base:"20px",md:"40px"}}
          bg="transparent"
          _hover={{ boxShadow: '0 0 0.625rem 0.3125rem #FF0000' }} 
        />
        <Slider
          value={currentTime}
          max={audioRef.current ? audioRef.current.duration : 0}
          onChange={handleSliderChange}
        >
          <SliderTrack animation={`${glowAnimation} 1s infinite`}  bg="black" h="1px">
            <SliderFilledTrack />
          </SliderTrack>
          <SliderThumb  bg="#fff"/>
        </Slider>
      </Flex>

      <Flex align="center" justify="space-between" >
        <Button   color="blue" border="1px solid red"  _hover={{ boxShadow: '0 0 0.625rem 0.3125rem #FF0000' }}  bg="transparent"  w={{base:"20%",md:"8%"}} textColor={""} height={{base:"3vh",md:"5vh"}} fontSize={{base:"10px",md:"14px"}} onClick={() => handlePlaybackSpeedChange(1)}>Normal</Button>
        <Button  border="1px solid red"  bg="transparent"  _hover={{ boxShadow: '0 0 0.625rem 0.3125rem #FF0000' }}   w={{base:"20%",md:"8%"}} height={{base:"3vh",md:"5vh"}} fontSize={{base:"12px",md:"14px"}} onClick={() => handlePlaybackSpeedChange(1.5)}>1.5x</Button>
        <Button  border="1px solid red"  _hover={{ boxShadow: '0 0 0.625rem 0.3125rem #FF0000' }}  bg="transparent" w={{base:"20%",md:"8%"}} height={{base:"3vh",md:"5vh"}} fontSize={{base:"12px",md:"14px"}} onClick={() => handlePlaybackSpeedChange(2)}>2x</Button>
        <Text color="#FFFFFF" 
         fontSize={{base:"12px",md:"xl"}} fontWeight={"500"}>{formatTime(currentTime) }</Text>
      </Flex>
    </Box>
    </Box>
    </>
    );
};

// Helper function to format time in minutes:seconds
const formatTime = (time) => {
  if (isNaN(time)) return '0:00';
  const minutes = Math.floor(time / 60);
  const seconds = Math.floor(time % 60);
  return `${minutes}:${seconds.toString().padStart(2, '0')}`;
};

export default AudioPlayer;
