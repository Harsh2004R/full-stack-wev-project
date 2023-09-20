import React,{useState,useEffect} from 'react';
import {Box,Button,Text,Flex,Grid,Image,keyframes,Divider } from '@chakra-ui/react';
import { Navigate, useNavigate } from 'react-router-dom';
import NavBar from "../Components/Navbar";
import Navbar2 from "../Components/Navbar2";
import ArticleList from "../Components/ArticleList";
import DWbg1 from "../Photo/DWbg1.webp";
import DWbg2 from "../Photo/DWbg2.webp";
import CustomAlert2 from '../Components/CustomAlert2';
import DWintro1 from "../Videos/DWintro1.mp4";
import DWintro2 from "../Videos/DWintro2.mp4";
import DWthumbnail1 from "../Photo/DWthumbnail1.png";
import DWthumbnail2 from "../Photo/DWthumbnail2.png";
import DWgameofwex from "../Photo/DWgameofwex.jpg";
import DWsprit from "../Photo/DWsprit.png";


import Footer from "../Components/Footer";
import YY1 from "../Photo/YY1.png";
import YY2 from "../Photo/YY2.png";
import YY3 from "../Photo/YY3.png";
import YY4 from "../Photo/YY4.png";
import YY5 from "../Photo/YY5.png";
import YY6 from "../Photo/YY6.png";
import YY7 from "../Photo/YY7.png";
import YY8 from "../Photo/YY8.png";



import DWimg1 from "../Photo/DWimg1.webp";


const handle_yyyyyyy = ()=>{
  const yyyyyyy="https://yyyyyyy.info/"
  window.location.href = yyyyyyy;
}
const yyyyyyy_info = ()=>{
  const info="https://www.reddit.com/r/RBI/comments/mtbowe/information_about_wwwyyyyyyyinfo_a_very_strange/"
  window.location.href = info;
}

const slide1 = [
  YY1,YY2,YY3,YY4
]
const slide2 = [
  YY5,YY6,YY7,YY8
]




  

const glowAnimation = keyframes`
0% { box-shadow: 0 0 0px #000000; }
50% { box-shadow: 0 0 30px 15px #000000; }
100% { box-shadow: 0 0 0px #000000; }
`;

const shadow = keyframes`
  0% {
    text-shadow: 15px 15px 15px #4FC3F7;
    text-shadow: #4FC3F7;
  }
  50% {
    text-shadow: 10px 10px 10px #FF0000;
  }
  100% {
    text-shadow: #4FC3F7;
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
const typewriter = keyframes`
  from {
    width: 30%;
  }
  to {
    width: 100%;
  }
