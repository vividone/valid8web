import React from "react";
import {
  Box,
  Text,
  Icon,
  Flex,
  Input,
  Center,
  Button,
  FormLabel,
  FormControl,
} from "@chakra-ui/react";
import { CopyIcon } from "@/components/icons/icons";

const AdminCrentialForm = ({
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
      w={"100%"}
      fontWeight={400}
      fontFamily={"Nunito,sans-serif"}
      fontSize={{ base: "20px", sm: "18px", md: "20px" }}
      {...props}
    >
      <Text fontWeight={600} fontSize={"24px"} fontFamily={"Nunito,sans-serif"}>
        Admin Credentials
      </Text>
      <Flex gap={4} mb={4} flexDirection={"column"}>
        <FormControl id="first-name" mb={4}>
          <FormLabel
            fontWeight={600}
            fontSize={{ base: "20px", sm: "18px", md: "20px" }}
          >
            Full Name
          </FormLabel>
          <Input placeholder="Zainab Babalola" />
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
        <FormControl id="email" flex={1}>
          <FormLabel
            fontWeight={600}
            fontSize={{ base: "20px", sm: "18px", md: "20px" }}
          >
            Department
          </FormLabel>
          <Input type="email" placeholder="Design" />
          {/* <FormHelperText>We’ll never share your email.</FormHelperText> */}
        </FormControl>

        <FormControl id="phone" flex={1}>
          <FormLabel
            fontWeight={600}
            fontSize={{ base: "20px", sm: "18px", md: "20px" }}
          >
            Choose Role
          </FormLabel>
          <Input type="tel" placeholder="Institution Admin" />
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
      </Flex>
      <Center>
        <Button
          variant={"ghost"}
          w={{ base: "100%", sm: "auto" }}
          //   onClick={() => setFlow(2)}
        >
          Complete setup
        </Button>
      </Center>
    </Box>
  );
};

export default AdminCrentialForm;