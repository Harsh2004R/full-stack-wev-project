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
import { Navigate, useNavigate } from 'react-router-dom';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';
import AudioVisulizer from "../Empty-1/AudioVisualizer";



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
const gradient = `linear-gradient(to right ,#000000, #660000, #000000)`


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
              textColor={"#fff"}
              fontFamily={"living-by-numbers"}
              display={{ base: 'none', md: 'flex' }}
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
                  src={
                    'https://images.unsplash.com/photo-1493666438817-866a91353ca9?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=b616b2c5b373a80ffc9636ba24f7a4a9'
                  }
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


