import { extendTheme } from "@chakra-ui/react";

const overrides = extendTheme({
  styles: {
    global: (props: any) => ({
      body: {
        fontFamily: "body",
        bg: "#000000",
      },
    }),
  },
});
export default overrides;
