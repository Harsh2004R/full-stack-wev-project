import React, { useEffect, useRef,useState } from 'react'
import {Box,Image,Button,Text,Select,keyframes } from "@chakra-ui/react"
import BGvid from "../Videos/BGvid.mp4"
import { Navigate, useNavigate } from "react-router-dom";
import Navbar from "../Components/Navbar"

const glowAnimation = keyframes`
  0% { box-shadow: 0 0 0px #FF0000; }
  50% { box-shadow: 0 0 10px 5px #FF0000; }
  100% { box-shadow: 0 0 0px #FF0000; }
`;




function DeathCause() {
  const Navigate =  useNavigate();

  const handleDeathDatepage = ()=>{
    Navigate("/deathDate")
  }
    const videoRef = useRef(null);
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
    <Navbar/>
    <Box
    onClick={handleAudio}
    width="100%"
    height="100vh"
    display="flex"
    justifyContent="center"
    alignItems="center"
    position="relative"
    overflow="hidden"
    flexDirection={"column"}
    >
    <video
          ref={videoRef}
          id="background-video"
          src={BGvid}
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
        <Box w='100%' h="20vh"
        //  border="2px solid #fff"
         
         >
          <Text mt="10px"
          textAlign={"center"}
          fontFamily={"fiendish"}
          fontSize={{ base: "1.2rem", md: "4xl" }}
          color="#FF0000">Can You Predict the End?
          </Text>
          <Text textAlign={"center"} mt="0.2rem" fontSize={{base:"0.7rem",md:"15px"}}
          color="#9E9E9E">Welcome to the chilling depths of terror. Here,
             you shall discover the cause of your impending
              demise. To unravel the mysteries of your fate, 
              summon courage, and click the 
              <span style={{color:"#FF0000"}} > Death Date button.</span>
               Brace yourself, for darkness looms ahead.</Text>
        </Box>

        <Box w='100%' h="100vh" 
        // border="2px solid #fff"
        >
            <Box w={{base:"100%" ,md:"50%"}} h="80vh"
            //  border="2px solid #EA80FC"
              m="auto">
            <Box  w='100%' h="40vh" 
            // border="2px solid #FF5722"
            onClick={stopPropagation}
             m="auto">
              {/* Upper box content here */}
              <Box  display="flex" justifyContent="center" marginBottom="10px">
    <Select  margin="5px"  placeholder='Select option' variant='unstyled' color="#fff">
      <option value="option1" style={{ backgroundColor: "#fff", color: "#000" }}>Option 1</option>
      <option value="option2" style={{ backgroundColor: "#fff", color: "#000" }}>Option 2</option>
      <option value="option3" style={{ backgroundColor: "#fff", color: "#000" }}>Option 3</option>
      <option value="option1" style={{ backgroundColor: "#fff", color: "#000" }}>Option 1</option>
      <option value="option2" style={{ backgroundColor: "#fff", color: "#000" }}>Option 2</option>
      <option value="option3" style={{ backgroundColor: "#fff", color: "#000" }}>Option 3</option>
    </Select>
    <Select margin="5px" color="#fff"  placeholder='Select option' variant='unstyled'>
      <option value="option1" style={{ backgroundColor: "#fff", color: "#000" }}>Option 1</option>
      <option value="option2" style={{ backgroundColor: "#fff", color: "#000" }}>Option 2</option>
      <option value="option3" style={{ backgroundColor: "#fff", color: "#000" }}>Option 3</option>
      <option value="option1" style={{ backgroundColor: "#fff", color: "#000" }}>Option 1</option>
      <option value="option2" style={{ backgroundColor: "#fff", color: "#000" }}>Option 2</option>
      <option value="option3" style={{ backgroundColor: "#fff", color: "#000" }}>Option 3</option>
    </Select>
  </Box>

  <Box  display="flex" justifyContent="center" marginBottom="10px">
    <Select margin="5px" color="#fff"  placeholder='Select option' variant='unstyled'>
      <option value="option1" style={{ backgroundColor: "#fff", color: "#000" }}>Option 1</option>
      <option value="option2" style={{ backgroundColor: "#fff", color: "#000" }}>Option 2</option>
      <option value="option3" style={{ backgroundColor: "#fff", color: "#000" }}>Option 3</option>
      <option value="option1" style={{ backgroundColor: "#fff", color: "#000" }}>Option 1</option>
      <option value="option2" style={{ backgroundColor: "#fff", color: "#000" }}>Option 2</option>
      <option value="option3" style={{ backgroundColor: "#fff", color: "#000" }}>Option 3</option>
    </Select>
    <Select margin="5px" color="#fff"  placeholder='Select option' variant='unstyled'>
      <option value="option1" style={{ backgroundColor: "#fff", color: "#000" }}>Option 1</option>
      <option value="option2" style={{ backgroundColor: "#fff", color: "#000" }}>Option 2</option>
      <option value="option3" style={{ backgroundColor: "#fff", color: "#000" }}>Option 3</option>
      <option value="option1" style={{ backgroundColor: "#fff", color: "#000" }}>Option 1</option>
      <option value="option2" style={{ backgroundColor: "#fff", color: "#000" }}>Option 2</option>
      <option value="option3" style={{ backgroundColor: "#fff", color: "#000" }}>Option 3</option>
    </Select>
  </Box>

  <Box  display="flex" justifyContent="center">
    <Select margin="5px" color="#fff" placeholder='Select option' variant='unstyled'>
      <option value="option1" style={{ backgroundColor: "#F9FBE7", color: "#000" }}>Option 1</option>
      <option value="option2" style={{ backgroundColor: "#fff", color: "#000" }}>Option 2</option>
      <option value="option3" style={{ backgroundColor: "#fff", color: "#000" }}>Option 3</option>
      <option value="option1" style={{ backgroundColor: "#fff", color: "#000" }}>Option 4</option>
      <option value="option2" style={{ backgroundColor: "#fff", color: "#000" }}>Option 5</option>
      <option value="option3" style={{ backgroundColor: "#fff", color: "#000" }}>Option 3</option>
    </Select>
    <Select color="#fff" margin="5px" placeholder='Select option'  variant='unstyled' >
      <option value="option1" style={{ backgroundColor: "#fff", color: "#000" }}>Option 1</option>
      <option value="option2" style={{ backgroundColor: "#fff", color: "#000" }}>Option 2</option>
      <option value="option3" style={{ backgroundColor: "#fff", color: "#000" }}>Option 3</option>
      <option value="option1" style={{ backgroundColor: "#fff", color: "#000" }}>Option 1</option>
      <option value="option2" style={{ backgroundColor: "#fff", color: "#000" }}>Option 2</option>
      <option value="option3" style={{ backgroundColor: "#fff", color: "#000" }}>Option 3</option>
    </Select>
  </Box> 
  <Box  h="50%" w="100%" display={"flex"} justifyContent={"center"}>
    
    <Button 
     _hover={{ boxShadow: '0 0 10px 5px #FF0000' }}
     animation={`${glowAnimation} 1s infinite`}
     _focus={{ outline: 'none' }}
     _active={{ transform: 'scale(1.5)' }}
    textColor={"#FF0000"}
    fontFamily={"bloody"}
      m="auto" fontWeight={"bolder"} 
      bgColor="transparent"
      >
      Death Cause
    </Button></Box>
              
            </Box>
            <Box  w='100%' h="40vh"
             border="2px solid #FF5722"
              m="auto">

            </Box>
            </Box>
        </Box>
        
    </Box>
    
    
    </>
  )
}

export default DeathCause