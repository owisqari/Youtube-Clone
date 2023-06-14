/* eslint-disable react/prop-types */
import { Flex, Stack } from "@chakra-ui/react";
import ReactPlayer from "react-player";

const VideoPlayer = (props) => {
  return (
    <>
      <Flex
        direction={"column"}
        justifyContent={"space-between"}
        alignItems={"center"}
        bg={"black"}
        color={"white"}
        p={4}
      >
        <Stack
          direction={"row"}
          justifyContent={"space-between"}
          alignItems={"center"}
          p={4}
        >
          <ReactPlayer url={props.url} controls={true} />
        </Stack>
      </Flex>
    </>
  );
};

export default VideoPlayer;
