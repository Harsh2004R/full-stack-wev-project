


import { Button } from "@chakra-ui/react";
import React,{useEffect} from "react";
import { useNavigate } from 'react-router-dom';

const AmazonButton = () => {
  const Navigate=useNavigate()
  useEffect(() => {
    const isMobileOrTab = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent
    );

    if (isMobileOrTab) {
      // window.location.href = {NotAllow}; // Redirect to another page for mobile and tab users

      Navigate('/NotAllow')
    }
  }, [Navigate]);
  const redirectToAmazon = () => {

    // const amazonURL = "https://www.yyyyyyy.info/";
    const amazonURL = "https://hindpage.site/direct/index.php?url=aHR0cHM6Ly9teS56b2hhanBsNi53b3JrZXJzLmRldi8wOi9kYXRld2lzZS8xL1VuZnJpZW5kZWQuRGFyay5XZWIuMjAxOC4xMDgwcC5CbHVSYXkuSGluZGktRW5nbGlzaC54MjY0LkRENS4xLm1rdg== "
    window.location.href = amazonURL;
  };

  return (
    <Button colorScheme="blue" onClick={redirectToAmazon}>
      Go to Amazon
    </Button>
  );
};

export default AmazonButton;