import React, { useEffect, useRef,useState } from 'react';
import { Box, Input, Text, Button,keyframes, FormControl, FormLabel,Center, AlertDialog,AlertDialogOverlay,AlertDialogContent,Image,CloseButton,AlertDialogFooter,AlertDialogBody} from '@chakra-ui/react';

import "../Fonts.css"
import '../App.css';
import backgroundVideo from '../Videos/BGvideo.mp4'; // Replace with the actual path to your video file
import { Navigate, useNavigate } from "react-router-dom";



const glowAnimation = keyframes`
  0% { box-shadow: 0 0 0px coral; }
  50% { box-shadow: 0 0 10px 5px coral; }
  100% { box-shadow: 0 0 0px coral; }
`;
function SignUp() {
  
  const Navigate=useNavigate()
  const videoRef = useRef(null);

  const handleSignin = (e) => {
    e.preventDefault();
    Navigate("/login")
    // Handle Signin logic here
  };

  useEffect(() => {
    const video = videoRef.current;
    video.play();
  }, []);

  const handleAudio = () => {
    const video = videoRef.current;
    video.muted = !video.muted;
  };

  const stopPropagation = (e) => {
    e.stopPropagation();
  };


  return (
    <>
   
      <Box
        onClick={handleAudio}
        width="100%"
        height="100vh"
        display="flex"
        justifyContent="center"
        alignItems="center"
        position="relative"
        overflow="hidden"
        
      >
         
    
      
        <video
          ref={videoRef}
          id="background-video"
          src={backgroundVideo}
          autoPlay
          muted
          loop
          style={{
            position: 'absolute',
            top: '0',
            left: '0',
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            zIndex: -1
          }}
        />
        <Box
          position="absolute"
          top={0}
          left={0}
          right={0}
          p={4}
          textAlign="center"
          zIndex={1}
        >
          <Text
            fontFamily="another_danger"
            textStyle="horror"
            color="white"
            fontSize={{base:"67px",md:"65px"}}
            m="auto"
          >
            Sign Up
          </Text>
        </Box>
        <Box

          border="1px dashed #78909C"
          // maxWidth={'400px'}
          w={{base:"80%",md:"25%"}}
          p={{base:"45",md:"5"}}
          borderWidth={1}
          borderRadius={8}
          boxShadow="lg"
          bgColor="transparent"
          position="relative"
          zIndex={1}
        >
          <form onSubmit={handleSignin} >
            <Box p={0} mb="5">
              
                <Text textAlign={"center"} color="#fff"  fontFamily= "caslon-antique"  fontSize={{base:"18px",md:"25px"}} textStyle="horror">Phone Number</Text>
              
              <Input
                onClick={stopPropagation}
                color="#FF6F00"
                variant="unstyled"
                placeholder="Enter Phone Number"
                textAlign="center"
                fontFamily= "caslon-antique"
                bg="none"
                mx="auto"
                type="number"
                border="none"
              />
            </Box>
            <Box p={0} mb="5">
              
                <Text fontFamily= "caslon-antique" textAlign={"center"} color="#fff" fontSize={{base:"18px",md:"25px"}} textStyle="horror">Email address</Text>
             
              <Input
                onClick={stopPropagation}
                color="#FF6F00"
                variant="unstyled"
                placeholder="Enter your Email"
                placeholderTextColor="#ECEFF1"
                textAlign="center"
                fontFamily= "caslon-antique"
                bg="none"
                mx="auto"
                type="text"
                border="none"
              />
            </Box>
            <Box p={0} mb="5">
              
                <Text fontFamily= "caslon-antique" textAlign={"center"} color="#fff" fontSize={{base:"18px",md:"25px"}} textStyle="horror">Username</Text>
             
              <Input
                onClick={stopPropagation}
                color="#FF6F00"
                variant="unstyled"
                placeholder="Enter your Username"
                placeholderTextColor="#ECEFF1"
                textAlign="center"
                fontFamily= "caslon-antique"
                bg="none"
                mx="auto"
                type="text"
                border="none"
              />
            </Box>
            <Box p={0}>
             
               <Text fontFamily= "caslon-antique" textAlign={"center"} color="#fff" fontSize={{base:"18px",md:"25px"}} textStyle="horror">Password</Text>
              
              <Input
                onClick={stopPropagation} 
                color="#FF6F00"
                border="none"
                variant="unstyled"
                placeholder="Dare to create your password"
                placeholderTextColor="#ECEFF1"
                fontFamily= "caslon-antique"
                textAlign="center"
                bg="none"
                mx="auto"
                type="password"
              />
            </Box>
            <Button
            _hover={{ boxShadow: '0 0 10px 5px coral' }}
            animation={`${glowAnimation} 2s infinite`}
            _focus={{ outline: 'none' }}
            _active={{ transform: 'scale(1.3)' }}
            w={{base:"120px",md:"150px"}}
            h={{base:"35px",md:"40px"}}
             type="submit" display={"flex"} alignItems={"center"} onClick={handleSignin} bgColor="transparent"  borderRadius="md"  mx="auto" mt={4}>
            <Text color="#FF7043"  fontFamily= "caslon-antique">Welcome</Text>
            </Button>
          </form>
        </Box>
      </Box>


      
    </>
  );
}

export default SignUp;







