
import React, { useEffect, useState } from 'react';
import { Box ,Text,Image,Button,Flex,keyframes,UnorderedList, ListItem,useBreakpointValue  } from "@chakra-ui/react";
import {Divider} from "@chakra-ui/react"
import Navbar from "../Components/Navbar";
import CustomAlert from "../Components/CustomAlert";
import AI from '../Components/AI';
import VideoComponent from '../Components/VideoComponent ';
import Navbar2 from "../Components/Navbar2";
import AudioPlayer from '../Components/AudioPlayer';
import ScareOnClip from '../Components/ScareOnClip';
import ScareOnCard from '../Components/ScareOnCard';
import Footer from "../Components/Footer";



import mix7 from "../autoAudio/mix7.wav";









import Mid2 from "../Photo/Mid2.avif";



import SideNavImg from "../Photo/SideNavImg.png";
import MainNavImg from "../Photo/MainNavImg.png";
import PhoneMenuimg from "../Photo/PhoneMenuimg.jpg";


import P1 from "../Photo/P1.png";
import P2 from "../Photo/P2.jpg";
import P3 from "../Photo/P3.jpg";
import P4 from "../Photo/P4.jpg";
import P5 from "../Photo/P5.avif";
import P6 from "../Photo/P6.avif";
import P7 from "../Photo/P7.png";
import P8 from "../Photo/P8.avif";
import P9 from "../Photo/P9.avif";
import P10 from "../Photo/P10.avif";


import PC1 from "../Photo/PC1.png";
import PC2 from "../Photo/PC2.jpg";
import PC3 from "../Photo/PC3.jpg";
import PC4 from "../Photo/PC4.webp";
import PC5 from "../Photo/PC5.webp";
import PC6 from "../Photo/PC6.avif";
import PC7 from "../Photo/PC7.avif";
import PC8 from "../Photo/PC8.avif";







const Phone_slider = [P1, P2, P3, P4, P5, P6, P7, P8, P9, P10]; // Images for PC
const PC_slider = [PC1, PC2, PC3, PC4, PC5, PC6, PC7, PC8]; // Images for Phones





const slideInFromLeft = keyframes`
  0% {
    transform: translateX(-100%);
    opacity: 0;
  }
  100% {
    transform: translateX(0);
    opacity: 1;
  }
`;



const bounceAnimation = keyframes`
  0%, 100% {
    transform: translateY(0);
  }
  20%, 50%, 80% {
    transform: translateY(+20px);
  }
  40%, 60% {
    transform: translateY(-10px);
  }
`;










const gradient1 = `linear-gradient(to right, #000000, #37474F, #000000)`;
// const gradient2 = `linear-gradient(to right, #191616, #000000, #ea3d31)`;
const gradient2 = `linear-gradient(to right, #000000, #100001, #000000)`;



function Home() {
  const message = [
    '▁▂▃▄▅▆▇ `',
    '▂▁▂▃▄▅▆` ',
    '▃▂▁▂▃▄▅ `',
    '▄▃▂▁▂▃▄` ',
    '▅▄▃▂▁▂▃ `',
    '▆▅▄▃▂▁▂` ',
    '▇▆▅▄▃▂▁ `',
    '▆▇▆▅▄▃▂` ',
    '▅▆▇▆▅▄▃ `',
    '▄▅▆▇▆▅▄` ',
    '▃▄▅▆▇▆▅ `',
    '▂▃▄▅▆▇▆` ',
  ];



  const flexDirection = useBreakpointValue({ base: 'column', md: 'row' });

  // all useState Hooks here.


  const [index, setIndex] = useState(0);
  const [showAlert, setShowAlert] = useState(true);
  const [currentImageIndex1, setCurrentImageIndex1] = useState(0);
  const [currentImageIndex2, setCurrentImageIndex2] = useState(0);




  






  useEffect(() => {
    document.title = message[index];
  }, [index]);

  useEffect(() => {
    
    setShowAlert(true);

    const intervalId = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % message.length);
    }, 200);

    // Clear interval on component unmount
    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    const hideAlertTimeout = setTimeout(() => {
      setShowAlert(false);
    }, 10000);

    return () => clearTimeout(hideAlertTimeout);
  }, [showAlert]); 
  const handleCloseAlert = () => {
    setShowAlert(false);
  };


// slider Part starting from here.------------------------->>>


