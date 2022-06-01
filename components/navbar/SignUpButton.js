import { Button } from "@chakra-ui/react";

const SignUpButton = () => {
  return (
    <Button
      as={"a"}
      display={{ base: "none", md: "inline-flex" }}
      fontSize={"sm"}
      fontWeight={600}
      color={"white"}
      bg={"teal.400"}
      href={"/api/auth/signup"}
      _hover={{
        bg: "teal.800",
      }}
    >
      Sign Up
    </Button>
  );
};

export default SignUpButton;
