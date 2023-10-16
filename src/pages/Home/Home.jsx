import { Helmet } from "react-helmet-async";
import Banner from "../../components/Banner/Banner";
import BannerBottom from "../../components/Banner/BannerBottom";
import PopularProducts from "../../components/PopularProducts/PopularProducts";


const Home = () => {
    return (
        <>
            <Helmet>
                <title>Home | Espresso Emporium</title>
            </Helmet>
            <main>
                <Banner />
                <BannerBottom />
                <PopularProducts />
            </main>
        </>
    );
};

export default Home;