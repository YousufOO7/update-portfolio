
import About from "../About/About";
import Banner from "../Banner/Banner";
import Contact from "../Contact/Contact";
import Marquee from "../Marquee/Marquee";
import Project from "../Project/Project";
import Skill from "../Skill/Skill";
import LocomotiveScroll from 'locomotive-scroll';

const Home = () => {

    // eslint-disable-next-line no-unused-vars
    const locomotiveScroll = new LocomotiveScroll();

    return (
        <div>
           <Banner />
           <Marquee />
           <About />
           <Skill />
           <Project />
           <Contact />
        </div>
    );
};

export default Home;