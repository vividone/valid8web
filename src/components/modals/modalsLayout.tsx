"use client";
import React from "react";
import { Flex, Text, Box, CloseButton, Icon } from "@chakra-ui/react";
import { Container } from "../topbar/SearchBar";

const ModalsLayout = ({ children, flow, setOpen }: any) => {
  return (
    <Box
      p={10}
      top={0}
      left={0}
      zIndex={100}
      minW={"100%"}
      minH={"100%"}
      bg={"whitesmoke"}
      position={"absolute"}
      fontStyle={"Nunito"}
    >
      <Flex
        mx={"auto"}
        alignItems={"center"}
        justifyContent={"space-between"}
        w={{ base: "40%", sm: "80%", md: "75%" }}
      >
        <Box>
          <Text as="h3" fontWeight={"700"} fontSize={"24px"}>
            Add Student
          </Text>
          <Text as="span" fontSize={"16px"} textColor={"#8C8B92"}>
            Step {flow} of 2
          </Text>
        </Box>

        <Box>
          <Icon
            as={CloseButton}
            cursor="pointer"
            onClick={() => setOpen((prev) => !prev)}
          />
        </Box>
      </Flex>

      <Box
        p={4}
        mt={5}
        mx={"auto"}
        boxShadow={"xl"}
        borderRadius={"md"}
        border={"1px solid"}
        borderColor={"#E7E7E7"}
        // bg={"orange"}
        width={{ sm: "60%", md: "65%" }}
      >
        {children}
      </Box>
    </Box>
  );
};

export default ModalsLayout;
