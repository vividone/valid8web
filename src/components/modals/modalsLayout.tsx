"use client";
import React, { ReactNode } from "react";
import { Flex, Text, Box, CloseButton, Icon } from "@chakra-ui/react";

interface ModalsLayoutProps {
  children: ReactNode;
  flow: number;
  setOpen: (open: boolean) => void;
  counter?: boolean;
  title?: string;
  padding?: number;
  Mainpadding?: string;
  boxShadow?: string;
  borderRadius?: any;
  mt?: number;
  pt?: number;
  boxStyles?: boolean;
  formBoxStyles?: boolean;
  bg?: string;
  width?: string;
  height?:string;
  border?: string;
}

const defaultBoxStyles = {
  borderRadius: "md",
  border: "1px solid",
  borderColor: "#E7E7E7",
};

const ModalsLayout = ({
  children,
  flow,
  setOpen,
  counter = true,
  title,
  Mainpadding,
  borderRadius = "md",
  boxShadow = "xl",
  pt,
  mt,
  height="100%",
  boxStyles = false,
  formBoxStyles = true,
  ...props
}: ModalsLayoutProps) => {
  return (
    <Box
      mt={mt}
      top={0}
      left={0}
      zIndex={50}
      w="100%"
      minH={height}
      bg="white"
      borderRadius={borderRadius}
      position="absolute"
      fontStyle="Nunito"
      p={Mainpadding || { base: 8, sm: 2, md: 10 }}
      sx={boxStyles ? defaultBoxStyles : undefined}

    >
      <Flex
        pt={pt}
        mx="auto"
      
        alignItems="center"
        justifyContent="space-between"
        w={{ base: "40%", sm: "90%", md: "80%" }}
      >
        <Box>
          <Text as="h3" fontWeight="700" fontSize="24px">
            {title}
          </Text>
          {counter && (
            <Text as="span" fontSize="16px" textColor="#8C8B92">
              Step {flow} of 2
            </Text>
          )}
        </Box>

        <Box>
          <Icon
            as={CloseButton}
            cursor="pointer"
            onClick={() => setOpen(false)}
          />
        </Box>
      </Flex>

      <Box
        p={4}
        mx="auto"
        sx={formBoxStyles ? defaultBoxStyles : undefined}
        boxShadow={boxShadow}
        width={{ sm: "90%", md: "65%" }}
        {...props}
   
      >
        {children}
      </Box>
    </Box>
  );
};

export default ModalsLayout;