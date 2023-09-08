import React from 'react';
import { Box, Button, Text, Menu, MenuButton, MenuList, MenuItem } from "@chakra-ui/react";
import BurnedPaper from "../Photo/BurnedPaper.jpeg"
function Nav() {
  return (
    <Box backgroundImage={BurnedPaper}  border="2px solid red" w="100%" position={"relative"} backgroundSize={"100% auto"} h="100px">

      {/* <Box w="30%" h="80px" border="2px solid blue"></Box>
      <Box w="10%" h="80px" border="2px solid blue"></Box>
      <Box w="10%" h="80px" border="2px solid blue"></Box>
      <Box w="50%" h="80px" border="2px solid blue"></Box> */}
      
    </Box>
  );
}

export default Nav;
