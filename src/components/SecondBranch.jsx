import { Image } from "@chakra-ui/react";
import secondBranch from "../assets/ramitasin_hojas-removebg-preview.png"
const SecondBranch = () => {
  return (
    <Image
    src={secondBranch}
    position="absolute"
    top="0"
    left="-30px"
    transform="rotatez(180deg)"
  
/>
  );
};

export default SecondBranch;
