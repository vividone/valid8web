import { ButtonStyles } from "./components/button";
import { extendTheme } from "@chakra-ui/react";
import { globalStyles } from "./styles";
import { inputStyles } from "./components/input";
import { CheckboxStyles } from "./components/checkbox";
import { breakpoints } from "./foundations/breakpoints";

const config = {
  initialColorMode: "light", 
  useSystemColorMode: false, 
};

export const theme = extendTheme({
  config,
  breakpoints,
  globalStyles,
  components: {
    Button: ButtonStyles,
    Input: inputStyles.components.Input,
    Checkbox:CheckboxStyles.components.Checkbox
  },
});
