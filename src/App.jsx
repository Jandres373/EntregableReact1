// organizamos las importaciones necesarias 
import { useState } from "react";
import phrases from "./utils/quothes.json";
import {
  useInterval,
  randomizeNum,
  randomizeRGB,
  determineContrast,
} from "./utils/functions";
import { Box, useMediaQuery } from "@chakra-ui/react";
import { motion } from "framer-motion";
import ImageContainer from "./components/ImageContainer";
import useSound from "use-sound";
import breakingCookie from "./assets/ntwr6-tn03t.mp3";
import FirstBranch from "./components/FirstBranch";
import SecondBranch from "./components/SecondBranch";
import Hojita from "./components/Hojita";
// creamos las variables y constantes que no queremos que sean releidas en cada ejecucion de la funcion App
const arrFromRandomIndex = [];
//Creamos el componente App
const App = () => {
//Definimos los estados que usaremos y que necesitaremos pasar a los hijos del componente
  const [isLargeScreen] = useMediaQuery("(min-width: 800px)")
  const [play] = useSound(breakingCookie, { duration: 1 });
  const [thicker, setThicker] = useState(0);
  const [clicks, setClicks] = useState(0);
  const [count, setCount] = useState(0);
  const [color, setColor] = useState({
    color1: 150,
    color2: 28,
    color3: 69,
  });
  const [contrastColor, setContrastColor] = useState({
    contrastColor1: "#8866aa",
    contrastColor2: "#8866aa",
  });
  const [displayedMessage, setDisplayedMessage] = useState([""]);
// creamos las funciones que dependen del estado o que no se importarán desde functions.js
  const unRepeatedIndex = () => {
    const randomIndex = randomizeNum(phrases);
    if (arrFromRandomIndex.length < phrases.length) {
      if (arrFromRandomIndex.includes(randomIndex)) {
        return unRepeatedIndex();
      } else {
        arrFromRandomIndex.push(randomIndex);
        return arrFromRandomIndex[arrFromRandomIndex.length - 1];
      }
    }
  };

  const handleOnClick = () => {
    const newIndex = unRepeatedIndex();
    if (newIndex !== undefined) {
      setDisplayedMessage([phrases[newIndex].phrase]);
      setCount(0);
    }

    if (clicks <= phrases.length - 1) {
      setClicks((prevClicks) => prevClicks + 1);

      const newColors = {
        color1: randomizeRGB(),
        color2: randomizeRGB(),
        color3: randomizeRGB(),
      };
      setColor(newColors);

      const contrastColor1 = determineContrast(newColors);
      const contrastColor2 = determineContrast(newColors);

      const newContrastColor = {
        contrastColor1: contrastColor1,
        contrastColor2: contrastColor2,
      };
      setContrastColor(newContrastColor);
      console.log(contrastColor1);
      console.log(contrastColor2);
    }
    clicks < 1 && play();
  };

  useInterval(() => {
    if (displayedMessage.length > 0 && count < displayedMessage[0].length) {
      setCount((prevCount) => prevCount + 1);
    }
  }, 60);

  useInterval(() => {
    if (clicks < phrases.length + 1) {
      setThicker((prevThicker) => prevThicker + 1);
    }
  }, 500);

  const manualPositions = [
    { top: '0px', bottom: '0px', left: '1200px', right: '0px', rotation: 0 },
    { top: '500px', bottom: '0px', left: '1200px', right: '0px', rotation: 0 },
    { top: '700px', bottom: '0px', left: '100px', right: '0px', rotation: 0 },
    { top: '600px', bottom: '0px', left: '1000px', right: '0px', rotation: 280 },
    { top: '200px', bottom: '0px', left: '0px', right: '1300px', rotation: 280 },
    { top: '150px', bottom: '0px', left: '0px', right: '1300px', rotation: 280 },
    { top: '650px', bottom: '0px', left: '120px', right: '1300px', rotation: 0 },
  ];

  return (
    <>
      <Box
        as={motion.div}
        w="98vw"
        mt={!isLargeScreen && '100px'}
        backgroundColor="#fdfbfc"
        overflow="hidden"
        borderBottom="none"
        borderTopRadius="25%"
        display="flex"
        flexDirection="column"
        alignItems="center"
        position="relative"
        
      >
       {/*  // aquí se despliega el componente que renderiza las imagenes de fondo de las galletas de la fortuna, y se pasan como props todos los elementos del estado que dicho componente necesitará. */}
        <ImageContainer
          handleOnClick={handleOnClick}
          phrases={phrases}
          clicks={clicks}
          contrastColor={contrastColor}
          displayedMessage={displayedMessage}
          count={count}
          thicker={thicker}
          color={color}
          setClicks={setClicks}
          setDisplayedMessage={setDisplayedMessage}
        />
  {/* /aquí se despliegan otros dos componentes de manera condicional, para ello usamos el hook de la libreria chakra Ui que determina el width del viewport para renderizar X o Y con un operador ternario. */}
      {isLargeScreen && <FirstBranch /> }
      {isLargeScreen && <SecondBranch /> }

      

{manualPositions.map((position, index) => (
        <Hojita key={index} {...position} index={index} />
      ))}
      </Box>
    </>
  );
};
export default App;
