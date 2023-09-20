import React from 'react'
import {Box,Image,Button} from "@chakra-ui/react";
import Newiphone from "../Photo/Newiphone.jpg";
import IphoneBG from "../Photo/IphoneBG.png";
import WhatsappBG from "../Photo/WhatsappBG.jpg";
function Media() {
  return (
    <div>
        <Box w="100%" h={{base:"100vh",md:"250vh"}} bg="#000000">
            <Box w={{base:"95%",md:"60%"}} h={{base:"95vh",md:"250vh"}}
            // border="1px solid red" 
            m="auto" 
            display={"flex"} justifyContent={"center"} alignItems={"center"}
            >

                <Image src={IphoneBG} w="100%" h="100%"/>
                <Box
      w={{base:"85%",md:"53.2%"}}
      h={{base:"73vh",md:"191.5vh"}}
      border={{base:"3px solid #000000",md:"5px solid #000000"}}
      position="absolute"
      borderRadius={"8px"}
      top="0"
      left={{base:"2px",md:"5px"}}
      right="0"
      bottom={{base:"40px",md:"4px"}}
      m="auto"
    //   background="rgba(0, 0, 255, 0.5)" 
    backgroundImage={`url(${WhatsappBG})`}
          backgroundSize="cover"
          backgroundPosition="center"
          backgroundRepeat="no-repeat"
    >



      {/* Content of the overlaying box */}











    </Box>
            </Box>

        </Box>
      
    </div>
  )
}

export default Media
