import { motion } from "framer-motion";


const Marquee = () => {
    return (
        <div data-scroll data-scroll-section data-scroll-speed=".1" className="w-full py-20  text-white px-5 bg-[#004D43] rounded-t-xl">
            <div className="border-t-2 border-b-2 border-zinc-300 flex overflow-hidden whitespace-nowrap">

                <motion.h1 
                initial={{x: "0"}} 
                animate={{x: "-100%"}} 
                transition={{repeat: Infinity, ease: "linear", duration: 10 }} 
                className="text-[6vw] md:text-[10vw] pl-20 leading-none uppercase pt-10 mb-10 font-semibold">Front End Developer</motion.h1>

                <motion.h1 
                initial={{x: "0"}} 
                animate={{x: "-100%"}} 
                transition={{repeat: Infinity, ease: "linear", duration: 10 }}
                className="text-[6vw]  md:text-[10vw] pl-20 leading-none uppercase pt-10 mb-10 font-semibold"
                >Front End Developer</motion.h1>
            </div>
        </div>
    );
};

export default Marquee;