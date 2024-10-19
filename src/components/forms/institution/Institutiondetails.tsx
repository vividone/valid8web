import React from "react";
import {
  Box,
  Flex,
  Text,
  Input,
  Button,
  Center,
  FormLabel,
  FormControl,
} from "@chakra-ui/react";

const InstitutionDetailsForm = ({
  flow,
  //   setFlow,
  ...props
}: {
  flow: number;
  setFlow?: (flow: number) => void;
  props?: any;
}) => {
  console.log("student form =>", flow);
  return (
    <Box
      py={4}
      px={8}
      fontWeight={400}
      fontFamily={"Nunito,sans-serif"}
      fontSize={{ base: "20px", sm: "18px", md: "20px" }}
      w={"100%"}
      {...props}
    >
      <Text fontWeight={600} fontSize={"24px"} fontFamily={"Nunito,sans-serif"}>
        Institution Details
      </Text>
      <Flex gap={4} mb={4}>
        <FormControl id="first-name" mb={4}>
          <FormLabel
            fontWeight={600}
            fontSize={{ base: "20px", sm: "18px", md: "20px" }}
          >
            Name of Institution
          </FormLabel>
          <Input placeholder="Babcock University" />
        </FormControl>

        <FormControl id="last-name">
          <FormLabel
            fontWeight={600}
            fontSize={{ base: "20px", sm: "18px", md: "20px" }}
          >
            Email Address
          </FormLabel>
          <Input placeholder="example@gmail.com" />
        </FormControl>
        <FormControl id="first-name" mb={4}>
          <FormLabel
            fontWeight={600}
            fontSize={{ base: "20px", sm: "18px", md: "20px" }}
          >
            School Address
          </FormLabel>
          <Input placeholder="PMB 64, REMO, OGUN STATE" />
        </FormControl>
      </Flex>
      <Center>
        <Button
          variant={"ghost"}
          w={{ base: "100%", sm: "auto" }}
          //   onClick={() => setFlow(2)}
        >
          PROCEED
        </Button>
      </Center>
    </Box>
  );
};

export default InstitutionDetailsForm;
