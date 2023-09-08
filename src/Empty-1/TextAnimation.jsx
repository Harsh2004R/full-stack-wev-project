import { Box, Heading, Text } from '@chakra-ui/react';
import { motion } from 'framer-motion';

const TextAnimation = () => {
  return (


    <>



    <Box border="1px solid red" w="100%" h="100vh" bgColor="#0f2343">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <Heading textAlign="center" color="#fff" fontSize="3xl" mt={8}>
          Welcome to the Horror Website!
        </Heading>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, translateY: 50 }}
        animate={{ opacity: 1, translateY: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        <Text color="#fff" border="1px solid red" textAlign="center" fontSize="xl" mt={4}>
          Prepare yourself for a bone-chilling experience.
        </Text>
      </motion.div>
      {/* Add more horror-themed animations and content here */}
    </Box>


    </>
  );
};

export default TextAnimation;
