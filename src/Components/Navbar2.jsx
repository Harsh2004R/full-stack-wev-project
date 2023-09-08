

import React, { useState } from 'react';
import { Button,Text,Image, Box } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import { keyframes } from '@emotion/react';
import L_arrow from "../Photo/L_arrow.png"
import PodCast from "../Photo/PodCast.png"
import Stories from "../Photo/Stories.png"
import Laptop from "../Photo/Laptop.png"
import Home from  "../Photo/Home.png"
import User from "../Photo/User.png"
const glow = keyframes`
  0%, 100% {
    box-shadow: 0 0 0 0 rgba(255, 255, 255, 0.7);
  }
  50% {
    box-shadow: 0 0 20px 15px rgba(255, 255, 255, 0);
  }
`;
const float = keyframes`
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
`;


const bounce = keyframes`
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-20px);
  }
`;



const colorChangeAnimation = keyframes`
  0%, 100% {
    color: #FF0000;
  }
  80% {
    color: #A7FFEB;
  }
  50% {
    color: #FFFF8D;
  }
  30% {
    color: #EEEEEE;
  }
`;





function Navbar() {
  const navigate = useNavigate();
  const [showButtons, setShowButtons] = useState(false);

  const toggleButtons = () => {
    setShowButtons(!showButtons);
  };

  const numButtons = 5;
  const angle = Math.PI / (numButtons - 1); // Angle between each button in radians

  const parentBoxHeight = showButtons ? '170px' : '50px'; // Adjusted parent box height based on button visibility

  const buttonData = [
    {
      path: '/scaron',
      image: User,
      text: 'ScareOn',
    },
    {
      path: '/podcast',
      image: PodCast,
      text: 'PodCast',
    },
    {
      path: '/darkweb',
      image: Laptop,
      text: 'Dark web',
    },
    {
      path: '/stories',
      image: Stories,
      text: 'Stories',
    },
    {
      path: '/',
      image: Home,
      text: 'Home',
    },
    // Add more objects for each button
  ];




  return (
    <div
      style={{
        position: 'fixed',
        top: '50%',
        right: 0, // Align to the right side of the viewport
        transform: 'translateY(-50%)',
        zIndex: 1000, // Ensure it's above other content
      }}
    >
    <div  style={{ display: 'flex', justifyContent: 'center',background:"transparent", alignItems: 'center', height: parentBoxHeight }}>
      <Box
        // border="1px solid red"
        
        // backgroundColor="blue.200"
        borderRadius="50%"
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        position="relative"
      >
        <Box
        animation= {`${float} 2.5s ease-in-out infinite`}
          onClick={toggleButtons}
          // bg={NavBG}
          style={{
            borderRadius: '50%',
            width: '50px',
            height: '50px',
            marginBottom: '0px',
            backgroundColor: 'transparent',
            color: 'white',
            
            // border:"1px solid red"
          }}
        >
        <Image borderRadius={"50%"} src={L_arrow} w="100%" h="100%"/>
        </Box>
        {showButtons && (
          <div
            style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}
          >
            {buttonData.map((button, index) => (
              <Box
              
                key={index}
                style={{
                  position: 'absolute',
                  transform: `translate(-50%, -50%) translateX(${-Math.sin(angle * index) * 70}px) translateY(${Math.cos(angle * index) * 70}px)`,
                  borderRadius: '50%',
                  width: '50px',
                  height: '50px',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  backgroundColor: 'grey',
                  color: 'white',
                }}
                onClick={() => navigate(button.path)}
              >
                <span style={{ fontSize: '10px' }}></span>
                <Image  src={button.image} w="70%" h="65%"/>
                <Text animation={`${colorChangeAnimation} 8s infinite alternate`} fontSize="9px" >{button.text}</Text>
              </Box>
            ))}
          </div>
        )}
      </Box>
    </div>
    </div>
  );
}
        
export default Navbar;

