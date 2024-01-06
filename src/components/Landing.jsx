

const Landing = () => {


    return (
        
        <section id="home" className="h-screen w-screen flex justify-center items-center">
            {/* Container */}
            <div className="flex justify-between items-center">
                {/* Left */}
                <div>
                <p className="font-quad text-white text-2xl">Hi there, my name is</p>
                <p className="font-primary text-green-400 text-4xl">Christian Alexander</p>
                </div>
                {/* Right */}
                <div>
                <p>My passion is turning your great ideas into beautiful realities one line of code at a time</p>
                </div>
            </div>
        </section>
    )
};

export default Landing;