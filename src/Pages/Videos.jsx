
// import React, { useState } from 'react';
// import {
//   IconButton,
//   Avatar,
//   Box,
//   CloseButton,
//   Flex,
//   HStack,
//   VStack,
//   Icon,
//   useColorModeValue,
//   Text,
//   Drawer,
//   DrawerContent,
//   useDisclosure,
//   Divider,
//   Menu,
//   MenuButton,
//   MenuDivider,
//   MenuItem,
//   MenuList,  
//   Slider, 
//   SliderTrack,
//   SliderFilledTrack, 
//   SliderThumb, 
// } from '@chakra-ui/react';
// import {
//   FiVideo,
//   FiMenu,
//   FiBell,
//   FiChevronDown,

// } from 'react-icons/fi';
// import VideoComponent from '../Components/VideoComponent ';

// const LinkItems = [
//   { name: 'Urban legends', icon: FiVideo, },
//   { name: 'Black Magic', icon: FiVideo, },
//   { name: 'Cult', icon: FiVideo,  },
//   { name: 'Disturbing', icon: FiVideo  },
//   { name: 'Spooky', icon: FiVideo},
// ];

// const SidebarContent = ({ onClose, ...rest }) => {
//   const [sliderValue, setSliderValue] = useState(0);

//   const handleSliderChange = (newValue) => {
//     setSliderValue(newValue);
//   };

//   const valueText = `${sliderValue}%`;

//   return (
//     <Box
//       transition="3s ease"
//       bg={useColorModeValue('#212121', 'white.900')}
//       borderRight="1px"
//       borderRightColor={useColorModeValue('#999', '#999')}
//       w={{ base: 'full', md: 60 }}
//       pos="fixed"
//       h="full"
//       // border="1px solid red"
//       {...rest}
//     >
//       <Flex  h="20" alignItems="center" mx="8" justifyContent="space-between">
//         <Text  color="#69F0AE" fontSize="2xl" fontFamily="monospace" fontWeight="bold">
//           Sort & Filter
//         </Text>
//         <CloseButton border="2px solid #FFFFFF" color={"#FFFFFF"} bgColor={"#6b947f"} display={{ base: 'flex', md: 'none' }} onClick={onClose} />
//       </Flex>
//       {LinkItems.map((link,index) => (
//         <React.Fragment key={link.name}>
//         <NavItem mt="3px" mb="5px" color="#FFFFFF" key={link.name} icon={link.icon}>
//           {link.name}
//         </NavItem>
//         {index < LinkItems.length - 1 && <Divider borderColor={"#6b947f"}/>}
//         </React.Fragment>
//       ))}

// {/* filtering --------------------------------------- pointer ------------------------------ here */}

// <Divider  borderColor={"#6b947f"}/>
// <Box w="90%" textAlign="center" m="auto" >
//           <Text mt="2" textAlign={"center"} color={"#FFFFFF"}>{valueText}</Text>
//       <Slider
//         aria-label="horizontal-slider"
//         value={sliderValue}
//         onChange={handleSliderChange}
//         min={0}
//         max={100}
//         step={1} // Set step to 5% for the desired behavior
//       >
//         <SliderTrack bg="gray.200">
//           <SliderFilledTrack bg="#6b947f" />
//         </SliderTrack>
//         <SliderThumb boxSize={4} bg="#FFFFFF" />
//       </Slider>
//     </Box>



//     </Box>



//   );
// };

// const NavItem = ({ icon, children, ...rest }) => {
//   return (
//     <Box
//     //  border={"1px solid yellow"}
//       as="a"
//       href="#"
//       style={{ textDecoration: 'none' }}
//       _focus={{ boxShadow: 'none' }}
//     >
//       <Flex
//         align="center"
//         p="3.5"
//         mx="2"
//         borderRadius="none"
//         role="group"
//         cursor="pointer"
//         _hover={{
//           bg: '#6b947f',
//           color: 'white',
//         }}
//         {...rest}
//       >
//         {icon && (
//           <Icon
//             mr="4"
//             fontSize="16"
//             _groupHover={{
//               color: 'white',
//             }}
//             as={icon}
//           />
//         )}
//         {children}
//       </Flex>
//     </Box>
//   );
// };

