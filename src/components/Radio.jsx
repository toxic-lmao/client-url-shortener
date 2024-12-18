import { HStack } from "@chakra-ui/react";
import {
  RadioCardItem,
  RadioCardLabel,
  RadioCardRoot,
} from "@/components/ui/radio-card";

export const Radio = () => {
  return (
    <RadioCardRoot defaultValue="ulvis">
      <HStack align="stretch">
        {items.map((item) => (
          <RadioCardItem
            label={item.title}
            description={item.description}
            key={item.value}
            value={item.value}
            name="provider"
            borderRadius="none"
          />
        ))}
      </HStack>
    </RadioCardRoot>
  );
};

const items = [{ value: "ulvis", title: "ulvis", description: "Recommended" }];
