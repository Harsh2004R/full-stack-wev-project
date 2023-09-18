
import {
  Box,
  Flex,
  Stack,
  Heading,
  Text,
  Container,
  Input,
  Button,
  SimpleGrid,
  Avatar,
  AvatarGroup,
  useBreakpointValue,
  Icon,
  FormLabel,
  FormControl,
  Divider,
  keyframes

} from '@chakra-ui/react';
import Navbar2 from '../Components/Navbar2';
import Navbar from '../Components/Navbar';
import Footer from "../Components/Footer";
const avatars = [
  {
    name: 'Arushi Nagar',
    url: 'https://img.freepik.com/free-photo/female-model-posing-pink-wall_114579-13995.jpg?size=626&ext=jpg&ga=GA1.1.1559264531.1691417508&semt=ais',
  },
  {
    name: 'Sam Singh',
    url: 'https://img.freepik.com/free-vector/head-man_1308-33466.jpg?size=626&ext=jpg&ga=GA1.1.1559264531.1691417508&semt=ais',
  },
  {
    name: 'Sanju Das',
    url: 'https://img.freepik.com/free-photo/smiley-man-posing-medium-shot_23-2149915893.jpg?size=626&ext=jpg&ga=GA1.1.1559264531.1691417508&semt=ais',
  },
  {
    name: 'Ritvik Rohan',
    url: 'https://img.freepik.com/free-photo/young-handsome-indian-man-wearing-sunglasses-while-thinking-against-street-outdoors_231208-2791.jpg?size=626&ext=jpg&ga=GA1.1.1559264531.1691417508&semt=ais',
  },
  {
    name: 'Anamika Roy',
    url: 'https://img.freepik.com/free-photo/smiling-young-beautiful-girl-looking-straight-ahead-wearing-white-t-shirt-isolated-pink_141793-86537.jpg?size=626&ext=jpg&ga=GA1.1.1559264531.1691417508&semt=ais',
  },
];


const slideInFromLeft = keyframes`
  0% {
    transform: translateX(-100%);
    opacity: 0;
  }
  100% {
    transform: translateX(0);
    opacity: 1;
  }
`;


function Blur(props) {
  return (
    <Icon
      width={useBreakpointValue({ base: '100%', md: '40vw', lg: '30vw' })}
      zIndex={useBreakpointValue({ base: -1, md: -1, lg: 0 })}
      height="560px"
      viewBox="0 0 528 560"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <circle cx="71" cy="61" r="111" fill="#F56565" />
      <circle cx="244" cy="106" r="139" fill="#ED64A6" />
      <circle cy="291" r="139" fill="#ED64A6" />
      <circle cx="80.5" cy="189.5" r="101.5" fill="#ED8936" />
      <circle cx="196.5" cy="317.5" r="101.5" fill="#ECC94B" />
      <circle cx="70.5" cy="458.5" r="101.5" fill="#48BB78" />
      <circle cx="426.5" cy="-0.5" r="101.5" fill="#4299E1" />


      
    </Icon>
  );
}

