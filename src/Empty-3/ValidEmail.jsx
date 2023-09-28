
// import React, { useState } from 'react';
// import {
//   Box,
//   Input,
//   Button,
//   Text,
//   VStack,
//   Heading,
//   Center,
// } from '@chakra-ui/react';

// function ValidEmail() {
//   const [email, setEmail] = useState('');
//   const [result, setResult] = useState({ message: '', data: null });
//   const [isValidEmail, setIsValidEmail] = useState(false);

//   const checkEmailValidity = async () => {
//     try {
//       // Your Abstract API key
//       const apiKey = '39ccf8a027da49c4a864da06caf0d4ec';
//       // Make a GET request to the Abstract API
//       const response = await fetch(
//         `https://emailvalidation.abstractapi.com/v1/?api_key=${apiKey}&email=${email}`
//       );

//       const data = await response.json();

//       setIsValidEmail(data.deliverability !== 'UNDELIVERABLE');

//       // Display both the message and the JSON response
//       setResult({
//         message: data.deliverability === 'UNDELIVERABLE' ? `Email ${email} does not exist` : `Email ${email} exist`,
//         data: JSON.stringify(data, null, 2),
//       });
//     } catch (error) {
//       setResult({ message: 'An error occurred while checking the email.', data: null });
//     }
//   };

//   return (

//     <>
    


//     <Box w="100%" h="100vh" bg="#333333">


//     <Box p={4}>

//         <Heading color="#FFFFFF" textAlign={"left"}>Email Validation Page!</Heading>
//         <Text fontSize={{base:"12px",md:"14px"}} mt={{base:"0px",md:"10px"}} color="#79d2ca" textAlign={"justify"}>This page will validate your email, that 
//             provided email existing some where or not? to
//              proceed kindly fill you valid email here.</Text>
//       <VStack spacing={10}>
//         <Input
//         mt={{base:"1.8%",md:"1.1%"}}
//           type="email"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//           placeholder="Enter an valid email address"
//           color={"#FFFFFF"}
//         />
//         <Button display={"block"} textAlign={"left"} colorScheme="teal" onClick={checkEmailValidity}>
//           Check Email
//         </Button>

//         <Box 
//         border="1px solid #fff"
//         transition="transform 1s" 
//         _hover={{ 
         
//          cursor: 'pointer'
//        }} 
//           w={{base:"90%",md:"58%"}}
          
//           h={{base:"60vh",md:"60.5vh"}}
//           overflow="auto" 
//           p="4" 
//           bgColor={"#181818"} 
//           borderRadius="none" 
//           css={{
//             "&::-webkit-scrollbar": {
//               width: "5px", // Adjust the width as per your preference
//             },
//             "&::-webkit-scrollbar-thumb": {
//               backgroundColor: "#F44336", // Customize the scrollbar thumb color
//               borderRadius: "10px", // Adjust the scrollbar thumb border-radius
//             },
//             "&::-webkit-scrollbar-track": {
//               backgroundColor: "#B0BEC5", // Customize the scrollbar track color
//               borderRadius: "10px", // Adjust the scrollbar track border-radius
//             },
//           }}
//         >

//         <Heading textAlign={'center'}  color="#FFFFFF">Result<span style={{color:"red"}}> ?</span></Heading>

//         <Text color="#fff">{result.message}</Text>
//         <Text color="cyan" whiteSpace="pre-wrap">{result.data}</Text>

//           <Center>
//             <Button
//               mt="20px" mb="20px"
//               w="120px" h="40px"
//               colorScheme="teal"
//               isDisabled
//               // This button will be visible but not clickable
//             >
//               Sing Up
//             </Button>
//           </Center>
//         </Box>

        
//       </VStack>
//     </Box>

//     </Box>


//     </>
//   );
// }

// export default ValidEmail;


import React, { useState } from 'react';
import {
  Box,
  Input,
  Button,
  Text,
  VStack,
  Heading,
  Center,
} from '@chakra-ui/react';

import { useNavigate } from 'react-router-dom';