// const MobileNav = ({ onOpen, ...rest }) => {
//   return (
//     <Flex
//       // border={"1px solid yellow"}
//       ml={{ base: 0, md: 60 }}
//       px={{ base: 4, md: 4 }}
//       height="20"
//       w={{base:"100%",md:"85%"}}
//       position="fixed"
//       top="0"
//       left="0"
//       alignItems="center"
//       bg={useColorModeValue('#212121', 'gray.900')}
//       borderBottomWidth="1px"
//       borderBottomColor={useColorModeValue('gray.200', 'gray.700')}
//       justifyContent={{ base: 'space-between', md: 'flex-end' }}
//       {...rest}
      
//     >
//       <IconButton
//         display={{ base: 'flex', md: 'none' }}
//         onClick={onOpen}
//         variant="outline"
//         aria-label="open menu"
//         border="2px solid #FFFFFF"
//         bgColor={"#6b947f"}
//         color="#FFFFFF"
//         icon={<FiMenu />}
//       />

//       <Text
//         display={{ base: 'flex', md: 'none' }}
//         fontSize="2xl"
//         fontFamily="monospace"
//         fontWeight="bold"
//       >
//         Logo
//       </Text>

//       <HStack spacing={{ base: '0', md: '6' }}>
//         <IconButton borderRadius={"50%"} size="xs" variant="ghost" m="8px" color={{base:"#6b947f",md:"#FFFFFF"}} _focus={{ boxShadow: '#FFFFFF' }} border="1px solid #fff" aria-label="open menu" icon={<FiBell />} />
//         <Flex alignItems={'center'}>
//           <Menu>
//             <MenuButton color="#fff" py={2} transition="all 0.3s" _focus={{ boxShadow: 'none' }}>
//               <HStack>
//                 <Avatar
//                   size={{base:"sm",md:"md"}}
//                   src={
//                     'https://images.unsplash.com/photo-1619946794135-5bc917a27793?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=b616b2c5b373a80ffc9636ba24f7a4a9'
//                   }
//                 />
//                 <VStack
//                   display={{ base: 'none', md: 'flex' }}
//                   alignItems="flex-start"
//                   spacing="1px"
//                   ml="2"
//                 >
//                   <Text color="#FFFFFF" fontSize="sm">Justina Clark</Text>
//                   <Text color="#6b947f" fontSize="xs" >
//                     user name
//                   </Text>
//                 </VStack>
//                 <Box display={{ base: 'none', md: 'flex' }}>
//                   <FiChevronDown />
//                 </Box>
//               </HStack>
//             </MenuButton>
//             <MenuList
//             h={{base:"auto",md:"auto"}}
//               bgColor={useColorModeValue('#212121')}
//               borderColor={useColorModeValue('gray.200', 'gray.700')}
//             >
//               <MenuItem m="3px" color="#fff"  _hover={{bg:`linear-gradient(to right, #000000, #FF0000, #000000)`, boxShadow:'0 0 2px 3px #F5F5F5'}} bgColor='#212121'>Profile</MenuItem>
//               <MenuItem m="3px" color="#fff"  _hover={{bg:`linear-gradient(to right, #000000, #FF0000, #000000)`, boxShadow:'0 0 2px 3px #F5F5F5'}} bgColor='#212121'>Settings</MenuItem>
//               <MenuItem m="3px" color="#fff"  _hover={{bg:`linear-gradient(to right, #000000, #FF0000, #000000)`, boxShadow:'0 0 2px 3px #F5F5F5'}} bgColor='#212121'>Premimum Zone</MenuItem>
//               <MenuDivider />
//               <MenuItem m="3px" color="#fff" _hover={{bg:`linear-gradient(to right, #000000, #FF0000, #000000)`, boxShadow:'0 0 2px 3px #F5F5F5'}} bgColor='#212121'>Sign out</MenuItem>
//             </MenuList>
//           </Menu>
//         </Flex>
//       </HStack>
//     </Flex>
//   );
// };

