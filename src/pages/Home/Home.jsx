import { Helmet } from "react-helmet-async";
import Banner from "./Banner";
import FeaturedFood from "./FeaturedFood";
import Impact from "./Impact";
import Volunteer from "./Volunteer";

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Food Bond</title>
            </Helmet>
            <Banner />
            <FeaturedFood />
            <Impact />
            <Volunteer />
        </div>
    );
};

export default Home;