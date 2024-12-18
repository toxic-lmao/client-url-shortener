import { HStack } from "@chakra-ui/react";
import { Button } from "@/components/ui/button";
import {
  DialogActionTrigger,
  DialogBody,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogRoot,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  ClipboardButton,
  ClipboardInput,
  ClipboardRoot,
} from "@/components/ui/clipboard";
import { InputGroup } from "@/components/ui/input-group";
import { getUrl } from "../libs/getUrl";
import { useState } from "react";

export const URLShortenerDialog = ({ url }) => {
  const [shortUrl, setShortUrl] = useState("");

  return (
    <HStack wrap="wrap" gap="4">
      <DialogRoot
        key="center"
        placement="center"
        motionPreset="slide-in-bottom"
      >
        <DialogTrigger asChild borderRadius="none">
          <Button
            size="lg"
            onClick={async () => {
              try {
                const newUrl = await getUrl(url);
                setShortUrl(newUrl);
              } catch (error) {
                console.error("Error fetching shortened URL", error);
              }
            }}
          >
            Get Link
          </Button>
        </DialogTrigger>
        <DialogContent borderRadius="none">
          <DialogHeader>
            <DialogTitle>Short URL is ready! 🎉</DialogTitle>
          </DialogHeader>
          <DialogBody>
            <ClipboardRoot maxW="300px" value={shortUrl}>
              <InputGroup width="full">
                <ClipboardInput value={shortUrl} borderRadius="none" />
              </InputGroup>
            </ClipboardRoot>
          </DialogBody>
          <DialogFooter>
            <DialogActionTrigger asChild>
              <Button variant="outline" borderRadius="none">
                Cancel
              </Button>
            </DialogActionTrigger>
            <ClipboardRoot value={shortUrl}>
              <ClipboardButton borderRadius="none" />
            </ClipboardRoot>
          </DialogFooter>
        </DialogContent>
      </DialogRoot>
    </HStack>
  );
};
