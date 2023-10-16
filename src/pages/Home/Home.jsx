import { Helmet } from "react-helmet-async";
import Banner from "../../components/Banner/Banner";
import BannerBottom from "../../components/Banner/BannerBottom";
import PopularProducts from "../../components/PopularProducts/PopularProducts";
import Instagram from "../../components/Instagram/Instagram";


const Home = () => {
    return (
        <>
            <Helmet>
                <title>Home | Espresso Emporium</title>
            </Helmet>
            <main className="my-28">
                <Banner />
                <BannerBottom />
                <PopularProducts />
                <Instagram />
            </main>
        </>
    );
};

export default Home;