// import React from 'react'
// import {Card,CardHeader,Flex,Heading,Text,Box,CardBody,Image,CardFooter,Button,Avatar,IconButton} from "@chakra-ui/react";


// import UH1 from "../Photo/UH1.webp";

// import { BsThreeDotsVertical } from "react-icons/bs"; 
// import { BiLike, BiChat, BiShare } from "react-icons/bi"; 

// function ScareOnCard() {
//   return (
//     <div>
//       <Card maxW='md' borderRadius={{base:"0px",md:"md"}}>
//   <CardHeader>
//     <Flex spacing='4'>
//       <Flex flex='1' gap='4' alignItems='center' flexWrap='wrap'>
//         <Avatar name='Segun Adebayo' src="https://cdn-icons-png.flaticon.com/128/196/196850.png" />

//         <Box>
//           <Heading size='sm' fontSize={{base:"16px",md:"20px"}}>Segun Adebayo</Heading>
//           <Text fontSize={{base:"12px",md:"15px"}} color="#03A9F4">Uploded: 06-07-2023</Text>
//         </Box>
//       </Flex>
//       <IconButton
//         variant='ghost'
//         colorScheme='gray'
//         aria-label='See menu'
//         icon={<BsThreeDotsVertical />}
//       />
//     </Flex>
//   </CardHeader>
//   <CardBody>
//   <Text fontWeight={"bold"} fontSize={{base:"12px",md:"15px"}} color="#E91E63">
//   Pari Tibba – Hill Of Fairies
//     </Text>
//     <Text fontFamily={"popins"} fontSize={{base:"12px",md:"16px"}}>
//     Can you recall where have you heard about Pari Tibba before? No? Aren’t you a Ruskin Bond fan? Well, Ruskin Bond, the famous writer in Mussoorie, has mentioned about Pari Tibba in many of his stories. 
//     </Text>
//   </CardBody>
//   <Image
//     objectFit='cover'
//     src={UH1}
//     alt='Chakra UI'
//   />

//   <CardFooter
//     justify='space-between'
//     flexWrap='wrap'
//     sx={{
//       '& > button': {
//         minW: '80px',
//       },
//     }}
//   >
//     <Button   flex='1' variant='ghost' leftIcon={<BiLike color="#03A9F4"/>}>
//       Like
//     </Button>
//     <Button  flex='1' variant='ghost' leftIcon={<BiChat color="#FF0000"/>}>
//       Comment
//     </Button>
//     <Button  flex='1' variant='ghost' leftIcon={<BiShare color="#66BB6A"/>}>
//       Share
//     </Button>
//   </CardFooter>
// </Card>
//     </div>
//   )
// }

// export default ScareOnCard



import React, { useState, useEffect } from 'react';
import {Card,CardHeader,Flex,Heading,Text,Box,CardBody,Image,CardFooter,Button,Avatar,IconButton} from "@chakra-ui/react";


import UH1 from "../Photo/UH1.webp";

import { BsThreeDotsVertical } from "react-icons/bs"; 
import { BiLike, BiChat, BiShare } from "react-icons/bi"; 

function ScareOnCard() {

  const [likeCount, setLikeCount] = useState(0);

  // Function to handle the like button click
  const handleLikeClick = () => {
    // Increment the like count
    setLikeCount(likeCount + 1);

    // Store the updated like count in localStorage
    localStorage.setItem('likeCount', likeCount + 1);
  };

  // Use useEffect to retrieve the like count from localStorage on component mount
  useEffect(() => {
    const storedLikeCount = localStorage.getItem('likeCount');

    if (storedLikeCount !== null) {
      // Parse the stored value as an integer
      setLikeCount(parseInt(storedLikeCount, 10));
    }
  }, []);


  return (
    <div>
      <Card maxW='md' borderRadius={{base:"0px",md:"md"}}>
  <CardHeader>
    <Flex spacing='4'>
      <Flex flex='1' gap='4' alignItems='center' flexWrap='wrap'>
        <Avatar name='Segun Adebayo' src="https://cdn-icons-png.flaticon.com/128/196/196850.png" />

        <Box>
          <Heading size='sm' fontSize={{base:"16px",md:"20px"}}>Segun Adebayo</Heading>
          <Text fontSize={{base:"12px",md:"15px"}} color="#03A9F4">Uploded: 06-07-2023</Text>
        </Box>
      </Flex>
      <IconButton
        variant='ghost'
        colorScheme='gray'
        aria-label='See menu'
        icon={<BsThreeDotsVertical />}
      />
    </Flex>
  </CardHeader>
  <CardBody>
  <Text fontWeight={"bold"} fontSize={{base:"12px",md:"15px"}} color="#E91E63">
  Pari Tibba – Hill Of Fairies
    </Text>
    <Text fontFamily={"popins"} fontSize={{base:"12px",md:"16px"}}>
    Can you recall where have you heard about Pari Tibba before? No? Aren’t you a Ruskin Bond fan? Well, Ruskin Bond, the famous writer in Mussoorie, has mentioned about Pari Tibba in many of his stories. 
    </Text>
  </CardBody>
  <Image
    objectFit='cover'
    src={UH1}
    alt='Chakra UI'
  />



  {/* hello */}

  <CardFooter
    justify='space-between'
    flexWrap='wrap'
    sx={{
      '& > button': {
        minW: '80px',
      },
    }}
  >
    <Button  onClick={handleLikeClick} flex='1' variant='ghost' leftIcon={<BiLike color="#03A9F4"/>}>
      Like
    </Button>
    <Button  flex='1' variant='ghost' leftIcon={<BiChat color="#FF0000"/>}>
      Comment
    </Button>
    <Button  flex='1' variant='ghost' leftIcon={<BiShare color="#66BB6A"/>}>
      Share
    </Button>
  </CardFooter>
</Card>
    </div>
  )
}

export default ScareOnCard