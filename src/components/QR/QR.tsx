import React from "react";
import {
  Button,
  Image,
  Center,
} from "@chakra-ui/react";
const QR = () => {
  return (
    <Center flexDirection={"column"}>
      <Center>
        <Image
          src="/images/dashboard/QR.png"
          alt="Qrcode"
          w={"345.61px"}
          height={"338px"}
        />
      </Center>
      <Center mt={8} mb={8}>
        <Button>dOWNLOAD QR CODE</Button>
      </Center>
    </Center>
  );
};

export default QR;
