
import React, { useState, useRef, useEffect } from 'react';
import { FaPlay, FaPause, FaStepForward, FaStepBackward } from 'react-icons/fa';
import {
  Box,
  IconButton,
  Slider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
  Flex,
  Divider,
  Text,
  Button,
  keyframes
} from '@chakra-ui/react';
import {
  Grid,
  Center,
  Select,
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


import MusicBg from "../Photo/MusicBg.png";
 

import mix7 from "../autoAudio/mix7.wav";
import asur from '../autoAudio/asur.mp3';
import song1 from '../autoAudio/song1.mp3';
import song3 from '../autoAudio/song3.mp3';
import song4 from "../autoAudio/song4.mp3";
import song5 from "../autoAudio/song5.mp3";
import song6 from "../autoAudio/song6.mp3";


const fetchPokemons = async (pageSize, offset) => {
  return await fetch(
    `https://pokeapi.co/api/v2/pokemon?limit=${pageSize}&offset=${offset}`
  ).then(async (res) => await res.json());
};



const audioSources = [
  'https://play.hubhopper.com/b4a88eee4db21e102da0edef1621c3e7.mp3?s=rss-feed',
  song6,
  song3,
  song5,
  song4,
  asur,
  song1,
  mix7
];

const glowAnimation = keyframes`
  0% { box-shadow: 0 0 0px #E3F2FD; }
  50% { box-shadow: 0 0 0px 5px #E3F2FD; }
  100% { box-shadow: 0 0 0px #B3E5FC; }
`;






// bg images array here.....................................................................

const phoneBGs = [
  {
    url:  "https://cdn.pixabay.com/photo/2017/07/23/05/14/fantasy-2530602_640.jpg",
    alt: 'Phone Image 1',
  },
  {
    url: 'https://cdn.pixabay.com/photo/2018/08/27/10/11/radio-cassette-3634616_640.png',
    alt: 'Phone Image 2',
  },
  {
    url: 'https://cdn.pixabay.com/photo/2016/02/05/13/11/fairy-tale-1180921_640.png',
    alt: 'PC Image 3',
  },
  {
    url: 'https://cdn.pixabay.com/photo/2015/02/04/09/20/skulls-623532_640.jpg',
    alt: 'PC Image 4',
  },
  {
    url: 'https://cdn.pixabay.com/photo/2017/03/09/20/53/microphone-2130806_640.jpg',
    alt: 'PC Image 5',
  },
  {
    url: 'https://images.unsplash.com/photo-1476136236990-838240be4859?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OTF8fGJhbm5lciUyMG11c2ljfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60',
    alt: 'PC Image 6',
  },
  {
    url: 'https://cdn.pixabay.com/photo/2018/03/18/15/26/villa-3237114_640.jpg',
    alt: 'PC Image 7',
  },
  {
    url: 'https://cdn.pixabay.com/photo/2015/03/08/17/25/musician-664432_640.jpg',
    alt: 'PC Image 8',
  },
  {
    url: 'https://cdn.pixabay.com/photo/2020/04/15/14/45/microphone-5046876_640.jpg',
    alt: 'PC Image 9',
  },
  {
    url: 'https://cdn.pixabay.com/photo/2016/07/16/07/10/music-1521116_1280.png',
    alt: 'PC Image 10',
  },
  
];

const pcBGs = [
  {
    url: "https://cdn.pixabay.com/photo/2017/07/23/05/14/fantasy-2530602_640.jpg",
    alt: 'PC Image 1',
  },
  {
    url: 'https://cdn.pixabay.com/photo/2018/08/27/10/11/radio-cassette-3634616_640.png',
    alt: 'PC Image 2',
  },
  {
    url: 'https://cdn.pixabay.com/photo/2016/02/05/13/11/fairy-tale-1180921_640.png',
    alt: 'PC Image 3',
  },
  {
    url: 'https://cdn.pixabay.com/photo/2016/04/19/05/07/turntable-1337986_640.jpg',
    alt: 'PC Image 4',
  },
  {
    url: 'https://cdn.pixabay.com/photo/2016/07/16/07/10/music-1521116_1280.png',
    alt: 'PC Image 5',
  },
  {
    url: 'https://cdn.pixabay.com/photo/2015/03/08/17/25/musician-664432_640.jpg',
    alt: 'PC Image 6',
  },
  {
    url: 'https://cdn.pixabay.com/photo/2017/03/19/18/39/turntable-2157300_640.jpg',
    alt: 'PC Image 7',
  },
  {
    url: 'https://cdn.pixabay.com/photo/2017/03/09/20/53/microphone-2130806_640.jpg',
    alt: 'PC Image 8',
  },
  {
    url: 'https://cdn.pixabay.com/photo/2017/11/15/09/28/music-player-2951399_640.jpg',
    alt: 'PC Image 9',
  },
  {
    url: 'https://images.unsplash.com/photo-1476136236990-838240be4859?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OTF8fGJhbm5lciUyMG11c2ljfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60',
    alt: 'PC Image 10',
  },
 
];














const AudioPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [currentTrack, setCurrentTrack] = useState(0);
  const [playbackSpeed, setPlaybackSpeed] = useState(1);
  const [pokemonsTotal, setPokemonsTotal] = useState(undefined);
  const [phoneBGIndex, setPhoneBGIndex] = useState(0);
  const [pcBGIndex, setPcBGIndex] = useState(0);
  const [clickCount, setClickCount] = useState(1);
  const [pokemons, setPokemons] = useState([]);
  const audioRef = useRef(null);


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

  const handlePlayPause = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };
  const handleNextTrack = () => {
    const nextTrack = (currentTrack + 1) % audioSources.length;
    setCurrentTrack(nextTrack);

    audioRef.current.pause();

    audioRef.current.src = audioSources[nextTrack];
    
    audioRef.current.oncanplaythrough = () => {
      audioRef.current.play();
      setIsPlaying(true);
      audioRef.current.oncanplaythrough = null; 
    };
  };

  const handlePreviousTrack = () => {
    const prevTrack = currentTrack === 0 ? audioSources.length - 1 : currentTrack - 1;
    setCurrentTrack(prevTrack);

    audioRef.current.pause();

    audioRef.current.src = audioSources[prevTrack];
    
    audioRef.current.oncanplaythrough = () => {
      audioRef.current.play();
      setIsPlaying(true);
      audioRef.current.oncanplaythrough = null; 
    };
  };
  const handleTimeUpdate = () => {
    setCurrentTime(audioRef.current.currentTime);
  };

  const handleSliderChange = (value) => {
    audioRef.current.currentTime = value;
    setCurrentTime(value);
  };

  const handlePlaybackSpeedChange = (speed) => {
    setPlaybackSpeed(speed);
    audioRef.current.playbackRate = speed;
  };

  const handleDisableClick = () => {
    setIsDisabled((oldState) => !oldState);
  };

  const handleChangeBG = () => {
    setPhoneBGIndex((prevIndex) => (prevIndex + 1) % phoneBGs.length);
    setPcBGIndex((prevIndex) => (prevIndex + 1) % pcBGs.length);
    setPhoneBGIndex((prevIndex) => (prevIndex + 1) % phoneBGs.length);
    setPcBGIndex((prevIndex) => (prevIndex + 1) % pcBGs.length);

    setClickCount((prevCount) => (prevCount % 10) + 1);
  };
  const phoneBG = phoneBGs[phoneBGIndex].url;
  const pcBG = pcBGs[pcBGIndex].url;

  return (

    <>
    <Box>
      <Box
        m="auto"
        w={{ base: '92%', md: '60%' }}
        mt="2%"
        p={{ base: "3%", md: "3%" }}
        backgroundImage={{
          base: `url(${phoneBG})`,
          md: `url(${pcBG})`,
        }}
        backgroundSize="cover"
        backgroundPosition="center"
        backgroundRepeat="no-repeat"
        borderRadius="md"
      >
        <audio
          ref={audioRef}
          src={audioSources[currentTrack]}
          onTimeUpdate={handleTimeUpdate}
        />

        <Flex  align="center"
        //  border={"1px solid red"}
          w="100%" justify="space-between">
          <IconButton
            aria-label={isPlaying ? 'Pause' : 'Play'}
            icon={isPlaying ? <FaPause /> : <FaPlay />}
            onClick={handlePlayPause}
            mr={{ base: "15px", md: "15px" }}
            color="#FF0000"
            h={{ base: "20px", md: "40px" }}
            bg="transparent"
            _hover={{ boxShadow: '0 0 0.625rem 0.3125rem #FF0000' }}
          />
          <Slider
            value={currentTime}
            max={audioRef.current ? audioRef.current.duration : 0}
            onChange={handleSliderChange}
          >
            <SliderTrack animation={`${glowAnimation} 1s infinite`} bg="black" h="1px">
              <SliderFilledTrack />
            </SliderTrack>
            <SliderThumb bg="#fff" />
          </Slider>
        </Flex>


          {/* next && prev buttons here */}
          <Flex w="100%" h="auto" align="center" justify="space-between" mt="4">
          <IconButton
            aria-label="Previous Track"
            icon={<FaStepBackward />}
            onClick={handlePreviousTrack}
            colorScheme="gray"
            variant="outline"
            border={{base:"none",md:"0.5px solid #FFFFFF"}}
            m={{ base: '0%', md: '3%' }}
            w={{ base: "15%", md: "5.6%" }}  height={{ base: "6vh", md: "6vh" }}
            borderRadius={"50%"}
            color={{base:"#fff",md:"#fff"}}
            fontSize={{ base: '12px', md: '18px' }}
          />
          <IconButton
            aria-label="Next Track"
            icon={<FaStepForward />}
            onClick={handleNextTrack}
            colorScheme="gray"
            variant="outline"
            border={{base:"none",md:"0.5px solid #FFFFFF"}}
            m={{ base: '0%', md: '3%' }}
            w={{ base: "15%", md: "5.6%" }}  height={{ base: "6vh", md: "6vh" }}
            borderRadius={"50%"}
            color={{base:"#fff",md:"#fff"}}
            fontSize={{ base: '12px', md: '18px' }}
          />
        </Flex>



        <Flex align="center" justify="space-between"  mt="20px">
          <Button color="blue" border={{base:"none" ,md:"1px solid transparent"}}  textColor={{base:"#fff",md:"#fff"}} _hover={{ boxShadow: '0 0 0.625rem 0.3125rem #FF0000',transform: 'scale(0.9)' }} borderRadius={"50%"} bg="transparent" w={{ base: "15%", md: "6.7%" }}  height={{ base: "6vh", md: "7vh" }} fontSize={{ base: "10px", md: "14px" }} onClick={() => handlePlaybackSpeedChange(1)}>Normal</Button>
          <Button border={{base:"none" ,md:"1px solid transparent"}} textColor={{base:"#fff",md:"#fff"}} bg="transparent" _hover={{ boxShadow: '0 0 0.625rem 0.3125rem #FF0000',transform: 'scale(0.9)' }}  borderRadius={"50%"} w={{ base: "15%", md: "6.7%" }} height={{ base: "6vh", md: "7vh" }} fontSize={{ base: "12px", md: "14px" }} onClick={() => handlePlaybackSpeedChange(1.5)}>1.5x</Button>
          <Button border={{base:"none" ,md:"1px solid transparent"}} textColor={{base:"#fff",md:"#fff"}} _hover={{ boxShadow: '0 0 0.625rem 0.3125rem #FF0000', transform: 'scale(0.9)' }} bg="transparent"  borderRadius={"50%"} w={{ base: "15%", md: "6.7%" }} height={{ base: "6vh", md: "7vh" }} fontSize={{ base: "12px", md: "14px" }} onClick={() => handlePlaybackSpeedChange(2)}>2x</Button>
          <Text color="#FFFFFF"
            fontSize={{ base: "12px", md: "xl" }} fontWeight={"500"}>{formatTime(currentTime)}</Text>
        </Flex>
        
         

      </Box>
      <Box 
      w={{base:"96%", md: "60%"}}
       h="100px" 
      //  border="1px solid red"
        m="auto" display={"flex"}
        flexDirection={"column"}
         justifyContent={"center"} alignItems={"center"}
         
         >
          <Button  onClick={handleChangeBG}  color="#FF0000" bg="transparent" border="0.5px solid red" _hover={{ boxShadow: '0 0 0.625rem 0.3125rem #FF0000' ,transform: 'scale(0.9)'  }}  w={{base:"20%",md:"10%"}} h="3vh" fontSize={{base:"12px",md:"13px"}} >
            Change UI
          </Button> <Text pt="10px" color="#FFFFFF" fontSize={"14px"}>UI :- <span style={{color:"#FF0000", fontSize:"14px" , fontWeight:"bold"}}>{clickCount}</span> / 10</Text></Box>
      <Box w={{ base: "96%", md: "60%" }} m="auto" h="auto" ><Text textAlign={"left"} mt="20px" mb="20px" color="#fff" fontSize={{ base: "18px", md: "27px" }}>Kya wo sach tha- <span style={{ color: "#FF0000" }}>#heighway ka bhoot</span></Text></Box>
    </Box>


    <Grid
          gap={3}
          mt={20}
          px={{base:"2%",md:"20%"}}
          
          templateColumns="repeat(1, 1fr)"
          templateRows="repeat(1, 1fr)"
        >


          {pokemons?.map(({ name }) => (
            <Text textAlign={"left"} key={name} color="#fff" p={4}>
              #Epi-<span  style={{ color: "#FF0000" }} textAlign={"left"}>{name}</span><Divider/>
            </Text>
          ))}



        </Grid>





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
              {/* <FiArrowLeft fontSize={"lg"} /> */}
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
              {/* <FiArrowRight  fontSize={"lg"}/> */}
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







    </>
  );
};

// Helper function to format time in minutes:seconds
const formatTime = (time) => {
  if (isNaN(time)) return '0:00';
  const minutes = Math.floor(time / 60);
  const seconds = Math.floor(time % 60);
  return `${minutes}:${seconds.toString().padStart(2, '0')}`;
};




export default AudioPlayer;




