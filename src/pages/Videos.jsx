import Header from "../components/Header";
import SideBar from "../components/SideBar";
import { Flex, Stack, Input, Button } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import { BiLike, BiDislike } from "react-icons/bi";
import { useState } from "react";
import CommentCard from "../components/CommentCard";

const Videos = () => {
  const id = useParams();
  let isLogged = localStorage.getItem("user");
  if (isLogged === null) {
    window.location.href = "/login";
  }
  const [bgColor, setBgColor] = useState("black");
  const [bgColor1, setBgColor1] = useState("black");
  const [comment, setComment] = useState("");
  const [comments, setComments] = useState([]);

  const handleLike = () => {
    if (bgColor === "red") setBgColor("black");
    else setBgColor("red");
  };
  const handleDislike = () => {
    if (bgColor1 === "blue") setBgColor("black");
    else setBgColor1("blue");
  };
  const handleComment = () => {
    setComments([...comments, comment]);
    console.log("====================================");
    console.log(comments);
    console.log("====================================");
  };

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

            <Stack
              mt={5}
              direction={"column"}
              justifyContent={"space-between"}
              alignItems={"center"}
              p={4}
            >
              <iframe
                style={{ marginLeft: "10px", marginRight: "0" }}
                id="existing-iframe-example"
                width="1280"
                height="720"
                src={`https://www.youtube.com/embed/${id.id}`}
              ></iframe>
              <Stack
                direction={"row"}
                justifyContent={"space-between"}
                alignItems={"center"}
                mt={5}
              >
                <BiLike
                  size="2rem"
                  style={{ color: bgColor }}
                  onClick={() => {
                    handleLike();
                  }}
                />
                <BiDislike
                  size="2rem"
                  style={{ color: bgColor1 }}
                  onClick={() => {
                    handleDislike();
                  }}
                />
              </Stack>
              <Stack
                direction={"row"}
                justifyContent={"space-between"}
                alignItems={"center"}
                w={"100%"}
                mt={5}
              >
                <Input
                  placeholder="Basic usage"
                  onChange={(e) => {
                    setComment(e.target.value);
                  }}
                />
                <Button
                  colorScheme="blue"
                  onClick={() => {
                    handleComment();
                  }}
                >
                  Comment
                </Button>
              </Stack>
              {comments.map((comment) => {
                return (
                  <>
                    <CommentCard comment={comment} />
                  </>
                );
              })}
            </Stack>
          </Flex>
        </Stack>
      </Stack>
    </>
  );
};

export default Videos;
