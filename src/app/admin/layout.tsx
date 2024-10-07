"use client";
import React, { useState } from "react";
import SideBar from "@/components/sidebar/sidebar";
import { Flex, Box } from "@chakra-ui/react";
import SearchBar from "@/components/topbar/SearchBar";
const Layout = ({ children }: any) => {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <Flex w="full" h="full">
      <Box flex={{ md: 0.7 }}>
        <SideBar open={open} setOpen={setOpen} />
      </Box>
      <Box flex={{ md: 3 }} p={4} px={8} width={"100%"}>
        <Box pt={6}>
          <SearchBar open={open} setOpen={setOpen} />
        </Box>
        <Box>{children}</Box>
      </Box>
    </Flex>
  );
};

export default Layout;
