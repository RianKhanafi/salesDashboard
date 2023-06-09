import { extendTheme } from "@chakra-ui/react";
import { colors } from "./colors";
const breakpoints = {
  sm: "30em",
  md: "48em",
  lg: "62em",
  xl: "80em",
  "2xl": "96em",
};

export const theme = extendTheme({ colors, breakpoints });
