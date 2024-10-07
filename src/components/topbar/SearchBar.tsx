import React from "react";
import {
  Flex,
  Icon,
  Text,
  Box,
  Input,
  useColorModeValue,
  InputLeftElement,
  InputGroup,
} from "@chakra-ui/react";
import { RxHamburgerMenu } from "react-icons/rx";
import { FilterIcon, SearchIcon, CalendarIcon } from "../icons/icons";

const SearchBar = ({ open, setOpen }: any) => {
  const textColor = useColorModeValue("#8C8B92", "black.100");
  return (
    <Box
      p={3}
      gap={4}
      // h={"76.39px"}
      boxShadow={"xl"}
      borderRadius={"md"}
      border={"1px solid"}
      textColor={textColor}
      borderColor={"#E7E7E7"}
    >
      <Flex
        justifyContent={"space-between"}
        flexDirection={{ sm: "column", md: "row" }}
      >
        <Box
          flex={1.8}
          display={{ sm: "flex", md: "block" }}
          w={{ sm: "100%" }}
          alignItems={"center"}
          justifyContent={"space-between"}
        >
          <Box w={"20%"}>
            <Icon
              mr={6}
              width="18px"
              height="18px"
              color="inherit"
              cursor="pointer"
              as={RxHamburgerMenu}
              onClick={() => {
                setOpen((curr) => !curr);
              }}
              display={{ base: "none", sm: `block`, md: "none" }}
              justifyContent={"space-between"}
            />
          </Box>
          <InputGroup textAlign={"right"}>
            <InputLeftElement>
              <Icon as={SearchIcon} w="17px" h="17px" />
            </InputLeftElement>
            <Input
              pl={10}
              size={"md"}
              placeholder="Search here..."
              w={{ base: "60%", sm: "100%", md: "388.52px" }}
              fontSize={{ base: "16px", sm: "14px", md: "16px" }}
            />
          </InputGroup>
        </Box>

        <Box justifySelf={"flex-end"} flex={1.1}>
          <Flex
            mt={{ sm: 4, md: 0 }}
            gap={{ sm: 4, md: 2 }}
            justify={{ sm: "flex-start", md: "space-between" }}
            fontSize={{ base: "16px", sm: "14px", md: "16px" }}
          >
            <Container gap={1} height={"48px"} alignItems={"center"}>
              <Icon
                mr={2}
                w="17px"
                h="17px"
                as={CalendarIcon}
                cursor={"pointer"}
              />
              <Text textColor={"#8C8B92"}>Aug 28, 2024 - Sep 29, 2024</Text>
            </Container>
            <Container
              gap={1}
              height={"48px"}
              alignItems={"center"}
              cursor={"pointer"}
            >
              <Icon mr={2} w="17px" h="17px" as={FilterIcon} />
              <Text>Filter</Text>
            </Container>
          </Flex>
        </Box>
      </Flex>
    </Box>
  );
};

export default SearchBar;

export const Container = ({ children, ...props }: any) => {
  return (
    <Flex
      py={3}
      px={3}
      border={"1px solid"}
      borderColor={"#E7E7E7"}
      borderRadius={"md"}
      {...props}
    >
      {children}
    </Flex>
  );
};
