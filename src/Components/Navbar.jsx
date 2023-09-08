import { ReactNode } from 'react';
import {
  Box,
  Flex,
  Avatar,
  HStack,
  IconButton,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Text,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
  Image,
  keyframes ,
} from '@chakra-ui/react';
import {Link} from "react-router-dom";
import TempLogo from "../Photo/TempLogo.png"
import { Navigate, useNavigate } from 'react-router-dom';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';
import AudioVisulizer from "../Empty-1/AudioVisualizer";

// Animations here--------------------------------------------------->>>>>>>>>>>>>>>>>>>>>>>>>>

// Fade In Animation
const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

// Typewriter Animation
const typewriter = keyframes`
  from {
    width: 0;
  }
  to {
    width: 100%;
  }
`;

// Glitch Animation
const glitch = keyframes`
  0% {
    transform: translate(0, 0);
  }
  20%, 80% {
    transform: translate(-5px, 5px);
  }
  40%, 60% {
    transform: translate(5px, -5px);
  }
  100% {
    transform: translate(0, 0);
  }
`;

// Pulse Animation
const pulse = keyframes`
  0%, 100% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.2);
  }
`;

// Shadow Animation
const shadow = keyframes`
  0% {
    text-shadow: 0 0 0 transparent;
  }
  50% {
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
  }
  100% {
    text-shadow: 0 0 0 transparent;
  }
`;


// Blood Drip Animation
const bloodDrip = keyframes`
  0% {
    transform: translateY(-50px);
  }
  50% {
    transform: translateY(0);
  }
  100% {
    transform: translateY(50px);
  }
`;

// Ghostly Fade Animation
const ghostlyFade = keyframes`
  0%, 100% {
    opacity: 0.3;
  }
  50% {
    opacity: 1;
  }
`;

// Creepy Crawl Animation
const creepyCrawl = keyframes`
  0% {
    transform: translateX(-100%);
  }
  100% {
    transform: translateX(100%);
  }
`;

// Flickering Shadow Animation
const flickeringShadow = keyframes`
  0% {
    text-shadow: none;
  }
  50% {
    text-shadow: 0 0 10px rgba(0, 0, 0, 0.8);
  }
  100% {
    text-shadow: none;
  }
`;

// Sinister Glowing Animation
const sinisterGlowing = keyframes`
  0%, 100% {
    color: #fff;
    text-shadow: 0 0 10px rgba(255, 0, 0, 0.8);
  }
  50% {
    color: #ff0000;
    text-shadow: none;
  }
`;



// 1.animation={`${bloodDrip} 2s linear infinite`}
// 2.animation={`${ghostlyFade} 2s ease-in-out infinite alternate`} 
// 3.animation={`${creepyCrawl} 4s linear infinite`}
// 4.animation={`${flickeringShadow} 2s ease-in-out infinite`}
// 5.animation={`${sinisterGlowing} 3s ease-in-out infinite`}
// 6.animation={`${fadeIn} 1s linear`}
// 7.animation={`${typewriter} 4s steps(20) 1s normal both`}
// 8.animation={`${glitch} 1s infinite`}
// 9.animation={`${pulse} 2s infinite alternate`}
// 10.animation={`${shadow} 3s infinite`}




const Links = [
  {name:'Darkweb',path:"/darkweb"},
  { name:'Home',path:"/welcome"}, 
  {name:'DeathCause',path:"deathcause"},
  {name:'DeathDate',path:"deathdate"}, 
  {name:"Signup",path:"/signup"}, 
  {name:"Login",path:"/login"},
  {name:"AudioVisualizer", path:"/audioVisualizer"}
];
// const gradient = `linear-gradient(to right, #990066, #660000, #000000)`;
const gradient = `linear-gradient(to right ,#000000, #37474F, #000000)`


const NavLink = ({ children ,to}) => (
  
  
  <Link
    px={2}
    py={1}
    rounded={'md'}
    fontFamily={'my'}
    animation={`${fadeIn} 3s linear`}
    fontSize={{base:"20px" ,md:"20px"}}
    _hover={{
        // textColor:"#fff"
      textDecoration: 'none',
    //   bg: useColorModeValue('gray.200', 'gray.700'),
    }}
    to={to}
    // href={'#'}
    >
          {children}
    
  </Link>
);

export default function Simple() {
  const Navigate=useNavigate();
  const handleHome =()=>{
    Navigate("/")
  }
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    
    <>
      <Box bg={gradient} px={4}>
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
          <IconButton
            size={'md'}
            icon={isOpen ? <CloseIcon /> : <Box bgColor="#000000" p="3" borderRadius="sm">
            <HamburgerIcon color="white" />
          </Box>}
            aria-label={'Open Menu'}
            display={{ md: 'none' }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack spacing={20} alignItems={'center'}>
            <Box
              w={{ base: "200px", md: "400px" }}
              h={{ base: "50px", md: "50px" }}
            >
              <Text
                textColor="#ffff"
                textAlign={{ base: "center", md: "left" }}
                m="auto"
                onClick={handleHome}
                fontFamily={"living-by-numbers"}
                fontSize={{ base: "2xl", md: "4xl" }}
                color="#fff"
                animation={{
                  base: `${sinisterGlowing} 1s ease-in-out infinite`,
                  md: `${fadeIn} 3s linear`
                }}
              >
                Dare To Visit
              </Text>
            </Box>
            <HStack
              as={'nav'}
              spacing={4}
              // border="2px solid red"
              m="auto"
              textColor={"#AED581"}
              fontFamily={"living-by-numbers"}
              fontSize={"20px"}
              display={{ base: 'none', md: 'flex' }}
              animation={{
                base: ``,
                md: `${sinisterGlowing} 3s ease-in-out infinite`
              }}
            >
              {Links.map((link) => (
                <NavLink key={link.name} to={link.path}>
                  {link.name}
                </NavLink>
              ))}
            </HStack>
          </HStack>
          <Flex alignItems={'center'}>
            <Menu>
              <MenuButton
                as={Button}
                rounded={'full'}
                variant={'link'}
                cursor={'pointer'}
                minW={0}
              >
                <Avatar
                  size={'md'}
                  src={TempLogo}
                />
              </MenuButton>
              <MenuList>
                {Links.map((link) => (
                  <MenuItem key={link.name} onClick={onClose}>
                    <NavLink to={link.path}>
                      {link.name}
                    </NavLink>
                  </MenuItem>
                ))}
              </MenuList>
            </Menu>
          </Flex>
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: 'none' }}>
            <Stack as={'nav'} spacing={4} textColor={"#fff"}>
              {Links.map((link) => (
                <NavLink key={link.name} to={link.path}>{link.name}</NavLink>
              ))}
            </Stack>
          </Box>
        ) : null}
      </Box>
    </>
  );
}
































