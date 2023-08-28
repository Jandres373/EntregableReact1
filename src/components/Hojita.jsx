import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Image } from '@chakra-ui/react';
import { useInterval } from '../utils/functions';

const Hojita = ({ top = 0, bottom = 0, left = 0, right = 0, rotation = 0, index }) => {
  const [interval, setInterval] = useState(0);
  const [movement, setMovement] = useState(0);

  useInterval(() => {
    setInterval(interval + 1);
  }, 500);

  useInterval(() => {
    if (interval<12) {
        if (interval % 2 === 0) {
            setMovement(100 * index);
          } else {
            setMovement(-100 * index);
          }
    }
  }, 300);

  const transitionDuration = `${5 + index * 2}s linear`; // Variar la duración

  return (
    <Image
      as={motion.img}
      src={index % 2 === 0 ? "../src/assets/hojita6-removebg-preview.png" : "../src/assets/hojita5-removebg-preview.png"}
      position="absolute"
      top={top}
      bottom={bottom}
      left={left}
      right={right}
      margin="auto"
      boxSize="25px"
      style={{ transform: `rotate(${rotation}deg) translateX(${15}px)` }}
      initial={{ y: -500 }}
      animate={{ y: 0, x: movement + index*2 }}
      transition={transitionDuration} // Usar la duración calculada
    />
  );
};

export default Hojita;