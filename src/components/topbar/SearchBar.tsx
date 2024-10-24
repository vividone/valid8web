import React, { ReactNode } from "react";
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

interface SearchBarProps {
  setOpen: (open: boolean) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({
  setOpen,
}: {
  setOpen: (open: boolean) => void;
}) => {
  const textColor = useColorModeValue("#8C8B92", "black.100");

  return (
    <Box
      p={3}
      gap={4}
      boxShadow={"xl"}
      borderRadius={"md"}
      border={"1px solid"}
      textColor={textColor}
      borderColor={"#E7E7E7"}
    >
      <Flex
        justifyContent={"space-between"}
        flexDirection={{ base: "column", md: "row" }}
        gap={{ base: 4, md: 0 }}
      >
        {/* Hamburger + Search Input */}
        <Flex flex={1} alignItems="center" justifyContent="space-between">
          {/* Hamburger Menu Icon for mobile */}
          <Icon
            mr={6}
            width="18px"
            height="18px"
            color="inherit"
            cursor="pointer"
            as={RxHamburgerMenu}
            onClick={() => setOpen(true)}
            display={{ base: "block", md: "none" }}
          />

          {/* Search Input */}
          <InputGroup w="full">
            <InputLeftElement>
              <Icon as={SearchIcon} w="17px" h="17px" />
            </InputLeftElement>
            <Input
              pl={10}
              size="md"
              placeholder="Search here..."
              fontSize={{ base: "16px", md: "16px" }}
              w={{ base: "100%", sm: "100%", md: "75%" }}
            />
          </InputGroup>
        </Flex>

        {/* Date Range + Filter (Hidden on mobile) */}
        <Flex
          mt={{ base: 4, md: 0 }}
          gap={4}
          alignItems="center"
          justify={{ base: "center", md: "flex-end" }}
          flex={1.1}
          display={{ base: "none", md: "flex" }}
        >
          {/* Date Range */}
          <Container gap={1} height="48px" alignItems="center">
            <Icon mr={2} w="17px" h="17px" as={CalendarIcon} cursor="pointer" />
            <Text textColor="#8C8B92">Aug 28, 2024 - Sep 29, 2024</Text>
          </Container>

          {/* Filter Icon */}
          <Container gap={1} height="48px" alignItems="center" cursor="pointer">
            <Icon mr={2} w="17px" h="17px" as={FilterIcon} />
            <Text>Filter</Text>
          </Container>
        </Flex>
      </Flex>
    </Box>
  );
};

export default SearchBar;

// dfg to move !!

interface ContainerProps {
  children: ReactNode;
  [x: string]: string | any;
}

export const Container: React.FC<ContainerProps> = ({ children, ...props }) => {
  return (
    <Flex
      py={3}
      px={3}
      border="1px solid"
      borderColor="#E7E7E7"
      borderRadius="md"
      {...props}
    >
      {children}
    </Flex>
  );
};
