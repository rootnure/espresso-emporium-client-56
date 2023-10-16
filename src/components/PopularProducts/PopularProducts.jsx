import { Link } from "react-router-dom";
import { TbMug } from "react-icons/tb";
import Product from "./Product";
import SectionHeader from "../SectionHeader/SectionHeader";


const PopularProducts = () => {
    const products = [
        {
            _id: 1,
            img: "https://i.ibb.co/cchNzkF/1.png",
            title: "Americano Coffee",
            author: "Mr. Matin Paul",
            price: 890
        },
        {
            _id: 2,
            img: "https://i.ibb.co/jgRT4Ns/2.png",
            title: "Black Coffee",
            author: "Mr. Nibra Sweden",
            price: 799
        },
        {
            _id: 3,
            img: "https://i.ibb.co/cchNzkF/1.png",
            title: "Americano Coffee",
            author: "Mr. Matin Paul",
            price: 890
        },
        {
            _id: 4,
            img: "https://i.ibb.co/jgRT4Ns/2.png",
            title: "Black Coffee",
            author: "Mr. Nibra Sweden",
            price: 799
        },
        {
            _id: 5,
            img: "https://i.ibb.co/cchNzkF/1.png",
            title: "Americano Coffee",
            author: "Mr. Matin Paul",
            price: 890
        },
        {
            _id: 6,
            img: "https://i.ibb.co/jgRT4Ns/2.png",
            title: "Black Coffee",
            author: "Mr. Nibra Sweden",
            price: 799
        },
    ]
    return (
        <section className="relative">
            <img src="https://i.ibb.co/txGbs6f/4.png" alt="aside mug image" className="absolute left-0 top-20 w-80 -z-10" />
            <img src="https://i.ibb.co/BjSNqnn/5.png" alt="aside mug image" className="absolute right-0 -bottom-12 w-80 -z-10" />
            <div className="container mx-auto">
                <div className="text-center flex flex-col items-center gap-y-2">
                    <SectionHeader
                        sectionTop="--- Sip & Savor ---"
                        sectionTitle="Our Popular Products" ></SectionHeader>
                    <Link to="/" className="mt-4">
                        <button className="flex items-center text-lg gap-2 px-4 py-1.5 border-2 border-[#242222] bg-[#E3B577] hover:bg-transparent text-white hover:text-[#242222] duration-200 rounded font-rancho [text-shadow:_2px_2px_6px_#242222EE]">Add Coffee <TbMug className="text-[#242222]"></TbMug></button>
                    </Link>
                </div>
                <div className="my-12 grid grid-cols-1 lg:grid-cols-2 gap-6 px-20">
                    {
                        products.map(product => <Product
                            key={product._id}
                            product={product} />)
                    }
                </div>
            </div>
        </section>
    );
};

export default PopularProducts;