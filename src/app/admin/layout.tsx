"use client";
import React, { useState, ReactNode } from "react";
import SideBar from "@/components/sidebar/sidebar";
import { Flex, Box } from "@chakra-ui/react";
import SearchBar from "@/components/topbar/SearchBar";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <Flex w="full" h="full" bg={"transparent "} position={"relative"}>
      <Box minW={{ base: "fit-content", sm: "fit-content", md: "260px" }}>
        <SideBar open={open} setOpen={setOpen} />
      </Box>
      <Box flex={{ md: 3 }} p={4} px={8} width={{ sm: "100%", md: "80%" }} overflowX={"scroll"}>
        <Box pt={6}>
          <SearchBar setOpen={setOpen} />
        </Box>
        <Box>{children}</Box>
      </Box>
    </Flex>
  );
};

export default Layout;