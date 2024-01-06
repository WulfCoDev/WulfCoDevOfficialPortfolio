import About from "./components/About";
import Contact from "./components/Contact";
import Landing from "./components/Landing";
import Navbar from "./components/Navbar";
import Skills from "./components/Skills";
import Work from "./components/Work";


const Home = () => {

    return (
        <div className="bg-[#08213F]">
            <Navbar />
            <Landing />
            <About />
            <Skills />
            <Work />
            <Contact />
        </div>
    )
};

export default Home;