import React, { useEffect, useState } from "react";
import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogContent,
  AlertDialogOverlay,
  Button,
} from "@chakra-ui/react";
import DWsong2 from "../autoAudio/DWsong2.mp3";
import DWsong1 from '../autoAudio/DWsong1.mp3';
import DWsong3 from "../autoAudio/DWsong3.mp3";
import DWsong4 from "../autoAudio/DWsong4.mp3";
import DWsong5 from "../autoAudio/DWsong5.mp3";
import DWsong6 from "../autoAudio/DWsong6.mp3";
import DWsong7 from "../autoAudio/DWsong7.mp3";
const songs = [DWsong1,DWsong2,DWsong3,DWsong4,DWsong5,DWsong6,DWsong7];

const CustomAlert2 = ({ isOpen, onClose }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const audioRef = React.useRef(null);
  const intervalRef = React.useRef(null);

  useEffect(() => {
    if (isPlaying && audioRef.current) {
      audioRef.current.play();
    } else {
      audioRef.current?.pause();
    }
  }, [isPlaying]);

  useEffect(() => {
    return () => {
      clearInterval(intervalRef.current);
    };
  }, []);

  const handlePlayMusic = () => {
    setIsPlaying(true);
    onClose(true)
    setCurrentSongIndex((prevIndex) => getRandomIndex(prevIndex));
    // Set an interval to change songs after every 10 seconds
    intervalRef.current = setInterval(() => {
      setCurrentSongIndex((prevIndex) => getRandomIndex(prevIndex));
    }, 60000);
  };

  const handleSongEnded = () => {
    setCurrentSongIndex((prevIndex) => getRandomIndex(prevIndex));
  };

  const getRandomIndex = (currentIndex) => {
    let randomIndex = currentIndex;
    while (randomIndex === currentIndex) {
      randomIndex = Math.floor(Math.random() * songs.length);
    }
    return randomIndex;
  };

  return (
    <>
      <AlertDialog isOpen={isOpen} onClose={onClose}>
        <AlertDialogOverlay>
          <AlertDialogContent>
            <AlertDialogHeader fontSize="lg" fontWeight="bold">
              Background Music Permission
            </AlertDialogHeader>

            <AlertDialogBody>
              Do you want to play background music?
            </AlertDialogBody>

            <AlertDialogFooter>
              <Button onClick={onClose}>Cancel</Button>
              <Button
                colorScheme="teal"
                ml={3}
                autoFocus
                onClick={handlePlayMusic}
              >
                Play Music
              </Button>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>

      {isPlaying && (
        <audio
          ref={audioRef}
          src={songs[currentSongIndex]}
          autoPlay
          onEnded={handleSongEnded}
        />
      )}
    </>
  );
};

export default CustomAlert2;