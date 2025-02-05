import Skill from "../../Skill/Skill";
import About from "../About/About";
import Banner from "../Banner/Banner";
import Marquee from "../Marquee/Marquee";


const Home = () => {
    return (
        <div>
           <Banner></Banner>
           <Marquee />
           <About />
           <Skill />
        </div>
    );
};

export default Home;