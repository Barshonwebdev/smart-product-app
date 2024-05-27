import Banner from "../../components/Home/Banner";
import Contact from "../../components/Home/Contact";
import FAQ from "../../components/Home/FAQ";
import Intro from "../../components/Home/Intro";
import Stat from "../../components/Home/Stat";

const Homepage = () => {
    return (
        <div>
            <Banner></Banner>
            <Intro></Intro>
            <Contact></Contact>
            <Stat></Stat>
            <FAQ></FAQ>
        </div>
    );
};

export default Homepage;