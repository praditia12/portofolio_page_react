import { Suspense, lazy } from "react";
import ScrollToTop from "../../components/common/ScrollToTop/ScrollToTop";

const Navbar = lazy(() => import("../../components/sections/navbar/Navbar"));
const Hero = lazy(() => import("../../components/sections/hero/Hero"));
const About = lazy(() => import("../../components/sections/about/About"));
const Work = lazy(() => import("../../components/sections/work/Work"));
const Contact = lazy(() => import("../../components/sections/contacts/Contacts"));

const SectionLoader = () => <div className="w-full py-20 text-center text-navy text-lg">Loading...</div>;

const Home = () => {
    return (
        <main>
            <Suspense fallback={<SectionLoader />}>
                <Navbar />
            </Suspense>

            <Suspense fallback={<SectionLoader />}>
                <Hero />
            </Suspense>

            <Suspense fallback={<SectionLoader />}>
                <About />
            </Suspense>

            <Suspense fallback={<SectionLoader />}>
                <Work />
            </Suspense>

            <Suspense fallback={<SectionLoader />}>
                <Contact />
            </Suspense>

            <ScrollToTop />
        </main>
    );
};

export default Home;
