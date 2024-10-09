"use client";
import React, { useState } from "react";
import { Flex, Text, Box, Button } from "@chakra-ui/react";
import Table from "@/components/table/Table";
import { InfoBox } from "@/components/modals/CustomComponents";
import ModalsLayout from "@/components/modals/modalsLayout";
import StudentForm from "@/components/forms/students/Student";
import QR from "@/components/forms/students/QR";
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

const renderModalContent = (flow: number, setFlow: (val: number) => void) => {
  switch (flow) {
    case 1:
      return <StudentForm setFlow={setFlow} />;
    case 2:
      return <QR />;
    default:
      return null;
  }
};

const AdminDashboard = () => {
  const [modalState, setModalState] = useState({ open: false, flow: 0 });

  const handleOpenModal = (flow: number) => {
    setModalState({ open: true, flow });
  };

  const handleCloseModal = () => {
    setModalState({ open: false, flow: 0 });
  };

  return (
    <Box>

      {/* Conditionally render modal */}
      {modalState.open && (
        <ModalsLayout setOpen={handleCloseModal} flow={modalState.flow}>
          {renderModalContent(modalState.flow, setModalState)}
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
            Dashboard
          </Text>
          <Flex gap={4}>
            <Button size="md" onClick={() => handleOpenModal(1)}>
              ADD STUDENTS
            </Button>
            <Button size="md">BULK UPLOAD</Button>
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

export default AdminDashboard;