import React from "react";
import { FormControl, FormLabel, Flex, Box, Input } from "@chakra-ui/react";

const LogForm = ({
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
      w={"100%"}
      fontWeight={400}
      px={{ base: 0, md: 8 }}
      fontFamily={"Nunito,sans-serif"}
      fontSize={{ base: "20px", sm: "18px", md: "20px" }}
      {...props}
    >
      <Flex
        mb={4}
        gap={{ base: 0, md: 4 }}
        flexDirection={{ base: "column", sm: "column", md: "row" }}
      >
        <FormControl id="first-name" mb={4}>
          <FormLabel
            fontWeight={600}
            fontSize={{ base: "20px", sm: "18px", md: "20px" }}
          >
            First Name
          </FormLabel>
          <Input
            type="text"
            value={"Samuel"}
            variant={"logInput"}
            placeholder="First Name"
          />
        </FormControl>

        <FormControl id="last-name">
          <FormLabel
            fontWeight={600}
            fontSize={{ base: "20px", sm: "18px", md: "20px" }}
          >
            Last Name
          </FormLabel>
          <Input
            type="text"
            value={"Oyedele"}
            variant={"logInput"}
            placeholder="LastName Name"
          />
        </FormControl>
      </Flex>

      <Flex
        mb={4}
        gap={{ base: 4, md: 4 }}
        flexDirection={{ base: "column", sm: "column", md: "row" }}
      >
        <FormControl id="email" flex={1}>
          <FormLabel
            fontWeight={600}
            fontSize={{ base: "20px", sm: "18px", md: "20px" }}
          >
            ID Card Number
          </FormLabel>
          <Input
            type="text"
            value={"NM213XXXX"}
            variant={"logInput"}
            placeholder="Id Card Number"
          />
          {/* <FormHelperText>We’ll never share your email.</FormHelperText> */}
        </FormControl>

        <FormControl id="phone" flex={1}>
          <FormLabel
            fontWeight={600}
            fontSize={{ base: "20px", sm: "18px", md: "20px" }}
          >
            Matric Number
          </FormLabel>
          <Input
            type="text"
            variant={"logInput"}
            value={"20230206169"}
            placeholder="Matric Number"
          />
        </FormControl>
      </Flex>

      <Flex
        mb={4}
        gap={{ base: 4, md: 4 }}
        flexDirection={{ base: "column", sm: "column", md: "row" }}
      >
        <FormControl id="email" flex={1}>
          <FormLabel
            fontWeight={600}
            fontSize={{ base: "20px", sm: "18px", md: "20px" }}
          >
            Course
          </FormLabel>
          <Input
            type="text"
            value={"NM213XXXX"}
            placeholder="Course"
            variant={"logInput"}
          />
          {/* <FormHelperText>We’ll never share your email.</FormHelperText> */}
        </FormControl>

        <FormControl id="phone" flex={1}>
          <FormLabel
            fontWeight={600}
            fontSize={{ base: "20px", sm: "18px", md: "20px" }}
          >
            Faculty
          </FormLabel>
          <Input
            type="text"
            value={"Art"}
            variant={"logInput"}
            placeholder="Faculty"
          />
        </FormControl>
      </Flex>

      <Flex
        mb={4}
        gap={{ base: 4, md: 4 }}
        flexDirection={{ base: "column", sm: "column", md: "row" }}
      >
        <FormControl id="email" flex={1}>
          <FormLabel
            fontWeight={600}
            fontSize={{ base: "20px", sm: "18px", md: "20px" }}
          >
            Year of entry
          </FormLabel>
          <Input
            type="number"
            value={"2023"}
            placeholder="Course"
            variant={"logInput"}
          />
          {/* <FormHelperText>We’ll never share your email.</FormHelperText> */}
        </FormControl>

        <FormControl id="phone" flex={1}>
          <FormLabel
            fontWeight={600}
            fontSize={{ base: "20px", sm: "18px", md: "20px" }}
          >
            Valid Till
          </FormLabel>
          <Input
            type="number"
            value="Aug 2027"
            variant={"logInput"}
            placeholder="Aug 2027"
          />
        </FormControl>
      </Flex>

      <Flex
        mb={4}
        gap={{ base: 4, md: 4 }}
        flexDirection={{ base: "column", sm: "column", md: "row" }}
      >
        <FormControl id="email" flex={1}>
          <FormLabel
            fontWeight={600}
            fontSize={{ base: "20px", sm: "18px", md: "20px" }}
          >
            Verifications
          </FormLabel>
          <Input
            value="10"
            type="number"
            variant={"logInput"}
            placeholder=""
          />
        </FormControl>
        <FormControl id="email" flex={1}>
          <FormLabel
            fontWeight={600}
            fontSize={{ base: "20px", sm: "18px", md: "20px" }}
          >
            Status
          </FormLabel>
          <Input variant="successful" value="Active" type="text" placeholder="Status" />
          {/* <FormHelperText>We’ll never share your email.</FormHelperText> */}
        </FormControl>
      </Flex>
    </Box>
  );
};

export default LogForm;
