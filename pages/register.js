import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  HStack,
  InputRightElement,
  Stack,
  Button,
  Heading,
  Text,
  useColorModeValue,
  Link,
} from "@chakra-ui/react";
import { useState } from "react";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import { createUser } from "../firebase/auth/create_user_with_email";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";

export default function SignupCard() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <Flex
      minH={"100vh"}
      align={"center"}
      justify={"center"}
      bg={useColorModeValue("gray.50", "gray.800")}
    >
      <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
        <Stack align={"center"}>
          <Heading fontSize={"4xl"} textAlign={"center"}>
            Register new user
          </Heading>
        </Stack>
        <Box
          rounded={"lg"}
          bg={useColorModeValue("white", "gray.700")}
          boxShadow={"lg"}
          p={8}
        >
          <Stack spacing={4}>
            <Formik
              initialValues={{
                firstName: "",
                lastName: "",
                email: "",
                password: "",
              }}
              validationSchema={Yup.object({
                firstName: Yup.string()
                  .max(15, "Must be 15 characters or less")
                  .required("Required"),
                lastName: Yup.string()
                  .max(20, "Must be 20 characters or less")
                  .required("Required"),
                email: Yup.string()
                  .email("Invalid email address")
                  .required("Required"),
                password: Yup.string().required("Required"),
              })}
              onSubmit={(values) => {
                createUser(values.email, values.password);
              }}
            >
              {({ handleSubmit }) => (
                <form onSubmit={handleSubmit}>
                  <HStack>
                    <Box>
                      <FormControl isRequired>
                        <FormLabel>First Name</FormLabel>
                        <Field
                          as={Input}
                          name="firstName"
                          type="text"
                          variant="filled"
                        />
                      </FormControl>
                    </Box>

                    <Box>
                      <FormControl isRequired>
                        <FormLabel>Last Name</FormLabel>
                        <Field
                          as={Input}
                          name="lastName"
                          type="text"
                          variant="filled"
                        />
                      </FormControl>
                    </Box>
                  </HStack>

                  <FormControl id="email" isRequired>
                    <FormLabel>Email address</FormLabel>
                    <Field
                      as={Input}
                      name="email"
                      type="email"
                      variant="filled"
                    />
                  </FormControl>

                  <FormControl id="password" isRequired>
                    <FormLabel>Password</FormLabel>
                    <InputGroup>
                      <Field
                        as={Input}
                        name="password"
                        type={showPassword ? "text" : "password"}
                        variant="filled"
                      />

                      <InputRightElement h={"full"}>
                        <Button
                          variant={"ghost"}
                          onClick={() =>
                            setShowPassword((showPassword) => !showPassword)
                          }
                        >
                          {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                        </Button>
                      </InputRightElement>
                    </InputGroup>
                  </FormControl>

                  <HStack pt={2} direction="row" justify="space-around">
                    <Link href="/">
                      <Button
                        bg={"gray.200"}
                        color={"black"}
                        _hover={{
                          bg: "gray.300",
                        }}
                      >
                        Go back
                      </Button>
                    </Link>
                    <Button
                      type="submit"
                      loadingText="Submitting"
                      bg={"blue.400"}
                      color={"white"}
                      _hover={{
                        bg: "blue.500",
                      }}
                    >
                      Register
                    </Button>
                  </HStack>
                </form>
              )}
            </Formik>

            <Stack pt={6}>
              <Text align={"center"}>
                Already a user?{" "}
                <Link color={"blue.400"} href="/login">
                  Login
                </Link>
              </Text>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
}
