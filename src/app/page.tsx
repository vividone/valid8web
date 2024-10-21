"use client";
import {
  Box,
  Flex,
  Text,
  Checkbox,
  Center,
  Image,
  Input,
  Button,
  FormControl,
  FormLabel,
  Stack,
} from "@chakra-ui/react";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  return (
    <Center
      height="100vh"
      overflowY={"hidden"}
      width={{ base: "100%", md: "full" }}
    >
      {/* Main Stack */}
      <Stack
        width="100%"
        height="full"
        justifyContent="center"
        alignItems="center"
      >
        {/* Logo Section */}
        <Center width="100%" marginBottom={{ base: 3, md: 2, lg: 4 }}>
          <Image
            alt="logo"
            height={{ sm: "50px", md: "65px" }}
            src="/images/auth/logo.png"
            width={{ base: "200px", md: "242px" }}
          />
        </Center>

        {/* Form Box */}
        <Center w={"full"}>
          <Box
            gap={2}
            boxShadow="xl"
            borderRadius="md"
            background="whiteAlpha.900"
            paddingY={{ base: 4, sm: 10, md: 12 }}
            paddingX={{ base: 4, sm: 4, md: 10 }}
            width={{ base: "80%", sm: "80%", md: "70%", lg: "628px" }}
            // height={{ base: "80%", sm: "1250px", md: "480px", lg: "480px" }}
          >
            <Stack gap={4}>
              {/* Email Input */}
              <FormControl>
                <FormLabel
                  fontFamily={"Kanit,sans-serif"}
                  fontWeight={400}
                  fontSize={{ base: "20px", sm: "18px", md: "20px" }}
                >
                  Email Address
                </FormLabel>
                <Input
                  type="email"
                  variant="auth"
                  placeholder="e.g posteb67@gmail.com"
                />
              </FormControl>

              {/* Password Input */}
              <FormControl>
                <FormLabel
                  fontFamily={"Kanit,sans-serif"}
                  fontWeight={400}
                  fontSize={{ base: "20px", sm: "18px", md: "20px" }}
                >
                  Password
                </FormLabel>
                <Input
                  type="password"
                  variant="auth"
                  placeholder="Enter Password"
                />
              </FormControl>

              {/* Remember Me Section */}
              <Flex alignItems="center" gap={3}>
                <Checkbox variant="auth" />
                <Text fontFamily={"Nunito,sans-serif"} fontWeight={500}>
                  Remember me
                </Text>
              </Flex>

              {/* Login Button */}
              <Center marginTop={12} width="full" mb={{ sm: 5, md: 0 }}>
                <Button
                  variant="auth"
                  onClick={() => router.push("/bussinessadmin/dashboard")}
                >
                  LOGIN
                </Button>
              </Center>
            </Stack>
          </Box>
        </Center>
      </Stack>
    </Center>
  );
}
