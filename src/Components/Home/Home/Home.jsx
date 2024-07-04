import { Helmet } from "react-helmet-async";
import Banner from "../Banner/Banner";
import Skills from "../skills/Skills";


const Home = () => {
    return (
        <div className="bg-gray-100">
            <Helmet>
                <title>Home</title>
            </Helmet>
            <Banner></Banner>
            <Skills></Skills>
        </div>
    );
};

export default Home;