export default function ScareOnAdmin() {
  return (

<>

<Navbar/>
    <Navbar2/>


    
     <Box
         w="100%"
         h="auto"
         bg="#000000"
        //  border="1px solid red"
         >
          <Divider  animation={`${slideInFromLeft} 3.5s ease-in-out infinite alternate`} w="100%" borderColor={"#fff"}/>
          <Text transition="transform 1s" 
          _hover={{ 
           transform: 'scale(0.9)',
           cursor: 'pointer'
         }}  pt={{base:"10px",md:"10px"}} pb={{base:"10px",md:"10px"}}  m="auto"  bg="#000000" fontFamily={"Hell"} color="#FFFFFF" textAlign={"center"} fontSize={{base:"6xl",md:"8xl"}}>"Scare On"</Text>
          <Divider w="100%" animation={`${slideInFromLeft} 2.2s ease-in-out infinite alternate`} borderColor={"#fff"}/>
          </Box>

    


    <Box position={'relative'}  bg="#000000">
      <Container
        as={SimpleGrid}
        maxW={'7xl'}
        columns={{ base: 1, md: 2 }}
        spacing={{ base: 10, lg: 32 }}
        py={{ base: 10, sm: 20, lg: 32 }}
      >
        <Stack spacing={{ base: 10, md: 20 }} >
          <Heading
            lineHeight={1.1}
            fontSize={{ base: '3xl', sm: '4xl', md: '5xl', lg: '6xl' }}
            color="#FFFFFF"
          >
            Share your personal{' '}
            <Text as={'span'} bgGradient="linear(to-r, yellow.400,cyan.400)" bgClip="text">
              &
            </Text>{' '}
            dark experiences with us.
          </Heading>
          <Stack direction={'row'} spacing={4} align={'center'}>
            <AvatarGroup>
              {avatars.map((avatar) => (
                <Avatar
                  key={avatar.name}
                  name={avatar.name}
                  src={avatar.url}
                  // eslint-disable-next-line react-hooks/rules-of-hooks
                  size={useBreakpointValue({ base: 'md', md: 'lg' })}
                  position={'relative'}
                  zIndex={2}
                >
                  <div
                    style={{
                      content: '""',
                      width: 'full',
                      height: 'full',
                      rounded: 'full',
                      transform: 'scale(1.125)',
                      background: 'linear-gradient(to-bl, red.400,pink.400)',
                      position: 'absolute',
                      zIndex: -1,
                      top: 0,
                      left: 0,
                    }}
                  ></div>
                </Avatar>
              ))}
            </AvatarGroup>
            <Text color="#FFFFFF" fontFamily={'heading'} fontSize={{ base: '4xl', md: '6xl' }}>
              +
            </Text>
            <Flex
            border="1px solid #fff"
              align={'center'}
              justify={'center'}
              fontFamily={'heading'}
              fontSize={{ base: 'sm', md: 'lg' }}
              bg={'gray.800'}
              color={'white'}
              rounded={'full'}
              minWidth={useBreakpointValue({ base: '44px', md: '60px' })}
              minHeight={useBreakpointValue({ base: '44px', md: '60px' })}
              position={'relative'}
            >
              <Box
                style={{
                  content: '""',
                  width: 'full',
                  height: 'full',
                  rounded: 'full',
                  transform: 'scale(1.125)',
                  background: 'linear-gradient(to-bl, orange.400,yellow.400)',
                  position: 'absolute',
                  zIndex: -1,
                  top: 0,
                  left: 0,
                }}
              ></Box>
              YOU
            </Flex>
          </Stack>
        </Stack>
        <Stack
          bg={"#222221"}
          rounded={'md'}
          p={{ base: 4, sm: 6, md: 8 }}
          spacing={{ base: 8 }}
          maxW={{ lg: 'lg' }}
          
        >
          <Stack spacing={4}>
            <Heading
              lineHeight={1.1}
              fontSize={{ base: '2xl', sm: '3xl', md: '4xl' }} bgGradient="linear(to-r, white,#f44e3b)" bgClip="text"
            >
              Share with us.....
              <Text as={'span'} bgGradient="linear(to-r, red.400,pink.400)" bgClip="text">
                !
              </Text>
            </Heading>
            <Text  fontSize={{ base: 'sm', sm: 'md' }} color="#fff">
              We’re looking for amazing post just like others shared & Become a part of our
              rockstar members as a team. Fill the details given below.
            </Text>
          </Stack>
          <Box as={'form'} mt={10}>
            <Stack spacing={4}>
              <Input
                placeholder="Firstname"
                bg={'gray.100'}
                border={0}
                color={'gray.500'}
                _placeholder={{
                  color: 'gray.500',
                }}
              />
              <Input
                placeholder="Example@gmail.com"
                bg={'gray.100'}
                border={0}
                color={'gray.500'}
                _placeholder={{
                  color: 'gray.500',
                }}
              />
              <Input
                placeholder="+91 (___) __-___-___"
                bg={'gray.100'}
                border={0}
                color={'gray.500'}
                _placeholder={{
                  color: 'gray.500',
                }}
              />

            <Input
              placeholder="Enter your location"
              bg="gray.100"
              border={0}
              color="gray.500"
              _placeholder={{
                color: 'gray.500',
              }}
            />
            <FormControl>
          <FormLabel bgGradient="linear(to-r, white,#FF0000)" bgClip="text">Upload Image</FormLabel>
          <Input
            type="file"
            accept="image/*"
            bg="gray.100"
            border={0}
            color="gray.500"
          />
        </FormControl>
               <FormControl  bgGradient="linear(to-r, white,#FF0000)" bgClip="text">
          <FormLabel>Upload Audio (mp3)</FormLabel>
          <Input
            type="file"
            accept="audio/mp3"
            bg="gray.100"
            border={0}
            color="gray.500"
          />
        </FormControl>

        <FormControl  bgGradient="linear(to-r, white,#FF0000)" bgClip="text">
          <FormLabel>Upload Video (mp4)</FormLabel>
          <Input
            type="file"
            accept="video/mp4"
            bg="gray.100"
            border={0}
            color="gray.500"
          />
        </FormControl>


            </Stack>
            <Button
              fontFamily={'heading'}
              mt={8}
              w={'full'}
              bg={`linear-gradient(to right, #FF0000, #000000, #FF0000)`}
              color={'white'}
              _hover={{bg:`linear-gradient(to right, #000000, #FF0000, #000000)`, boxShadow:'0 0 8px 5px #F5F5F5'}}
            >
              Submit
            </Button>
          </Box>
          form
        </Stack>
      </Container>
      <Blur position={'absolute'} top={-10} left={-10} style={{ filter: 'blur(70px)' }} />
    </Box>



    <Divider/>
    <Footer/>

    </>
  );
}
