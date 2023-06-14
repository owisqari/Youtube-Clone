/* eslint-disable react/prop-types */
import { Stack, Text } from "@chakra-ui/react";
import { BiLike, BiDislike } from "react-icons/bi";
import { useState } from "react";

const CommentCard = (props) => {
  const [bgColor, setBgColor] = useState("black");
  const [bgColor1, setBgColor1] = useState("black");
  const handleLike = () => {
    if (bgColor === "red") setBgColor("black");
    else setBgColor("red");
  };
  const handleDislike = () => {
    if (bgColor1 === "blue") setBgColor("black");
    else setBgColor1("blue");
  };
  return (
    <Stack p="4" boxShadow="lg" m="4" borderRadius="sm" w={"full"}>
      <Stack
        direction={{ base: "column", md: "row" }}
        justifyContent="space-between"
      >
        <Text fontSize={{ base: "md" }} textAlign={"left"} maxW={"4xl"}>
          {props.comment}
        </Text>
      </Stack>
      <Stack direction="row" justifyContent="start">
        <BiLike
          size="1.5rem"
          style={{ color: bgColor }}
          onClick={() => {
            handleLike();
          }}
        />
        <BiDislike
          size="1.5rem"
          style={{ color: bgColor1 }}
          onClick={() => {
            handleDislike();
          }}
        />
      </Stack>
    </Stack>
  );
};
export default CommentCard;
