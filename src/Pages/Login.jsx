
import React, { useState, useEffect } from 'react';
import axios from 'axios';

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

  // login hooks here....
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  let url = "https://reqres.in/api/login";

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
    // Handle login logic here
    e.preventDefault();

    let obj = { email, password };
    axios
      .post(url, obj)
      .then((res) => {
        console.log(res);
        let token = res.data.token;
        localStorage.setItem("token", token);
      })
      .catch((err) => {
        console.log(err);
      });
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
              fontSize={{ base: "4rem", md: "5rem" }}
              m="auto"
            >
              Login
            </Text>
          </Box>
          <Box border="none" maxWidth="25rem" p="2.8125rem" borderWidth={1} borderRadius={8} boxShadow="lg" bgColor="transparent"> {/* Converted to rem */}
            <form onSubmit={handleSubmit}>
              <FormControl p="0.625rem" mb="1.25rem"> 
               
                  <Text fontFamily= "caslon-antique" color="#fff" fontSize={{base:"18px",md:"25px"}} textAlign="center" pb="0.625rem">Email address</Text>
                
                <Input
                  color="#FF6F00"
                  pt="0.625rem" 
                  variant="unstyled"
                  placeholder="Your valid Email"
                  placeholderTextColor="#ECEFF1"
                  textAlign="center"
                  bg="none"
                  mx="auto"
                  type="text"
                  border="none"
                  fontFamily=""
                  onChange={(e) => setemail(e.target.value)}
                />
              </FormControl>
              <FormControl p="0.625rem">
                
                  <Text fontFamily= "caslon-antique" color="#fff" fontSize={{base:"18px",md:"25px"}} textAlign="center" pb="0.625rem">Password</Text>
                
                <Input
                  color="FF6F00"
                  border="none"
                  pt="0.625rem" 
                  variant="unstyled"
                  placeholder="Your password"
                  placeholderTextColor="#ECEFF1"
                  textAlign="center"
                  bg="none"
                  mx="auto"
                  type="text"
                  fontFamily=""
                  onChange={(e) => setpassword(e.target.value)}
                />
              </FormControl>
              <Box mt="0.625rem"> 
                <Button
                  onClick={handleSubmit}
                  _hover={{ boxShadow: '0 0 0.625rem 0.3125rem #FF0000' }} 
                  animation={`${glowAnimation} 1s infinite`}
                  _focus={{ outline: 'none' }}
                  _active={{ transform: 'scale(1.5)' }}
                  display="flex" alignItems="center" m="auto" fontSize={{base:"18px",md:"25px"}} type="submit" bgColor="transparent" borderRadius="md" w={{base:"100px",md:"120px"}} // Converted to rem
                >
                  <Text fontFamily="caslon-antique" color="#FF7043">Enter !</Text>
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