import { Container, Spacer, Flex } from "@chakra-ui/react";
import Head from "next/head";
import Navbar from "../components/navbar/Navbar";
import LocationSelect from "../components/select/LocationSelect";
import HolidaysTable from "../components/table/HolidaysTable";
import { useFetchUser } from "../lib/user";

export default function Holidays() {
  const { user, error, isLoading } = useFetchUser();
  return (
    <>
      <Head>
        <title>Leave Management System</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Navbar isSignedIn={user} />
      <Container maxW="5xl" p={{ base: 5, md: 5 }}>
        <HolidaysTable />
      </Container>
    </>
  );
}
