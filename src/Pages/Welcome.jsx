
import React from 'react';
import { Box,Text,Button,Image,keyframes  } from '@chakra-ui/react';
import AnnaBG from "../Photo/AnnaBG.jpg"
import { Navigate, useNavigate } from "react-router-dom";
const glowAnimation = keyframes`
  0% { box-shadow: 0 0 0px #FF0000; }
  50% { box-shadow: 0 0 10px 5px #FF0000; }
  100% { box-shadow: 0 0 0px #FF0000; }
`;
function Welcome() {

    const Navigate=useNavigate()
    const handleAuth = ()=>{
        Navigate("/signUp")
    }
  return (
    <>
      <Box
        w="100%"
        h="100vh"
        // border="2px solid red"
        backgroundImage={`url(${AnnaBG})`}
        backgroundSize="cover"
        backgroundPosition="center"
        backgroundRepeat="no-repeat"
        width="100%"
        height="100vh"
        display="flex"
        justifyContent="center"
        alignItems="center"
        
      >
        <Box
        // border="1px solid cyan"
          position="absolute"
          top={0}
          left={0}
          right={0}
          p={4}
          textAlign="center"
          zIndex={1}
          // border="2px solid #fff"
        >
          <Text
            fontFamily="sectar"
            color="#FFFFFF"
            fontSize={{base:"2rem",md:"5rem"}}
            m="auto"
            pt="10px"
            
          >
            Dare To Visit
          </Text>
          </Box>
        <Box w={{base:"100%",md:"60%"}}
        //  border="1px solid cyan"
         
        
        >
           
           <Box
            p={35} 
            // border="1px solid cyan" 
            display="flex"
            justifyContent="center"
            alignItems="center"
           >
             <Button 
             w={{base:"25%",md:"10%"}}
             h="40px"
            //  border="1px solid #fff"
             onClick={handleAuth}
             bg="transparent"
              color="#FF0000"
              fontFamily="another_danger"
              _hover={{ boxShadow: '0 0 10px 5px #FF0000' }}
              animation={`${glowAnimation} 1s infinite`}
              // _focus={{ outline: 'none' }}
              _active={{ transform: 'scale(1.5)' }}
                textAlign={"center"} 
                // display="block"
                 m="auto">
                    E n t e r
                </Button>
             </Box>
            <Text
            // border="1px solid #FF0000"
            borderRadius={"md"}
            textAlign={"left"}
            animation={`${glowAnimation} 1s infinite`}
            _active={{ transform: 'scale(0.95)' }}
            display="block"
            color="#FF0000"
            mt="50px"
            // color="#fff"
            fontFamily="sans"
            fontSize={{base:"20px",md:"25px"}}>
                {/* Note: Enter at your own risk,"Dare to Visit." 
            To truly amplify the horror experience, we recommend wearing earphones. 
            Let the haunting whispers and bone-chilling soundscape surround you, enveloping you in a realm of fear. */}
            <Text color="white" display="inline">
        Note: 
      </Text>{' '}
     {' '}"Dare to Visit" Enter at your own risk, On signin page click any where for audio
      To truly amplify the horror experience, we recommend wearing earphones. Let the haunting whispers and bone-chilling soundscape surround you, enveloping you in a realm of fear.
    
             </Text>
        </Box>

      </Box>
    </>
  );
}

export default Welcome;