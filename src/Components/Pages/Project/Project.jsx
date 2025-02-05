import boss from '../../../assets/images/bistro-boss.png'
import coffee from '../../../assets/images/coffee-shop.png'
import visa from '../../../assets/images/visa-upgrade.netlify.app_.png'
import room from '../../../assets/images/room-booking.png'

const Project = () => {
    return (
        <div className="w-full bg-[#F1F1F1]">
            <h2 className="text-[4vw] font-bold py-5 px-20">Featured Project</h2>
            <div className="border-t-[1px] border-zinc-300 my-5"></div>

            <div className="w-full py-10">
                <div className="flex px-20 gap-10">
                    {/* first */}
                    <div className="w-1/2 h-[32vw] overflow-hidden rounded-xl transition-all duration-700 hover:scale-105">
                        <a href="https://bistro-boss-8bb62.web.app"><div
                            className="w-full h-full bg-cover bg-top transition-all duration-[10000ms] ease-in-out hover:bg-bottom"
                            style={{
                                backgroundImage: `url('${boss}')`,
                            }}
                        ></div>
                        </a>
                    </div>
                    {/* second */}
                    <div className="w-1/2 h-[32vw] overflow-hidden rounded-xl transition-all duration-700 hover:scale-105">
                    <a href="https://coffee-shop-2.netlify.app">
                        <div
                            className="w-full h-full bg-cover bg-top transition-all duration-[10000ms] ease-in-out hover:bg-bottom"
                            style={{
                                backgroundImage: `url('${coffee}')`,
                            }}
                        ></div>
                        </a>
                    </div>
                </div>
                <div className="border-t-[1px] border-zinc-400 my-10"></div>
                <div className="flex px-20 gap-10">
                    {/* third */}
                    <div className="w-1/2 h-[32vw] overflow-hidden rounded-xl transition-all duration-700 hover:scale-105">
                    <a href="https://visa-upgrade.netlify.app">
                        <div
                            className="w-full h-full bg-cover bg-top transition-all duration-[10000ms] ease-in-out hover:bg-bottom"
                            style={{
                                backgroundImage: `url('${visa}')`,
                            }}
                        ></div>
                        </a>
                    </div>
                    {/* forth */}
                    <div className="w-1/2 h-[32vw] overflow-hidden rounded-xl transition-all duration-700 hover:scale-105">
                    <a href="https://room-booking-75e27.web.app">
                        <div
                            className="w-full h-full bg-cover bg-top transition-all duration-[10000ms] ease-in-out hover:bg-bottom"
                            style={{
                                backgroundImage: `url('${room}')`,
                            }}
                        ></div>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Project;