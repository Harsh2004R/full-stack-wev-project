// import React from 'react';
// import {
//   Box,
//   Flex,
//   Button,
//   Collapse,
//   Icon,
//   Link,
//   Menu,
//   MenuButton,
//   MenuList,
//   MenuItem,
//   Text,
//   Image
// } from '@chakra-ui/react';

// import Logo from "../Photo/Logo.png";

// import { HamburgerIcon, ChevronDownIcon } from '@chakra-ui/icons';

// function TestNav() {
//   const [isOpen, setIsOpen] = React.useState(false);

//   const toggleNavbar = () => {
//     setIsOpen(!isOpen);
//   };

//   return (
//     <Box 
//     // border="1px solid red" 
//     as="nav" 
//     bg="#000000"
//      py="10" 
//      px="30px" 
//     >
//       <Flex align="center" justify="space-between">
       
//         <Box w={{base:"100px",md:"100px"}}  h="100px"  > 
//             <Image src={Logo} w="100%" h="100%"/>
//         </Box>
//         <Button
//           display={{ base: 'block', md: 'none' }}
//           variant="outline"
//           textColor={"#fff"}
//           // bg="#000000"
//           onClick={toggleNavbar}
//         >
//           <Icon as={HamburgerIcon} boxSize={6} />
//           Menu
//         </Button>
//         <Collapse in={isOpen}>
//           <Flex
//             direction={{ base: 'column', md: 'row' }}
//             align={{ base: 'center', md: 'center' }}
//             mt={{ base: '3', md: '0' }}
//             border="1px solid red" 
//             w={{base:"auto",md:"800px"}}
//           >
//             <Link href="#" color="red" fontWeight={"bold"} m={{ base: '2', md: '0' }}>
//               Home
//             </Link>
            // <Menu>
            //   <MenuButton
            //     as={Button}
            //     rightIcon={<ChevronDownIcon />}
            //     // bg="#000000"
            //     _hover={{bg:"transparent"}}
            //     m={{ base: '2', md: '0' }}
            //     // textColor={"white"}
            //     w="90px"
            //   >
            //     Pages
            //   </MenuButton>
            //   <MenuList>
            //     <MenuItem >Page 1</MenuItem>
            //     <MenuItem >Page 2</MenuItem>
            //     <MenuItem >Page 3</MenuItem>
            //     <MenuItem >Page 4</MenuItem>
            //   </MenuList>
            // </Menu>
//             <Link  href="#" color="white" fontWeight={"bold"} m={{ base: '2', md: '0' }}>
//               About
//             </Link>
//             <Link href="#" color="white" fontWeight={"bold"} m={{ base: '2', md: '0' }}>
//               Menu
//             </Link>
//             <Link href="#" color="white" fontWeight={"bold"} m={{ base: '2', md: '0' }}>
//               Blog
//             </Link>
//             <Link href="#" color="white" fontWeight={"bold"} m={{ base: '2', md: '0' }}>
//               Contact
//             </Link>
//             {/* <Button
//               variant="outline"
//               color="white"
//               ml={{ base: '2', md: '0' }}
//             >
//               Book a table
//             </Button> */}
//           </Flex>
//         </Collapse>
//       </Flex>
//     </Box>
//   );
// }

// export default TestNav;


import React, { useState } from "react";
import "./testNav.css";
import {Box, Button,Text, Divider, Grid, GridItem,MenuButton,MenuItem,Menu,MenuList} from "@chakra-ui/react"
import { GiHamburgerMenu } from "react-icons/gi";
import { ChevronDownIcon } from '@chakra-ui/icons';
import { NavLink } from "react-router-dom";


