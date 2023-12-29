import { useEffect } from "react";
import Services from "./Services";
import HeroSection from "./components/HeroSection";
import { useGlobalContext } from "./context";

const Home = () => {
  const { updateHomePage } = useGlobalContext();

  useEffect(() => updateHomePage(), []);

  return (
    <>
      <HeroSection />
      <Services />

    </>
  );
};

export default Home;
