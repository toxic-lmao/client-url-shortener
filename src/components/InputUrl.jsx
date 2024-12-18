import { Group, Input, InputAddon } from "@chakra-ui/react";

export const InputUrl = ({ setUrl }) => {
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUrl((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <Group attached>
      <Input
        size="lg"
        borderRadius="none"
        placeholder="Enter URL"
        name="url"
        onChange={handleInputChange}
        required
      />
      <InputAddon size="lg" borderRadius="none">
        /
      </InputAddon>
      <Input
        size="lg"
        borderRadius="none"
        placeholder="alias (if you need)"
        name="alias"
        onChange={handleInputChange}
      />
    </Group>
  );
};
