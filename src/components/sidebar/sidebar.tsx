import NextLink from "next/link";
import {
  CloseButton,
  Flex,
  Icon,
  Text,
  Img,
  Box,
  HStack,
  Stack,
  useColorModeValue,
  useOutsideClick,
} from "@chakra-ui/react";
import Link from "next/link";
import baseUrl from "@/constants/baseUrl";
import { usePathname } from "next/navigation";
import { adminMenue } from "@/utils/navroutes/routes";
import React, { SetStateAction, useRef } from "react";

interface SideBarProps {
  open: boolean;
  setOpen: React.Dispatch<SetStateAction<boolean>>;
}

interface NavItem {
  route: string;
  Name: string;
  Icon: React.ElementType;
}

const SideBarNavLinks = ({
  items,
  path,
}: {
  items: NavItem[];
  path: string;
}) => {
  return (
    <Box w="100%" mb={5}>
      {items.map((item, key) => (
        <NextLink href={item.route} passHref key={key}>
          <Flex
            gap={4}
            mb={2}
            px="20px"
            align="center"
            cursor="pointer"
            py={{ base: "8px", md: "12px" }}
            transition="all 0.3s ease-in-out"
            bg={path?.includes(item.route) ? baseUrl.app_color : "transparent"}
            color={path?.includes(item.route) ? "white" : "black"}
            borderRight={
              path?.includes(item.route)
                ? `3px solid ${baseUrl.app_color}`
                : "none"
            }
            _hover={{
              bg: baseUrl.app_color,
              color: "white",
              transition: "0.3s ease",
            }}
          >
            <Icon
              as={item.Icon}
              w={{ base: "16px", sm: "20px", md: "22px" }}
              h={{ sm: "20px", md: "22px" }}
            />
            <Text
              fontWeight={500}
              fontSize={{ base: "12px", sm: "16px", md: "20px" }}
            >
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

  // const titleGreyText = useColorModeValue("brandgrey.100", "black");
  const BlackText = useColorModeValue("brandgrey.100", "black");

  useOutsideClick({
    ref: sideBarRef,
    handler: () => setOpen(false),
  });

  return (
    <Flex
      h="100%"
      top={0}
      left={0}
      zIndex={{ sm: 100}}
      bg="white"
      boxShadow={"xl"}
      color="black"
      ref={sideBarRef}
      position="fixed"
      p={{ base: 4, md: 0 }}
      flexDirection="column"
      w={{ base: "210px", md: "250px" }}
      fontFamily={"Nunito,sans-serif"}
      transform={{
        base: open ? "translateX(0)" : "translateX(-100%)",
        md: "translateX(0)",
      }}
      transition="transform 0.4s ease"
    >
      {/* Logo and Close Button */}
      <Flex mb={10} mt={10} alignItems="center">
        <Icon
          as={CloseButton}
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
            width={{ base: "100px", sm: "120px", md: "200px" }} // Adjust for responsiveness
          />
        </NextLink>
      </Flex>

      {/* Menu Sections */}
      <SideBarNavLinks items={adminMenue} path={path} />

      {/* title */}
      <Box fontSize={{ sm: "18px", md: "20px" }} p={4}>
        <Stack lineHeight={"20px"}>
          <Box color={BlackText}>Superadmin</Box>
          <Box as="p" color={"#8C8B92"}>
            Zainab Babalola
          </Box>
        </Stack>
        <HStack
          fontSize={{ base: "16px", sm: "14px", md: "16px" }}
          color={"#8C8B92"}
          // color={titleGreyText}
          justify={"space-between"}
          mt={8}
        >
          <Link href={""}>Privacy</Link>
          <Link href={""}>Terms</Link>
          <Link href={""}>Log out</Link>
        </HStack>
      </Box>
    </Flex>
  );
};

export default SideBar;
