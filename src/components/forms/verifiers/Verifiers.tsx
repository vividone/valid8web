import React from "react";
import {
  FormControl,
  FormLabel,
  Flex,
  Box,
  Input,
  VStack,
  Button,
  Center,
  Icon,
  Text,
} from "@chakra-ui/react";
import { CopyIcon } from "@/components/icons/icons";

const VerifiersForm = ({
  flow,
  setFlow,
}: {
  flow: boolean;
  setFlow: (flow: number) => void;
}) => {
  console.log("student form =>", flow);
  return (
    <Box
      py={4}
      px={8}
      fontWeight={400}
      fontFamily={"Nunito,sans-serif"}
      fontSize={{ base: "20px", sm: "18px", md: "20px" }}
    >
      <VStack gap={4}>
        <FormControl id="first-name" mb={4}>
          <FormLabel
            fontWeight={600}
            fontSize={{ base: "20px", sm: "18px", md: "20px" }}
          >
            Full Name
          </FormLabel>
          <Input placeholder="Full Name" />
        </FormControl>
        <FormControl id="first-name" mb={4}>
          <FormLabel
            fontWeight={600}
            fontSize={{ base: "20px", sm: "18px", md: "20px" }}
          >
            Email Address
          </FormLabel>
          <Input placeholder="Email Address" />
        </FormControl>
        <FormControl id="first-name" mb={4}>
          <FormLabel
            fontWeight={600}
            fontSize={{ base: "20px", sm: "18px", md: "20px" }}
          >
            Phone Number
          </FormLabel>
          <Input placeholder="09025923159" />
        </FormControl>
        <FormControl id="first-name" mb={4}>
          <FormLabel
            fontWeight={600}
            fontSize={{ base: "20px", sm: "18px", md: "20px" }}
          >
            Department
          </FormLabel>
          <Input placeholder="Design" />
        </FormControl>
        <FormControl id="first-name" mb={8}>
          <Flex justifyContent={"space-between"}>
            <FormLabel
              fontWeight={600}
              fontSize={{ base: "20px", sm: "18px", md: "20px" }}
            >
              Password
            </FormLabel>
            <Flex color={"#3C5DD2"} gap={2} cursor={"pointer"}>
              <Text fontWeight={"normal"} fontSize={"16px"}>
                GENERATE PASSWORD
              </Text>
              <Icon as={CopyIcon} width={"24px"} height={"24px"} />
            </Flex>
          </Flex>
          <Input placeholder="" type="password" />
        </FormControl>
      </VStack>

      <Center mt={2}>
        <Button variant={"ghost"} onClick={() => setFlow(2)}>
          Complete setup
        </Button>
      </Center>
    </Box>
  );
};

export default VerifiersForm;