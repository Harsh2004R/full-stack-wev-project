
import React, { useState, useEffect } from 'react';
import LoginBG3 from '../Photo/LoginBG3.jpg';
import asur from '../autoAudio/asur.mp3';
import song1 from '../autoAudio/song1.mp3';
import song3 from '../autoAudio/song3.mp3';
import song4 from "../autoAudio/song4.mp3";
import song5 from "../autoAudio/song5.mp3";
import song6 from "../autoAudio/song6.mp3";
import { Box, Input,Text, Button, FormControl, FormLabel, keyframes } from '@chakra-ui/react';
import { Navigate, useNavigate } from 'react-router-dom';
const gradient = `linear-gradient(to right ,#424242, #000000, #757575)`
const glowAnimation = keyframes`
  0% { box-shadow: 0 0 0px coral; }
  50% { box-shadow: 0 0 10px 5px coral; }
  100% { box-shadow: 0 0 0px coral; }
`;
function Login() {

  const songs = [asur, song1, song3, song4, song5, song6];
  const [audio, setAudio] = useState(null);
  const Navigate=useNavigate();
  useEffect(() => {
    if (audio) {
      const randomIndex = Math.floor(Math.random() * songs.length);
      audio.src = songs[randomIndex];
      audio.play().catch((error) => {
        console.log('Failed to play audio:', error);
      });
    }
  }, [audio, songs]);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle login logic here
  };
  const handleHomePage =()=>{
    Navigate("/deathdate")
  }

  const handlePlay = () => {
    if (audio) {
      audio.play().catch((error) => {
        console.log('Failed to play audio:', error);
      });
    }
  };

  
  const handleAudioRef = (element) => {
    setAudio(element);
  };

  return (
    <>
      <Box
        w={{ base: "100%", md: "100%" }}
        h={{ base: "100vh", md: "100vh" }}
        bg={gradient}
        display="flex"
        justifyContent="center"
        alignItems="center"
        fontSize={{ base: "1rem", md: "1.2rem" }} 
      >
        <Box
          onClick={handlePlay}
          backgroundImage={`url(${LoginBG3})`}
          backgroundSize="cover"
          backgroundPosition="center"
          backgroundRepeat="no-repeat"
          width={{ base: "100%", md: "60%" }}
          height="100vh"
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          <Box
            position="absolute"
            top={0}
            left={0}
            right={0}
            p="2rem" 
            textAlign="center"
            zIndex={1}
          >
            <Text
              fontFamily="another_danger"
              textStyle="horror"
              color="white"
              fontSize={{ base: "5rem", md: "6rem" }}
              m="auto"
            >
              Login
            </Text>
          </Box>
          <Box border="none" maxWidth="25rem" p="2.8125rem" borderWidth={1} borderRadius={8} boxShadow="lg" bgColor="transparent"> {/* Converted to rem */}
            <form onSubmit={handleSubmit}>
              <FormControl p="0.625rem" mb="1.25rem"> 
                <FormLabel htmlFor="email" color="white" textAlign="center" pb="0.625rem">
                  <Text fontFamily="another_danger">Email address</Text>
                </FormLabel>
                <Input
                  color="#fff"
                  pt="0.625rem" 
                  variant="unstyled"
                  placeholder="Demons Email"
                  placeholderTextColor="#ECEFF1"
                  textAlign="center"
                  bg="none"
                  mx="auto"
                  type="text"
                  border="none"
                  fontFamily="another_danger"
                />
              </FormControl>
              <FormControl p="0.625rem">
                <FormLabel textAlign="center" htmlFor="password" color="white" pb="0.625rem"> 
                  <Text fontFamily="another_danger">Password</Text>
                </FormLabel>
                <Input
                  color="white"
                  border="none"
                  pt="0.625rem" 
                  variant="unstyled"
                  placeholder="Dare to fill your password"
                  placeholderTextColor="#ECEFF1"
                  textAlign="center"
                  bg="none"
                  mx="auto"
                  type="text"
                  fontFamily="another_danger"
                />
              </FormControl>
              <Box mt="0.625rem"> 
                <Button
                  onClick={handleHomePage}
                  _hover={{ boxShadow: '0 0 0.625rem 0.3125rem #FF0000' }} 
                  animation={`${glowAnimation} 1s infinite`}
                  _focus={{ outline: 'none' }}
                  _active={{ transform: 'scale(1.5)' }}
                  display="flex" alignItems="center" m="auto" type="submit" bgColor="transparent" borderRadius="md" w="50%" // Converted to rem
                >
                  <Text fontFamily="another_danger" color="#FF7043">Ready!</Text>
                </Button>
              </Box>
            </form>
          </Box>
        </Box>
      </Box>
      
      <audio ref={handleAudioRef} />
    </>
  );
}

export default Login;