import React, { useState, useEffect } from 'react';
import {
    Container,
    SimpleGrid,
    Image,
    Flex,
    Button,
    Text,
    Stack,
    StackDivider,
    Icon,
    useColorModeValue,
  } from '@chakra-ui/react';
  import {  IoSearchSharp } from 'react-icons/io5';
  import { FaApple } from 'react-icons/fa'; // Added a sample icon for illustration
  



 
  
  
  import ATR1 from "../Photo/ATR1.gif";
  import ATR2 from "../Photo/ATR2.gif";
  import ATR3 from "../Photo/ATR3.gif";
  import ATR4 from "../Photo/ATR4.gif";
  import ATR5 from "../Photo/ATR5.gif";
  import ATR6 from "../Photo/ATR6.gif";
  import ATR7 from "../Photo/ATR7.gif";
  import ATR8 from "../Photo/ATR8.gif";
  

  const gradient_xx = `linear-gradient(to right ,#000000, #7D1616, #000000)`;

  function Feature({ text, icon, iconBg }) {


    


    return (
      <Stack direction={'row'} align={'center'}>
        <Flex w={8} h={8} align={'center'} justify={'center'} rounded={'full'} bg={iconBg}>
          {icon}
        </Flex>
        <Text fontWeight={600}>{text}</Text>
      </Stack>
    );
  }
  
  export default function AI() {

// hellowworld
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const images = [
        ATR1 ,
        ATR2 ,
        ATR3 ,
        ATR4 ,
        ATR5 ,
        ATR6 ,
        ATR7 ,
        ATR8 ,
      // Add more image URLs here
    ];
  

    const HandleAIpage = () => {

        
        const AIpage = "http://nightmare.mit.edu/"
        window.location.href = AIpage;
    };


    useEffect(() => {
      const interval = setInterval(() => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
      }, 5000); // Change image every 3 seconds
  
      return () => clearInterval(interval);
    }, []);

    

    return (
      <Container maxW={'5xl'} bg={"#000000"} py={12} >
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
          <Stack spacing={4}>
            {/* <Button
            onClick={HandleAIpage}
              textTransform={'uppercase'}
              _hover={{ boxShadow: '0 0 10px 5px skyblue' }} border="1px dashed #29B6F6"
              fontFamily={"my"} color="#fff"
              bg={gradient_xx}
              fontSize={'sm'}
              p={5}
              alignSelf={'flex-start'}
              rounded={'md'}
            >
              Explore More
            </Button> */}
            <Text mt="10px" fontFamily={"fiendish"} textAlign={"left"} color="#FF0000" fontSize={{base:"xxl",md:"3xl"}}>All over the world </Text>
            <Text fontFamily={"living-by-numbers"} textAlign={{base:"justify",md:"justify"}} color="#fff" fontSize={{base:"1.1rem",md:"1.2rem"}} >
            We use really smart computer programs to learn what spooky houses and creepy cities look like. Then, we use what we learned to make 
            famous places look scary too. So, get ready to see AI magic turning the world into a spooky adventure!
            </Text>
            <Stack
              spacing={4}
              divider={
                <StackDivider borderColor={useColorModeValue('gray.100', 'gray.700')} />
              }
            >
              <Feature  
                icon={<Icon as={IoSearchSharp} color={'yellow.500'} w={5} h={5} />}
                iconBg={"#fff"}
                text={ <Text fontSize={{base:"0.7rem",md:"1rem"}} color={'yellow.500'}>"The Stanley Hotel (Estes Park, Colorado, USA):"</Text>}
              />
              <Feature
                icon={<Icon as={IoSearchSharp} color={'green.500'} w={5} h={5} />}
                iconBg={"#fff"}
                text={ <Text fontSize={{base:"0.7rem",md:"1rem"}} color={'yellow.500'}>"Tower of London (London, England):"</Text>}
              />
              <Feature
                icon={<Icon as={IoSearchSharp} color={'purple.500'} w={15} h={15} />}
                iconBg={"#fff"}
                text={<Text fontSize={{base:"0.7rem",md:"1rem"}} color={'yellow.500'}>"Eastern State (Philadelphia, Pennsylvania, USA):"</Text>}
              />
              
            </Stack>
          </Stack>
          <Flex>
          <Image
            // border="2px solid teal"
            className="slider-image"
            src={images[currentImageIndex]}
            alt={'feature image'}
            w={{base:"100%",md:"80%"}}
            h={{base:"100%",md:"70%"}}
            m="auto"
          />
          </Flex>
        </SimpleGrid>
      </Container>
    );
  }
  