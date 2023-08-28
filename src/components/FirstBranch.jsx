import { Image } from "@chakra-ui/react";
import firstBranche from "../assets/ramitasin_hojas-removebg-preview.png"

const FirstBranch = () => {
  return (
    <Image
  src={firstBranche}
  position="absolute"
  top="0"
  right="-30px"
  transform="rotateX(180deg)"
/>
  );
};

export default FirstBranch;
