import React from 'react';
import {
  Box,
  Heading,
  Image,
  Text,
  Divider,
  HStack,
  Tag,
  Wrap,
  WrapItem,
  useColorModeValue,
  Container,
  VStack,
  Drivider,
} from '@chakra-ui/react';
import torIMG from "../Photo/torIMG.png"
import skull from "../Photo/skull.png"
import onionIMG from "../Photo/onionIMG.png"
const BlogTags = (props) => {
  const { marginTop = 0, tags } = props;

  return (
    <HStack spacing={2} marginTop={marginTop}>
      {tags.map((tag) => {
        return (
          <Tag size={'md'} variant="solid" colorScheme="red" key={tag}>
            {tag}
          </Tag>
        );
      })}
    </HStack>
  );
};

const BlogAuthor = (props) => {
  return (
    <HStack marginTop="2" spacing="2" display="flex" alignItems="center">
      <Image
        borderRadius="full"
        boxSize="40px"
        src={skull}
        bg="#fff"
        alt={`Avatar of ${props.name}`}
      />
      
      <Text fontSize={"xs"} color="#84FFFF">Team Dare to Visit</Text>
    </HStack>
  );
};

const ArticleList = () => {
  return (
    <Container maxW={'7xl'} p="12">
      <Heading as="h1" color={'#FF0000'}  fontFamily={"my"}>Buy Premium just in ₹60.00</Heading>
      <Box
        marginTop={{ base: '1', sm: '5' }}
        display="flex"
        flexDirection={{ base: 'column', sm: 'row' }}
        justifyContent="space-between"
      >
        <Box
          display="flex"
          flex="1"
          marginRight="3"
          position="relative"
          alignItems="center"
        >
          <Box
            width={{ base: '100%', sm: '85%' }}
            zIndex="2"
            marginLeft={{ base: '0', sm: '5%' }}
            marginTop="5%"
          >
            <Box textDecoration="none" _hover={{ textDecoration: 'none' }}>
              <Image
                borderRadius="lg"
                src={torIMG}
                alt="some good alt text"
                objectFit="contain"
              />
            </Box>
          </Box>
          <Box zIndex="1" width="100%" position="absolute" height="100%">
            <Box
              bgGradient={useColorModeValue(
                'radial(#2979FF 1px, transparent 1px)',
                'radial(#2979FF 1px, transparent 1px)'
              )}
              backgroundSize="20px 20px"
              opacity="0.4"
              height="100%"
            />
          </Box>
        </Box>
        <Box
          display="flex"
          flex="1"
          flexDirection="column"
          justifyContent="center"
          marginTop={{ base: '3', sm: '0' }}
        >
          <BlogTags tags={['Engineering', 'Product']} />
          <Heading marginTop="1">
            <Text textDecoration="none" fontFamily={"my"} color={'#FF0000'} _hover={{ textDecoration: 'none' }}>
              One Step towards Dark Web
            </Text>
          </Heading>
          <Text
            as="p"
            marginTop="2"
            color={'#fff'}
            fontSize={{base:"10px",md:"15px"}}
            fontFamily={"just-die-already"}
          >
           Explore the depths beyond with our premium upgrade. 
           Unlock authentic and extensive content from the 
           enigmatic realm of the dark web. Unveil the secrets
            that lie beneath the surface, revealing a world shrouded 
            in mystery. Upgrade now for an unparalleled journey into
             the true essence of the digital underworld.
          </Text>
          <BlogAuthor name="John Doe" date={new Date('2021-04-06T19:01:27Z')} />
        </Box>
      </Box>
      <Heading as="h2" marginTop="5" color={'#FF0000'} fontFamily={"my"}>
        Get onion Links-
      </Heading>
      <Divider marginTop="5" />
      <Wrap spacing="30px" marginTop="5">
        <WrapItem width={{ base: '100%', sm: '45%', md: '45%', lg: '30%' }}>
          <Box w="100%">
            <Box borderRadius="lg" overflow="hidden">
              <Box textDecoration="none" _hover={{ textDecoration: 'none' }}>
                <Image
                  transform="scale(1.0)"
                  src={onionIMG}
                  alt="some text"
                  objectFit="contain"
                  width="100%"
                  transition="0.3s ease-in-out"
                  _hover={{
                    transform: 'scale(1.05)',
                  }}
                />
              </Box>
            </Box>
            <BlogTags tags={['Engineering', 'Product']} marginTop={3} />
           
            <Heading fontSize="xl" marginTop="2">
              <Text textDecoration="none" color={'#FF0000'}  _hover={{ textDecoration: 'none' }} fontFamily={"my"}>
                Some movies.
              </Text>
            </Heading>
            <Text fontFamily={"just-die-already"} as="p" fontSize={{base:"10px",md:"15px"}} color={'#fff'} marginTop="2">
              Access exclusive, banned, and unseen movie 
              content from the shadows of the dark web.
               Dare to explore the forbidden, but be 
               cautious, for the unseen carries please buy ₹60.00 subscription.
            </Text>
            <BlogAuthor name="John Doe" date={new Date('2021-04-06T19:01:27Z')} />
          </Box>
        </WrapItem>
      </Wrap>
      <VStack paddingTop="40px" spacing="2" alignItems="flex-start">
        <Heading as="h2" color={'#FF0000'} fontFamily={"my"}>What we write about</Heading>
        <Text fontFamily={"just-die-already"} as="p" color={'#fff'} fontSize={{base:"10px",md:"15px"}}>
        Welcome to the chilling abyss of the dark web, where 
        whispers of terror echo through every corner. Dare to 
        visit "HorrorWebUnveiled" if you seek the heart-pounding
         unknown. Descend into tales that defy reason, exposing
          the macabre trade and sinister secrets hidden in its 
          digital depths.
        </Text>
        <Text fontFamily={"just-die-already"} as="p" color={'#fff'} fontSize={{base:"10px",md:"15px"}}>
        Unveil stories that chronicle the unthinkable: nightmarish
         transactions, malevolent hackers weaving digital spells, 
         and markets trading in the currency of fear. Unravel the
          accounts of those who vanished after peering too deep, 
          consumed by the sinister allure that beckons from the 
          shadows.
        </Text>

        <Text fontFamily={"just-die-already"} as="p" color={'#fff'} fontSize={{base:"10px",md:"15px"}}>
        These aren't mere tales; they are the harrowing truths that
         fester beneath the surface. Stories that will crawl beneath
          your skin, leaving you haunted by their relentless grip.
           A chilling camaraderie with those who dared to explore 
           the dark web's murky underworld awaits, as you immerse yourself
            in narratives that blur the line between reality and horror.
        </Text>

        <Text fontFamily={"just-die-already"} as="p" color={'#fff'} fontSize={{base:"10px",md:"15px"}}>
        But remember, the cost of knowledge here is steep. Venture
         too far, and you may find yourself entwined in a web from 
         which there is no escape. The darkness hungers for new souls 
         to claim, and as you navigate these grim narratives, know 
         that you tread upon treacherous ground. "HorrorWebUnveiled"
          offers you a key to the forbidden, yet the door it unlocks 
          leads to a darkness that might devour you whole.
        </Text>
      </VStack>
    </Container>
    
  
  );
};

export default ArticleList;
