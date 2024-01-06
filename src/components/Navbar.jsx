import { Link } from "react-scroll";

const Navbar = () => {


    return (
        <div className="container mx-auto h-[100px] w-[100%] fixed m-4 flex justify-between items-center">
        {/* Left */}
            <div className="font-primary text-green-400 m-6 animate-pulse">
                <Link to="home" className="cursor-pointer">
                WulfCoDev
                </Link>
            </div>
        {/* Right */}
            <div className="font-primary text-green-400 m-6 flex space-x-4">
            <Link to="about" smooth={true} className="cursor-pointer hover:bg-purple-400/50 p-4 rounded-lg">
            <span className="text-white text-[0.5rem]">01.</span> About Me
            </Link>
            <Link to="skills" smooth={true} className="cursor-pointer hover:bg-purple-400/50 p-4 rounded-lg">
            <span className="text-white text-[0.5rem]">02.</span> Skills
            </Link>
            <Link to="work" smooth={true} className="cursor-pointer hover:bg-purple-400/50 p-4 rounded-lg">
            <span className="text-white text-[0.5rem]">03.</span> My Work
            </Link>
            <Link to="contact" smooth={true} className="cursor-pointer hover:bg-purple-400/50 p-4 rounded-lg">
            <span className="text-white text-[0.5rem]">04.</span> Lets Collaborate
            </Link>
            </div>
        </div>
    )
};

export default Navbar;