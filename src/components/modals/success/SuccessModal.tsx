import React from "react";
import { Flex, Box, Icon, Text, Center } from "@chakra-ui/react";
import { TickIcon } from "@/components/icons/icons";

const SuccessModal = ({
  title = " Institution Added Successfully",
  paragraph = "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
}: {
  title?: string;
  paragraph?: string;
}) => {
  return (
    <Box
      p={4}
      bg={"#d9faf4"}
      borderRadius={"md"}
      fontFamily={"Nunito,sans-serif"}
    >
      <Flex gap={4} alignItems={"center"}>
        <Center h={"32px"} w={"32px"} rounded={"md"} bg={"#00DCB1"}>
          <Icon as={TickIcon} color={"white"} />
        </Center>
        <Box fontSize={"16px"}>
          <Text as={"h2"} fontWeight={"600"} textColor={"#03783D"}>
            {title}
          </Text>
          <Text as={"p"} textColor={"#00DCB1"} fontWeight={400}>
            {paragraph}
          </Text>
        </Box>
      </Flex>
    </Box>
  );
};

export default SuccessModal;