const gradientColor = 'linear-gradient(to bottom, #e91e63, #ffc107)';
const textGradient = `linear-gradient(to bottom, #e91e63, #ffc107)`
const TestNav = () => {
  const [showMediaIcons, setShowMediaIcons] = useState(false);
  return (
    <>
      <nav className="main-nav">
        {/* 1st logo part  */}
        <div className="logo" >
          <h2>
            <span>D</span>are
            <span>T</span>o 
            <span>V</span>isit
          </h2>
        </div>

        {/* 2nd menu part  */}
        <div

          className={
            showMediaIcons ? "menu-link mobile-menu-link" : "menu-link"
          }>
          <ul>
          <Menu>
              <MenuButton
                 as={Button}
                 _expanded={{ bg: 'transparent',textColor:"#fff" }}
                 bg="#000000"
                 _hover={{bg:"transparent",textColor:"#fff"}}
                 fontSize={{base:"1rem",md:"1rem"}}
                 bgGradient="linear(to-b, #eee,#2d6686)" bgClip="text"
                 w={{base:"80px",md:"12%"}}
                //  border={"1px solid red"}
                 height={{base:"30px",md:"30px"}}
              >
               Home
              </MenuButton>
            </Menu>
            <Menu>
              <MenuButton
               as={Button}
               _expanded={{ bg: 'transparent',textColor:"#fff" }}
               bg="#000000"
               _hover={{bg:"transparent",textColor:"#fff"}}
               fontSize={{base:"1rem",md:"1rem"}}
               bgGradient="linear(to-b, #eee,#2d6686)" bgClip="text"
               w={{base:"100px",md:"12%"}}
               h="30px"
              //  border={"1px solid red"}
              >
               Page➣
              </MenuButton>
              <MenuList>
                <MenuItem >Page 1</MenuItem>
                <MenuItem >Page 2</MenuItem>
                <MenuItem >Page 3</MenuItem>
                <MenuItem >Page 4</MenuItem>
              </MenuList>
            </Menu>
            <Menu>
              <MenuButton
                as={Button}
                bg="#000000"
                _hover={{bg:"transparent",textColor:"#fff"}}
                _expanded={{ bg: 'transparent',textColor:"#fff" }}
                fontSize={{base:"1rem",md:"1rem"}}
                bgGradient="linear(to-b, #eee,#2d6686)" bgClip="text"
                w={{base:"80px",md:"12%"}}
                // border={"1px solid red"}
                height={{base:"30px",md:"30px"}}
              >
              Services
              </MenuButton>
            </Menu>
            <Menu>
              <MenuButton
                as={Button}
                bg="#000000"
                _hover={{bg:"transparent",textColor:"#fff"}}
                _expanded={{ bg: 'transparent',textColor:"#fff" }}
                fontSize={{base:"1rem",md:"1rem"}}
                bgGradient="linear(to-b, #eee,#2d6686)" bgClip="text"
                w={{base:"80px",md:"12%"}}
                // border={"1px solid red"}
                height={{base:"30px",md:"30px"}}
              >
               Contact
              </MenuButton>
            </Menu>
            <Menu>
              <MenuButton
                as={Button}
                bg="#000000"
                _hover={{bg:"transparent",textColor:"#fff"}}
                _expanded={{ bg: 'transparent',textColor:"#fff" }}
                fontSize={{base:"1rem",md:"1rem"}}
                bgGradient="linear(to-b, #eee,#2d6686)" bgClip="text"
                w={{base:"80px",md:"12%"}}
                // border={"1px solid red"}
                height={{base:"30px",md:"30px"}}
              >
               Login
              </MenuButton>
            </Menu>
            <Menu>
              <MenuButton
                as={Button}
                bg="#000000"
                _hover={{bg:"transparent",textColor:"#fff"}}
                _expanded={{ bg: 'transparent',textColor:"#fff" }}
                fontSize={{base:"1rem",md:"1rem"}}
                bgGradient="linear(to-b, #eee,#2d6686)" bgClip="text"
                w={{base:"80px",md:"12%"}}
                // border={"1px solid red"}
                height={{base:"30px",md:"30px"}}
              >
               SignUp
              </MenuButton>
            </Menu>
            <Menu>
              <MenuButton
                as={Button}
                _expanded={{ bg: 'transparent',textColor:"#fff" }}
                bg="#000000"
                _hover={{bg:"transparent",textColor:"#fff"}}
                fontSize={{base:"1rem",md:"1rem"}}
                bgGradient="linear(to-b, #eee,#2d6686)" bgClip="text"
                w={{base:"80px",md:"12%"}}
                h="30px"
                // border={"1px solid red"}
              >
               Page➣
              </MenuButton>
              <MenuList>
              <MenuItem >Page 1</MenuItem>
                <MenuItem >Page 2</MenuItem>
                <MenuItem >Page 3</MenuItem>
                <MenuItem >Page 4</MenuItem>
              </MenuList>
            </Menu>
            <Menu>
              <MenuButton
                as={Button}
                _expanded={{ bg: 'transparent',textColor:"#fff" }}
                bg="#000000"
                _hover={{bg:"transparent",textColor:"#fff"}}
                fontSize={{base:"1rem",md:"1rem"}}
                bgGradient="linear(to-b, #eee,#2d6686)" bgClip="text"
                w={{base:"100px",md:"12%"}}
                h="30px"
                // border={"1px solid red"}
              >
               Profile➣
              </MenuButton>
              <MenuList>
              <MenuItem  >Profile</MenuItem>
                <MenuItem  >Dashbord</MenuItem>
                <MenuItem  >Settings</MenuItem>
                <MenuItem >Sign Out</MenuItem>
              </MenuList>
            </Menu>
          </ul>
        </div>

        {/* 3rd social media links */}
        <div className="social-media">
          <div className="profile-pic"> 
            <img className="user-img" src="https://avatars.githubusercontent.com/u/115461808?v=4" alt="profile"/>
          </div>

          {/* hamburget menu start  */}
          <div className="hamburger-menu">
            <a href="#" onClick={() => setShowMediaIcons(!showMediaIcons)}>
              <GiHamburgerMenu color="#fff"/>
            </a>
          </div>
        </div>

      </nav>
      <Divider/>
      <Box w="100%" h={{base:"100px",md:"130px"}} bg="#000000" >
        <Box border={"1px solid transparent"} w={{base:"90%",md:"60%"}} m="auto" h={{base:"49px",md:"59px"}} >
          
        <Grid templateColumns='repeat(5, 1fr)' marginTop={{base:"10px",md:"20px"}} gap={{base:"6",md:"13%"}}>
          <Box _hover={{cursor:"pointer",background: gradientColor, fontWeight:"bold" , textColor:"#333333"}} display={"flex"} justifyContent={"center"} alignItems={"center"} borderRadius={"lg"} w='100%' textAlign={"center"} fontSize={{base:"12px",md:"13px","2xl":"16px"}} h={{base:"22px",md:"30px"}} bg='#c3d0e1'># Hello</Box>
          <Box _hover={{cursor:"pointer",background: gradientColor, fontWeight:"bold" , textColor:"#333333"}} display={"flex"} justifyContent={"center"} alignItems={"center"} borderRadius={"lg"} w='100%' textAlign={"center"} fontSize={{base:"12px",md:"13px","2xl":"16px"}} h={{base:"22px",md:"30px"}} bg='#c3d0e1'># Hello</Box>
          <Box _hover={{cursor:"pointer",background: gradientColor, fontWeight:"bold" , textColor:"#333333"}} display={"flex"} justifyContent={"center"} alignItems={"center"} borderRadius={"lg"} w='100%' textAlign={"center"} fontSize={{base:"12px",md:"13px","2xl":"16px"}} h={{base:"22px",md:"30px"}} bg='#c3d0e1'># Hello</Box>
          <Box _hover={{cursor:"pointer",background: gradientColor, fontWeight:"bold" , textColor:"#333333"}} display={"flex"} justifyContent={"center"} alignItems={"center"} borderRadius={"lg"} w='100%' textAlign={"center"} fontSize={{base:"12px",md:"13px","2xl":"16px"}} h={{base:"22px",md:"30px"}} bg='#c3d0e1'># Hello</Box>
          <Box _hover={{cursor:"pointer",background: gradientColor, fontWeight:"bold" , textColor:"#333333"}} display={"flex"} justifyContent={"center"} alignItems={"center"} borderRadius={"lg"} w='100%' textAlign={"center"} fontSize={{base:"12px",md:"13px","2xl":"16px"}} h={{base:"22px",md:"30px"}} bg='#c3d0e1'># Hello</Box>
        </Grid>

        </Box>



        
        <Box  w={{base:"80%",md:"45%"}} m="auto" h={{base:"49px",md:"59px"}} >
          
          <Grid templateColumns='repeat(5, 1fr)'  marginTop={{base:"10px",md:"20px"}} gap={{base:"6",md:"10%"}}>
          <Box _hover={{cursor:"pointer",background: gradientColor, fontWeight:"bold" , textColor:"#333333"}} display={"flex"} justifyContent={"center"} alignItems={"center"} borderRadius={"lg"} w='100%' textAlign={"center"} fontSize={{base:"12px",md:"13px","2xl":"16px"}} h={{base:"22px",md:"30px"}} bg='#c3d0e1'># Hello</Box>
          <Box _hover={{cursor:"pointer",background: gradientColor, fontWeight:"bold" , textColor:"#333333"}} display={"flex"} justifyContent={"center"} alignItems={"center"} borderRadius={"lg"} w='100%' textAlign={"center"} fontSize={{base:"12px",md:"13px","2xl":"16px"}} h={{base:"22px",md:"30px"}} bg='#c3d0e1'># Hello</Box>
          <Box _hover={{cursor:"pointer",background: gradientColor, fontWeight:"bold" , textColor:"#333333"}} display={"flex"} justifyContent={"center"} alignItems={"center"} borderRadius={"lg"} w='100%' textAlign={"center"} fontSize={{base:"12px",md:"13px","2xl":"16px"}} h={{base:"22px",md:"30px"}} bg='#c3d0e1'># Hello</Box>
          <Box _hover={{cursor:"pointer",background: gradientColor, fontWeight:"bold" , textColor:"#333333"}} display={"flex"} justifyContent={"center"} alignItems={"center"} borderRadius={"lg"} w='100%' textAlign={"center"} fontSize={{base:"12px",md:"13px","2xl":"16px"}} h={{base:"22px",md:"30px"}} bg='#c3d0e1'># Hello</Box>
          <Box _hover={{cursor:"pointer",background: gradientColor, fontWeight:"bold" , textColor:"#333333"}} display={"flex"} justifyContent={"center"} alignItems={"center"} borderRadius={"lg"} w='100%' textAlign={"center"} fontSize={{base:"12px",md:"13px","2xl":"16px"}} h={{base:"22px",md:"30px"}} bg='#c3d0e1'># Hello</Box>
          </Grid>
  
          </Box>
      </Box>

      

      
    </>
  );
};

export default TestNav;
