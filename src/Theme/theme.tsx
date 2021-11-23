import { extendTheme } from "@chakra-ui/react";

const overrides = extendTheme({
  styles: {
    global: (props: any) => ({
      html: {
        width: "100%",
      },
      body: {
        width: "100%",
        fontFamily: "body",
        bg: "#000000",
        display: "flex",
        justifyContent: "center",
        overflowX: "hidden",
      },
    }),
  },
});
export default overrides;
