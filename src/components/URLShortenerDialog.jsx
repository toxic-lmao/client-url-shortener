import {
  DialogBody,
  DialogContent,
  DialogFooter,
  DialogRoot,
  DialogTrigger,
  DialogCloseTrigger,
} from "@/components/ui/dialog";
import { HStack } from "@chakra-ui/react";
import {
  ClipboardButton,
  ClipboardInput,
  ClipboardRoot,
} from "@/components/ui/clipboard";
import { RiArrowRightUpLine } from "react-icons/ri";
import { Button } from "@/components/ui/button";
import { InputGroup } from "@/components/ui/input-group";
import { getUrl } from "../libs/getUrl";
import { useEffect, useState } from "react";

export const URLShortenerDialog = ({ url }) => {
  const [shortUrl, setShortUrl] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isDisabled, setIsDisabled] = useState(true);

  useEffect(() => {
    const isValidUrl = (str) => {
      try {
        new URL(str);
        return true;
      } catch (error) {
        return false;
      }
    };

    setIsDisabled(!isValidUrl(url.url));
  }, [url]);

  return (
    <HStack wrap="wrap" gap="4">
      <DialogRoot
        key="center"
        placement="center"
        motionPreset="slide-in-bottom"
      >
        <DialogTrigger asChild borderRadius="none">
          {isLoading ? (
            <Button size="lg" loading />
          ) : isDisabled ? (
            <Button size="lg" disabled>
              Get Link
            </Button>
          ) : (
            <Button
              size="lg"
              onClick={async () => {
                try {
                  setIsLoading(true);
                  const newUrl = await getUrl(url);
                  setShortUrl(newUrl);
                } catch (error) {
                  console.error("Error fetching shortened URL", error);
                } finally {
                  setIsLoading(false);
                }
              }}
            >
              Get Link
            </Button>
          )}
        </DialogTrigger>
        {shortUrl && (
          <DialogContent borderRadius="none">
            <DialogBody style={{ marginTop: "1em" }}>
              <ClipboardRoot maxW="300px" value={shortUrl}>
                <InputGroup width="full">
                  <ClipboardInput
                    disabled
                    value={shortUrl.url}
                    borderRadius="none"
                  />
                </InputGroup>
              </ClipboardRoot>
            </DialogBody>
            <DialogFooter>
              <ClipboardRoot value={shortUrl}>
                <ClipboardButton borderRadius="none" />
              </ClipboardRoot>
              <Button
                variant="surface"
                borderRadius="none"
                size="sm"
                onClick={() => window.open(shortUrl, "_blank")}
              >
                Go to URL <RiArrowRightUpLine />
              </Button>
            </DialogFooter>
            <DialogCloseTrigger onClick={() => setShortUrl(null)} />
          </DialogContent>
        )}
      </DialogRoot>
    </HStack>
  );
};
