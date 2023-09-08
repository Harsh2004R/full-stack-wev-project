import { useState,useRef  } from 'react';
import Navbar2 from "../Components/Navbar2";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import {Box,Image,Button,Text,Divider,keyframes,FormControl,FormLabel,Input,Grid} from "@chakra-ui/react"
import DWQr from "../Photo/DWQr.jpg"
import Bajaj from "../Photo/Bajaj.jpeg"
import Paytm from "../Photo/Paytm.png"
import Gpay from "../Photo/Gpay.jpeg"
import Dark_upi from "../Photo/Dark_upi.png"
 
const Gradient1 = `linear-gradient(to right ,#000000, #333333, #000000)`; 
const Gradient2 = `linear-gradient(to right ,#000000, #66908c, #000000)`;
const glowAnimation = keyframes`
  0% { box-shadow: 0 0 0px teal; }
  50% { box-shadow: 0 0 10px 5px teal; }
  100% { box-shadow: 0 0 0px teal; }
`;

const shakeAnimation = keyframes`
  0%, 100% {
    transform: translateX(0);
  }
  10%, 30%, 50%, 70%, 90% {
    transform: translateX(-5px);
  }
  20%, 40%, 60%, 80% {
    transform: translateX(5px);
  }
`;


const rotate360 = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

const fadeInOut = keyframes`
  0%, 100% {
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
`;