// const Videos = () => {
//   const { isOpen, onOpen, onClose } = useDisclosure();

//   return (
//     <Box minH="100vh"   bg={useColorModeValue('gray.100', 'gray.900')}>
//       <SidebarContent onClose={() => onClose} display={{ base: 'none', md: 'block' }} />
//       <Drawer
//         isOpen={isOpen}
//         placement="left"
//         onClose={onClose}
//         returnFocusOnClose={false}
//         onOverlayClick={onClose}
//         size="full"
//       >
//         <DrawerContent>
//           <SidebarContent onClose={onClose} />
//         </DrawerContent>
//       </Drawer>
//       {/* mobilenav */}
//       <MobileNav onOpen={onOpen} />
//       <Box  ml={{ base: 0, md: 60 }} bg="#000000" p="4" h="auto"
//       // border="1px solid cyan"
//       >



//         <Box
//           w="100%" mt="50px" h="auto"
//           // border="1px solid cyan"
//         >

//           {/* Content */}



//           <VideoComponent/>
//           <VideoComponent/>
//           <VideoComponent/>
//           <VideoComponent/>




//         </Box>



        

         
          




























//       </Box>
//     </Box>
//   );
// };

// export default Videos;








































import Navbar from "../Components/Navbar";
import Navbar2 from "../Components/Navbar2";
import React, { useState,useEffect } from 'react';
import {
  IconButton,
  Avatar,
  Box,
  CloseButton,
  Flex,
  HStack,
  VStack,
  Icon,
  useColorModeValue,
  Text,
  Drawer,
  DrawerContent,
  useDisclosure,
  Divider,
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList,  
  Slider, 
  SliderTrack,
  SliderFilledTrack, 
  SliderThumb, 
} from '@chakra-ui/react';
import {
  FiVideo,
  FiMenu,
  FiBell,
  FiChevronDown,

} from 'react-icons/fi';


import {
  Grid,
  Center,
  Select,
  Button,
  Stack,
} from "@chakra-ui/react";
import {
  Pagination,
  usePagination,
  PaginationPage,
  PaginationNext,
  PaginationPrevious,
  PaginationPageGroup,
  PaginationContainer,
  PaginationSeparator
} from "@ajna/pagination";

const fetchPokemons = async (pageSize, offset) => {
  return await fetch(
    `https://pokeapi.co/api/v2/pokemon?limit=${pageSize}&offset=${offset}`
  ).then(async (res) => await res.json());
};



const LinkItems = [
  { name: 'Urban legends', icon: FiVideo, },
  { name: 'Black Magic', icon: FiVideo, },
  { name: 'Cult', icon: FiVideo,  },
  { name: 'Disturbing', icon: FiVideo  },
  { name: 'Spooky', icon: FiVideo},
];

const SidebarContent = ({ onClose, ...rest }) => {
  // states

  const [sliderValue, setSliderValue] = useState(0);

  const handleSliderChange = (newValue) => {
    setSliderValue(newValue);
  };

  const valueText = `${sliderValue}%`;

  return (


    <>

        
        
        

    <Box
      transition="3s ease"
      bg={useColorModeValue('#212121', 'white.900')}
      borderRight="1px"
      borderRightColor={useColorModeValue('#999', '#999')}
      w={{ base: 'full', md: 60 }}
      pos="fixed"
      h="full"
      // border="1px solid red"
      {...rest}
    >
      <Flex  h="20" alignItems="center" mx="8" justifyContent="space-between">
        <Text  color="#6b947f" fontSize="2xl" fontFamily="monospace" fontWeight="bold">
          Sort & Filter
        </Text>
        <CloseButton border="2px solid #FFFFFF" color={"#FFFFFF"} bgColor={"#6b947f"} display={{ base: 'flex', md: 'none' }} onClick={onClose} />
      </Flex>
      {LinkItems.map((link,index) => (
        <React.Fragment key={link.name}>
        <NavItem mt="3px" mb="5px" color="#FFFFFF" key={link.name} icon={link.icon}>
          {link.name}
        </NavItem>
        {index < LinkItems.length - 1 && <Divider borderColor={"#6b947f"}/>}
        </React.Fragment>
      ))}

{/* filtering --------------------------------------- pointer ------------------------------ here */}

<Divider  borderColor={"#6b947f"}/>
<Box w="90%" textAlign="center" m="auto" >
          <Text mt="2" textAlign={"center"} color={"#FFFFFF"}>{valueText}</Text>
      <Slider
      // border={"1px solid red"}
        aria-label="horizontal-slider"
        value={sliderValue}
        onChange={handleSliderChange}
        min={0}
        max={100}
        step={1} // Set step to 5% for the desired behavior
      >
        <SliderTrack bg="gray.200">
          <SliderFilledTrack bg="#6b947f" />
        </SliderTrack>
        <SliderThumb boxSize={4} bg="#FFFFFF" />
      </Slider>
    </Box>




    </Box>


    </>
  );
};

