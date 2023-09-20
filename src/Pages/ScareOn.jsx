
import React from 'react'
import {Box,Button,Text,Image,Divider} from "@chakra-ui/react";
import ScareOnClip from '../Components/ScareOnClip';
import ScareOnCard from '../Components/ScareOnCard';
// import {Box,Image,Button,Text,} from "@chakra-ui/react"
function ScareOn() {
  return (
    <div>
      


      <Box w="100%" h="100vh" 
      // border={"1px solid cyan"}
      bg="#000000"
      display={"flex"}
      flexDirection={{base:"column",md:"row"}}
      justifyContent={"space-around"}
      >

      <Box
      transition="transform 1s" 
      _hover={{ 
       
       cursor: 'pointer'
     }} 
        w={{base:"90%",md:"35%"}}
        
        h={{base:"65vh",md:"100vh"}}
        overflow="auto" 
        p="4" 
        bgColor={"#181818"} 
        borderRadius="none" 
        css={{
          "&::-webkit-scrollbar": {
            width: "5px", // Adjust the width as per your preference
          },
          "&::-webkit-scrollbar-thumb": {
            backgroundColor: "#F44336", // Customize the scrollbar thumb color
            borderRadius: "10px", // Adjust the scrollbar thumb border-radius
          },
          "&::-webkit-scrollbar-track": {
            backgroundColor: "#B0BEC5", // Customize the scrollbar track color
            borderRadius: "10px", // Adjust the scrollbar track border-radius
          },
        }}
      >
        


       {/* content starts here*/}


       <Box m="auto" w={{base:"95%",md:"97%"}} h="auto" 
      //  border="2px solid red"
       >
        <Text textAlign={"left"} mt="10px" mb="10px" color="#1976D2" fontFamily={"dogica-lite"}  fontSize={{base:"0.8rem",md:"1.4rem"}}>Hot Post's here...</Text>
        
        
        <Box
        // border={"1px solid red"}
          w="100%"
           h="auto" 
           display={"flex"}
            justifyContent={"left"}
             alignItems={"center"}
              >

        <ScareOnCard/>

        </Box>
        


           <Box 
          bgColor={"#181818"}
          // border="2px solid red" 
          display={"flex"} justifyContent={"center"} alignItems={"center"}> 
         <Button 
         color="#FFFFFF"
         w={{base:"160px",md:"180px"}}
         h={{base:"30px",md:"40px"}}
         bg={`linear-gradient(to right, #000000, #1976D2, #000000)`}
          fontSize={{base:"13px",md:"16px"}} 
          fontFamily={"just-die-already"} 
          mb={{base:"30px",md:"50px"}}
           mt={{base:"30px",md:"50px"}}
           _hover={{bg:`linear-gradient(to right, #1976D2, #000000, #1976D2)`, boxShadow:'0 0 8px 5px #F5F5F5'}}
           _focus={{ outline: 'none' }}
           boxShadow='0 0 8px 5px #90A4AE'
           _active={{ transform: 'scale(1.5)' }}
           borderRadius={"none"}
           
           >Add post</Button> 
         </Box>

       </Box>

       </Box>







{/* second box here */}

<Box
      transition="transform 1s" 
      _hover={{ 
       
       cursor: 'pointer'
     }} 
        w={{base:"90%",md:"58%"}}
        
        h={{base:"65vh",md:"100vh"}}
        overflow="auto" 
        p="4" 
        bgColor={"#181818"} 
        borderRadius="none" 
        css={{
          "&::-webkit-scrollbar": {
            width: "5px", // Adjust the width as per your preference
          },
          "&::-webkit-scrollbar-thumb": {
            backgroundColor: "#F44336", // Customize the scrollbar thumb color
            borderRadius: "10px", // Adjust the scrollbar thumb border-radius
          },
          "&::-webkit-scrollbar-track": {
            backgroundColor: "#B0BEC5", // Customize the scrollbar track color
            borderRadius: "10px", // Adjust the scrollbar track border-radius
          },
        }}
      >
        


       {/* content starts here*/}
       <Box m="auto" w={{base:"95%",md:"95%"}} h="auto" 
      //  border="2px solid red"
       >
        <Text textAlign={"left"} color="#F44336" fontFamily={"dogica-lite"}  fontSize={{base:"0.8rem",md:"1.4rem"}}>Spooky saround clips...</Text>
        
        
        



           <Box 
          bgColor={"#181818"}
          // border="2px solid red" 
          display={"flex"} justifyContent={"center"} alignItems={"center"}> 
         <Button 
         color="#FFFFFF"
         w={{base:"160px",md:"180px"}}
         h={{base:"30px",md:"40px"}}
         bg={`linear-gradient(to right, #000000, #1976D2, #000000)`}
          fontSize={{base:"13px",md:"16px"}} 
          fontFamily={"just-die-already"} 
          mb={{base:"30px",md:"50px"}}
           mt={{base:"30px",md:"50px"}}
           _hover={{bg:`linear-gradient(to right, #1976D2, #000000, #1976D2)`, boxShadow:'0 0 8px 5px #F5F5F5'}}
           _focus={{ outline: 'none' }}
           boxShadow='0 0 8px 5px #90A4AE'
           _active={{ transform: 'scale(1.5)' }}
           borderRadius={"none"}
           
           >Add post</Button> 
         </Box>

       </Box>

       </Box>


























       </Box>
      
    </div>
  )
}

export default ScareOn
