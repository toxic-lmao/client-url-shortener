import { Box, HStack, Heading } from "@chakra-ui/react";
import { lazy, Suspense, useState } from "react";

const InputUrl = lazy(() => import("./components/InputUrl"));
const Providers = lazy(() => import("./components/Providers"));
const URLShortenerDialog = lazy(() =>
  import("./components/URLShortenerDialog")
);

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
      <Suspense fallback={<div>Loading...</div>}>
        <HStack>
          <InputUrl setUrl={setUrl} />
          <URLShortenerDialog url={url} />
        </HStack>
        <Providers />
      </Suspense>
    </Box>
  );
}
