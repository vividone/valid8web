import { ButtonStyles } from "./components/button";
import { extendTheme } from "@chakra-ui/react";
import { globalStyles } from "./styles";

export const theme = extendTheme({
  globalStyles,
  components: {
    Button: ButtonStyles,
  },
});
