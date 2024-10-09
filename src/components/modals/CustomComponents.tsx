import React from "react";
import { Flex, Icon, Text, Box, Image, Center } from "@chakra-ui/react";
import { SpreadIcon } from "@/components/icons/icons";
import { Container } from "@/components/topbar/SearchBar";



// InfoBox Component
export const InfoBox = ({ logo, title, value }) => (
    <Container justifyContent="space-between" p={4} flex={1} h="128.68px">
      <Flex gap={5} alignItems="center">
        <Box flex={2} borderRadius="full" bg="green.200" w="56px" h="56px">
          <Center w="full" h="full">
            <Image alt={title} w="28px" h="28px" src={logo} />
          </Center>
        </Box>
        <Box>
          <Text fontWeight={700} fontSize={{ base: "22px", md: "28px" }}>
            {value}
          </Text>
          <Text textColor="#697682" fontWeight={400} fontSize={"16px"}>
            {title}
          </Text>
        </Box>
      </Flex>
      <Box>
        <Icon as={SpreadIcon} cursor="pointer" color={"black.100"} />
      </Box>
    </Container>
  );

  