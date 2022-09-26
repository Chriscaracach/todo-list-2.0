import {
  Container,
  TableContainer,
  Table,
  Thead,
  Tr,
  Th,
  Tbody,
  Td,
  Stack,
  Button,
} from "@chakra-ui/react";
import Navbar from "../src/components/navbar";

import { useEffect } from "react";
import Router from "next/router";
import { useAuth } from "../src/contexts/authContext";

export default function Tasks({ tasks }) {
  const user = useAuth(); //!ESTO NO ANDA, Tira unndefined
  console.log(user);

  useEffect(() => {
    if (!user) {
      Router.push("/login");
    }
  }, [user]);

  return (
    <>
      <Navbar />
      <Container maxW={"5xl"}>
        <Stack
          flex={{ base: 1, md: 0 }}
          justify={"flex-end"}
          direction={"row"}
          spacing={6}
        >
          <Button
            colorScheme={"green"}
            bg={"green.400"}
            px={6}
            _hover={{
              bg: "green.500",
            }}
          >
            Add new task
          </Button>
        </Stack>
        <TableContainer>
          <Table variant="simple">
            <Thead>
              <Tr>
                <Th>Task</Th>
                <Th>Status</Th>
              </Tr>
            </Thead>
            <Tbody>
              <Tr>
                <Td>millimetres (mm)</Td>
                <Td>25.4</Td>
              </Tr>
              <Tr>
                <Td>centimetres (cm)</Td>
                <Td>30.48</Td>
              </Tr>
              <Tr>
                <Td>metres (m)</Td>
                <Td>0.91444</Td>
              </Tr>
            </Tbody>
          </Table>
        </TableContainer>
      </Container>
    </>
  );
}

export async function getStaticProps() {
  const tasks = ["una tarea"];

  return {
    props: {
      tasks,
    },
  };
}
