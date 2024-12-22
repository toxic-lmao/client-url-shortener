import { HStack } from "@chakra-ui/react";
import { RadioCardItem, RadioCardRoot } from "@/components/ui/radio-card";
import providers from "../libs/providers.json";

export const Providers = () => {
  return (
    <RadioCardRoot defaultValue="ulvis">
      <HStack align="stretch">
        {providers.map((provider) => (
          <RadioCardItem
            label={provider.title}
            description={provider.description}
            key={provider.value}
            value={provider.value}
            name="provider"
            borderRadius="none"
          />
        ))}
      </HStack>
    </RadioCardRoot>
  );
};
