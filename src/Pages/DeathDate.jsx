import Navbar from "../Components/Navbar"

import React, { useState } from 'react';
import {
  Box,
  Input,
  Button,
  Text,
  keyframes,
  Flex,
} from "@chakra-ui/react"
import DDBG from "../Photo/DDBG.png";
import CountDown from "../autoAudio/CountDown.mp3"

const glowAnimation = keyframes`
  0% { box-shadow: 0 0 0px #FF0000; }
  50% { box-shadow: 0 0 10px 5px #FF0000; }
  100% { box-shadow: 0 0 0px #FF0000; }
`;

const fingerAnimation = keyframes`
  0% {
    transform: translateY(-10px);
    opacity: 0;
  }
  50% {
    transform: translateY(0);
    opacity: 1;
  }
  100% {
    transform: translateY(-10px);
    opacity: 0;
  }
}`;

const fadeInAnimation = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}`;

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
const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

function DeathDate() {
  const [isSongPlaying, setIsSongPlaying] = useState(false);
  const [currentAge, setCurrentAge] = useState('');
  const [futureDate, setFutureDate] = useState(null);
  const [countdown, setCountdown] = useState({
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);
  const [isInputFocused, setIsInputFocused] = useState(false);


  let countdownInterval = null;
  const oneSecond = 1000;
  const oneMinute = oneSecond * 60;
  const oneHour = oneMinute * 60;

  const handleChange = (event) => {
    setCurrentAge(event.target.value);
  };

  const generateFutureDate = () => {
    const currentYear = new Date().getFullYear();
    const randomRange = Math.random() < 0.5 ? [62, 71] : [65, 75];
    const [minSum, maxSum] = randomRange;
    const predictedAge = Math.floor(Math.random() * (maxSum - minSum + 1)) + minSum;
    const currentDate = new Date();
    const futureYear = currentYear + predictedAge - parseInt(currentAge, 10);

    // Generate a random month
    const randomMonth = Math.floor(Math.random() * 12); // 0-11 for January-December
    const futureDate = new Date(futureYear, randomMonth, currentDate.getDate());
  
    return futureDate;
  };

  const startCountdown = () => {
    countdownInterval = setInterval(() => {
      const futureDate = generateFutureDate();
      const currentTime = new Date().getTime();
      const timeDifference = futureDate - currentTime;

      if (timeDifference <= 0) {
        clearInterval(countdownInterval);
        setCountdown({
          hours: 0,
          minutes: 0,
          seconds: 0,
        });
      } else {
        const remainingTime = new Date(timeDifference);
        const hours = remainingTime.getUTCHours();
        const minutes = remainingTime.getUTCMinutes();
        const seconds = remainingTime.getUTCSeconds();

        setCountdown({
          hours,
          minutes,
          seconds,
        });
      }
    }, oneSecond);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (currentAge === '') {
      alert('Please enter your age');
      return;
    }
    const futureDate = generateFutureDate();
    setFutureDate(futureDate);
    startCountdown();
    setIsSongPlaying(true);
    setIsButtonDisabled(true);
  };

  const handleDate = () => {
    if (currentAge === '') {
      alert('Please enter your age');
      return;
    }
    const futureDate = generateFutureDate();
    setFutureDate(futureDate);
    startCountdown();
    setIsSongPlaying(true);
    setIsButtonDisabled(true);
  };
 
  React.useEffect(() => {
    return () => {
      clearInterval(countdownInterval);
    };
  }, []);

  return (
    <>
    <Navbar/>
      <Box
        w="100%"
        h='100vh'
        border="2px solid #000000"
        backgroundImage={`url(${DDBG})`}
        backgroundSize="cover"
        backgroundPosition="center"
        backgroundRepeat="no-repeat"
      >
        <Text
          mt="2%"
          textAlign={"center"}
          fontFamily={"fiendish"}
          fontSize={{ base: "4xl", md: "6xl" }}
          color="#FF0000"
        >
          DEATH DATE
        </Text>

        <Box
          // border="1px solid red"
          w={{ base: "70%", md: "60%" }}
          h={{ base: "300px", md: "300px" }}
          m="auto"
          display="flex"
          justifyContent="center"
          alignItems="center"
          minHeight="20vh"
        >
          <Box
          // border="2px solid red"
            w={{ base: "80%", md: "80%" }}
            display="flex"
            h={{base:"100%",md:"80%"}}
            justifyContent="center"
            alignItems="center"
            m="auto"
          >
            <form onSubmit={handleSubmit}>
              <Text
                textAlign={"center"}
                fontWeight={"bolder"}
                fontSize={{ base: "1.2rem", md: "3xl" }}
                // fontFamily={"dark_halloween"}
                color="#fff"
                marginBottom="24px"
              >
                Enter Age👇
              </Text>
              <Input
                textAlign={"center"}
                type="number"
                color="yellow"
                marginBottom="24px"
                width="200px"
                value={currentAge}
                onChange={handleChange}
                borderRadius="4px"
                border="none"
                boxShadow= '0 0 10px 5px #ECEFF1'
                placeholder='Dare to enter your age'
                _hover={{ boxShadow: '0 0 10px 5px #BDBDBD' }}
                onFocus={() => setIsInputFocused(true)}
                onBlur={() => setIsInputFocused(false)}
                animation={`${isInputFocused ? fingerAnimation : ''} 1s infinite, ${fadeInAnimation} 0.5s`}
              
              
              />
              <Button
                onClick={handleDate}
                _hover={{ boxShadow: '0 0 10px 5px #FF0000' }}
                animation={`${glowAnimation} 1s infinite`}
                _focus={{ outline: 'none' }}
                _active={{ transform: 'scale(1.5)' }}
                textColor={"#FF0000"}
                m="auto" fontWeight={"bolder"} 
                disabled={isButtonDisabled} 
                fontSize={{ base: "2xl", md: "3xl" }} fontFamily={"dark_halloween"} width="200px" display={"flex"} colorScheme="transparent" size="lg"
              >
                Predict Death Date
              </Button>
              {isSongPlaying && (
                <audio autoPlay>
                  <source src={CountDown} type="audio/mp3" />
                </audio>
              )}
            </form>
          </Box>
        </Box>

        {futureDate ? (
          <Box
            h={{ base: "35vh", md: "35vh" }} w="100%">
              
            <Text w="100%" textAlign={"center"} fontFamily={"fiendish"} color="white" fontSize={{base:"1rem"}} p={2}>
              Your Death Date 
              <Text  textAlign={"center"} fontFamily={"fiendish"} color="#FF0000" p={{base:"5",md:"3"}} fontSize={{base:"1rem"}}
              animation={{
                     base: `${sinisterGlowing} 1s ease-in-out infinite`,
                    md: `${sinisterGlowing} 1s ease-in-out infinite`
                  }} >{futureDate.toDateString()}</Text>
            </Text>
            <Text w="100%" p={{base:"6",md:"0"}}  textAlign={"center"} fontFamily={"fiendish"} color="red" fontSize={{base:"0.7rem",md:"1rem"}}>
              Countdown
              <Text w="100%" p={{base:"12",md:"5"}}>  {countdown.hours} : {countdown.minutes} : {countdown.seconds} </Text>
              <Text w="100%" 
              animation={{
                 base: `${sinisterGlowing} 1s ease-in-out infinite`,
                 md: `${sinisterGlowing} 1s ease-in-out infinite`
                }}
                 color="#fff" >Time Left to end today</Text>
            </Text>
          </Box>
        ) : (
          <Text  w="100%" textAlign="center" fontFamily="fiendish" color="white" fontSize={{base:"1rem",md:'1.5rem'}}marginTop="24px">
            Please enter your age
          </Text>
        )}
      </Box>
    </>
  )
}

export default DeathDate;