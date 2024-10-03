import NextLink from "next/link";
import baseUrl from "@/constants/baseUrl";
import { usePathname } from "next/navigation";
import React, { SetStateAction, useRef } from "react";
import {
  CloseButton,
  Flex,
  Icon,
  Text,
  Img,
  Box,
  useColorModeValue,
  useOutsideClick,
} from "@chakra-ui/react";
import { adminMenue } from "@/utils/navroutes/routes";

interface SideBarProps {
  open: boolean;
  setOpen: React.Dispatch<SetStateAction<boolean>>;
}

interface NavItem {
  route: string;
  Name: string;
  Icon: React.ElementType;
}

const SideBarNavLinks = ({ items, path }: { items: NavItem[], path: string }) => {
  const hoverColor = useColorModeValue("blue.100", "");
  const menuItemsColor = useColorModeValue("gray.200", "white.100");

  return (
    <Box w="100%" mb={5}>
      {items.map((item, key) => (
        <NextLink href={item.route} passHref key={key}>
          <Flex
            gap="4"
            px="20px"
            align="center"
            cursor="pointer"
            py={{ base: "8px", md: "12px" }}
            transition="all 0.3s ease-in-out"
            bg={path?.includes(item.route) ? "#F0F6FE" : "transparent"}
            color={path?.includes(item.route) ? baseUrl.app_color : menuItemsColor}
            borderRight={path?.includes(item.route) ? `3px solid ${baseUrl.app_color}` : "none"}
            _hover={{
              bg: hoverColor,
              color: baseUrl.app_color,
              borderRight: `3px solid ${baseUrl.app_color}`,
            }}
          >
            <Icon as={item.Icon} w={{ base: "16px", md: "18px" }} h="18px" />
            <Text fontWeight={500} fontSize={{ base: "12px", md: "14px" }}>
              {item.Name}
            </Text>
          </Flex>
        </NextLink>
      ))}
    </Box>
  );
};

const SideBar = ({ open, setOpen }: SideBarProps) => {
  const path = usePathname();
  const sideBarRef = useRef<HTMLDivElement>(null);

  useOutsideClick({
    ref: sideBarRef,
    handler: () => setOpen(false),
  });

  return (
    <Flex
      top={0}
      left={0}
      bg="white"
      zIndex={100}
      ref={sideBarRef}
      position="fixed"
      p={{ base: 4, md: 0 }}
      flexDirection="column"
      borderRight="1px solid #DCE4E8"
      w={{ base: "210px", md: "210px" }}
      h="100%"
      transform={{
        base: open ? "translateX(0)" : "translateX(-100%)",
        md: "translateX(0)",
      }}
      overflowY="scroll"
      transition="transform 0.5s ease-in-out"
    >
    
      <Flex mb={10} mt={10} justify="center" align="center" cursor="pointer">
        <CloseButton
          display={{ base: "block", md: "none" }}
          height="12px"
          width="12px"
          mr={4}
          mt={1}
          onClick={() => setOpen(false)}
        />
        <NextLink href="/dashboard2">
          <Img
            alt="logo"
            src="/gupa-network-logo.png"
            aria-label="gupa logo image"
            width={{ base: "100px", md: "143px" }}
          />
        </NextLink>
      </Flex>

      {/* Menu Sections */}
      <SideBarNavLinks items={adminMenue} path={path} />
    </Flex>
  );
};

export default SideBar;
