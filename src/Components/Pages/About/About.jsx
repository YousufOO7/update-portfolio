

const About = () => {
    return (
        <div id="about" className="bg-[#CDEA68] text-black -mt-14 rounded-t-2xl">
            <div className="hero md:px-20 pt-10">
                <div className="hero-content flex-col lg:flex-row w-full">
                    <div className="lg:w-1/2 mr-5">
                        <img src="https://i.ibb.co.com/zTm2zJ6v/profile.jpg" alt="" className="w-[40vw] lg:w-[35vw] h-[30vw] rounded-md" />
                    </div>
                    {/* text */}
                    <div className="lg:w-1/2">
                       <h1 className="text-5xl font-bold">About Me!</h1>

                        <p className="py-6">
                            I am currently a university student with a deep passion for technology and coding, despite coming from a non-tech background. I completed my SSC and HSC in commerce in 2020 and 2022, respectively. It was during my SSC years that I realized the importance of IT and programming in shaping the future. However, I felt like I was starting late on this journey.

                            After completing my HSC, I began exploring platforms and institutions to learn coding and technology. In June 2024, I joined Programming Hero to pursue my dream of becoming a developer. Balancing my studies with the demands of this rigorous course wasn’t easy, but with determination and the grace of Almighty Allah, I successfully completed all 11 assignments on time. This month, January 2025, marks the completion of my course, and I am proud to call myself a front-end developer.

                            Despite my commerce background, I’ve embraced coding wholeheartedly, proving that passion and perseverance can overcome any obstacle. I am excited to continue learning, exploring, and growing every day in this dynamic field.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;