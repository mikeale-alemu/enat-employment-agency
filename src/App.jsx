import About from "./components/About";
import Achievement from "./components/Achievement";
import Contact from "./components/Contact";
import FAQ from "./components/FAQ";
import Features from "./components/Features";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import HowItWorks from "./components/HowItWorks";
import Service from "./components/Service";
import Supporter from "./components/Supporter";

const App = () => {
  return (
    <>
      <div>
        <Header />
        <Hero />
        <About />
        <Service />
        <Features />
        <HowItWorks />
        <Achievement />
        <FAQ />
        <Supporter />
        <div className="py-2 lg:py-4 xl:py-8">
          <Contact />
        </div>
        <Footer />
      </div>
    </>
  );
};

export default App;
