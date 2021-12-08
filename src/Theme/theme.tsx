import { extendTheme } from "@chakra-ui/react";

const overrides = extendTheme({
  styles: {
    global: (props: {
      html: { width: string };
      body: {
        width: string;
        fontFamily: string;
        bg: string;
        display: string;
        justifyContent: string;
        overflowX: string;
      };
    }) => ({
      html: {
        width: "100%",
      },
      body: {
        width: "100%",
        fontFamily: "body",
        bg: "#181818",
        display: "flex",
        justifyContent: "center",
        overflowX: "hidden",
      },
    }),
  },
});
export default overrides;
