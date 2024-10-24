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
  // flow,
  // setFlow,
}: {
  flow: number;
  setFlow: (flow: number) => void;
}) => {

  return (
    <Box
      fontWeight={400}
      py={{ base: 4, md: 8 }}
      px={{ base: 2, sm: 1, md: 20 }}
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
        <FormControl id="password" mb={8}>
          <Flex justifyContent={"space-between"}>
            <FormLabel
              fontWeight={600}
              fontSize={{ base: "20px", sm: "18px", md: "20px" }}
            >
              Password
            </FormLabel>
            <Flex
              gap={2}
              color={"#3C5DD2"}
              cursor={"pointer"}
              mt={{ base: 1, md: 0 }}
            >
              <Text
                fontWeight={"normal"}
                fontSize={{ base: "14px", sm: "14px", md: "16px" }}
              >
                GENERATE PASSWORD
              </Text>
              <Icon
                as={CopyIcon}
                width={{ base: "18px", md: "24px" }}
                height={{ base: "18px", md: "24px" }}
              />
            </Flex>
          </Flex>
          <Input placeholder="" type="password" />
        </FormControl>
      </VStack>

      <Center mt={2}>
        <Button cursor={"not-allowed"}>Complete setup</Button>
      </Center>
    </Box>
  );
};

export default VerifiersForm;
