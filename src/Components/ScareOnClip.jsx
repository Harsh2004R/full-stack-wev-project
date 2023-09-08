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
  keyframes,
} from '@chakra-ui/react';
import { FaPlay, FaPause } from 'react-icons/fa';

import ScareOnAudioPlayerBG from "../Photo/ScareOnAudioPlayerBG.avif"




const bounce = keyframes`
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
`;




const ScareOnClip = ({ audioSource }) => {
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
    <Box
      bg="#282c34"
      p="20px"
      borderRadius="lg"
      boxShadow="lg"
      maxW={{base:"350px",md:"700px"}}
      h={{base:"250px",md:"350px"}}
      backgroundImage={`url(${ScareOnAudioPlayerBG})`}
      border={"0.5px solid #fff"}
      backgroundSize="cover"
      backgroundPosition="center"
      backgroundRepeat="no-repeat"
      mx="auto"
    >
      <Text animation={`${bounce} 3.5s ease infinite`} fontSize={{base:"12px",md:"18px"}} fontWeight="bold" color="#263238" mb="8px">
        Shared by- <span style={{ color: '#FF1744' }} >Diwakar Sharma; 07/09/2023</span>
      </Text>
      <Text animation={`${bounce} 2.5s ease infinite`} fontSize={{base:"12px",md:"18px"}} fontWeight="bold" color="#263238" mb="4">
        Location:- <span style={{ color: '#FF1744' }}>Gujrat</span>
      </Text>
      <audio ref={audioRef} src={audioSource} onTimeUpdate={handleTimeUpdate} />
      <Flex align="center" justify="center" direction="column">
        <IconButton
          aria-label={isPlaying ? 'Pause' : 'Play'}
          icon={isPlaying ? <FaPause /> : <FaPlay />}
          onClick={handlePlayPause}
          colorScheme="red"
          size={{base:"sm",md:"md"}}
          borderRadius="10%"
          mb="4"
          _hover={{ boxShadow: 'xl' }}
        />
        <Slider
          value={currentTime}
          max={audioRef.current ? audioRef.current.duration : 0}
          onChange={handleSliderChange}
        >
          <SliderTrack bg="#ccc" borderRadius="full">
            <SliderFilledTrack bg="#FF0000" />
          </SliderTrack>
          <SliderThumb boxSize={4} bg="#FF0000" borderWidth={2} borderColor="white" />
        </Slider>
        <Flex  w="100%" h="auto" align="center" justify="space-between" mt="4">
          <Button
            colorScheme={playbackSpeed === 1 ? 'green' : 'red'}
            variant="outline"
            m={{base:"0%",md:"3%"}}
            h="30px"
            fontSize={{base:"12px",md:"18px"}}
            onClick={() => handlePlaybackSpeedChange(1)}
          >
            Normal
          </Button>
          <Button
            colorScheme={playbackSpeed === 1.5 ? 'green' : 'red'}
            variant="outline"
            m={{base:"0%",md:"3%"}}
            h="30px"
            fontSize={{base:"12px",md:"18px"}}
            onClick={() => handlePlaybackSpeedChange(1.5)}
          >
            1.5x
          </Button>
          <Button
            colorScheme={playbackSpeed === 2 ? 'green' : 'red'}
            variant="outline"
            m={{base:"0%",md:"3%"}}
            h="30px"
            fontSize={{base:"12px",md:"18px"}}
            onClick={() => handlePlaybackSpeedChange(2)}
          >
            2x
          </Button>
          <Text color="#FF0000" fontWeight="bold" fontSize={{base:"14px",md:"16px"}} m={{base:"0%",md:"3%"}}>
            {formatTime(currentTime)}
          </Text>
        </Flex>
      </Flex>
    </Box>
  );
};


const formatTime = (time) => {
    if (isNaN(time)) return '0:00';
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  };

  
export default ScareOnClip;
