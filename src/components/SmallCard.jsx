/* eslint-disable react/prop-types */
import { Center, Flex, Heading, Image, Stack, Text } from "@chakra-ui/react";

const SmallCard = (props) => {
  return (
    <Center py={6}>
      <Stack
        borderRadius="xl"
        w={"20rem"}
        height={"8rem"}
        direction={{ base: "column", md: "row" }}
      >
        <Flex flex={1}>
          <Image objectFit="fill" borderRadius="xl" src={props.image} />
        </Flex>
        <Stack
          flex={1}
          flexDirection="column"
          justifyContent="start"
          alignItems="start"
          pt={2}
        >
          <Heading
            fontSize={"16px"}
            fontFamily={"body"}
            as={"a"}
            href={props.url}
          >
            {props.title}
          </Heading>
          <Text
            fontWeight={600}
            color={"gray.500"}
            fontSize={"10px"}
            size="5px"
          >
            {props.channel}
          </Text>
          <Text
            fontWeight={600}
            fontSize={"10px"}
            color={"gray.500"}
            size="sm"
            mb={4}
          >
            {props.date}
          </Text>
        </Stack>
      </Stack>
    </Center>
  );
};

export default SmallCard;
