"use client";
import React, { useState } from "react";
import SideBar from "@/components/sidebar/sidebar";
import { Flex, Box, Stack } from "@chakra-ui/react";
const Layout = ({ children }: any) => {
  const [open, setOpen] = useState<boolean>(false);
  return (
    <Flex w="full" h="full">
      <Box flex={0.5} bg={"green"}>
        <SideBar open={open} setOpen={setOpen} />
      </Box>
      <Box flex={3}>
        <Stack>
          <Box>
            
          </Box>
          <Box>{children}</Box>
        </Stack>
      </Box>
    </Flex>
  );
};

export default Layout;
