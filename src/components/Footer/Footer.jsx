import SectionHeader from "../SectionHeader/SectionHeader";
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa6";


const Footer = () => {
    return (
        <footer className="p-10 pt-36 bg-cover" style={{ backgroundImage: 'url("https://i.ibb.co/xCxM4js/13.jpg")' }}>
            <div className="container mx-auto px-20 text-[#1B1A1A] flex gap-6">
                <div className="flex flex-col gap-8 w-6/12">
                    <img src="https://i.ibb.co/jV0kLgs/logo1.png" alt="Website Logo" className="w-20" />
                    <SectionHeader
                        sectionTitle="Espresso Emporium" />
                    <p className="mt-2">Always ready to be your friend. Come & Contact with us to share your memorable moments, to share with your best companion.</p>
                    <div className="flex gap-4 text-5xl text-[#331A15]">
                        <FaFacebook></FaFacebook>
                        <FaTwitter></FaTwitter>
                        <FaInstagram></FaInstagram>
                        <FaYoutube></FaYoutube>
                    </div>
                    <SectionHeader
                        sectionTitle="Get in Touch" />
                    <div>
                        <p className="flex items-center gap-3"><span>ph</span><span>+880 1799-999999</span></p>
                        <p className="flex items-center gap-3"><span>ml</span><span>contact@espresso-emporium.com</span></p>
                        <p className="flex items-center gap-3"><span>mp</span><span>72/2, Wall Street, King Road, Dhaka-1100</span></p>
                    </div>
                </div>
                <div></div>
            </div>
        </footer>
    );
};

export default Footer;