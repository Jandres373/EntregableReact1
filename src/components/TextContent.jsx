import { Heading, Text } from "@chakra-ui/react";
import React from "react";

const TextContent = ({
  contrastColor,
  displayedMessage,
  count,
  thicker,
  clicks,
}) => {
  return (
    <div>
      <Text
        position="absolute"
        top="41.8%"
        left="38.5%"
        width={{base:'135px', md:'300px'}}
        marginLeft="-17px"
        mt="5px"
        fontFamily="cursive"
        bgGradient={`linear(to-l, ${contrastColor.contrastColor1}, #200903)`}
        bgClip="text"
        fontSize={{ base: "13px", sm: "16px" }}
        fontWeight="extrabold"
        pointerEvents="none"
      >
        {displayedMessage.length > 0 &&
          displayedMessage[0].split("").splice(0, count)}{" "}
        {thicker % 2 === 0 ? "|" : ""}
        <br />
        <br />
        <br />
      </Text>
    </div>
  );
};

export default TextContent;
