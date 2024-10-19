"use client";
import React, { useState } from "react";
import { Flex, Text, Box, Button } from "@chakra-ui/react";
import Table from "@/components/table/Table";
import { InfoBox } from "@/components/modals/CustomComponents";
import ModalsLayout from "@/components/modals/modalsLayout";
import AdminCrentialForm from "@/components/forms/institution/AdminCredential";
import InstitutionDetailsForm from "@/components/forms/institution/Institutiondetails";

// Data for InfoBox cards
const infoBoxData = [
  {
    id: "1",
    logo: "/images/dashboard/pseudo1.png",
    title: "Total Institutions",
    value: 10000,
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
    value: 500,
  },
];

const renderModalContent = (flow: number, setFlow: (val: number) => void) => {
  switch (flow) {
    case 1:
      return <InstitutionDetailsForm flow={flow} setFlow={setFlow} />;
    case 2:
      return <AdminCrentialForm flow={flow} />;
    default:
      return null;
  }
};

const SuperAdminDashboard = () => {
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

  const titles = ["Add Student", "QR Code"];

  return (
    <Box>
      {/* Conditionally render mo dal */}
      {modalState.open && (
        <ModalsLayout
          flow={modalState.flow}
          setOpen={handleCloseModal}
          title={titles[modalState.flow - 1]}
        >
          {renderModalContent(modalState.flow, setFlow)} {/* Pass setFlow */}
        </ModalsLayout>
      )}

      <Box py={8} w="full">
        {/* Header */}
        <Flex
          flexWrap={"wrap"}
          alignItems="center"
          justify="space-between"
          flexDirection={{ sm: "column", md: "row" }}
        >
          <Text fontWeight="bold" fontSize={{ base: "20px", md: "24px" }}>
            Dashboard
          </Text>
          <Flex gap={4}>
            <Button
              size={{ sm: "sm", md: "md" }}
              onClick={() => handleOpenModal(1)}
            >
              setup Institution
            </Button>
          </Flex>
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
        <Box mt={4}>
          <Table />
        </Box>
      </Box>
    </Box>
  );
};

export default SuperAdminDashboard;