useEffect(() => {
  const interval1 = setInterval(() => {
    setCurrentImageIndex1((prevIndex) => (prevIndex + 1) % Phone_slider.length);
  }, 2500);

  const interval2 = setInterval(() => {
    setCurrentImageIndex2((prevIndex) => (prevIndex + 1) % PC_slider.length);
  }, 2500);

  return () => {
    clearInterval(interval1);
    clearInterval(interval2);
  };
}, []);






  return (
    <>


    {/* importing Navbar & Navbar2 here------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- */}




      <Navbar />
      <Navbar2 />



        {/* Banner Slider Starts here------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- */}


      <Box h={{ base: "70vh", md: "100vh" }} w="100%" bg={gradient1} >
      {showAlert && <CustomAlert message={message[index]} />}
        <Box
          backgroundImage={{ base: `url(${Phone_slider[currentImageIndex1]})`, md: `url(${PC_slider[currentImageIndex2]})` }}
          backgroundSize="cover"
          backgroundPosition="center"
          backgroundRepeat="no-repeat"
          width={{ base: "90%", md: "85%" }}
          height={{ base: "100%", md: "100%" }}
          m="auto"
          display="flex"
          justifyContent="center"
          alignItems="center"
          // border="2px solid cyan"
        >
         
          <CustomAlert isOpen={showAlert} onClose={handleCloseAlert} />
        </Box>

        </Box>
       



       {/* NavBar instructions part starts here -----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------*/}
        


        <Box
        //  border="2px solid red" 
         w="100%"
         h="auto"
         pt={{base:"50px",md:"70px"}}
         bg="#000000"
        >

          <Text fontFamily={"Hell"} color="#FFFFFF" textAlign={"center"} fontSize={{base:"3xl",md:"5xl"}}>"Explore via":<span style={{ color: "#FF0000" }} >Navbar</span></Text>
          
          <UnorderedList 
          // border="1px solid red"
           w={{base:"90%" ,md:"95%"}} m='auto'
          
          >


            <Text  fontFamily={"just-die-already"} fontSize={{base:"12px",md:"25px"}} color="yellow.500">"Unlock Our World: Navigating the Journey via Navbar!</Text>

            <Text pt="10px" pb="10px" fontFamily={"just-die-already"} textAlign={"justify"} fontSize={{base:"8px",md:"17px"}} color="#fff">Embark on an effortless exploration of our site through the intuitive navbar, whether you're on your phone or PC. Here's your guide to seamless navigation:</Text>
            
            
            
            

            <ListItem pt="15px" pb="15px" fontFamily={"just-die-already"} textAlign={"justify"} fontWeight={"bolder"} fontSize={{base:"18px",md:"27px"}} color="#FF0000">Main Nav: // PC</ListItem>
            <Text pt="10px" pb="10px" fontFamily={"just-die-already"} textAlign={"justify"} fontWeight={"bolder"} fontSize={{base:"10px",md:"17px"}} color="#FFFFFF"><span style={{ color: "#FF0000" }}>1. Navigation Bar: </span>  Find the navigation bar at the top of the screen. It showcases all the key sections neatly.</Text>
            <Text pt="10px" pb="10px" fontFamily={"just-die-already"} textAlign={"justify"} fontWeight={"bolder"} fontSize={{base:"10px",md:"17px"}} color="#FFFFFF"><span style={{ color: "#FF0000" }}>2. Hover & Reveal: </span>  Hover your cursor over each link to reveal a dropdown menu, presenting sub-sections and more.</Text>
            <Text pt="10px" pb="10px" fontFamily={"just-die-already"} textAlign={"justify"} fontWeight={"bolder"} fontSize={{base:"10px",md:"17px"}} color="#FFFFFF"><span style={{ color: "#FF0000" }}>3. Direct Access: </span>  Click on the links to access the pages directly. Whether it's 'Blog,' 'Gallery,' or any other exciting destination, the navbar is your shortcut.</Text>
            <Box mt="15px" mb="15px" w={{base:"100%",md:"90%"}} h={{base:"35px",md:"50px"}} ><Image  w="100%" h="100%" src={MainNavImg} alt="reference img..." /></Box>
            <Text pt="10px" pb="10px" fontFamily={"just-die-already"} textAlign={"justify"} fontWeight={"bolder"} fontSize={{base:"10px",md:"17px"}} color="#FFFFFF">Navigate with ease and discover our captivating content. Each click opens a new door to exciting adventures. Happy exploring!"</Text>

            
            
            
            
            
            <ListItem fontFamily={"just-die-already"} textAlign={"justify"} fontWeight={"bolder"} fontSize={{base:"18px",md:"27px"}} color="#FF0000">For Phones:</ListItem>
            <Text pt="10px" pb="10px" fontFamily={"just-die-already"} textAlign={"justify"} fontWeight={"bolder"} fontSize={{base:"10px",md:"17px"}} color="#FFFFFF"><span style={{ color: "#FF0000" }}>1. Menu Icon: </span> Locate the menu icon (usually three horizontal lines or dots) at the top corner. Tap it to unveil a world of options.</Text>
            <Text pb="10px" fontFamily={"just-die-already"} textAlign={"justify"} fontWeight={"bolder"} fontSize={{base:"10px",md:"17px"}} color="yellow.500">Reffer image.....</Text>
            <Box w={{base:"70%",md:"35%"}} h={{base:"220px",md:"400px"}} ><Image  w="100%" h="100%" src={PhoneMenuimg} alt="reference img..." /></Box>
            <Text pt="15px" pb="10px" fontFamily={"just-die-already"} textAlign={"justify"} fontWeight={"bolder"} fontSize={{base:"10px",md:"17px"}} color="#FFFFFF"><span style={{ color: "#FF0000" }}>2. Explore Sections: </span> Dive into different sections by tapping the relevant links. From 'Home' to 'Features' and beyond, each link is a gateway to a unique experience.</Text>
            <Text pt="15px" pb="10px" fontFamily={"just-die-already"} textAlign={"justify"} fontWeight={"bolder"} fontSize={{base:"10px",md:"17px"}} color="#FFFFFF"><span style={{ color: "#FF0000" }}>3. Scroll Smoothly:  </span>  Scroll through pages with a simple swipe, effortlessly enjoying the content we have to offer.</Text>






            <ListItem pt="15px" pb="15px" fontFamily={"just-die-already"} textAlign={"justify"} fontWeight={"bolder"} fontSize={{base:"18px",md:"27px"}} color="#FF0000">Side Nav:</ListItem>
            <Text pt="10px" pb="10px" fontFamily={"just-die-already"} textAlign={"justify"} fontWeight={"bolder"} fontSize={{base:"10px",md:"17px"}} color="#FFFFFF"><span style={{ color: "#FF0000" }}>1. Left Arroe Icon: </span> Locate the left arrow icon at the right mid edge. Tap it to open subnav it will help you all to identify our depth.</Text>
            <Box mt="15px" mb="15px" w={{base:"45%",md:"15%"}} h={{base:"150px",md:"200px"}} ><Image  w="100%" h="100%" src={SideNavImg} alt="reference img..." /></Box>
            <Text pb="10px" fontFamily={"just-die-already"} textAlign={"justify"} fontWeight={"bolder"} fontSize={{base:"10px",md:"17px"}} color="yellow.500">Explore areas.....</Text>
            <ListItem fontFamily={"just-die-already"} textAlign={"justify"} fontWeight={"bolder"} fontSize={{base:"10px",md:"17px"}} color="#FF0000">Stories :</ListItem>
            <ListItem fontFamily={"just-die-already"} textAlign={"justify"} fontWeight={"bolder"} fontSize={{base:"10px",md:"17px"}} color="#FF0000">Dark Web :</ListItem>
            <ListItem fontFamily={"just-die-already"} textAlign={"justify"} fontWeight={"bolder"} fontSize={{base:"10px",md:"17px"}} color="#FF0000">PodCast "</ListItem>
            <ListItem fontFamily={"just-die-already"} textAlign={"justify"} fontWeight={"bolder"} fontSize={{base:"10px",md:"17px"}} color="#FF0000">Share on Club :</ListItem>
            <ListItem fontFamily={"just-die-already"} textAlign={"justify"} fontWeight={"bolder"} fontSize={{base:"10px",md:"17px"}} color="#FF0000">Dark Web Premium Zone :<span style={{ color: "#26A69A" }}>(18+ only)</span></ListItem>
          

          </UnorderedList>


        </Box>




          {/* NavBar instructions part ends here --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------*/}






        {/* Haunted images algo part starting here------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------->>>>>>>>>>>>>> */}

       
   



        <Box w="100%" h="180px" bg="#000000" >
        <Divider w="100%" animation={`${slideInFromLeft} 3.5s ease-in-out infinite alternate`} borderColor={"#fff"}/>
          <Text pt="25px" pb="25px" fontFamily={"fiendish"} textAlign={"center"} color="#FF0000" fontSize={{base:"2xl",md:"5xl"}}>HAUNTED PLACES</Text>
          <Divider w="100%" animation={`${slideInFromLeft} 2.2s ease-in-out infinite alternate`} borderColor={"#fff"}/>
          <Text pt="10px" w={{base:"90%",md:"67%"}} m="auto" fontFamily={"living-by-numbers"} textAlign={{base:"justify",md:"center"}} color="#fff" fontSize={{base:"1.1rem",md:"1.6rem"}}>
          We use state-of-the-art deep learning algorithms to learn how haunted houses, or toxic cities look like.
           Then we apply the skills style to famous landmarks and present you: AI-powered horror all over the world!
           </Text>
           
        </Box>


      

       

          {/* AI Component Importing  here ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------*/}

        
        <Box w="100%" h={"auto"} bg={gradient2} ><AI /><Divider animation={`${slideInFromLeft} 3.5s ease-in-out infinite alternate`} w="100%" borderColor={"#fff"}/></Box>   


          {/* AI generated Images slider ends here------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------*/}
        





        {/* Horror stories section starting here -----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------*/}

        <Box 
        w="100%" h="auto" m="auto" 
        bg={gradient2}
      //   backgroundImage={`url(${Mid4})`}
      // backgroundSize="cover"
      // backgroundPosition="center"
      // backgroundRepeat="no-repeat"
        //  border="2px solid red"
         >

          <Text fontFamily={"Hell"} color="#FF0000" textAlign={"center"} fontSize={{base:"5xl",md:"8xl"}}>"Eerie Videos"
          <Divider w="100%" animation={`${slideInFromLeft} 2.2s ease-in-out infinite alternate`} borderColor={"#fff"}/>
        </Text>

        <Box w="100%" mt="25px"  mb="25px" h="auto"
        //  border="2px solid red"
         >
          <Box
           w={{base:"95%",md:"95%"}} 
           m="auto"  h={{base:"auto",md:"auto"}} 
           border="0.5px solid #81D4FA" 
           bg={"#"} animation={`${bounceAnimation} 7s infinite`} 
           borderRadius={"md"} 
           >

            <Text textAlign={"justify"} textColor={"#fff"} fontFamily={"just-die-already"} fontSize={{base:"12px",md:"25px"}}>
             <span style={{ color: "#FF0000" }}>Dare to Visit: </span>Are you up for an adventure? Explore the world of scares and 
             mysteries at "Dare to Visit." Discover eerie stories and puzzling secrets that will intrigue you. If you're feeling 
             courageous, click "More" to dive deeper. Get ready for a special, spine-tingling experience designed just for the brave
             . We want to make the thrills even more exciting, giving you a taste of something extraordinary. Remember, real fear comes
              from within – only on "Dare to Visit." Are you prepared to begin?
            </Text>
           </Box>
        </Box>

          {/* Importing vdeo component here-------------------------------------------------------------------------------------------------------------------------------------------------------------------*/}

          <VideoComponent />

          {/* video component ends here ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------*/}
        
          </Box>



          {/* Podcast audio payer part startinbg here -------------------------------------------------------------------------------------------------------------------------------------------------------------------------*/}

          <Box
           w="100%" h={{base:"60vh",md:"100vh"}}
          
            // bg={gradient2}
            backgroundImage={`url(${Mid2})`}
            backgroundSize="cover"
            backgroundPosition="center"
            backgroundRepeat="no-repeat"
              //  border="2px solid red"
          >
            <Divider animation={`${slideInFromLeft} 3.5s ease-in-out infinite alternate`} w="100%" borderColor={"#fff"}/>
          <Text fontFamily={"Hell"} color="#FF0000" textAlign={"center"} fontSize={{base:"5xl",md:"8xl"}}>"Spooky Pod"
          <Divider w="100%" animation={`${slideInFromLeft} 2.2s ease-in-out infinite alternate`} borderColor={"#fff"}/>
          </Text>
         {/* importing audioPlayer component here */}
        <AudioPlayer audioSource="https://play.hubhopper.com/b4a88eee4db21e102da0edef1621c3e7.mp3?s=rss-feed" />
    
          </Box>

          {/* Podcast audio payer part ending here -------------------------------------------------------------------------------------------------------------------------------------------------------------------------*/}





          {/* importing Scare on audio player here --------------------------------------------------------------------------------------------------------------------------- */}

          <Divider animation={`${slideInFromLeft} 3.5s ease-in-out infinite alternate`} w="100%" borderColor={"#fff"}/>
          <Text  bg={gradient2} fontFamily={"Hell"} color="#FF0000" textAlign={"center"} fontSize={{base:"3xl",md:"6xl"}}>"What our users share"
          <Divider w="100%" animation={`${slideInFromLeft} 2.2s ease-in-out infinite alternate`} borderColor={"#fff"}/>
        </Text>


        

        <Flex h="auto" direction={flexDirection} 
         bg={gradient2} 
          // border="2px solid red"
        >
      <Box pt={{base:"5%",md:"10%"}} w={{base:"100%",md:"60%"}} >
        <ScareOnClip  audioSource={mix7} />
      </Box>
      <Box pt={{base:"5%",md:"1%"}} display="flex" justifyContent={"center"}  alignItems={"center"} m="auto" w={{base:"90%",md:"40%"}}>
        <ScareOnCard />
      </Box>
    </Flex>

       {/* Ending Scare on audio player here --------------------------------------------------------------------------------------------------------------------------- */}


        {/* <ScareOnCard/> */}



        {/* importing ScareonCard  component here----------------------------------------------------------------------------------------------------------------------------------------------------*/}








      <Divider/>
      <Footer/>

     
    </>
  );
}

export default Home;