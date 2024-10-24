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
  setFlow,
  ...props
}: {
  props?: any;
  flow: number;
  setFlow: (flow: number) => any;
}) => {
  console.log("student form =>", flow);
  return (
    <Box
      py={4}
      w={"100%"}
      fontWeight={400}
      px={{ base: 2, sm: 1, md: 8 }}
      fontFamily={"Nunito,sans-serif"}
      fontSize={{ base: "20px", sm: "18px", md: "20px" }}
      {...props}
    >
      <Text fontWeight={600} fontSize={"24px"} fontFamily={"Nunito,sans-serif"}>
        Institution Details
      </Text>
      <Flex
        my={6}
        gap={4}
        flexDirection={"column"}
        px={{ base: 2, sm: 1, md: 12 }}
      >
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
          <Input type="text" placeholder="example@gmail.com" />
        </FormControl>
 
        <FormControl id="first-name" mb={4}>
          <FormLabel
            fontWeight={600}
            fontSize={{ base: "20px", sm: "18px", md: "20px" }}
          >
            School Address
          </FormLabel>
          <Input type="text" placeholder="PMB 64, REMO, OGUN STATE" />
        </FormControl>
      </Flex>
      <Center>
        <Button
          //   variant={""}
          w={{ base: "100%", sm: "auto" }}
          onClick={() => setFlow(2)}
        >
          PROCEED
        </Button>
      </Center>
    </Box>
  );
};

export default InstitutionDetailsForm;
