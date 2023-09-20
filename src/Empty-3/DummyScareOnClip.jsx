
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
import {  useNavigate } from 'react-router-dom';
import {
  FaPlay,
  FaPause,
  FaStepForward,
  FaStepBackward,
} from 'react-icons/fa';
import ScareOnAudioPlayerBG from "../Photo/ScareOnAudioPlayerBG.avif";


const DummyScareOnClip = () => {
    const Navigate=useNavigate();
    const handleScareOnClip = ()=>{
        Navigate("/scareon")
    }

  return (
    <Box
      bg="#282c34"
      p="20px"
      borderRadius="lg"
      boxShadow="lg"
      maxW={{ base: '350px', md: '700px' }}
      h={{ base: '250px', md: '350px' }}
      border="0.5px solid #fff"
      mx="auto"
      backgroundImage={`url(${ScareOnAudioPlayerBG})`}
      backgroundSize="cover"
      backgroundPosition="center"
      backgroundRepeat="no-repeat"
      _hover={{ boxShadow: '0 0 30px #81D4FA' }}
    >
      <Text
        fontSize={{ base: '12px', md: '18px' }}
        fontWeight="bold"
        color="#263238"
        mb="8px"
      >
        Title- <span style={{ color: '#FF1744' }}>Diwakar Sharma; 07/09/2023</span>
      </Text>
      <Text
        fontSize={{ base: '12px', md: '18px' }}
        fontWeight="bold"
        color="#263238"
        mb="4"
      >
        Location:- <span style={{ color: '#FF1744' }}>Gujrat</span>
      </Text>
      <audio  />
      <Flex align="center" justify="center" direction="column">
        <IconButton
          aria-label={1==1 ? 'Pause' : 'Play'}
          icon={1==0 ? <FaPause /> : <FaPlay />}
          colorScheme="red"
          size={{ base: 'sm', md: 'md' }}
          borderRadius="10%"
          mb="4"
          onClick={handleScareOnClip}
          _hover={{ boxShadow: 'xl' }}
        />
        <Slider
          
          
        >
          <SliderTrack bg="#ccc" borderRadius="full">
            <SliderFilledTrack bg="#FF0000" />
          </SliderTrack>
          <SliderThumb boxSize={4} bg="#FF0000" borderWidth={2} borderColor="white" />
        </Slider>
        <Flex w="100%" h="auto" align="center" justify="space-between" mt="4">
          <Button
            colorScheme={ 'red'}
            variant="outline"
            m={{ base: '0%', md: '3%' }}
            h="30px"
            fontSize={{ base: '12px', md: '18px' }}
            
          >
            Normal
          </Button>
          <Button
            colorScheme={'red'}
            variant="outline"
            m={{ base: '0%', md: '3%' }}
            h="30px"
            fontSize={{ base: '12px', md: '18px' }}
            
          >
            1.5x
          </Button>
          <Button
            colorScheme={'red'}
            variant="outline"
            m={{ base: '0%', md: '3%' }}
            h="30px"
            fontSize={{ base: '12px', md: '18px' }}
            
          >
            2x
          </Button>
          <Text
            color="#FF0000"
            fontWeight="bold"
            fontSize={{ base: '14px', md: '16px' }}
            m={{ base: '0%', md: '3%' }}
          >
            
          </Text>
        </Flex>
        <Flex w="100%" h="auto" align="center" justify="space-between" mt="4">
          <IconButton
            aria-label="Previous Track"
            icon={<FaStepBackward />}
            colorScheme="gray"
            variant="outline"
            m={{ base: '0%', md: '3%' }}
            h="30px"
            fontSize={{ base: '12px', md: '18px' }}
          />
          <IconButton
            aria-label="Next Track"
            icon={<FaStepForward />}
            colorScheme="gray"
            variant="outline"
            m={{ base: '0%', md: '3%' }}
            h="30px"
            fontSize={{ base: '12px', md: '18px' }}
          />
        </Flex>
      </Flex>
    </Box>
  );
};


export default DummyScareOnClip;
