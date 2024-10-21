"use client";
import React, { useState } from "react";
import { Flex, Text, Box, Button } from "@chakra-ui/react";
import Table from "@/components/table/Table";
import { InfoBox } from "@/components/modals/CustomComponents";
import ModalsLayout from "@/components/modals/modalsLayout";
import VerifiersForm from "@/components/forms/verifiers/Verifiers";

// Data for InfoBox cards
const infoBoxData = [
  {
    id: "1",
    logo: "/images/dashboard/pseudo1.png",
    title: "Verifiers",
    value: 10000,
  },
  {
    id: "2",
    logo: "/images/dashboard/pseudo3.png",
    title: "Active",
    value: 5000,
  },
  {
    id: "3",
    logo: "/images/dashboard/pseudo3.png",
    title: "Disabled",
    value: 50,
  },
];

// Helper function to render modal content based on flow state
const renderModalContent = (flow: number, setFlow: (val: number) => void) => {
  switch (flow) {
    case 1:
      return <VerifiersForm flow={flow} setFlow={setFlow} />;
    default:
      return null;
  }
};

const Verifiers = () => {
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

  return (
    <Box>
      {/* Conditionally render modal */}
      {modalState.open && (
        <ModalsLayout
          setOpen={handleCloseModal}
          flow={modalState.flow}
          counter={false}
          title="Verifiers"
        >
          {renderModalContent(modalState.flow, setFlow)}
        </ModalsLayout>
      )}

      <Box py={8} w="full">
        {/* Header */}
        <Flex
          flex={1}
          alignItems="center"
          justify="space-between"
          flexDirection={{ sm: "column", md: "row" }}
          flexWrap={{ base: "wrap", sm: "wrap", md: "nowrap" }}
        >
          <Text fontWeight="bold" fontSize={{ base: "20px", md: "24px" }}>
            Verifiers
          </Text>
          <Flex gap={4} flex={3}>
            <Flex
              w={"90%"}
              gap={{ sm: 2, md: 4 }}
              ml={{ sm: 0, md: "auto" }}
              justify={"flex-end"}
            >
              <Button
                mr={4}
                size={{ base: "sm", md: "md" }} // Responsive sizes
                onClick={() => handleOpenModal(1)}
              >
                ADD VERIFIER
              </Button>
              <Button size={{ base: "sm", md: "md" }}>BULK UPLOAD</Button>
            </Flex>
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

export default Verifiers;
