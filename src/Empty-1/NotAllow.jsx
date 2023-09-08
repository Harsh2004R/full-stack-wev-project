
import React, { useEffect, useState } from 'react';
import { Box, Button,keyframes ,Text } from "@chakra-ui/react";
import PageNotAllow from "../autoAudio/PageNotAllow.mp3";
import BG from "../Photo/NotAllow.jpg"
import PC from "../Photo/PC.jpg"
import { Navigate, useNavigate } from 'react-router-dom';
const shadow = keyframes`
  0% {
    text-shadow: rgb(255, 61, 0);
  }
  50% {
    text-shadow: 10px 10px 18px rgb(255, 61, 0);
  }
  100% {
    text-shadow: rgb(255, 61, 0);
  }
`;
const creepyCrawl = keyframes`
  0% {
    transform: translateX(100%);
  }
  100% {
    transform: translateX(-100%);
  }
`;


function NotAllow() {
  const [musicPlaying, setMusicPlaying] = useState(false);
  const [showAlert, setShowAlert] = useState(true);
  const [showBox, setShowBox] = useState(false);
  const Navigate = useNavigate()
  useEffect(() => {
    const audioElement = document.getElementById('bg-music');
    if (audioElement && musicPlaying) {
      audioElement.play().catch((error) => {
        console.error("Error while playing audio:", error);
      });
    }
  }, [musicPlaying]);

  const handlePlayMusic = () => {
    setMusicPlaying(true);
    setShowAlert(false);
  };
  const handleShowBox = () => {
    setShowBox(true);
  };
  
  const handleBack =()=>{
    Navigate("/")
  }

  return (
    <>
      <Box w='100%' h="100vh" 
      // border="2px solid lime"
      position= 'fixed'
      top= "0"
      left= "0"
      width= '100%'
      height= '100%'
      backgroundImage={`url(${PC})`}
      backgroundSize="cover"
      backgroundPosition="center"
      backgroundRepeat="no-repeat"
      display="flex"
      justifyContent="center"
      alignItems="center"
      zIndex= "9999"
      flexDirection="column"
      >
            
       
        <audio id="bg-music" loop>
          <source src={PageNotAllow} type="audio/mpeg" />
          Your browser does not support the audio element.
        </audio>



        <Text fontSize={"3xl"} color="#37474F" animation={`${creepyCrawl} 5s linear infinite`}>Message from Dare to visit</Text>
        <Text animation={`${shadow} 2s infinite`}  onClick={handleBack} p={10} color="#1976D2" fontSize="3xl">-Back</Text>
      </Box>

      {/* Custom Alert */}
      {showAlert && (
        <div
          style={{
            // border:"1px solid red",
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundImage:`url(${BG})`,
            backgroundSize:"cover",
            backgroundPosition:"center",
            backgroundRepeat:"no-repeat",
            display:"flex",
            justifyContent:"center",
            alignItems:"center",
            zIndex: 9999,
          }}
          onClick={() => {
            handlePlayMusic();
            // handleShowBox() ;// Call both functions on click
          }}
        >
          <div
            style={{
              // border:"1px solid red",
              padding: "50px",
              backgroundColor: 'Transparent',
              borderRadius: '8px',
              textAlign: 'center',
            
            }}
          >
            <Text animation={`${shadow} 2s infinite`} fontSize={{base:'2rem',md:"6xl"}}  color="red" onClick={handlePlayMusic}>Click to Continue..</Text>
            <Text animation={`${shadow} 2s infinite`} flexDirection="column" onClick={handleBack} p={5} color="#1976D2" textDecoration="underline" fontSize="3xl">Home</Text>
            
          </div>
        </div>
      )}

      {showBox && (
        <div
          style={{
            border:"2px solid red",
            position: 'fixed',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            padding: '20px',
            backgroundColor: 'white',
            borderRadius: '8px',
            textAlign: 'center',
            zIndex: 9999,
          }}
        >
          <p>This is the box displayed after clicking "Click to Continue.."</p>
          {/* You can add any text or components inside the box */}
        </div>
      )}
      
    </>
  );
}

export default NotAllow;











































