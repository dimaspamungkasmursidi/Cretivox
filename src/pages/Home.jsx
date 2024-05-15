// import { gsap, Power3 } from "gsap";
import Footer from "../components/organism/Footer";
import Header from "../components/organism/Header";
import Hero from "../components/organism/Hero";
import Introduction from "../components/organism/Introduction";
import Skills from "../components/organism/Skills";

const Home = () => {

  return (
    <>
    <div className=" text-black">
      <Header />
      <Hero />
      <Introduction />
      <Skills />
      <Footer />
    </div>
    </>
  );
};

export default Home;
