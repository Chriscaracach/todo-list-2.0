import "../styles/globals.css";
import { ChakraProvider } from "@chakra-ui/react";
import { AuthContextProvider } from "../src/contexts/authContext";

function MyApp({ Component, pageProps }) {
  return (
    <AuthContextProvider>
      <ChakraProvider>
        <Component {...pageProps} />
      </ChakraProvider>
    </AuthContextProvider>
  );
}

export default MyApp;
