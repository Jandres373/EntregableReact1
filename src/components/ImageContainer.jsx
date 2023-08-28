import { Box, Button, Image, useMediaQuery } from "@chakra-ui/react";
import { AnimatePresence, motion } from "framer-motion";
import handsTogether from "../assets/manos juntas.jpg";
import handsSpread from "../assets/manos sin letra.jpg";
import pergamin from '../assets/pergamino.png'
import TextContent from "./TextContent";


const ImageContainer = ({ handleOnClick, phrases, clicks, contrastColor,displayedMessage,count,thicker, color, setClicks, setDisplayedMessage}) => {
  const [isLargeScreen] = useMediaQuery("(min-width: 800px)")
   
  return (
    
    <Box as={motion.div} position="relative">
       <TextContent contrastColor={contrastColor} displayedMessage={displayedMessage} count={count} thicker={thicker} clicks={clicks}/> 
      <AnimatePresence>
        {clicks < 1 ? (
          <Image
          objectFit='contain'
          objectPosition='bottom'
            as={motion.img}
            key="img1"
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            src={isLargeScreen ? handsTogether : pergamin }
          ></Image>
        ) : (
          <Image
          objectFit='contain'
          objectPosition='bottom'
            as={motion.img}
            key="img2"
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            src={isLargeScreen ? handsSpread : pergamin }
          ></Image>
        )}
       
      </AnimatePresence>
      

      <Button
        onClick={handleOnClick}
        cursor={clicks === phrases.length && "none"}
        bgColor="transparent"
        w={{ base: "60px", sm: "50px", md: "80px" }}
        h={{ base: "20px", sm: "25px", md: "30px" }}
        position="absolute"
        top={isLargeScreen ? "80%" : "90%"}
        left="50%"
        style={{ transform: "translatex(-50%)" }}
        fontSize={{ base: "15px", md: "20px" }}
        paddingX="0.3em"
        _hover={{
          bgColor: "transparent",
          borderColor: "transparent",
        }}
      >
        {(clicks >= phrases.length && "Eso es todo") ||
          (clicks < 1 ? "romper" : "ver otra")}
      </Button>
      <Box fontFamily='cursive' fontSize='12px' position="absolute" top={isLargeScreen ? "84%" : "94%"} left="50%" marginLeft='-17px' mt='5px' >
        {clicks} / {phrases.length}
      </Box>
      
    </Box>
  );
};

export default ImageContainer;
