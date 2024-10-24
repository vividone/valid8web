import React from "react";
import { FormControl, FormLabel, Flex, Box, Input } from "@chakra-ui/react";

const SuperAdminLogForm = ({
  flow,
  //   setFlow,
  ...props
}: {
  flow: number;
  setFlow?: (flow: number) => void;
  props?: any;
}) => {
  return (
    <Box
      py={4}
      px={8}
      fontWeight={400}
      //   bg={"green"}
      fontFamily={"Nunito,sans-serif"}
      fontSize={{ base: "20px", sm: "18px", md: "20px" }}
      {...props}
    >
      <Flex gap={4} >
        <FormControl id="first-name" mb={4}>
          <FormLabel
            fontWeight={600}
            fontSize={{ base: "20px", sm: "18px", md: "20px" }}
          >
            Name of Institution
          </FormLabel>
          <Input
            variant={"logInput"}
            placeholder="First Name"
            value={"Babcock University"}
          />
        </FormControl>

        <FormControl id="last-name">
          <FormLabel
            fontWeight={600}
            fontSize={{ base: "20px", sm: "18px", md: "20px" }}
          >
            Email Address
          </FormLabel>
          <Input
            variant={"logInput"}
            placeholder="Last Name"
            value={"e.g posteb67@gmail.com"}
          />
        </FormControl>
      </Flex>

      <Flex gap={4} mb={4}>
        <FormControl id="email" flex={1}>
          <FormLabel
            fontWeight={600}
            fontSize={{ base: "20px", sm: "18px", md: "20px" }}
          >
            School Address
          </FormLabel>
          <Input
            variant={"logInput"}
            type="email"
            placeholder=""
            value={"PMB 64, REMO, OGUN STATE"}
          />

        </FormControl>

        <FormControl id="Admin" flex={1}>
          <FormLabel
            fontWeight={600}
            fontSize={{ base: "20px", sm: "18px", md: "20px" }}
          >
            Admin
          </FormLabel>
          <Input
            variant={"logInput"}
            type="text"
            placeholder=""
            value={"Zainab Babalola"}
          />
        </FormControl>
      </Flex>

      <Flex gap={4}>
        <FormControl id="Successful Verification" flex={1}>
          <FormLabel
            fontWeight={600}
            fontSize={{ base: "20px", sm: "18px", md: "20px" }}
          >
            Successful Verification
          </FormLabel>
          <Input
            variant="successful"
            type="number"
            placeholder="Faculty"
            value={450}
          />
        </FormControl>

        <FormControl id="email" flex={1}>
          <FormLabel
            fontWeight={600}
            fontSize={{ base: "20px", sm: "18px", md: "20px" }}
          >
            Failed Verifications
          </FormLabel>
          <Input variant="failed" type="text" value={2023} fontWeight={500} />
        </FormControl>
      </Flex>
    </Box>
  );
};

export default SuperAdminLogForm;
