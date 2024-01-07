import { TypeAnimation } from "react-type-animation";

const Landing = () => {


    return (
        
        <section id="home" className="container mx-auto h-screen w-screen flex justify-center items-center">
            {/* Container */}
            <div className="flex justify-center items-center h-[100%] w-[100%] static">
                {/* Left */}
                <div className="mr-[175px]">
                <p className="font-quad text-white text-2xl mb-4">Hi there, my name is</p>
                <p className="font-primary text-green-400 text-4xl mb-2 text-nowrap">Christian Alexander</p>
                <div className="absolute">
                 <p className="font-quad font-light text-white text-xl mt-2">My passion is turning your great ideas  into beautiful realities <br />one line of code at a time</p>   
                </div>
                
                </div>
                {/* Right */}
                <div className="ml-[200px] w-[600px]">
                <p className="font-quad text-white text-2xl mb-4 mr-2">I am a <TypeAnimation sequence={[
                'Developer',
                2000,
                'Problem-Solver',
                2000,
                'Critical Thinker',
                2000,
                'Gamer',
                2000,
                'Sim Racer',
                2000,
                ]}
                speed={50}
                className='text-green-400 font-primary'
                wrapper='p'
                repeat={Infinity}
                /></p>
                
                
                </div>
            </div>
        </section>
    )
};

export default Landing;