import React,{useState,useEffect} from 'react';
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
  keyframes,
  Image,
  // Alert,
  // AlertIcon,
  // AlertTitle,
  // CloseButton,

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
  const [showImage, setShowImage] = useState(false);


  const [userData, setUserData] = useState({
    username: '',  
    email: '',
    location: '',
    phone: '',
    imageFiles: [],
    audioFiles: [],
    videoFiles: [],
  });
  
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  

 

  const handleFileChange = (e) => {
    const { name, files } = e.target;
    // Convert the FileList object to an array of files
    const fileArray = Array.from(files);
    setUserData((prevData) => ({
      ...prevData,
      [name]: fileArray, // Update with the array of files
    }));
     // Show the image when an image file is selected
    if (name === 'imageFiles' && fileArray.length > 0) {
      setShowImage(true);
    } else {
      setShowImage(false);
    }
  };

  
  const handleSubmit = (e) => {
    e.preventDefault(); 
    console.log('User Data:', userData);

    // You can send this data to your server for further processing if needed
  };

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
         }}  pt={{base:"10px",md:"0px"}} pb={{base:"10px",md:"0px"}}  m="auto"  bg="#000000" fontFamily={"Hell"} color="#FFFFFF" textAlign={"center"} fontSize={{base:"6xl",md:"8xl"}}>"Scare On"</Text>
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


              {/* Text box starting here */}

          <Box w="100%" h={{base:"150px",md:"200px"}} 
          display={"flex"} justifyContent={"center"} alignItems={"center"}
          boxShadow="0px 6px 8px rgba(0, 161, 187, 0.7)"
          >


            <Text fontWeight={"bold"} bgGradient="linear(to-r, white,#29B6F6)" bgClip="text" ml={{base:"12px",md:"22px"}} mr={{base:"12px",md:"22px"}} textAlign={"justify"} fontSize={{ base: 'sm', sm: 'md' }} >
              We’re looking for amazing post just like others shared & Become a part of our
              rockstar members as a team. Fill the details given below. If you want you can share img | mp3 | mp4 or just any one of them.
            <span></span>
            
            
            </Text>


          </Box>


                {/* Text box ending here */}

          
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
            <Text>test</Text>
          </Stack>
          <form onSubmit={handleSubmit}>
        
            <Stack spacing={4}>
              <Input
              name="username"
                placeholder="Firstname"
                bg={'gray.100'}
                borderRadius={0}
                color={'gray.500'}
                _placeholder={{
                  color: 'gray.500',
                }}
                onChange={handleInputChange}
              />
              <Input
              name="email"
                placeholder="Example@gmail.com"
                bg={'gray.100'}
                borderRadius={0}
                color={'gray.500'}
                _placeholder={{
                  color: 'gray.500',
                }}
                onChange={handleInputChange}
              />
              <Input
              name="phone"
                placeholder="Phone 'dont add +91' "
                bg={'gray.100'}
                borderRadius={0}
                color={'gray.500'}
                _placeholder={{
                  color: 'gray.500',
                }}
                onChange={handleInputChange}
              />

            <Input
            name="location"
              placeholder="Enter your location"
              bg="gray.100"
              borderRadius={0}
              color="gray.500"
              _placeholder={{
                color: 'gray.500',
              }}
              onChange={handleInputChange}
            />
            <FormControl>
          <FormLabel bgGradient="linear(to-r, white,#FF0000)" bgClip="text">Upload Image or</FormLabel>
          <Input
          name="imageFiles"
            type="file"
            accept="image/*"
            bg="gray.100"
            borderRadius={0}
            color="gray.500"
            onChange={handleFileChange}
          />





          {/* here i am displaying the selected image for better user experience commented bt harsh  */}
              {showImage && (
               <Box mt="10px"  w="100%" h="auto" > <Box border="0.5px solid #9E9E9E" ml={5} w={{base:"150px",md:"150px"}} h={{base:"200px",md:"150px"}}> {/*  width and height */}
                <Image   width="100%" h="100%"
                src={userData.imageFiles[0] ? URL.createObjectURL(userData.imageFiles[0]) : ''}
                alt="Selected Image"
                />
              </Box></Box>
)}





        </FormControl>
               <FormControl  bgGradient="linear(to-r, white,#FF0000)" bgClip="text">
          <FormLabel>Upload Audio (mp3) or</FormLabel>
          <Input
          name="audioFiles"
            type="file"
            accept="audio/mp3, audio/wav, audio/ogg, audio/m4a, audio/*"
            bg="gray.100"
            borderRadius={0}
            color="gray.500"
            onChange={handleFileChange}
          />
        </FormControl>



        {userData.audioFiles.length > 0 && (
        <Box mt="10px" w="100%" h="auto">
          
        
          <audio style={{ borderRadius: 'none',color:"#FF0000", width:'100%' ,height:'20px'}}controls>
            <source src={URL.createObjectURL(userData.audioFiles[0])} type="audio/mp3" />
              Your browser does not support the audio element.
            </audio>
          
        </Box>
        )}






        <FormControl  bgGradient="linear(to-r, white,#FF0000)" bgClip="text">
          <FormLabel>Upload Video (mp4) or</FormLabel>
          <Input
          name="videoFiles"
            type="file"
            accept="video/mp4"
            bg="gray.100"
            borderRadius={0}
            color="gray.500"
            onChange={handleFileChange}
          />
        </FormControl>



        {userData.videoFiles.length > 0 && (
          <Box mt="10px" w="100%" h="auto">
          {/* Customize the width and height as needed */}
          <Box   w={{ base: "250px", md: "250px" }} h={{ base: "150px", md: "150px" }}>
            <video controls style={{width:"100%",height:"150px",margin:"auto"}} >
             <source src={URL.createObjectURL(userData.videoFiles[0])} type="video/mp4" />
              Your browser does not support the video element.
            </video>
          </Box>
          </Box>
        )}









            </Stack>
            <Button
              fontFamily={'heading'}
              mt={8}
              w={'full'}
              borderRadius={"0px"}
              bg={`linear-gradient(to right, #FF0000, #000000, #FF0000)`}
              color={'white'}
              _hover={{bg:`linear-gradient(to right, #000000, #FF0000, #000000)`, boxShadow:'0 0 8px 5px #F5F5F5'}}
              
              type="submit"
            >
              Submit
            </Button>
          
          </form>
          
        </Stack>
      </Container>
      <Blur position={'absolute'} top={-10} left={-10} style={{ filter: 'blur(70px)' }} />
    </Box>




    <Divider/>
    <Footer/>

    </>
  );
}




