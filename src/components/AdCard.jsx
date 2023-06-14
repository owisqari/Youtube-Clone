import {
  Heading,
  Avatar,
  Box,
  Image,
  Flex,
  Text,
  Stack,
  Button,
  useColorModeValue,
} from "@chakra-ui/react";
const AdCard = () => {
  return (
    <Box
      w={"16rem"}
      h={"16rem"}
      ml={5}
      bg={useColorModeValue("white", "gray.800")}
      boxShadow={"2xl"}
      rounded={"md"}
      overflow={"hidden"}
    >
      <Image
        h={"4rem"}
        w={"full"}
        src={
          "https://images.unsplash.com/photo-1612865547334-09cb8cb455da?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"
        }
        objectFit={"cover"}
      />
      <Flex justify={"center"} mt={-12}>
        <Avatar
          size={"lg"}
          src={
            "https://media.licdn.com/dms/image/C5603AQErlHd6ECaH_w/profile-displayphoto-shrink_400_400/0/1615968006687?e=1692230400&v=beta&t=mYAy7C9pEi6J0UfUQu4r2fookWlvvlBgM1zI5r75Mpo"
          }
          alt={"Author"}
          css={{
            border: "2px solid white",
          }}
        />
      </Flex>

      <Box p={6}>
        <Stack spacing={0} align={"center"} mb={5}>
          <Heading fontSize={"2xl"} fontWeight={500} fontFamily={"body"}>
            Owis Bukhari
          </Heading>
          <Text color={"gray.500"}>Frontend Developer</Text>
        </Stack>

        <Stack spacing={0} align={"center"}>
          <Text fontSize={"sm"} color={"gray.500"}>
            My LinkedIn
          </Text>
        </Stack>

        <Button
          w={"full"}
          mt={1}
          as={"a"}
          href={"https://www.linkedin.com/in/owis-bukhari-6a6b44184/"}
          bg={useColorModeValue("blue.500", "blue.900")}
          color={"white"}
          rounded={"md"}
          _hover={{
            transform: "translateY(-2px)",
            boxShadow: "lg",
          }}
        >
          Follow
        </Button>
      </Box>
    </Box>
  );
};

export default AdCard;
