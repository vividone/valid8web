import React from "react";
import {
  FormControl,
  FormLabel,
  Flex,
  Box,
  Input,
  Button,
  Center,
} from "@chakra-ui/react";

const StaffForm = ({
  setFlow,
}: {
  flow: number;
  setFlow: (flow: number) => void;
}) => {
  return (
    <Box
      py={{ base: 2, md: 4 }} // Adjust padding for mobile
      px={{ base: 4, md: 8 }} // Adjust padding for mobile
      fontWeight={400}
      fontFamily={"Nunito,sans-serif"}
      fontSize={{ base: "16px", sm: "18px", md: "20px" }} // Responsive font size
    >
      <Flex
        gap={4}
        mb={4}
        flexDirection={{ base: "column", md: "row" }} // Stack vertically on mobile
      >
        <FormControl id="first-name" mb={{ base: 4, md: 0 }}>
          <FormLabel
            fontWeight={600}
            fontSize={{ base: "16px", sm: "18px", md: "20px" }} // Responsive font size
          >
            First Name
          </FormLabel>
          <Input placeholder="First Name" />
        </FormControl>

        <FormControl id="last-name">
          <FormLabel
            fontWeight={600}
            fontSize={{ base: "16px", sm: "18px", md: "20px" }} // Responsive font size
          >
            Last Name
          </FormLabel>
          <Input placeholder="Last Name" />
        </FormControl>
      </Flex>

      <Flex
        gap={4}
        mb={4}
        flexDirection={{ base: "column", md: "row" }} // Stack vertically on mobile
      >
        <FormControl id="id-number" flex={1}>
          <FormLabel
            fontWeight={600}
            fontSize={{ base: "16px", sm: "18px", md: "20px" }} // Responsive font size
          >
            ID Card Number
          </FormLabel>
          <Input placeholder="ID Card Number" />
        </FormControl>

        <FormControl id="matric-number" flex={1}>
          <FormLabel
            fontWeight={600}
            fontSize={{ base: "16px", sm: "18px", md: "20px" }} // Responsive font size
          >
            Department
          </FormLabel>
          <Input placeholder="Department" />
        </FormControl>
      </Flex>

      <Flex
        gap={4}
        mb={4}
        flexDirection={{ base: "column", md: "row" }} // Stack vertically on mobile
      >
        <FormControl id="course" flex={1}>
          <FormLabel
            fontWeight={600}
            fontSize={{ base: "16px", sm: "18px", md: "20px" }} // Responsive font size
          >
            Valid Till
          </FormLabel>
          <Input placeholder="Course" />
        </FormControl>

        <FormControl id="faculty" flex={1}>
          <FormLabel
            fontWeight={600}
            fontSize={{ base: "16px", sm: "18px", md: "20px" }} // Responsive font size
          >
            Email
          </FormLabel>
          <Input placeholder="Faculty" />
        </FormControl>
      </Flex>

      <Flex
        gap={4}
        mb={4}
        flexDirection={{ base: "column", md: "row" }} // Stack vertically on mobile
      >
        <FormControl id="year-of-entry" flex={1}>
          <FormLabel
            fontWeight={600}
            fontSize={{ base: "16px", sm: "18px", md: "20px" }} // Responsive font size
          >
            Phone Number
          </FormLabel>
          <Input placeholder="2023" />
        </FormControl>

        <FormControl id="valid-till" flex={1}>
          <FormLabel
            fontWeight={600}
            fontSize={{ base: "16px", sm: "18px", md: "20px" }} // Responsive font size
          >
            Status
          </FormLabel>
          <Input placeholder="Aug 2027" />
        </FormControl>
      </Flex>

      <Center>
        <Button
          px={8}
          w={{ base: "100%", sm: "auto" }} // Full width on mobile, auto on larger screens
          onClick={() => setFlow(2)}
        >
          GENERATE QR CODE
        </Button>
      </Center>
    </Box>
  );
};

export default StaffForm;
