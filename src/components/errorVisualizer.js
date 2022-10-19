import { Alert, AlertIcon, AlertDescription, Text } from "@chakra-ui/react";

export default function ErrorVisualizer({ message, type }) {
  return (
    <Alert status={type} variant="left-accent">
      <AlertIcon w={4} h={4} />
      <AlertDescription>
        <Text fontSize="xs">{message}</Text>
      </AlertDescription>
    </Alert>
  );
}
