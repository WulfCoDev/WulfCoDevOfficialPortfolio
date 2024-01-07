import { FaGithub, FaLinkedin } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Contact = () => {

    const navigate = useNavigate();

    return (
        <section id="contact" className="container mx-auto h-screen w-screen flex justify-center items-center">
            <div className="">
                <h1 className="font-primary text-green-500 animate-bounce text-6xl">Lets Collaborate</h1>
                <div className="mt-2 text-6xl *:cursor-pointer text-green-400 flex justify-center items-center space-x-6">
                <a href="https://github.com/WulfCoDev" target="_blank" className="">
                  <FaGithub />  
                </a>
                <a href="https://www.linkedin.com/in/dev-christian-alexander/" target="_blank">
                    
                </a>
                
                </div>
            </div>
        </section>
    )
};

export default Contact;