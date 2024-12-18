import { Box, HStack, Heading } from "@chakra-ui/react";
import { InputUrl } from "./components/InputUrl";
import { Radio } from "./components/Radio";
import { useState } from "react";
import { URLShortenerDialog } from "./components/Dialog";

export default function App() {
  const [url, setUrl] = useState({});

  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      height="100vh"
      gap="4em"
    >
      <Heading size="4xl">URL Shortener</Heading>
      <HStack>
        <InputUrl setUrl={setUrl} />
        <URLShortenerDialog url={url} />
      </HStack>
      <Radio />
    </Box>
  );
}