function ValidEmail() {
  const [email, setEmail] = useState('');
  const [result, setResult] = useState({ message: '', data: null });


  const Navigate = useNavigate();


  const checkEmailValidity = async () => {
    try {
      // Abstract API key
      const apiKey = '39ccf8a027da49c4a864da06caf0d4ec';
      // Make a GET request to the Abstract API
      const response = await fetch(
        `https://emailvalidation.abstractapi.com/v1/?api_key=${apiKey}&email=${email}`
      );

      const data = await response.json();

      // Display both the message and the JSON response
      setResult({
        message: data.deliverability === 'UNDELIVERABLE' ? `Email ${email} does not exist` : `Email ${email} exists`,
        data: JSON.stringify(data, null, 2),
      });
    } catch (error) {
      setResult({ message: 'An error occurred while checking the email.', data: null });
    }
  };

  // Determine if the "Sign Up" button should be enabled
  const isButtonEnabled =
    email !== '' && result.message === `Email ${email} exists`;

  const handleSignUpPage = ()=>{
    Navigate("/signup")
  }

  return (
    <>
      <Box w="100%" h="100vh" bg="#333333">
        <Box p={4}>
          <Heading color="#FFFFFF" textAlign="left">
            Email Validation Page!
          </Heading>
          <Text fontSize={{ base: "12px", md: "14px" }} mt={{ base: "0px", md: "10px" }} color="#79d2ca" textAlign={"justify"}>
            This page will validate your email, that
            provided email exists somewhere or not? To
            proceed kindly fill your valid email here.
          </Text>
          <VStack spacing={10}>
            <Input
              mt={{ base: "1.8%", md: "1.1%" }}
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter a valid email address"
              color={"#FFFFFF"}
            />
            <Button
              display="block"
              textAlign="left"
              colorScheme="teal"
              onClick={checkEmailValidity}
              
            >
              Check Email
            </Button>
            <Box
              border="1px solid #fff"
              transition="transform 1s"
              _hover={{
                cursor: 'pointer',
              }}
              w={{ base: '90%', md: '58%' }}
              h={{ base: '60vh', md: '60.5vh' }}
              overflow="auto"
              p="4"
              bgColor="#181818"
              borderRadius="none"
              css={{
                '&::-webkit-scrollbar': {
                  width: '5px', // Adjust the width as per your preference
                },
                '&::-webkit-scrollbar-thumb': {
                  backgroundColor: '#F44336', // Customize the scrollbar thumb color
                  borderRadius: '10px', // Adjust the scrollbar thumb border-radius
                },
                '&::-webkit-scrollbar-track': {
                  backgroundColor: '#B0BEC5', // Customize the scrollbar track color
                  borderRadius: '10px', // Adjust the scrollbar track border-radius
                },
              }}
            >
              <Heading textAlign="center" color="#FFFFFF">
                Result<span style={{ color: 'red' }}> ?</span>
              </Heading>
              <Text color="#fff">{result.message}</Text>
              <Text color="cyan" whiteSpace="pre-wrap">
                {result.data}
              </Text>
              <Center>
                <Button
                  mt="20px" mb="20px"
                  w="120px" h="40px"
                  colorScheme="teal"
                  isDisabled={!isButtonEnabled}
                  onClick={handleSignUpPage}
                  // Enable the button if it should be
                >
                  Sign Up
                </Button>
              </Center>
            </Box>
          </VStack>
        </Box>
      </Box>
    </>
  );
}

export default ValidEmail;





// import React, { useState } from 'react';
// import {
//   Box,
//   Input,
//   Button,
//   Text,
//   VStack,
// } from '@chakra-ui/react';

// function ValidEmail() {
//   const [email, setEmail] = useState('');
//   const [result, setResult] = useState({ message: '', data: null });

//   const checkEmailValidity = async () => {
//     try {
//       // Your ZeroBounce API key
//       const apiKey = '4916734cd21b4bff9f4f2ba00a9b8661';

//       // Make a GET request to the ZeroBounce API
//       const response = await fetch(
//         `https://api.zerobounce.net/v2/validate?api_key=${apiKey}&email=${email}`
//       );

//       const data = await response.json();

//       // Display the validation result
//       setResult({
//         message: data.status === 'valid' ? `Email ${email} is valid` : `Email ${email} is invalid`,
//         data: JSON.stringify(data, null, 2),
//       });
//     } catch (error) {
//       setResult({ message: 'An error occurred while checking the email.', data: null });
//     }
//   };

//   return (
//     <Box p={4}>
//       <VStack spacing={4}>
//         <Input
//           type="email"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//           placeholder="Enter an email address"
//         />
//         <Button colorScheme="teal" onClick={checkEmailValidity}>
//           Check Email
//         </Button>
//         <Text>{result.message}</Text>
//         <Text whiteSpace="pre-wrap">{result.data}</Text>
//       </VStack>
//     </Box>
//   );
// }

// export default ValidEmail;
