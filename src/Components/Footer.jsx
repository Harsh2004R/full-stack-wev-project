

import { Box, chakra, Container, SimpleGrid, Stack, Text, VisuallyHidden, Input, IconButton, useColorModeValue } from '@chakra-ui/react';
import { ReactNode } from 'react';
import { FaFacebook, FaGit, FaGitAlt, FaHome, FaInstagram, FaLinkedin, FaTwitter, FaYoutube } from 'react-icons/fa';
import { BiMailSend } from 'react-icons/bi';

const gradient_x = `linear-gradient(to right ,#000000, #000000, #000000)`;
const Logo = (props) => {
  return (
    <svg height={32} viewBox="0 0 120 28" xmlns="http://www.w3.org/2000/svg" {...props}>
      {/* SVG path data */}
    </svg>
  )
}

const SocialButton = ({ children, label, href }) => {
  return (
    <chakra.button
    border="1px solid red"
      bg={useColorModeValue('blackAlpha.100', 'whiteAlpha.100')}
      rounded={'full'}
      w={"48px"}
      h={"48px"}
      cursor={'pointer'}
      as={'a'}
      href={href}
      display={'inline-flex'}
      alignItems={'center'}
      justifyContent={'center'}
      transition={'background 0.3s ease'}
      _hover={{
        bg: useColorModeValue('blackAlpha.200', 'whiteAlpha.200'),
      }}
    >
      <VisuallyHidden >{label}</VisuallyHidden>
      {children}
    </chakra.button>
  )
}

const ListHeader = ({ children }) => {
  return (
    <Text fontWeight={'500'} color="#FF0000" fontFamily={"fiendish"} fontSize={'lg'}  mb={2}>
      {children}
    </Text>
  )
}
// 808080
export default function LargeWithNewsletter() {
  return (
    <Box
    // border="1px solid red"
      bg={gradient_x}
      color={"#FF0000"}
    >
      <Container as={Stack} maxW={'6xl'} py={10}>
        <SimpleGrid
          templateColumns={{ sm: '1fr 1fr', md: '2fr 1fr 1fr 2fr' }}
          spacing={8}
        >
          <Stack spacing={6}>
            <Box>
              <Logo color={useColorModeValue('gray.700', 'white')} />
            </Box>
            <Text fontSize={'sm'}  color="#808080" fontFamily={"just-die-already"}>Dare to visit Team.</Text>
            <Text fontSize={'sm'}  color="#808080" fontFamily={"just-die-already"}>##Hardi---</Text>
            <Stack direction={'row'} spacing={6}>
              <SocialButton  label={'Linkdin'} href={'https://www.linkedin.com/in/harsh-sharma-0545aa25b/'}>
                <FaLinkedin />
              </SocialButton>
              <SocialButton label={'YouTube'} href={'https://github.com/Harsh2004R'}>
                <FaGit />
              </SocialButton>
              <SocialButton label={'Instagram'} href={'https://www.instagram.com/xxbagg/?utm_source=qr&igshid=MzNlNGNkZWQ4Mg%3D%3D'}>
                <FaInstagram />
              </SocialButton>
              <SocialButton label={'Instagram'} href={'/'}>
                <FaHome />
              </SocialButton>
            </Stack>
          </Stack>
          <Stack align={'flex-start'}>
            <ListHeader>Company</ListHeader>
            <Box color="#808080" fontFamily={"bloody"} as="a" href={'#'}>
              About us
            </Box>
            <Box color="#808080" fontFamily={"bloody"} as="a" href={'#'}>
              Blog
            </Box>
            <Box  color="#808080" fontFamily={"bloody"} as="a" href={'#'}>
              Contact us
            </Box>
            <Box  color="#808080" fontFamily={"bloody"} as="a" href={'#'}>
              Pricing
            </Box>
            <Box  color="#808080" fontFamily={"bloody"} as="a" href={'#'}>
              Testimonials
            </Box>
          </Stack>
          <Stack align={'flex-start'}>
            <ListHeader>Support</ListHeader>
            <Box  color="#808080" fontFamily={"bloody"} as="a" href={'#'}>
              Help Center
            </Box>
            <Box color="#808080" fontFamily={"bloody"} as="a" href={'#'}>
              Terms of Service
            </Box>
            <Box color="#808080" fontFamily={"bloody"} as="a" href={'#'}>
              Legal
            </Box>
            <Box color="#808080" fontFamily={"bloody"} as="a" href={'#'}>
              Privacy Policy
            </Box>
            <Box color="#808080" fontFamily={"bloody"} as="a" href={'#'}>
              Status
            </Box>
          </Stack>
          <Stack align={'flex-start'}>
            <ListHeader>Stay up to date</ListHeader>
            <Stack direction={'row'}>
              <Input
                placeholder={'Your email address'}
                bg={useColorModeValue('blackAlpha.100', 'whiteAlpha.100')}
                border={0}
                _focus={{
                  bg: 'whiteAlpha.300',
                }}
              />
              <IconButton
                bg={useColorModeValue('green.400', 'green.800')}
                color={useColorModeValue('white', 'gray.800')}
                _hover={{
                  bg: 'green.600',
                }}
                aria-label="Subscribe"
                icon={<BiMailSend />}
              />
            </Stack>
          </Stack>
        </SimpleGrid>
      </Container>
    </Box>
  )
}