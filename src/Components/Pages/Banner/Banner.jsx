import { motion } from "framer-motion";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";


const Banner = () => {
    return (
        <div data-scroll data-scroll-section data-scroll-speed="-.3" className="w-full pt-1 h-screen bg-[#F1F1F1]">
            <div className="mt-28 px-5 md:px-20">
                {["I Create", "Responsive", "Website"].map((item, idx) => {
                    return <div key={idx}>
                        <div className="w-fit flex items-center overflow-hidden">
                            {idx === 1 && (
                                <motion.div initial={{width: "0"}} animate={{width: "8vw"}} 
                                transition={{ease: [0.76, 0, 0.24, 1], duration: 1, delay: 0.5}}
                                 className="w-[8vw] h-[5.5vw] relative rounded-md top-[0.6vw] bg-red-500"></motion.div>
                            )}
                            <h1 className="text-[8vw] leading-none font-bold uppercase tracking-tighter">{item}</h1>
                        </div>
                    </div>
                })}
            </div>

            <div className="border-t-[1px] border-zinc-300 mt-10 md:mt-20">
                <div className="flex justify-between items-center px-5 md:px-20 text-[6vw] md:text-[4vw] pt-5">
                    <a href="#"><FaFacebook className="text-blue-600" /></a>
                    <a href="#"><FaInstagram className="text-orange-400" /></a>
                    <a href="#"><FaLinkedin className="text-blue-400" /></a>
                </div>
            </div>
        </div>
    );
};

export default Banner;