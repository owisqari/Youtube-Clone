import { Box, GridItem, HStack, Button, ButtonGroup } from "@chakra-ui/react";

const NavBar = () => {
  return (
    <>
      <GridItem
        colStart={2}
        borderWidth="1px"
        colSpan={[2, 2, 2, 1]}
        borderRight="none"
        borderLeft="none"
        // position="fixed"
        w="100%"
      >
        <Box h="60px" d="flex" alignItems="center" ml="20px">
          <HStack>
            <ButtonGroup size="md" spacing="3">
              <Button
                borderRadius="20px"
                border="2px"
                // colorScheme="blue"
                colorScheme="gray"
                borderColor="gray.300"
              >
                All
              </Button>
              <Button
                borderRadius="20px"
                border="2px"
                // colorScheme="blue"
                colorScheme="gray"
                borderColor="gray.300"
              >
                Cryptocurrency
              </Button>
              <Button
                borderRadius="20px"
                border="2px"
                // colorScheme="blue"
                colorScheme="gray"
                borderColor="gray.300"
              >
                Stocks
              </Button>
              <Button
                borderRadius="20px"
                border="2px"
                // colorScheme="blue"
                colorScheme="gray"
                borderColor="gray.300"
              >
                Commedies
              </Button>
              <Button
                borderRadius="20px"
                border="2px"
                // colorScheme="blue"
                colorScheme="gray"
                borderColor="gray.300"
              >
                Confidence
              </Button>
              <Button
                borderRadius="20px"
                border="2px"
                // colorScheme="blue"
                colorScheme="gray"
                borderColor="gray.300"
              >
                Frontline
              </Button>
              <Button
                borderRadius="20px"
                border="2px"
                // colorScheme="blue"
                colorScheme="gray"
                borderColor="gray.300"
              >
                Motivation
              </Button>
              <Button
                borderRadius="20px"
                border="2px"
                // colorScheme="blue"
                colorScheme="gray"
                borderColor="gray.300"
              >
                Elon Musk
              </Button>
              {/* <Button 
            borderRadius="20px"
            border="2px"
            // colorScheme="blue"
            colorScheme="gray"
            borderColor="gray.300"
          >
            Computer programming
          </Button> */}
            </ButtonGroup>
          </HStack>
        </Box>
      </GridItem>
    </>
  );
};

export default NavBar;
