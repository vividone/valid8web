

import { mode, StyleFunctionProps } from "@chakra-ui/theme-tools";


export const inputStyles = {
  components: {
    Input: {
      baseStyle: {
        field: {
          fontWeight: 400,
          borderRadius: "8px",
          border: "2px solid #E7E7E7",
          color: "blackAlpha.900"
        },
      },
      sizes: {
        lg: {
          field: {
            fontSize: "lg",
            padding: "24px",
            height: "54px",
          },
        },
        md: {
          field: {
            fontSize: "md",
            padding: "16px",
            height: "48px",
          },
        },
        sm: {
          field: {
            fontSize: "sm",
            padding: "12px",
            height: "40px",
          },
        },
      },
      variants: {
        auth: (props: StyleFunctionProps) => ({
          field: {
            fontWeight: "normal",
            color: mode("navy.700", "white")(props),
            bg: mode("transparent", "transparent")(props),
            borderWidth: "1px",
            borderColor: mode("#E7E6F2", "#E7E6F2")(props),
            borderRadius: "7px",
            _placeholder: { color: "secondaryGray.600", fontWeight: "400" },
            _focus: {
              border: "2px solid",
              borderColor: "#3C5DD2",
              transition: "border 0.02s ease-in-out",
            },
            height: "54px",
          },

        }),
        successful: (props: StyleFunctionProps) => ({
          field: {
            bg: "#E3FFFA",
            height: "54px",
            fontWeight: 500,
            border: "1px solid #E7E7E7",
            color: mode("green.300", "white")(props),
          },
        }),
        failed: (props: StyleFunctionProps) => ({
          field: {
            height: "54px",
            bg: "#FF000014",
            color: mode("#FF0000","#FF0000")(props),
            fontWeight: 500,
            border: "1px solid #E7E7E7",
          },

        }),
        logInput: (props: StyleFunctionProps) => ({
          field: {
            bg: "#EBEFFF",
            height: "54px",
            fontWeight: 500,
            border: "1px solid #E7E7E7",
            color: mode("#3C5DD2","#3C5DD2")(props),
          },
        })
      },
    },
  },
};
