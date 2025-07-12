import Navbar from "../../components/sections/navbar/Navbar";
import Hero from "../../components/sections/hero/Hero";
import About from "../../components/sections/about/About";
import Work from "../../components/sections/work/Work";
import Contact from "../../components/sections/contacts/Contacts";
import Footer from "../../components/sections/footer/Footer";
import ScrollToTop from "../../components/common/ScrollToTop/ScrollToTop";

const Home = () => {
    return (
        <>
            <Navbar />
            <Hero />
            <About />
            <Work />
            <Contact />
            <Footer />
            <ScrollToTop />
        </>
    );
};

export default Home;
