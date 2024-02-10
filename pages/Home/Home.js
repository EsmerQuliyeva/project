import Navbar from "../../components/Navbar";
import FirstSection from "./FirstSection";
import SecondSection from "./SecondSection";
import ThirdSection from "./ThirdSection";
import FourthSection from "./FourthSection";
import Footer from  "../../components/Footer";
import FifthSection from "./FifthSection";



const Home = () => {
  return (
    <div>
        <Navbar/>
        <FirstSection />
        <ThirdSection />
        <SecondSection />
        <FourthSection />
        <FifthSection />
        <Footer />
    </div>
  )
}

export default Home