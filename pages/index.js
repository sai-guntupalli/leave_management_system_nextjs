import Head from "next/head";
import Card from "../components/card/Card";
import Hero from "../components/hero/Hero";
import Navbar from "../components/navbar/Navbar";
import { useFetchUser } from "../lib/user";

export default function Home() {
  const { user, error, isLoading } = useFetchUser();
  return (
    <>
      <Head>
        <title>Leave Management System</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Navbar isSignedIn={user} />
      <Hero />
    </>
  );
}
