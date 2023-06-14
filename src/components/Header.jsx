import {
  Box,
  Flex,
  Avatar,
  HStack,
  Image,
  IconButton,
  Menu,
  MenuButton,
  useDisclosure,
  useColorModeValue,
  InputGroup,
  Input,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import { FaRegBell, FaVideo } from "react-icons/fa";
import { MdKeyboardVoice } from "react-icons/md";
const Header = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Box bg={useColorModeValue("white.100", "white.900")} px={4}>
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <IconButton
            size={"md"}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={"Open Menu"}
            display={{ md: "none" }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack spacing={8} alignItems={"center"}>
            <Box w="5rem" as={"a"} href={"/"}>
              <Image
                w={"full"}
                h={"full"}
                src="https://raw.githubusercontent.com/samlak/youtube-clone/master/src/assets/youtube_light.png"
              />
            </Box>
            <HStack
              as={"nav"}
              spacing={4}
              display={{ base: "none", md: "flex" }}
            ></HStack>
          </HStack>
          <HStack spacing={8} w={"32rem"} alignItems={"center"}>
            <InputGroup size="md" display={["none", "none", "flex", "flex"]}>
              <Input placeholder="Search" />
            </InputGroup>
            <MdKeyboardVoice size="1.5rem" />
          </HStack>
          <Flex alignItems={"center"} justifyContent={"space-evenly"}>
            <FaRegBell size="1.5rem" />
            <FaVideo
              size="1.5rem"
              style={{ marginLeft: "2rem", marginRight: "2rem" }}
            />
            <Menu>
              <MenuButton
                as={"a"}
                href={"/login"}
                rounded={"full"}
                variant={"link"}
                cursor={"pointer"}
                ml={"2rem"}
                minW={0}
              >
                <Avatar
                  size={"sm"}
                  src={
                    "https://images.unsplash.com/photo-1493666438817-866a91353ca9?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=b616b2c5b373a80ffc9636ba24f7a4a9"
                  }
                />
              </MenuButton>
            </Menu>
          </Flex>
        </Flex>
      </Box>
    </>
  );
};

export default Header;
