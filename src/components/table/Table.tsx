import React from "react";
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Box,
  Icon,
  HStack,
  Text,
  VStack,
  TableContainer,
} from "@chakra-ui/react";
import { EyeIcon } from "../icons/icons";
import { Container } from "../topbar/SearchBar";
import { BsBox } from "react-icons/bs";

const DynamicStudentTable = ({ data = undefined, Action }: any) => {
  const studentsData = [
    {
      Student: "Samuel Oyedele",
      Department: "Law",
      Status: "Active",
      Action: "",
    },
    {
      Student: "Zainab Babalola",
      Department: "Law",
      Status: "Active",
      Action: "",
    },
    {
      Student: "Tiwatope Shanu",
      Department: "Science",
      Status: "Active",
      Action: "",
    },
    {
      Student: "Olaolu Jayson",
      Department: "Humanities",
      Status: "Inactive",
      Action: "",
    },
  ];

  // Extract headers from the first object in the data array
  const currData = data !== undefined ? data : studentsData;
  const headers = currData.length > 0 ? Object.keys(currData[0]) : [];
  return (
    <Container boxShadow="xl" py={6} fontFamily={"Nunito"} w="full">
      <TableContainer w="full">
        <Table variant="simple" size="md">
          <Thead>
            <Tr>
              {/* Dynamic headers */}
              {headers.map((header, index) => (
                <Th
                  key={index}
                  fontSize="20px"
                  fontWeight={800}
                  //   color={"#000000"}
                  color={"blackAlpha.900"}
                  fontFamily={"Nunito,sans-serif"}
                >
                  {header}
                </Th>
              ))}
            </Tr>
          </Thead>
          <Tbody>
            {/* Dynamic rows */}
            {currData.map((student: any, rowIndex: number) => (
              <Tr key={rowIndex} height="70px">
                {headers.map((header, colIndex) => (
                  <>
                    {header === "Status" ? (
                      student[header] === "Active" ? (
                        <Td
                          fontWeight={600}
                          fontSize={"16px"}
                          textColor={"#7000FA"}
                        >
                          <Box
                            px={8}
                            py={2}
                            as="span"
                            bg={"#7000FA14"}
                            textAlign={"center"}
                            borderRadius={"30px"}
                          >
                            Active
                          </Box>
                        </Td>
                      ) : (
                        <Td
                          fontWeight={600}
                          fontSize={"16px"}
                          textColor={"#FF0000"}
                        >
                          <Box
                            px={8}
                            py={2}
                            as="span"
                            bg={"#FF000014"}
                            textAlign={"center"}
                            borderRadius={"30px"}
                          >
                            Inactive
                          </Box>
                        </Td>
                      )
                    ) : header === "Action" ? (
                      <Td
                        key={colIndex}
                        fontSize="18px"
                        fontWeight={600}
                        color={"#3C5DD2"}
                        fontFamily={"Nunito,sans-serif"}
                      >
                        <HStack gap={2} cursor={"pointer"}>
                          <Icon as={EyeIcon} />
                          <Text
                            fontSize={"16px"}
                            fontWeight={600}
                            onClick={() => Action()}
                          >
                            VIEW
                          </Text>
                        </HStack>
                      </Td>
                    ) : header === "Result" ? (
                      <Td
                        key={colIndex}
                        fontSize="18px"
                        fontWeight={600}
                        color={"blackAlpha.900"}
                        fontFamily={"Nunito,sans-serif"}
                      >
                        {student[header] === "Valid" ? (
                          <Box color={"#002AFF"}>{student[header]}</Box>
                        ) : (
                          <Box color={"#FF0000"}>{student[header]}</Box>
                        )}
                      </Td>
                    ) : Array.isArray(student[header]) ? (
                      <Td
                        key={colIndex}
                        fontSize="18px"
                        fontWeight={600}
                        //   color={"#000000"}
                        color={"blackAlpha.900"}
                        fontFamily={"Nunito,sans-serif"}
                      >
                        <Box>
                          <Box>{student[header][0]}</Box>
                          <Box
                            color={"#8C8B92"}
                            fontSize={"16px"}
                            fontWeight={400}
                          >
                            {student[header][1]}
                          </Box>
                        </Box>
                      </Td>
                    ) : (
                      <Td
                        key={colIndex}
                        fontSize="18px"
                        fontWeight={600}
                        //   color={"#000000"}

                        color={"blackAlpha.900"}
                        fontFamily={"Nunito,sans-serif"}
                      >
                        {student[header]}
                      </Td>
                    )}
                  </>
                ))}
              </Tr>
            ))}
          </Tbody>
        </Table>
      </TableContainer>
    </Container>
  );
};

export default DynamicStudentTable;