const NavItem = ({ icon, children, ...rest }) => {
  return (
    <Box
    //  border={"1px solid yellow"}
      as="a"
      href="#"
      style={{ textDecoration: 'none' }}
      _focus={{ boxShadow: 'none' }}
    >
      <Flex
        align="center"
        p="3.5"
        mx="2"
        borderRadius="none"
        role="group"
        cursor="pointer"
        _hover={{
          bg: '#6b947f',
          color: 'white',
        }}
        {...rest}
      >
        {icon && (
          <Icon
            mr="4"
            fontSize="16"
            _groupHover={{
              color: 'white',
            }}
            as={icon}
          />
        )}
        {children}
      </Flex>
    </Box>
  );
};

const MobileNav = ({ onOpen, ...rest }) => {
  return (
    <Flex
      // border={"1px solid yellow"}
      ml={{ base: 0, md: 60 }}
      px={{ base: 4, md: 4 }}
      height="20"
      w={{base:"100%",md:"85%"}}
      position="fixed"
      top="0"
      left="0"
      alignItems="center"
      bg={useColorModeValue('#212121', 'gray.900')}
      borderBottomWidth="1px"
      borderBottomColor={useColorModeValue('gray.200', 'gray.700')}
      justifyContent={{ base: 'space-between', md: 'flex-end' }}
      {...rest}
      
    >
      <IconButton
        display={{ base: 'flex', md: 'none' }}
        onClick={onOpen}
        variant="outline"
        aria-label="open menu"
        border="2px solid #FFFFFF"
        bgColor={"#6b947f"}
        color="#FFFFFF"
        icon={<FiMenu />}
      />

      <Text
        display={{ base: 'flex', md: 'none' }}
        fontSize="2xl"
        fontFamily="monospace"
        fontWeight="bold"
      >
        Logo
      </Text>

      <HStack spacing={{ base: '0', md: '6' }}>
        <IconButton borderRadius={"50%"} size="xs" variant="ghost" m="8px" color={{base:"#6b947f",md:"#FFFFFF"}} _focus={{ boxShadow: '#FFFFFF' }} border="1px solid #fff" aria-label="open menu" icon={<FiBell />} />
        <Flex alignItems={'center'}>
          <Menu>
            <MenuButton color="#fff" py={2} transition="all 0.3s" _focus={{ boxShadow: 'none' }}>
              <HStack>
                <Avatar
                  size={{base:"sm",md:"md"}}
                  src={
                    'https://images.unsplash.com/photo-1619946794135-5bc917a27793?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=b616b2c5b373a80ffc9636ba24f7a4a9'
                  }
                />
                <VStack
                  display={{ base: 'none', md: 'flex' }}
                  alignItems="flex-start"
                  spacing="1px"
                  ml="2"
                >
                  <Text color="#FFFFFF" fontSize="sm">Justina Clark</Text>
                  <Text color="#6b947f" fontSize="xs" >
                    user name
                  </Text>
                </VStack>
                <Box display={{ base: 'none', md: 'flex' }}>
                  <FiChevronDown />
                </Box>
              </HStack>
            </MenuButton>
            <MenuList
            h={{base:"auto",md:"auto"}}
              bgColor={useColorModeValue('#212121')}
              borderColor={useColorModeValue('gray.200', 'gray.700')}
            >
              <MenuItem m="3px" color="#fff"  _hover={{bg:`linear-gradient(to right, #000000, #FF0000, #000000)`, boxShadow:'0 0 2px 3px #F5F5F5'}} bgColor='#212121'>Profile</MenuItem>
              <MenuItem m="3px" color="#fff"  _hover={{bg:`linear-gradient(to right, #000000, #FF0000, #000000)`, boxShadow:'0 0 2px 3px #F5F5F5'}} bgColor='#212121'>Settings</MenuItem>
              <MenuItem m="3px" color="#fff"  _hover={{bg:`linear-gradient(to right, #000000, #FF0000, #000000)`, boxShadow:'0 0 2px 3px #F5F5F5'}} bgColor='#212121'>Premimum Zone</MenuItem>
              <MenuDivider />
              <MenuItem m="3px" color="#fff" _hover={{bg:`linear-gradient(to right, #000000, #FF0000, #000000)`, boxShadow:'0 0 2px 3px #F5F5F5'}} bgColor='#212121'>Sign out</MenuItem>
            </MenuList>
          </Menu>
        </Flex>
      </HStack>
    </Flex>
  );
};

