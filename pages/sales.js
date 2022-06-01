// Chakra imports
import { Box, Flex, Text, useColorModeValue } from "@chakra-ui/react";
// Custom components
import Card from "../components/Card/Card";
import CardHeader from "../components/Card/CardHeader";
import React from "react";
import { useFetchUser } from "../lib/user";
import Navbar from "../components/navbar/Navbar";
import BigCard from "../components/Card/BigCard";

const SalesOverview = () => {
  const title = "Some title";
  const percentage = 10;
  const chart = "Some Chart";
  const textColor = useColorModeValue("gray.700", "white");
  const { user, error, isLoading } = useFetchUser();

  return (
    <>
      <Navbar isSignedIn={user} />
      <BigCard />
    </>
  );
};

export default SalesOverview;
