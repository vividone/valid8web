import React from "react";
import { Flex, Icon, Text, Box, Button, Image, Center } from "@chakra-ui/react";
import { SpreadIcon } from "@/components/icons/icons";
import { Container } from "@/components/topbar/SearchBar";
import Table from "@/components/table/Table";

// Data for InfoBox cards
const infoBoxData = [
  {
    id: "1",
    logo: "/images/dashboard/pseudo1.png",
    title: "Students",
    value: 10000,
  },
  {
    id: "2",
    logo: "/images/dashboard/pseudo1.png",
    title: "Validations",
    value: 5000,
  },
  {
    id: "3",
    logo: "/images/dashboard/pseudo3.png",
    title: "Verifiers",
    value: 500,
  },
];

// InfoBox Component
const InfoBox = ({ logo, title, value }) => (
  <Container justifyContent="space-between" p={4} flex={1} h="128.68px">
    <Flex gap={5} alignItems="center">
      <Box flex={2} borderRadius="full" bg="green.200" w="56px" h="56px">
        <Center w="full" h="full">
          <Image alt={title} w="28px" h="28px" src={logo} />
        </Center>
      </Box>
      <Box>
        <Text fontWeight={700} fontSize={{ base: "22px", md: "28px" }}>
          {value}
        </Text>
        <Text textColor="#697682" fontWeight={400} fontSize={"16px"}>
          {title}
        </Text>
      </Box>
    </Flex>
    <Box>
      <Icon as={SpreadIcon} cursor="pointer" color={"black.100"} />
    </Box>
  </Container>
);

// Main AdminDashboard Component
const AdminDashboard = () => {
  return (
    <Box py={8}>
      {/* Header */}
      <Flex
        alignItems="center"
        justify="space-between"
        flexDirection={{ sm: "column", md: "row" }}
      >
        <Box>
          <Text fontWeight="bold" fontSize={{ base: "20px", md: "24px" }}>
            Dashboard
          </Text>
        </Box>
        <Flex gap={4}>
          <Button size="md" >ADD STUDENTS</Button>
          <Button size="md">BULK UPLOAD </Button>
        </Flex>
      </Flex>

      {/* InfoBox Section */}
      <Flex
        mt={4}
        gap={4}
        w="full"
        flexWrap={"wrap"}
        justify={{ sm: "space-around", md: "space-between" }}
      >
        {infoBoxData.map(({ id, logo, title, value }) => (
          <InfoBox key={id} logo={logo} title={title} value={value} />
        ))}
      </Flex>

      <Box mt={4}>
        <Table />
      </Box>
    </Box>
  );
};

export default AdminDashboard;