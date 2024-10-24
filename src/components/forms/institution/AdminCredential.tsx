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
  setFlow,
  ...props
}: {
  props?: any;
  flow: number;
  setFlow?: (flow: number) => any | any;
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
        Admin Credentials
      </Text>
      <Flex
        gap={4}
        my={4}
        flexDirection={"column"}
        px={{ base: 2, sm: 1, md: 12 }}
      >
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
      </Flex>
      <Center>
        <Button w={{ base: "100%", sm: "auto" }}>Complete setup</Button>
      </Center>
    </Box>
  );
};

export default AdminCrentialForm;