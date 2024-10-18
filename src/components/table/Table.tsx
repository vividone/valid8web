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
  TableContainer,
} from "@chakra-ui/react";
import { EyeIcon } from "../icons/icons";


type StudentData = {
  Student: string;
  Department: string;
  Status: "Active" | "Inactive";
  Action: string;
  [key: string]: string | string[] | undefined;
};

type LogsDataType = {
  Verifier: string;
  Details: string;
  Result: "Valid" | "Invalid";
  Timestamp: string[];
  Action: string;
};

type DynamicStudentTableProps = {
  data?: StudentData[] | LogsDataType | any; // Explicit type for array of StudentData
  Action?: (flow: number) => void;
};

const DynamicStudentTable: React.FC<DynamicStudentTableProps> = ({
  data = undefined,
  Action,
}) => {
  const studentsData: StudentData[] = [
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

  const currData: any = data ?? studentsData;
  const headers: any = currData.length > 0 ? Object.keys(currData[0]) : [];

  return (
    <Box
      px={3}
      border="1px solid"
      borderColor="#E7E7E7"
      borderRadius="md"
      boxShadow="xl"
      w="full"
      py={6}
      fontFamily={"Nunito"}
      overflowX={{ base: "scroll", md: "hidden" }} 
    >
      <TableContainer w="full">
        <Table variant="simple" size="md">
          <Thead>
            <Tr>
              {headers.map((header: any, index: any) => (
                <Th
                  key={index}
                  fontSize={{ base: "16px", md: "20px" }} // Adjust font size for mobile
                  fontWeight={800}
                  color={"blackAlpha.900"}
                  fontFamily={"Nunito,sans-serif"}
                  whiteSpace={{ base: "nowrap", md: "normal" }} // Prevent headers from wrapping on smaller screens
                >
                  {header}
                </Th>
              ))}
            </Tr>
          </Thead>
          <Tbody>
            {currData.map((student: any, rowIndex: any) => (
              <Tr key={rowIndex} height="70px">
                {headers.map((header: any, colIndex: any) => (
                  <React.Fragment key={colIndex}>
                    {header === "Status" ? (
                      student[header] === "Active" ? (
                        <Td
                          fontWeight={500}
                          fontSize={{ base: "14px", md: "16px" }} // Adjust font size for mobile
                          textColor={"#7000FA"}
                        >
                          <Box
                            px={6}
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
                          fontWeight={500}
                          fontSize={{ base: "14px", md: "16px" }} // Adjust font size for mobile
                          textColor={"#FF0000"}
                        >
                          <Box
                            px={6}
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
                        fontSize={{ base: "14px", md: "18px" }} // Adjust font size for mobile
                        fontWeight={500}
                        color={"#3C5DD2"}
                        fontFamily={"Nunito,sans-serif"}
                      >
                        <HStack gap={2} cursor={"pointer"}>
                          <Icon as={EyeIcon} />
                          <Text
                            fontSize={{ base: "14px", md: "16px" }} // Adjust font size for mobile
                            fontWeight={500}
                            onClick={() => Action && Action(1)}
                          >
                            VIEW
                          </Text>
                        </HStack>
                      </Td>
                    ) : header === "Result" ? (
                      <Td
                        fontSize={{ base: "14px", md: "18px" }} // Adjust font size for mobile
                        fontWeight={500}
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
                        fontSize={{ base: "14px", md: "18px" }} // Adjust font size for mobile
                        fontWeight={500}
                        color={"blackAlpha.900"}
                        fontFamily={"Nunito,sans-serif"}
                      >
                        <Box>
                          <Box>{student[header][0]}</Box>
                          <Box
                            color={"#8C8B92"}
                            fontSize={{ base: "14px", md: "16px" }} // Adjust font size for mobile
                            fontWeight={400}
                          >
                            {student[header][1]}
                          </Box>
                        </Box>
                      </Td>
                    ) : (
                      <Td
                        fontSize={{ base: "14px", md: "18px" }} // Adjust font size for mobile
                        fontWeight={500}
                        color={"blackAlpha.900"}
                        fontFamily={"Nunito,sans-serif"}
                      >
                        {student[header]}
                      </Td>
                    )}
                  </React.Fragment>
                ))}
              </Tr>
            ))}
          </Tbody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default DynamicStudentTable;