function DarkWebPay() {



  const handlePayment = (upi) => {
    let upiId = '';
    let amount = 60;
    switch (upi) {
      case 'paytm':
        upiId = '7454982623@paytm';
        break;
      case 'googlepay':
        upiId = 'harshsharmaktm03@okaxis';
        break;
      case 'bajajupi':
        upiId = '7454982623@abfspay';
        break;
      // Add more cases for other UPI options
      default:
          break;
  }
  if (upiId) {
    window.location.href = `upi://pay?pa=${upiId}&am=${amount}`;
} else {
    // Handle the case when an unsupported UPI option is selected
}




    
};
  

    const [image, setImage] = useState(null);
    const fileInputRef = useRef(null);


    const handleSubmit = (event)=> {
        // Write logic for Form.
        event.preventDefault();
    }

    const handleAlert = ()=>{
      alert("Option valid for bit coins transictions olny")
    }


    const handleImageUpload = (event) => {
        const selectedImage = event.target.files[0];
        setImage(selectedImage);
      };
  return (
    <>

    {/* importing Navbar2 here */}
      <Navbar2/>


      <Box bg={Gradient1} w="100%" h="auto">
        <Box display="flex" justifyContent={"center"} p={10}>


        


        <Box border="1px solid teal" maxWidth="25rem" p="2.8125rem" borderWidth={1} borderRadius={8} boxShadow="lg" bgColor="transparent">
            <form onSubmit={handleSubmit} >
              <FormControl p="0.625rem" mb="1.25rem" > 
                <FormLabel htmlFor="email" color="white" textAlign="center" pb="0.625rem">
                  <Text fontFamily="another_danger">payment Screen Short</Text>
                </FormLabel>
                <Button
          as="label"
          htmlFor="fileInput"
          _hover={{ boxShadow: '0 0 0.625rem 0.3125rem #FF0000' }}
          animation={`${glowAnimation} 1s infinite`}
          _focus={{ outline: 'none' }}
          _active={{ transform: 'scale(1.5)' }}
          display="flex"
          alignItems="center"
          m="auto"
          bgColor="transparent"
          borderRadius="md"
          w="60%"
          fontFamily="another_danger"
          color="teal"
          cursor="pointer"
        >
          {image ? 'Image Selected' : 'Choose Image'}
        </Button>
        <input
          ref={fileInputRef}
          onChange={handleImageUpload}
          type="file"
          accept="image/*"
          id="fileInput"
          style={{ display: 'none' }}
        />
              </FormControl>
              <FormControl p="0.625rem">
                <FormLabel textAlign="center" htmlFor="password" color="white" pb="0.625rem"> 
                  <Text fontFamily="another_danger">Token</Text>
                </FormLabel>
                <Input
                  color="white"
                  border="none"
                  pt="0.625rem" 
                  variant="unstyled"
                  placeholder="Please Enter Token Number"
                  textAlign="center"
                  bg="none"
                  mx="auto"
                  type="password"
                  fontFamily="another_danger"
                />
              </FormControl>
              <Box mt="0.625rem"> 
                <Button

                  _hover={{ boxShadow: '0 0 0.625rem 0.3125rem #FF0000' }} 
                  animation={`${glowAnimation} 1s infinite`}
                  _focus={{ outline: 'none' }}
                  _active={{ transform: 'scale(1.5)' }}
                  display="flex" alignItems="center" m="auto" type="submit" bgColor="transparent" borderRadius="md" w="60%" // Converted to rem
                >
                  <Text fontFamily="another_danger" color="teal">Enter!</Text>
                </Button>
              </Box>
            </form>
          </Box>

    
      </Box>

      {/* Qr part starts from here */}

      <Box w="100%" h="900px" m="auto"  display="flex" flexDirection={{base:"column",md:"row"}}
    //    border="1px solid teal"
       >
        <Box   animation={`${fadeInOut} 3s ease-in-out infinite`} w={{base:"90%",md:"40%"}} borderWidth={1} borderRadius={8} m="auto" h={{base:"450px",md:"750px"}}>
            <Image  src={DWQr} onClick={() => handlePayment('paytm')} w={{base:"100%",md:"100%"}} m="auto" h={{base:"100%",md:"100%"}} borderRadius={8}/>
        </Box>
        <Box   w={{base:"90%",md:"55%"}} borderWidth={1} borderRadius={8} m="auto" h={{base:"350px",md:"750px"}} 
        border="1px solid teal"
        >
          <Text p={2} textAlign="center" color='#FFFFFF' fontFamily={"my"} animation={`${shakeAnimation} 5s infinite`} fontSize={{base:"1.2rem" ,md:"45px"}}>Just ₹60.00 to unlock Mistery🕯️</Text>
          

          <Text textAlign="left" p={2} fontSize={{base:"10px",md:"30px"}} color="#FF0000" fontFamily={"dogica-lite"}>🕯️ Upgrade Instructions 🕯️</Text>
          <Divider my={0} borderColor="#EEEEEE" />
          <Text textAlign="left" p={2} fontSize={{base:"0.4rem",md:"1rem"}} color="#FFFFFF" fontFamily="dogica-lite">1.Payment: Please proceed to make a payment of 60 INR for
             the upgrade. You can complete the payment through our secure
              payment gateway. We've worked hard to ensure your payment 
              process is easy and secure.</Text>
              <Divider my={0} borderColor="#EEEEEE" />
              <Text textAlign="left" p={2} fontSize={{base:"0.4rem",md:"1rem"}} color="#FFFFFF" fontFamily="dogica-lite">2.Screenshot Upload: Once your payment is done, take a
               screenshot of the payment confirmation page. 
               This will be your proof of payment. You can then
                upload the screenshot in the image input box
                 provided on top.</Text>
                 <Divider my={0} borderColor="#EEEEEE" />
              <Text textAlign="left" p={2} fontSize={{base:"0.4rem",md:"1rem"}} color="#FFFFFF" fontFamily="dogica-lite">3.Send Us a WhatsApp Message: After uploading the screenshot,
               reach out to us on WhatsApp at <Text as="span" color="#FF0000">7409546266</Text>
               . Simply send us a message saying "Hey, I've made the
                payment on your site." We'll respond promptly.</Text>
                <Divider my={0} borderColor="#EEEEEE" />
        
              <Text textAlign="left" p={2} fontSize={{base:"0.4rem",md:"1rem"}} color="#FFFFFF" fontFamily="dogica-lite">4.Receive Your Token: We'll review your payment and provide you
               with a valid token. This token will unlock the
                upgraded features and benefits.Thank you for choosing us! We look forward to enhancing your experience.</Text>
                <Divider my={0} borderColor="#EEEEEE" />
        </Box>
       


      </Box>
      <Text fontFamily={"my"} textAlign={"center"} fontWeight={"Bolder"} fontSize={{base:"20px",md:"45px"}} color="#FF0000" p={5}>Select to proceed</Text>
           
        </Box>
        

       
        <Box w="100%" bg={Gradient1} h="auto" 
        // border="2px solid red"
        >
          {/* <marquee behavior="scroll" direction="right" scrollamount="25" > */}
        <Grid
      templateColumns={{ base: 'repeat(2, 1fr)', md: 'repeat(4, 1fr)' }}
      gap={4} 
    >
      <Box  display="flex" justifyContent={"center"} alignContent={"center"} w={{base:"100%",md:"90%"}} borderRadius={8} bg={"transparent"} m="auto" h={{base:"120px",md:"180px"}} >
        <Image onClick={() => handlePayment('paytm')} animation={`${rotate360} 4s linear infinite`} borderRadius={"50%"} h="60%" m={5} src={Paytm} />
        
      </Box>
      <Box display="flex" justifyContent={"center"} alignContent={"center"} borderRadius={8} bg={"transparent"} w={{base:"100%",md:"90%"}} m="auto" h={{base:"120px",md:"180px"}} >
      <Image  onClick={() => handlePayment('googlepay')} animation={`${rotate360} 4s linear infinite`} borderRadius={"50%"} h="60%" m={5} src={Gpay} />
      
      </Box>
      <Box display="flex" justifyContent={"center"} alignContent={"center"} borderRadius={8} bg={"transparent"} w={{base:"100%",md:"90%"}} m="auto" h={{base:"120px",md:"180px"}} >
      <Image  onClick={() => handlePayment('bajajupi')} animation={`${rotate360} 4s linear infinite`} borderRadius={"50%"} h="60%" m={5} src={Bajaj} />
      
      </Box>
      <Box bg={"transparent"} display="flex" justifyContent={"center"} alignContent={"center"} borderRadius={8}  w={{base:"100%",md:"90%"}} m="auto" h={{base:"120px",md:"180px"}} >
      <Image onClick={()=> handleAlert()} animation={`${rotate360} 4s linear infinite`} borderRadius={"50%"} h="60%" m={5} src={Dark_upi} />

      </Box>
      
    </Grid>
    {/* </marquee> */}

        </Box>
        




      {/* importing footer here */}

      <Footer/>

    </>
  )
}

export default DarkWebPay