`;




const gradient = `linear-gradient(to right ,#000000, #80D8FF, #000000)`;
const gradient_x = `linear-gradient(to right ,#000000, #000000, #000000)`;
const gradient_xx = `linear-gradient(to right ,#000000, #7D1616, #000000)`;



function DarkWeb() {
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

  const [index, setIndex] = useState(0);
  const [showAlert, setShowAlert] = useState(true);
  const handleDarkWebPaypage = ()=>{
    Navigate("/darkwebpay")
  }

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




  // image logic slide1 ===

  const [currentImageIndex1, setCurrentImageIndex1] = useState(0);



  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex1((prevIndex) => (prevIndex + 1) % slide1.length);
    }, 1500);

    return () => clearInterval(interval);
  }, []);




  // image logic slide1 end===
  // image logic slide2 ===

  const [currentImageIndex2, setCurrentImageIndex2] = useState(0);



  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex2((prevIndex) => (prevIndex + 1) % slide2.length);
    }, 1500);

    return () => clearInterval(interval);
  }, []);




  // image logic slide2 end===

  const Navigate = useNavigate();
  return (
    <>




{/* Importing Navbar & Navbar2 here */}





    <NavBar/>
    <Navbar2 />







    <Box 
        w="100%" h="100vh"
        // border="2px solid red"
        display={"flex"}
        flexDirection={{ base: "column", md: "row" }}
     >


        <Box  w={{base:"100%",md:"50%"}} h={{base:"60vh",md:"100vh"}}
            // border="1px solid #fff"
            bg={gradient}
            display={{base:"flex",md:""}}
            justifyContent="center"
            alignItems="center"
            flexDirection={{ base: "column", md: "column" }}
        >
            <Box 
            m="5px"
            w={{base:"75%",md:"70%"}} h={{base:"30vh",md:"43vh"}}
            // border="1px solid #fff"
            backgroundImage={`url(${DWbg1})`}
          backgroundSize="cover"
          backgroundPosition="center"
          backgroundRepeat="no-repeat"
            >
                
                
                
            </Box>

            <Box 
            m="5px"
            w={{base:"75%",md:"70%"}} h={{base:"30vh",md:"43vh"}}
            // border="1px solid #fff"
            backgroundImage={`url(${DWbg2})`}
            backgroundSize="cover"
            backgroundPosition="center"
            backgroundRepeat="no-repeat"
              >
                
                
                
            </Box>

        </Box>

        <Box  w={{base:"100%",md:"50%"}}  h={{base:"50vh",md:"100vh"}}
            // border="1px solid #fff"
            bg={gradient} 
            display={{base:"flex",md:"flex"}}
            justifyContent="center"
            alignItems="center"
        >
          <CustomAlert2 isOpen={showAlert} onClose={handleCloseAlert} />
            <Text fontFamily={"fiendish"} 
            fontSize={{base:"3xl",md:"4xl"}} 
            textAlign={"center"}
            animation={{base:`${typewriter} 4s steps(80) 1s infinite both`,md:`${typewriter} 4s steps(80) 1s infinite both`}}
            >Continue in darkweb...</Text>

        </Box>


    </Box>

    <Box>
    {showAlert && <CustomAlert2 message={message[index]} />}
    </Box>




      {/*   ## ---------->  Dark web video part starting here  <----------  ##*/}




      <Box bg={gradient_x}>

      
      <Text textAlign={"center"} color="red.600" fontSize={{base:"4xl",md:"5xl"}} fontFamily={"sectar"} h={{base:"80px",md:"100px"}} 
       display="flex"
       justifyContent="center"
       alignItems="center"
      >

        The RED Rooms
      </Text>


      </Box>
     <Box w={{base:"100%",md:"100%"}} h={{base:"10vh",md:"12vh"}} bg={gradient_xx} >
      <Text w={{base:"100%",md:"70%"}} fontFamily="dogica-lite"  m="auto" pt="15px"   textAlign={{base:"justify",md:"center"}} color={"#69F0AE"} fontSize={{base:"0.47rem",md:"0.8rem"}}>

        A room where people are tortured and murdered for an audience of viewers via the
         Dark Web, the viewers sometimes voting or bidding on the form of torture to be performed.
         Here are some clip and videos from darkweb.
        </Text>
        </Box>
      <Box 
      w="100%" h = {{base:"85vh",md:"90vh"}} 
      // border="2px solid teal"
      bg={gradient_xx}
      p={{base:"5",md:"10"}}
      display="flex" 
      justifyContent="space-evenly" 
      alignItems="center" 
      flexDirection={{base:"column",md:"row"}}
      
      >
       



      <Box
        w={{ base: "100%", md: "45%" }} 
        h={{base:"35vh",md:"70vh"}}
        bg={gradient_xx}
      >
        <video
          src={DWintro2}
          style={{ width: "100%", height: "100%" }} 
          controls
          poster = {DWthumbnail1}
        />
      </Box>

      {/* Video 2 */}
      <Box
        w={{ base: "100%", md: "45%" }} 
        h={{base:"35vh",md:"70vh"}} 
        bg={gradient_xx}
      >
        <video
          src={DWintro1}
          style={{ width: "100%", height: "100%" }}
          controls 
          poster = {DWthumbnail2}
        />
      </Box>


      </Box>


     <Box w="100%" bg={gradient_xx} h={{base:"24vh",md:"21vh"}}
      // border="2px solid cyan"
       > 
      
      <Text color="#69F0AE" fontFamily="dogica-lite" w={{base:"100%",md:"85%"}} m="auto" textAlign={"justify"} fontSize={{base:"0.47rem",md:"0.8rem"}} >
      
      
      The internet is such a multifaceted invention that most of us only ever scratch the surface of its potential. 
      The “surface web” is where most internet users spend their time; websites like Amazon, Google, Wikipedia,
       and YouTube are accessible. However, the surface web contains about 4 to 5% of the internet’s content. 
       The remaining 95 to 96% of the internet is split between the “deep web” and the “dark web”. Databases, academic archives,
        and federal documents comprise the deep web – it’s a realm of mostly inaccessible data that keeps the surface web up and running
        . The dark web, however, truly lives up to its name.
      
      
      </Text>
      </Box>







{/* REality of dark web starts here----------------------------------------------------------------------- */}






      <Box 
        w="100%" h="100vh"
        // border="2px solid red"
        display={"flex"}
        flexDirection={{ base: "column", md: "row" }}
     >
        <Box  w={{base:"100%",md:"50%"}}  h={{base:"50vh",md:"100vh"}}
            // border="1px solid #fff"
            bg={gradient} 
            display={{base:"flex",md:"flex"}}
            justifyContent="center"
            alignItems="center"
        >
         
            <Text fontFamily={"fiendish"} 
            fontSize={{base:"3xl",md:"4xl"}} 
            textAlign={"center"}
            animation={{base:`${typewriter} 4s steps(80) 1s infinite both`,md:`${typewriter} 4s steps(80) 1s infinite both`}}
            >Reality of darkweb...</Text>

        </Box>

        <Box  w={{base:"100%",md:"50%"}} h={{base:"60vh",md:"100vh"}}
            // border="1px solid #fff"
            bg={gradient}
            display={{base:"flex",md:""}}
            justifyContent="center"
            alignItems="center"
            flexDirection={{ base: "column", md: "column" }}
        >
            <Box 
            m="5px"
            w={{base:"75%",md:"70%"}} h={{base:"30vh",md:"43vh"}}
            // border="1px solid #fff"
            backgroundImage={`url(${DWgameofwex})`}
          backgroundSize="cover"
          backgroundPosition="center"
          backgroundRepeat="no-repeat"
            >
                
                
                
            </Box>

            <Box 
            m="5px"
            w={{base:"75%",md:"70%"}} h={{base:"30vh",md:"43vh"}}
            // border="1px solid #fff"
            backgroundImage={`url(${DWsprit})`}
            backgroundSize="cover"
            backgroundPosition="center"
            backgroundRepeat="no-repeat"
              >
                
                
                
            </Box>

        </Box>

        


    </Box>


      {/* <Slider starting here........................................................... */}



        <Box w="100%" h="auto"  bg={gradient_xx}
        // border={"2px solid cyan"}
        >
            <Text textAlign={"center"} bg={gradient_x} color="red.600" fontSize={{base:"3xl",md:"5xl"}}    display="flex"
  justifyContent="center"
  alignItems="center" fontFamily={"another_danger"} h={{base:"80px",md:"100px"}} >Surface Web Glitch</Text>
            <Text color="#69F0AE"  fontFamily="dogica-lite" w={{base:"100%",md:"100%"}} pt="10px" m="auto"  textAlign={{base:"justify",md:"justify"}}  fontSize={{base:"0.47rem",md:"0.9rem"}}>
              (WARNING FOR PEOPLE WITH PHOTOSENSITIVE EPILEPSY) This site is a bizarre assault of flashing gifs, sounds,
               and comic sans text - all poorly formatted and seemingly random - that changes every time you refresh the page.
                It's a disaster area. Any sense I try to prescribe to it seems futile. But since everybody here watches Idea 
                Channel, which is pretty much the poster child for finding meaning in seemingly meaningless things, I figured 
                some of you might wanna help me make something of it. What are all your thoughts?The identify of the website 
                owner has been hidden. This may be done for a valid reason as spammers use this information to email website 
                owners. Unfortunately is also makes identification of the owner difficult. We prefer if the website does show 
                his true identity.</Text>
               <Box w="100%"  h ="12vh" p={{base:"5",md:"5"}}> 
               <Button 
               w="200px"
                bg="transparent"
                color="#B0BEC5"
                fontFamily="another_danger"
                _hover={{ boxShadow: '0 0 30px 5px #FF0000' }}
                animation={`${glowAnimation} 1s infinite`}
                _focus={{ outline: 'none' }}
                _active={{ transform: 'scale(1.5)' }}
                  textAlign={"center"} 
                  display="block"
                  onClick={handle_yyyyyyy}
                 
                   m="auto">
                Explore</Button>
               </Box>

        </Box>



      <Box bg="black" w="100%" h={{base:"72vh",md:"70vh"}} 
        // border="2px solid red"
       display="flex" flexDirection={{base:"column",md:"row"}}>
      <Box  w={{base:"100%",md:"48%"}} h={{base:"32vh",md:"61vh"}} margin={"auto"} 
      // border="3px solid lime"
      >
        <Image w="90%" h={{base:"31vh",md:"60vh"}} margin={"auto"} onClick={handle_yyyyyyy} src={slide1[currentImageIndex1]} alt={`Image ${currentImageIndex1}`} />
      </Box>
      
      <Box  w={{base:"100%",md:"48%"}} margin={"auto"} h={{base:"32vh",md:"61vh"}} 
      // border="4px solid lime"
      >
        <Image w="90%" h={{base:"31vh",md:"60vh"}} margin={"auto"} onClick={handle_yyyyyyy}  src={slide2[currentImageIndex2]} alt={`Image ${currentImageIndex2}`} />
      </Box>

      </Box>

      <Box bg={gradient_xx} w="100%" h ="auto" p={{base:"5",md:"10"}}>
        <Button
        
        w="200px"
                bg="transparent"
                color="#B0BEC5"
                fontFamily="another_danger"
                _hover={{ boxShadow: '0 0 30px 5px #FF0000' }}
                animation={`${glowAnimation} 1s infinite`}
                _focus={{ outline: 'none' }}
                _active={{ transform: 'scale(1.5)' }}
                  textAlign={"center"} 
                  display="block"
                  onClick={yyyyyyy_info}
                   m="auto">
                Want more?


        </Button>
      </Box>


{/* darkj web content starts here */}

    <Divider/>
      <Box
       w="100%"  h="15vh" 
      //  border="2px solid cyan"
       bg="#000000"
       display="flex"
       justifyContent="center"
       alignItems="center"
       >
        <Text textAlign="center" color="#fff" fontFamily={"just-die-already"} animation={{base:`${shadow} 2s infinite`,md:`$${shadow} 2s infinite`}}  fontSize={{base:"16px" ,md:"45px"}}>"Delving Deeper: Dark Web Insights"</Text>
      </Box>

      <Box
       w="100%" h="auto" 
      //  border="2px solid cyan"
       bg="#000000"
       >


{/* video2 here */}


      <Divider />

      <Box display="flex" flexDirection={{base:"column",md:"row"}} justifyContent={"space-evenly"} w="100%"   h={{base:"40vh",md:"50vh"}} >

      <Box border="2px solid red" w={{base:"100%",md:"50%"}} borderRadius={"8px"} h={{base:"30vh",md:"48vh"}} > <iframe
          width={"100%"}
          height="100%"
          borderRadius="18px"
          src="https://www.youtube.com/embed/L0yvNT9DGi0" // YouTube video's embed URL
          frameborder="0"
          allowfullscreen
        ></iframe></Box>
      

       <Box w={{base:"100%",md:"40%"}}  color="#FFFFFF">  <Text fontSize={{base:"16px",md:"35px"}} fontFamily={"my"} >THIS DARK WEB VIDEO GOT LEAKED ON THE SURFACE WEB</Text> 
       <Divider/>
       </Box>
      </Box>


      <Divider />

<Box display="flex" flexDirection={{base:"column",md:"row"}} justifyContent={"space-evenly"} w="100%"   h={{base:"40vh",md:"50vh"}} >

<Box border="2px solid red" w={{base:"100%",md:"50%"}} borderRadius={"8px"} h={{base:"30vh",md:"48vh"}} > <iframe
    width={"100%"}
    height="100%"
    borderRadius="18px"
    src="https://www.youtube.com/embed/1R5bt_jkyIQ" // YouTube video's embed URL
    frameborder="0"
    allowfullscreen
  ></iframe></Box>


 <Box w={{base:"100%",md:"40%"}}  color="#FFFFFF"> <Text fontFamily={"my"} fontSize={{base:"16px",md:"35px"}} >REAL VIDEOS FOUND ON THE DARK WEB PART 2</Text> 
 <Divider/>
 </Box>
</Box>

<Divider />

      <Box display="flex" flexDirection={{base:"column",md:"row"}} justifyContent={"space-evenly"} w="100%"   h={{base:"40vh",md:"50vh"}} >

      <Box border="2px solid red" w={{base:"100%",md:"50%"}} borderRadius={"8px"} h={{base:"30vh",md:"48vh"}} > <iframe
          width={"100%"}
          height="100%"
          borderRadius="18px"
          src="https://www.youtube.com/embed/9W6QT22qvKw" // YouTube video's embed URL
          frameborder="0"
          allowfullscreen
          autoplay="1"
        ></iframe></Box>
      

       <Box w={{base:"100%",md:"40%"}}  color="#FFFFFF"> <Text fontFamily={"my"} fontSize={{base:"16px",md:"35px"}} >Man Finds Creepy Videos On The Dark Web Unfriended Dark Web Fear</Text> 
       <Divider/>
       </Box>
      </Box>



      <Divider />

<Box display="flex" flexDirection={{base:"column",md:"row"}} justifyContent={"space-evenly"} w="100%"   h={{base:"40vh",md:"50vh"}} >

<Box border="2px solid red" w={{base:"100%",md:"50%"}} borderRadius={"8px"} h={{base:"30vh",md:"48vh"}} > <iframe
    width={"100%"}
    height="100%"
    borderRadius="18px"
    src="https://www.youtube.com/embed/nNUEvFiZvV8" // YouTube video's embed URL
    frameborder="0"
    allowfullscreen
  ></iframe></Box>


 <Box w={{base:"100%",md:"40%"}}  color="#FFFFFF"> <Text fontFamily={"my"} fontSize={{base:"16px",md:"35px"}} >What S The Dark Web Really Like</Text> 
 <Divider/>
 </Box>
</Box>




<Divider />

      <Box display="flex" flexDirection={{base:"column",md:"row"}} justifyContent={"space-evenly"} w="100%"   h={{base:"40vh",md:"50vh"}} >

      <Box border="2px solid red" w={{base:"100%",md:"50%"}} borderRadius={"8px"} h={{base:"30vh",md:"48vh"}} > <iframe
          width={"100%"}
          height="100%"
          borderRadius="18px"
          src="https://www.youtube.com/embed/pSfqOHgb5BI" // YouTube video's embed URL
          frameborder="0"
          allowfullscreen
        ></iframe></Box>
      

       <Box w={{base:"100%",md:"40%"}}  color="#FFFFFF"> <Text fontFamily={"my"} fontSize={{base:"16px",md:"35px"}} >REAL VIDEOS FOUND ON THE DARK WEB PART 1</Text> 
       <Divider/>
       </Box>
      </Box>





      <Divider />

<Box display="flex" flexDirection={{base:"column",md:"row"}} justifyContent={"space-evenly"} w="100%"   h={{base:"40vh",md:"50vh"}} >

<Box border="2px solid red" w={{base:"100%",md:"50%"}} borderRadius={"8px"} h={{base:"30vh",md:"48vh"}} > <iframe
    width={"100%"}
    height="100%"
    borderRadius="18px"
    src="https://www.youtube.com/embed/1Omw9VOViXQ" // YouTube video's embed URL
    frameborder="0"
    allowfullscreen
  ></iframe></Box>


 <Box w={{base:"100%",md:"40%"}}  color="#FFFFFF"> <Text fontFamily={"my"} fontSize={{base:"16px",md:"35px"}} >What Is Dark Web Shorts Simplilearn</Text> 
 <Divider/>
 </Box>
</Box>





<Divider />

      <Box display="flex" flexDirection={{base:"column",md:"row"}} justifyContent={"space-evenly"} w="100%"   h={{base:"40vh",md:"50vh"}} >

      <Box border="2px solid red" w={{base:"100%",md:"50%"}} borderRadius={"8px"} h={{base:"30vh",md:"48vh"}} > <iframe
          width={"100%"}
          height="100%"
          borderRadius="18px"
          src="https://www.youtube.com/embed/hwNnhIHtUtQ" // YouTube video's embed URL
          frameborder="0"
          allowfullscreen
        ></iframe></Box>
      

       <Box w={{base:"100%",md:"40%"}}  color="#FFFFFF"> <Text fontFamily={"my"} fontSize={{base:"16px",md:"35px"}} >This Happens On Dark Web</Text> 
       <Divider/>
       </Box>
      </Box>





      <Divider />

<Box display="flex" flexDirection={{base:"column",md:"row"}} justifyContent={"space-evenly"} w="100%"   h={{base:"40vh",md:"50vh"}} >

<Box border="2px solid red" w={{base:"100%",md:"50%"}} borderRadius={"8px"} h={{base:"30vh",md:"48vh"}} > <iframe
    width={"100%"}
    height="100%"
    borderRadius="18px"
    src="https://www.youtube.com/embed/IfJjsFOYAQA" // YouTube video's embed URL
    frameborder="0"
    allowfullscreen
  ></iframe></Box>


 <Box w={{base:"100%",md:"40%"}}  color="#FFFFFF"> <Text fontFamily={"my"} fontSize={{base:"16px",md:"35px"}} >EXPOSED Blank Room Soup THE DARK WEB UNMASKED</Text> 
 <Divider/>
 </Box>
</Box>




<Divider />

      <Box display="flex" flexDirection={{base:"column",md:"row"}} justifyContent={"space-evenly"} w="100%"   h={{base:"40vh",md:"50vh"}} >

      <Box border="2px solid red" w={{base:"100%",md:"50%"}} borderRadius={"8px"} h={{base:"30vh",md:"48vh"}} > <iframe
          width={"100%"}
          height="100%"
          borderRadius="18px"
          src="https://www.youtube.com/embed/mDzqdv3VjKE" // YouTube video's embed URL
          frameborder="0"
          allowfullscreen
        ></iframe></Box>
      

       <Box w={{base:"100%",md:"40%"}}  color="#FFFFFF"> <Text fontFamily={"my"} fontSize={{base:"16px",md:"35px"}} >How To Find Anything On The Dark Web</Text> 
       <Divider/>
       </Box>
      </Box>




      <Divider />

<Box display="flex" flexDirection={{base:"column",md:"row"}} justifyContent={"space-evenly"} w="100%"   h={{base:"40vh",md:"50vh"}} >

<Box border="2px solid red" w={{base:"100%",md:"50%"}} borderRadius={"8px"} h={{base:"30vh",md:"48vh"}} > <iframe
    width={"100%"}
    height="100%"
    borderRadius="18px"
    src="https://www.youtube.com/embed/cG6IfZD1Xo8" // YouTube video's embed URL
    frameborder="0"
    allowfullscreen
  ></iframe></Box>


 <Box w={{base:"100%",md:"40%"}}  color="#FFFFFF"> <Text fontFamily={"my"} fontSize={{base:"16px",md:"35px"}} >Darkest Dark Web Videos Ever Found Uncovering Dark Web 1</Text> 
 <Divider/>
 </Box>
</Box>

<Divider />

<Box display="flex" flexDirection={{base:"column",md:"row"}} justifyContent={"space-evenly"} w="100%"   h={{base:"40vh",md:"50vh"}} >

<Box border="2px solid red" w={{base:"100%",md:"50%"}} borderRadius={"8px"} h={{base:"30vh",md:"48vh"}} > <iframe
    width={"100%"}
    height="100%"
    borderRadius="18px"
    src="https://www.youtube.com/embed/_dX_brFw7BI" // YouTube video's embed URL
    frameborder="0"
    allowfullscreen
  ></iframe></Box>


 <Box w={{base:"100%",md:"40%"}}  color="#FFFFFF"> <Text fontFamily={"my"} fontSize={{base:"16px",md:"35px"}} >Darkest Dark Web Videos Ever Found Uncovering Dark Web 2</Text> 
 <Divider/>
 </Box>
</Box>



      <Divider />

<Box display="flex" flexDirection={{base:"column",md:"row"}} justifyContent={"space-evenly"} w="100%"   h={{base:"40vh",md:"50vh"}} >

<Box border="2px solid red" w={{base:"100%",md:"50%"}} borderRadius={"8px"} h={{base:"30vh",md:"48vh"}} > <iframe
    width={"100%"}
    height="100%"
    borderRadius="18px"
    src="https://www.youtube.com/embed/qvijlcZjeaU" // YouTube video's embed URL
    frameborder="0"
    allowfullscreen
  ></iframe></Box>


 <Box w={{base:"100%",md:"40%"}}  color="#FFFFFF"> <Text fontFamily={"my"} fontSize={{base:"16px",md:"35px"}} >Real Creepy Dark Web Videos Ever Found Uncovering Dark Web 3</Text> 
 <Divider/>
 </Box>
</Box>









<Divider />

      <Box display="flex" flexDirection={{base:"column",md:"row"}} justifyContent={"space-evenly"} w="100%"   h={{base:"40vh",md:"50vh"}} >

      <Box border="2px solid red" w={{base:"100%",md:"50%"}} borderRadius={"8px"} h={{base:"30vh",md:"48vh"}} > <iframe
          width={"100%"}
          height="100%"
          borderRadius="18px"
          src="https://www.youtube.com/embed/vrLxEsSUC2c" // YouTube video's embed URL
          frameborder="0"
          allowfullscreen
        ></iframe></Box>
      

       <Box w={{base:"100%",md:"40%"}}  color="#FFFFFF"> <Text fontFamily={"my"} fontSize={{base:"16px",md:"35px"}} >Dark Web What Is Dark Web Is Dark Web Illegal Deep Web Hidden Internet Collegewallah</Text> 
       <Divider/>
       </Box>
      </Box>





     





<Divider />

      <Box display="flex" flexDirection={{base:"column",md:"row"}} justifyContent={"space-evenly"} w="100%"   h={{base:"40vh",md:"50vh"}} >

      <Box border="2px solid red" w={{base:"100%",md:"50%"}} borderRadius={"8px"} h={{base:"30vh",md:"48vh"}} > <iframe
          width={"100%"}
          height="100%"
          borderRadius="18px"
          src="https://www.youtube.com/embed/XQUc5pdJ1iI" // YouTube video's embed URL
          frameborder="0"
          allowfullscreen
        ></iframe></Box>
      

       <Box w={{base:"100%",md:"40%"}}  color="#FFFFFF"> <Text fontFamily={"my"} fontSize={{base:"16px",md:"35px"}} >TERRIFYING SIDE OF THE WEB DARK WEB PART 2</Text> 
       <Divider/>
       </Box>
      </Box>





      <Divider />

<Box display="flex" flexDirection={{base:"column",md:"row"}} justifyContent={"space-evenly"} w="100%"   h={{base:"40vh",md:"50vh"}} >

<Box border="2px solid red" w={{base:"100%",md:"50%"}} borderRadius={"8px"} h={{base:"30vh",md:"48vh"}} > <iframe
    width={"100%"}
    height="100%"
    borderRadius="18px"
    src="https://www.youtube.com/embed/Z5uQ87Wiq2s" // YouTube video's embed URL
    frameborder="0"
    allowfullscreen
  ></iframe></Box>


 <Box w={{base:"100%",md:"40%"}}  color="#FFFFFF"> <Text fontFamily={"my"} fontSize={{base:"16px",md:"35px"}} >Scary DEEP DARK WEB Videos That No One Has Ever Seen</Text> 
 <Divider/>
 </Box>
</Box>





<Divider />

      <Box display="flex" flexDirection={{base:"column",md:"row"}} justifyContent={"space-evenly"} w="100%"   h={{base:"40vh",md:"50vh"}} >

      <Box border="2px solid red" w={{base:"100%",md:"50%"}} borderRadius={"8px"} h={{base:"30vh",md:"48vh"}} > <iframe
          width={"100%"}
          height="100%"
          borderRadius="18px"
          src="https://www.youtube.com/embed/VLsQynRgjck" // YouTube video's embed URL
          frameborder="0"
          allowfullscreen
        ></iframe></Box>
      

       <Box w={{base:"100%",md:"40%"}}  color="#FFFFFF"> <Text fontFamily={"my"} fontSize={{base:"16px",md:"35px"}} >REAL VIDEOS FOUND ON THE DARK WEB PART 1 Fing</Text> 
       <Divider/>
       </Box>
      </Box>





      <Divider />

<Box display="flex" flexDirection={{base:"column",md:"row"}} justifyContent={"space-evenly"} w="100%"   h={{base:"40vh",md:"50vh"}} >

<Box border="2px solid red" w={{base:"100%",md:"50%"}} borderRadius={"8px"} h={{base:"30vh",md:"48vh"}} > <iframe
    width={"100%"}
    height="100%"
    borderRadius="18px"
    src="https://www.youtube.com/embed/dsDxs2yYFxg" // YouTube video's embed URL
    frameborder="0"
    allowfullscreen
  ></iframe></Box>


 <Box w={{base:"100%",md:"40%"}}  color="#FFFFFF"> <Text fontFamily={"my"} fontSize={{base:"16px",md:"35px"}} >Exposing The Dark Web</Text> 
 <Divider/>
 </Box>
</Box>






<Divider />

      <Box display="flex" flexDirection={{base:"column",md:"row"}} justifyContent={"space-evenly"} w="100%"   h={{base:"40vh",md:"50vh"}} >

      <Box border="2px solid red" w={{base:"100%",md:"50%"}} borderRadius={"8px"} h={{base:"30vh",md:"48vh"}} > <iframe
          width={"100%"}
          height="100%"
          borderRadius="18px"
          src="https://www.youtube.com/embed/1SejpANfjf4" // YouTube video's embed URL
          frameborder="0"
          allowfullscreen
        ></iframe></Box>
      

       <Box w={{base:"100%",md:"40%"}}  color="#FFFFFF"> <Text fontFamily={"my"} fontSize={{base:"16px",md:"35px"}} >Dark Web Real Video Shivamsingh Ytshorts Shorts</Text> 
       <Divider/>
       </Box>
      </Box>





      <Divider />

<Box display="flex" flexDirection={{base:"column",md:"row"}} justifyContent={"space-evenly"} w="100%"   h={{base:"40vh",md:"50vh"}} >

<Box border="2px solid red" w={{base:"100%",md:"50%"}} borderRadius={"8px"} h={{base:"30vh",md:"48vh"}} > <iframe
    width={"100%"}
    height="100%"
    borderRadius="18px"
    src="https://www.youtube.com/embed/Xf37u1WXtJ8" // YouTube video's embed URL
    frameborder="0"
    allowfullscreen
  ></iframe></Box>


 <Box w={{base:"100%",md:"40%"}}  color="#FFFFFF"> <Text fontFamily={"my"} fontSize={{base:"16px",md:"35px"}} >What Happens On Dark Web</Text> 
 <Divider/>
 </Box>
</Box>





<Divider />

      <Box display="flex" flexDirection={{base:"column",md:"row"}} justifyContent={"space-evenly"} w="100%"   h={{base:"40vh",md:"50vh"}} >

      <Box border="2px solid red" w={{base:"100%",md:"50%"}} borderRadius={"8px"} h={{base:"30vh",md:"48vh"}} > <iframe
          width={"100%"}
          height="100%"
          borderRadius="18px"
          src="https://www.youtube.com/embed/oRElnytHAG4" // YouTube video's embed URL
          frameborder="0"
          allowfullscreen
        ></iframe></Box>
      

       <Box w={{base:"100%",md:"40%"}}  color="#FFFFFF"> <Text fontFamily={"my"} fontSize={{base:"16px",md:"35px"}} >Creepy Dark Web Videos Leaked Videos Minute Science</Text> 
       <Divider/>
       </Box>
      </Box>






      <Divider />

<Box display="flex" flexDirection={{base:"column",md:"row"}} justifyContent={"space-evenly"} w="100%"   h={{base:"40vh",md:"50vh"}} >

<Box border="2px solid red" w={{base:"100%",md:"50%"}} borderRadius={"8px"} h={{base:"30vh",md:"48vh"}} > <iframe
    width={"100%"}
    height="100%"
    borderRadius="18px"
    src="https://www.youtube.com/embed/hZ2kb1VcWM0" // YouTube video's embed URL
    frameborder="0"
    allowfullscreen
  ></iframe></Box>


 <Box w={{base:"100%",md:"40%"}}  color="#FFFFFF"> <Text fontFamily={"my"} fontSize={{base:"16px",md:"35px"}} >The RED ROOM And Your PRIVACY On The DARK WEB Episode 3</Text> 
 <Divider/>
 </Box>
</Box>








      

      </Box>



      {/* Dark web payed contet starting here */}




      <Divider/>
      <Box w="100%" mt="10px" bg={gradient_x} h={{base:"auto",md:"auto"}} 
      // border="2px solid cyan"
      
      >
        
        <Text p={{base:"5",sm:"8",md:"10"}} textAlign={"center"} animation={{base:`${shadow} 2s infinite`,md:`$${shadow} 2s infinite`}} fontSize={{base:"22px" ,md:"45px"}} fontFamily={"just-die-already"} color="#fff">Premium Dark Zone</Text>

        <Button display="alex" justifyContent={"center"} w="150px" onClick={handleDarkWebPaypage}  _hover={{ boxShadow: '0 0 10px 5px skyblue' }} border="1px dashed #29B6F6" fontFamily={"my"} color="#fff" bg={gradient_xx} m="auto" textAlign="center">
          Visit Now
        </Button>

        <ArticleList />
        


      </Box>

    <Divider/>

    <Footer/>

    



   

    </>
      
    
    
  )
}

export default DarkWeb




