import React, { useEffect, useRef,useState } from 'react';
import { Box, Input, Text, Button,keyframes, FormControl, FormLabel,Center, AlertDialog,AlertDialogOverlay,AlertDialogContent,Image,CloseButton,AlertDialogFooter,AlertDialogBody} from '@chakra-ui/react';
import LoginBG3 from '../Photo/LoginBG3.jpg';
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
            fontSize="80px"
            m="auto"
          >
            Sign Up
          </Text>
        </Box>
        <Box

          border="1px dashed #78909C"
          maxWidth={'400px'}
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
              <FormLabel htmlFor="email" color="white" 
              textAlign="center" 
              pb={0}>
                <Text fontFamily= "another_danger" textStyle="horror">Phone Number</Text>
              </FormLabel>
              <Input
                onClick={stopPropagation}
                color="#fff"
                // pt="10px"
                variant="unstyled"
                placeholder="Enter Phone Number"
                placeholderTextColor="#ECEFF1"
                textAlign="center"
                // fontFamily= "another_danger"
                bg="none"
                mx="auto"
                type="text"
                border="none"
              />
            </Box>
            <Box p={0} mb="5">
              <FormLabel htmlFor="email" color="white" 
              textAlign="center" 
              pb={0}>
                <Text fontFamily= "another_danger" textStyle="horror">Email address</Text>
              </FormLabel>
              <Input
                onClick={stopPropagation}
                color="#fff"
                // pt="10px"
                variant="unstyled"
                placeholder="Enter your Email"
                placeholderTextColor="#ECEFF1"
                textAlign="center"
                // fontFamily= "another_danger"
                bg="none"
                mx="auto"
                type="text"
                border="none"
              />
            </Box>
            <Box p={0} mb="5">
              <FormLabel htmlFor="username" color="white"
               textAlign="center" 
               pb={0}>
                <Text fontFamily= "another_danger" textStyle="horror">Username</Text>
              </FormLabel>
              <Input
                onClick={stopPropagation}
                color="#fff"
                // pt="10px"
                variant="unstyled"
                placeholder="Enter your Username"
                placeholderTextColor="#ECEFF1"
                textAlign="center"
                // fontFamily= "another_danger"
                bg="none"
                mx="auto"
                type="text"
                border="none"
              />
            </Box>
            <Box p={0}>
              <FormLabel 
              textAlign="center"
               htmlFor="password" color="white" pb={0}>
               <Text fontFamily= "another_danger" textStyle="horror">Password</Text>
              </FormLabel>
              <Input
                onClick={stopPropagation}
                color="white"
                border="none"
                // pt="10px"
                variant="unstyled"
                placeholder="Dare to create your password"
                placeholderTextColor="#ECEFF1"
                // fontFamily= "another_danger"
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
            _active={{ transform: 'scale(1.5)' }}
             type="submit" display={"flex"} alignItems={"center"} onClick={handleSignin} bgColor="transparent"  borderRadius="md" w="50%" mx="auto" mt={4}>
            <Text color="#FF7043"  fontFamily= "another_danger">Welcome</Text>
            </Button>
          </form>
        </Box>
      </Box>


      
    </>
  );
}

export default SignUp;







