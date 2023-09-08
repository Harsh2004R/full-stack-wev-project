import {Box} from "@chakra-ui/react"
import './App.css';
import AllRoutes from "./Routes/AllRoutes";
import Navbar from "./Components/Navbar";
import Home from "./Pages/Home";
import VolumeControl from "./Components/VolumeControl";
import TextAnimation from "./Empty-1/TextAnimation"
import AudioVisualizer from "./Empty-1/AudioVisualizer";
import NotAllow from "./Empty-1/NotAllow";
function App() {
  return (
    <>
    
      <AllRoutes/>
     
      {/* <NotAllow/> */}
      {/* <AudioVisualizer/> */}
    </>
      
    
    
  );
}

export default App;
