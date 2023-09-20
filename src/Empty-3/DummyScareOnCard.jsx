import React from 'react'
import {Card,CardHeader,Flex,Heading,Text,Box,CardBody,Image,CardFooter,Button,Avatar,IconButton} from "@chakra-ui/react";

import {  useNavigate } from 'react-router-dom';

import UH1 from "../Photo/UH1.webp";

import { BsThreeDotsVertical } from "react-icons/bs"; 
import { BiLike, BiChat, BiShare } from "react-icons/bi"; 

function DummyScareOnCard() {
  const Navigate=useNavigate();
  const handleScareOnClip = ()=>{
      Navigate("/scareon")
  }

  return (
    <div>
      <Card onClick={handleScareOnClip} maxW='md' borderRadius={{base:"0px",md:"md"}} _hover={{ boxShadow: '0 0 30px #81D4FA' }}>
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

  <CardFooter
    justify='space-between'
    flexWrap='wrap'
    sx={{
      '& > button': {
        minW: '80px',
      },
    }}
  >
    <Button   flex='1' variant='ghost' leftIcon={<BiLike color="#03A9F4"/>}>
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

export default DummyScareOnCard;




