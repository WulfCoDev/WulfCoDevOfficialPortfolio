import { FaGithub, FaLinkedin } from "react-icons/fa";

const Contact = () => {


    return (
        <section id="contact" className="container mx-auto h-screen w-screen flex justify-center items-center">
            <div className="">
                <h1 className="font-primary text-green-500 animate-bounce text-6xl">Lets Collaborate</h1>
                <div className="mt-2 text-6xl *:cursor-pointer text-green-400 flex justify-center items-center space-x-6">
                <button className="">
                  <FaGithub />  
                </button>
                
                <FaLinkedin />
                </div>
            </div>
        </section>
    )
};

export default Contact;