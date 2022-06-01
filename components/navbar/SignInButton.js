import { Button } from "@chakra-ui/react";

const SignInButton = () => {
  return (
    <Button
      as={"a"}
      fontSize={"sm"}
      fontWeight={400}
      variant={"link"}
      href={"/api/auth/login"}
    >
      Sign In
    </Button>
  );
};

export default SignInButton;
