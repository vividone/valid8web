import { ButtonStyles } from "./components/button";
import { extendTheme } from "@chakra-ui/react";
import { globalStyles } from "./styles";
import { inputStyles } from "./components/input";
import { CheckboxStyles } from "./components/checkbox";

export const theme = extendTheme({
  globalStyles,
  components: {
    Button: ButtonStyles,
    Input: inputStyles.components.Input,
    Checkbox:CheckboxStyles.components.Checkbox
  },
});
