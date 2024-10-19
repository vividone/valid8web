"use client";
import React, { useState } from "react";
import { Flex, Text, Box } from "@chakra-ui/react";
import Table from "@/components/table/Table";
import { InfoBox } from "@/components/modals/CustomComponents";
import ModalsLayout from "@/components/modals/modalsLayout";
import LogForm from "@/components/forms/log/log";

// Data for InfoBox cards
const infoBoxData = [
  {
    id: "1",
    logo: "/images/dashboard/pseudo1.png",
    title: "Total Institutions",
    value: 10001,
  },
  {
    id: "2",
    logo: "/images/dashboard/pseudo1.png",
    title: "Total Staff",
    value: 5000,
  },
  {
    id: "3",
    logo: "/images/dashboard/pseudo3.png",
    title: "Total Students",
    value: 5000,
  },
];

const renderModalContent = (flow: number, setFlow: (val: number) => void) => {
  switch (flow) {
    case 1:
      return <LogForm flow={flow} setFlow={setFlow} />;
    default:
      return null;
  }
};

const Logs = () => {
  const [modalState, setModalState] = useState({ open: false, flow: 0 });

  const handleOpenModal = (flow: number) => {
    setModalState({ open: true, flow });
  };

  const handleCloseModal = () => {
    setModalState({ open: false, flow: 0 });
  };

  const setFlow = (newFlow: number) => {
    setModalState((prevState) => ({ ...prevState, flow: newFlow }));
  };

  const LogsData = [
    {
      Verifier: "Samuel Oyedele",
      Details: "NM213XXXX",
      Result: "Valid",
      Timestamp: ["10/05/2024", "02:10pm"],
      Action: "",
    },
    {
      Verifier: "Zainab Babalola",
      Details: "RG458XXXX",
      Result: "Invalid",
      Timestamp: ["10/05/2024", "02:10pm"],
      Action: "",
    },
    {
      Verifier: "Tiwatope Shanu",
      Details: "GD458XXXX",
      Result: "Invalid",
      Timestamp: ["22/04/2024", "02:10pm"],
      Action: "",
    },
    {
      Verifier: "Olaolu Jayson",
      Details: "RG458XXXX",
      Result: "Valid",
      Timestamp: ["10/04/2024", "02:10pm"],
      Action: "",
    },
  ];

  return (
    <Box position={"relative"}>
      {/* Conditionally render modal */}
      {modalState.open && (
        <ModalsLayout
          mt={6}
          pt={6}
          boxShadow="none"
          boxStyles={true}
          borderRadius="md"
          formBoxStyles={false}
          padding={2}
          bg={"white"}
          width={"85%"}
          border={"none"}
          Mainpadding={"none"}
          counter={false}
          flow={modalState.flow}
          setOpen={handleCloseModal}
          title="Samuel Oyedele"
        >
          {renderModalContent(modalState.flow, setFlow)}
        </ModalsLayout>
      )}

      <Box py={8}>
        {/* Header */}
        <Flex
          alignItems="center"
          justify="space-between"
          flexDirection={{ sm: "column", md: "row" }}
        >
          <Text fontWeight="bold" fontSize={{ base: "20px", md: "24px" }}>
            Logs
          </Text>
        </Flex>

        {/* InfoBox Section */}
        <Flex
          mt={4}
          gap={4}
          w="full"
          flexWrap="wrap"
          justify={{ sm: "space-around", md: "space-between" }}
        >
          {infoBoxData.map(({ id, logo, title, value }) => (
            <InfoBox key={id} logo={logo} title={title} value={value} />
          ))}
        </Flex>

        {/* Table Section */}
        <Box mt={4} w="full">
          <Table data={LogsData} Action={handleOpenModal} />
        </Box>
      </Box>
    </Box>
  );
};

export default Logs;
