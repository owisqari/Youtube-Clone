import Header from "../components/Header";
import SideBar from "../components/SideBar";
import { Flex, Stack } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
const Videos = () => {
  const id = useParams();
  console.log(id.id);

  return (
    <>
      <Header />
      <Stack spacing="8" align="flex-start">
        <Stack spacing="8" align="flex-start">
          <Flex
            direction={"row"}
            justifyContent={"space-between"}
            alignItems={"center"}
            pl={4}
          >
            <SideBar />

            <iframe
              style={{ marginLeft: "10px", marginRight: "0" }}
              id="existing-iframe-example"
              width="1280"
              height="720"
              src={`https://www.youtube.com/embed/${id.id}`}
            ></iframe>
          </Flex>
        </Stack>
      </Stack>
    </>
  );
};

export default Videos;
