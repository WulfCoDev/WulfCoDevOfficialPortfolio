import About from "./components/About";
import Contact from "./components/Contact";
import Landing from "./components/Landing";
import Navbar from "./components/Navbar";
import Sidebars from "./components/Sidebars";
import Skills from "./components/Skills";
import Work from "./components/Work";


const Home = () => {

    return (
        <div className="container mx-auto">
            <Navbar />
            <Sidebars />
            <div className="">
            <Landing />
            <About />
            <Skills />
            <Work />
            <Contact />  
            </div>
            
           
        </div>
    )
};

export default Home;