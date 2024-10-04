import { mode, StyleFunctionProps } from "@chakra-ui/theme-tools";

export const CheckboxStyles = {
  components: {
    Checkbox: {
      baseStyle: {
        control: {
          borderRadius: "4px",
          borderWidth: "1px",
        },
        label: {
          fontWeight: 400,
        },
      },
      sizes: {
        lg: {
          control: {
            width: "24px",
            height: "24px",
          },
        },
        md: {
          control: {
            width: "20px",
            height: "20px",
          },
        },
        sm: {
          control: {
            width: "16px",
            height: "16px",
          },
        },
      },
      variants: {
        auth: (props: StyleFunctionProps) => ({
          control: {
            borderColor: mode("#8C8B92", "#8C8B92")(props),
            _focus: {
              boxShadow: "0 0 0 2px blue.200",
            },
            width: "20px",
            height: "20px",
            borderRadius: "0px",
          },
          label: {
            color: mode("gray.700", "white")(props),
          },
        }),
      },
    },
  },
};
