import React from 'react'
import Navbar2 from '../Components/Navbar2';
import Navbar from '../Components/Navbar';
import { Box ,Text,Image,Button,Flex,keyframes,UnorderedList, ListItem  } from "@chakra-ui/react";
import EarthBg from "../Photo/EarthBg.png";
import DoorBg from "../Photo/DoorBg.webp"
import Footer from "../Components/Footer";





const gradient2 = `linear-gradient(to right, #000000, #340612, #000000)`;









function React3DView() {
  return (
    <>
      {/* importing Navbar and Navbar 2 here */}

      <Navbar/>
      <Navbar2/>


      <Box w="100%" h="auto" 
      // border="3px solid lime"
      bg={gradient2}
      //  backgroundImage={{base:`url(${DoorBg})`,md:`url(${EarthBg})`}}
          backgroundSize="cover"
          backgroundPosition="center"
          backgroundRepeat="no-repeat"> 
          
          <style>
          {`
            @keyframes moveText {
              0%, 100% {
                transform: translateX(0);
              }
              50% {
                transform: translateX(calc(100% - 100px));
              }
            }
          }
        }
      }
    }
  }
          `}
        </style>


        <Box  w="100%"   h="80px"><Text w="40%" animation="moveText 5s linear infinite" fontSize={"6xl"} color={"#FF0000"}>3D</Text></Box>
     
        <Text pt="10px" pb="30px" textAlign={{base:"justify",md:"center"}} textColor={"#fff"} fontFamily={"just-die-already"} fontSize={{base:"12px",md:"25px"}}>Reffer this video given below for virtual exploration
          of   <span style={{ color: "#FF0000" }}>Hashima Island</span></Text>

       <Box 
       display="flex"
       alignItems="center"
       justifyContent="center"
      //  border='1px solid teal'
       >
       <Box 
        w={{base:"90%",md:"50%"}} 
         h={{base:"250px",md:"500px"}}
        // border='1px solid lime'
        >
         <video 
           style={{
            top: '0',
            left: '0',
            width: '100%',
            height: '100%',
            objectFit: 'cover',
          }}
          controls 
          src="https://drive.google.com/uc?id=1i0p6i0aEhwWLm_pYAx-C2wpRfqcOZuPt" type="video/mp4"
          poster="https://thelittlehouseofhorrors.com/app/uploads/Hashima-Island-buildings-Abandoned-Man-via-flickr-public-domain.jpg"
  
        >
        </video>

       </Box>
        </Box>

      </Box>
      

          <Box
          w="100%" h={{base:"auto",md:"auto"}}
          // border="3px solid lime"
          // bg={gradient2}
         backgroundImage={{base:`url(${DoorBg})`,md:`url(${DoorBg})`}}
          backgroundSize="cover"
          backgroundPosition="center"
          backgroundRepeat="no-repeat"
          > 
          

          <Text pt="20px" pb="20px" color="#69F0AE" fontFamily="dogica-lite" w={{base:"100%",md:"85%"}} m="auto" textAlign={"justify"} fontSize={{base:"0.47rem",md:"0.8rem"}} ><span style={{ color: "#FFFFFF" }}>Hashima Island</span> is a small unoccupied island right in front of the Japanese coast, some 9,5 miles (15 km) from Nagasaki. The island is nicknamed Battleship Island because of its shape and it has been abandoned for several years. But, abandoned does not mean empty,because  <span style={{ color: "#FF0000" }}> the ghosts </span>of the past have taken over the <span style={{ color: "#FF0000" }}>island</span> and its <span style={{ color: "#FF0000" }}>buildings</span>.</Text>
          
          <Box 
          mt="20px"
          width="100%"
            height={{base:"80vh",md:"100vh"}}>
          <iframe 
            src="https://maps.gstatic.com/m/streetview/?q=hashima+island&hl=en&ll=32.628266,129.738056&spn=0.000745,0.002516&sll=53.806002,-1.535732&sspn=0.295189,0.644073&t=h&hnear=Hashima+Island&z=19&layer=c&cbll=32.628267,129.738055&panoid=JdEfaAv9DRoAAAQIt4-aBw&cbp=11,218.29,,0,10.36"
            width="100%"
            height="100%"
            frameBorder="0"
            style={{ border: '0' }}
            allowFullScreen={true}
            aria-hidden="false"
            tabIndex="0"
            ></iframe>
          </Box>
         





          </Box>



    

          {/* Importing foorte here */}


          <Footer />
          











       
    
    </>
  )
}

export default React3DView

