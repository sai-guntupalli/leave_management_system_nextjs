import { Button } from "@chakra-ui/react";

const SignOutButton = () => {
  return (
    <Button
      as={"a"}
      fontSize={"sm"}
      fontWeight={400}
      variant={"link"}
      href={"/api/auth/logout"}
    >
      Sign Out
    </Button>
  );
};

export default SignOutButton;
