import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";


const Banner = () => {
    return (
        <div className="w-full pt-1 h-screen bg-[#F1F1F1]">
            <div className="mt-28 px-20">
                {["I Create", "Responsive", "Website"].map((item, idx) => {
                    return <div key={idx}>
                        <div className="w-fit flex items-center overflow-hidden">
                            {idx === 1 && (<div className="w-[8vw] h-[5.5vw] relative rounded-md top-[0.6vw] bg-red-500"></div>)}
                            <h1 className="text-[8vw] leading-none font-bold uppercase tracking-tighter">{item}</h1>
                        </div>
                    </div>
                })}
            </div>

            <div className="border-t-[1px] border-zinc-300 mt-20">
                <div className="flex justify-between items-center px-20 text-[4vw] pt-5">
                    <a href="#"><FaFacebook className="text-blue-600" /></a>
                    <a href="#"><FaInstagram className="text-orange-400" /></a>
                    <a href="#"><FaLinkedin className="text-blue-400" /></a>
                </div>
            </div>
        </div>
    );
};

export default Banner;