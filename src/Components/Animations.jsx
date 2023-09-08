import React from 'react'
import { keyframes } from "@chakra-ui/react"





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

const rotateAnimation = keyframes`
  0%, 100% {
    transform: rotate(0deg);
  }
  50% {
    transform: rotate(180deg);
  }
`;

const colorChangeAnimation = keyframes`
  0%, 100% {
    color: #FF0000;
  }
  50% {
    color: #00FF00;
  }
`;
const fadeIn = keyframes`
  0% { opacity: 0; }
  100% { opacity: 1; }
`;

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
// 44552
const scaleUp = keyframes`
  0% {
    transform: scale(0);
    opacity: 0;
  }
  100% {
    transform: scale(1);
    opacity: 1;
  }
`;



const float = keyframes`
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
`;


const bounce = keyframes`
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-20px);
  }
`;


const heartbeat = keyframes`
  0%, 100% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.3);
  }
`;

const pulseAnimation = keyframes`
  0%, 100% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.1);
  }
`;


const swingAnimation = keyframes`
  0%, 100% {
    transform: rotate(0);
  }
  20%, 80% {
    transform: rotate(15deg);
  }
  40%, 60% {
    transform: rotate(-10deg);
  }
`;



const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const jellyAnimation = keyframes`
  0%, 100% {
    transform: scaleX(1);
  }
  25%, 75% {
    transform: scaleX(1.2) scaleY(0.8);
  }
  50% {
    transform: scaleX(0.8) scaleY(1.2);
  }
`;
















// 1.animation={`${rotateAnimation} 5s linear infinite`} style={{ animationDelay: '3s' }}
// 2.animation={`${colorChangeAnimation} 2s infinite alternate`}
// 3.animation={`${shakeAnimation} 1s infinite`}
// 4.animation={`${scaleUp} 2s ease-in-out infinite alternate`}
// 5.animation={`${slideInFromLeft} 2s ease-in-out infinite alternate`}
// 6. animation={`${fadeIn} 2s ease-in-out infinite`}
// 7.animation={`${float} 3s ease-in-out infinite`}
// 8.animation={`${bounce} 0.5s ease`}
// 9.animation={`${heartbeat} 1s infinite`}
// 10.animation={animation: `${pulse} 1s infinite`}
// 11.animation={`${pulseAnimation} 1s infinite`}
// 12.animation={`${swingAnimation} 1s infinite`}
// 13.animation={`${jellyAnimation} 1s infinite`}










function Animations() {
  return (
    <div 
    
    
    >Animations</div>
  )
}

export default Animations