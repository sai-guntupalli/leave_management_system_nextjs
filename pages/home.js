import Navbar from "../components/navbar/Navbar";
import { useFetchUser } from "../lib/user";
import BigCard from "../components/Card/BigCard";

const Home = () => {
  const { user, error, isLoading } = useFetchUser();

  return (
    <>
      <Navbar isSignedIn={user} />
      <BigCard />
    </>
  );
};

export default Home;
