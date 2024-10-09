import React from "react";
import {
  FormControl,
  FormLabel,
  Flex,
  Box,
  Input,
  FormHelperText,
  Button,
  Center,
} from "@chakra-ui/react";

const StudentForm = ({ setFlow }) => {
  return (
    <Box
      py={4}
      px={8}
      fontWeight={400}
      fontFamily={"Nunito,sans-serif"}
      fontSize={{ base: "20px", sm: "18px", md: "20px" }}
    >
      <Flex gap={4} mb={4}>
        <FormControl id="first-name" mb={4}>
          <FormLabel
            fontWeight={600}
            fontSize={{ base: "20px", sm: "18px", md: "20px" }}
          >
            First Name
          </FormLabel>
          <Input placeholder="First Name" />
        </FormControl>

        <FormControl id="last-name">
          <FormLabel
            fontWeight={600}
            fontSize={{ base: "20px", sm: "18px", md: "20px" }}
          >
            Last Name
          </FormLabel>
          <Input placeholder="Last Name" />
        </FormControl>
      </Flex>

      <Flex gap={4} mb={4}>
        <FormControl id="email" flex={1}>
          <FormLabel
            fontWeight={600}
            fontSize={{ base: "20px", sm: "18px", md: "20px" }}
          >
            ID Card Number
          </FormLabel>
          <Input type="email" placeholder="Id Card Number" />
          {/* <FormHelperText>We’ll never share your email.</FormHelperText> */}
        </FormControl>

        <FormControl id="phone" flex={1}>
          <FormLabel
            fontWeight={600}
            fontSize={{ base: "20px", sm: "18px", md: "20px" }}
          >
            Matric Number
          </FormLabel>
          <Input type="tel" placeholder="Matric Number" />
        </FormControl>
      </Flex>

      <Flex gap={4} mb={4}>
        <FormControl id="email" flex={1}>
          <FormLabel
            fontWeight={600}
            fontSize={{ base: "20px", sm: "18px", md: "20px" }}
          >
            Course
          </FormLabel>
          <Input type="email" placeholder="Course" />
          {/* <FormHelperText>We’ll never share your email.</FormHelperText> */}
        </FormControl>

        <FormControl id="phone" flex={1}>
          <FormLabel
            fontWeight={600}
            fontSize={{ base: "20px", sm: "18px", md: "20px" }}
          >
            Faculty
          </FormLabel>
          <Input type="tel" placeholder="Faculty" />
        </FormControl>
      </Flex>

      <Flex gap={4} mb={4}>
        <FormControl id="email" flex={1}>
          <FormLabel
            fontWeight={600}
            fontSize={{ base: "20px", sm: "18px", md: "20px" }}
          >
            Year of entry
          </FormLabel>
          <Input type="email" placeholder="2023" />
          {/* <FormHelperText>We’ll never share your email.</FormHelperText> */}
        </FormControl>

        <FormControl id="phone" flex={1}>
          <FormLabel
            fontWeight={600}
            fontSize={{ base: "20px", sm: "18px", md: "20px" }}
          >
            Valid Till
          </FormLabel>
          <Input type="tel" placeholder="Aug 2027" />
        </FormControl>
      </Flex>

      <Flex gap={4} mb={10}>
        <FormControl id="email" flex={1}>
          <FormLabel
            fontWeight={600}
            fontSize={{ base: "20px", sm: "18px", md: "20px" }}
          >
            Status
          </FormLabel>
          <Input type="email" placeholder="Status" w={"50%"} />
          {/* <FormHelperText>We’ll never share your email.</FormHelperText> */}
        </FormControl>
      </Flex>

      <Center>
        <Button px={8} onClick={() => setFlow(2)}>
          GENERATE QR CODE
        </Button>
      </Center>
    </Box>
  );
};

export default StudentForm;
