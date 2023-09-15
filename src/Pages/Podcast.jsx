import React from 'react'
import {Box,Image,Button,Text} from "@chakra-ui/react"
import AudioPlayer from '../Components/AudioPlayer'
function Podcast() {
  return (
    <div>
      <Box
      w='100%'
      h='auto'
      bg='#000000'
      
      >
        <Text p={4}
        // border="1px solid red"
        fontSize={{ base: '3xl', md: '6xl' }}
        fontFamily="quantify"
        textAlign="center"
        color="#FFFFFF"
        transition="transform 0.8s" 
        _hover={{
          transform: 'scale(0.9)',
        }}
        >"The Haunting Hour"</Text>


        <Box>

        <AudioPlayer/>

        </Box>



      </Box>
      
    </div>
  )
}

export default Podcast
