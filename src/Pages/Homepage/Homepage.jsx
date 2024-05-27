import Banner from "../../components/Home/Banner";
import Contact from "../../components/Home/Contact";
import Intro from "../../components/Home/Intro";
import Stat from "../../components/Home/Stat";

const Homepage = () => {
    return (
        <div>
            <Banner></Banner>
            <Intro></Intro>
            <Contact></Contact>
            <Stat></Stat>
        </div>
    );
};

export default Homepage;