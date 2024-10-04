import NextLink from "next/link";
import { usePathname } from "next/navigation";
import React, { SetStateAction, useRef } from "react";
import {
  CloseButton,
  Flex,
  Icon,
  Text,
  Img,
  Box,
  // useColorModeValue,
  useOutsideClick,
} from "@chakra-ui/react";
import { adminMenue } from "@/utils/navroutes/routes";
import baseUrl from "@/constants/baseUrl";
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
            color={"black"}
            borderRight={path?.includes(item.route) ? `3px solid ${baseUrl.app_color}` : "none"}
            _hover={{
              bg: baseUrl.app_color,
              color: "white",
              transition:"0.4s ease-in-out"
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
      zIndex={100}
      bg="white.100"
      // boxShadow= "0px 20px 10px -2px" 
      color={"black"}
      ref={sideBarRef}
      position="fixed"
      p={{ base: 4, md: 0 }}
      flexDirection="column"
      w={{ base: "210px", md: "210px" }}
      h="100%"
      transform={{
        base: open ? "translateX(0)" : "translateX(-100%)",
        md: "translateX(0)",
      }}
      
      transition="transform 3s ease-in-out"
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
            src="/images/auth/logo.png"
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