const Videos = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [pokemonsTotal, setPokemonsTotal] = useState(undefined);
  const [pokemons, setPokemons] = useState([]);





    // constants
    const outerLimit = 1;
    const innerLimit = 1;
  
    const {
      pages,
      pagesCount,
      offset,
      currentPage,
      setCurrentPage,
      setIsDisabled,
      isDisabled,
      pageSize,
      setPageSize
    } = usePagination({
      total: pokemonsTotal,
      limits: {
        outer: outerLimit,
        inner: innerLimit
      },
      initialState: {
        pageSize: 5,
        isDisabled: false,
        currentPage: 1
      }
    });
  
    // effects
    useEffect(() => {
      fetchPokemons(pageSize, offset)
        .then((pokemons) => {
          setPokemonsTotal(pokemons.count);
          setPokemons(pokemons.results);
        })
        .catch((error) => console.log("App =>", error));
    }, [currentPage, pageSize, offset]);
  
    // handlers
    const handlePageChange = (nextPage) => {
      // -> request new data using the page number
      setCurrentPage(nextPage);
      console.log("request new data with ->", nextPage);
    };
  
    const handlePageSizeChange = (event) => {
      const pageSize = Number(event.target.value);
  
      setPageSize(pageSize);
    };
  
    const handleDisableClick = () => {
      setIsDisabled((oldState) => !oldState);
    };
  
  return (


    <>
    
    
    

    <Box minH="100vh"   bg={useColorModeValue('gray.100', 'gray.900')}>
      <SidebarContent onClose={() => onClose} display={{ base: 'none', md: 'block' }} />
      <Drawer
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        returnFocusOnClose={false}
        onOverlayClick={onClose}
        size="full"
      >
        <DrawerContent>
          <SidebarContent onClose={onClose} />
        </DrawerContent>
      </Drawer>
      {/* mobilenav */}
      <MobileNav onOpen={onOpen} />
      <Box  ml={{ base: 0, md: 60 }} bg="#000000" p="4" h="auto"
      // border="1px solid cyan"
      >



        <Box
          w="100%" mt="50px" h="auto"
          // border="1px solid cyan"
        >

          {/* Content */}


         
         


          {pokemons?.map(({ name, url }) => (
  <Box pb={{ base: "10px", md: "20px" }} display="flex" mt={{ base: "10px", md: "20px" }} flexDirection={{ base: "column", md: "row" }} justifyContent={"space-evenly"} w="100%" h={{ base: "45vh", md: "auto" }} key={name}>
    <Box border="2px solid red" mt={{ base: "10px", md: "20px" }} w={{ base: "100%", md: "50%" }} borderRadius={"8px"} h={{ base: "30vh", md: "48vh" }}>
      <iframe
        width={"100%"}
        height="100%"
        borderRadius="18px"
        // src={url}
        frameBorder="0"
        allowFullScreen
        title={name}
      ></iframe>
    </Box>
    <Box w={{ base: "100%", md: "40%" }} color="#FFFFFF">
      <Text fontFamily={"my"} fontSize={{ base: "16px", md: "35px" }}>{name}</Text>
      <Divider />
    </Box>
  </Box>
))}



          
{/* pagination starts here -----------------------------------------agination starts here---------------------------------------------------------------------------agination starts here*/}


<Stack 
    // border={"1px solid red"} 
    w={{base:"78%",md:"20%"}}
    m="auto"
    mt="100px">
        <Pagination
          pagesCount={pagesCount}
          currentPage={currentPage}
          isDisabled={isDisabled}
          onPageChange={handlePageChange}
        >
          <PaginationContainer
            // border="1px solid red"
            align="center"
            justify="space-between"
            p={1}
            w="full"
          >
            <PaginationPrevious 
            // border={"1px solid red"}
            w={5}
            h={5}
              _hover={{
                bg: "#6b947f"
              }}
              bg="#fff"
              onClick={() =>
                console.log(
                  "Im executing my own function along with Previous component functionality"
                )
              }
            >
              <Text fontSize={{base:"12px",md:"13px"}}>Prev</Text>
            </PaginationPrevious>
            <PaginationPageGroup 
            // border={"1px solid red"}
            
              isInline
              align="center"
              separator={
                <PaginationSeparator 
                // border={"1px solid yellow"}
                  onClick={() =>
                    console.log(
                      "Im executing my own function along with Separator component functionality"
                    )
                  }
                  bg="blue.300"
                  fontSize="sm"
                  w={5}
                  h={5}
                  jumpSize={3}
                />
              }
            >
              {pages.map((page) => (
                <PaginationPage
                //  border={"1px solid red"}
                  w={5}
                  h={5}
                  bg="#FFFFFF"
                  key={`pagination_page_${page}`}
                  page={page}
                  onClick={() =>
                    console.log(
                      "Im executing my own function along with Page component functionality"
                    )
                  }
                  fontSize="11px"
                  _hover={{
                    bg: "#4fc3f7"
                  }}
                  _current={{
                    bg: "#6b947f",
                    textColor : "#FFFFFF",
                    fontSize: "sm",
                    w: 6
                  }}
                />
              ))}
            </PaginationPageGroup>
            <PaginationNext
            w={5}
            h={5}
              _hover={{
                bg: "#6b947f",
                textColor : "#fff"
              }}
                bg="#fff"
              onClick={() =>
                console.log(
                  "Im executing my own function along with Next component functionality"
                )
              }
            >
              <Text fontSize={{base:"12px",md:"13px"}}>Next</Text>
            </PaginationNext>
          </PaginationContainer>
        </Pagination>
        <Center m="auto" w="full">
          <Button
            w="50%"
            m="5px"
            _hover={{
              bg: "#E0E0E0",
              border : "0.5px solid #6b947f",
              textColor : "#E91E63"
            }}
            bg="transparent"
            textColor={"#03A9F4"}
            border="0.5px solid #37474F"
            onClick={handleDisableClick}
            fontSize={{base:"14px",md:"12px"}}
          >
            Disable ON/OFF
          </Button>
          <Select m="5px" border={"0.5px solid #6b947f"} variant={"unstyled"} w="50%" ml={3}  color="#abb8c3" onChange={handlePageSizeChange} >
            <option value="10" variant={"unstyled"} >10</option>
            <option value="25"  variant={"unstyled"}>25</option>
            <option value="50">50</option>
          </Select>
        </Center>
        
      </Stack>





        {/* pagination ends here --------------------------------pagination ends here-----------------------------------------------------------pagination ends here- */}






        </Box>



        

         
          




























      </Box>
    </Box>

    </>
  );
};

export default Videos;
