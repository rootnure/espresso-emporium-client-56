import { Helmet } from "react-helmet-async";
import { MdArrowBack } from "react-icons/md";
import SectionHeader from "../../components/SectionHeader/SectionHeader";
import { Link } from "react-router-dom";


const UpdateExisting = () => {

    const coffeeFormFields = [
        { id: "updateCoffeeName", label: "Name", type: "text", defaultValue: "Americano Coffee", placeholder: "Enter coffee name" },
        { id: "updateCoffeeChef", label: "Chef", type: "text", defaultValue: "Mr. Matin Paul", placeholder: "Enter coffee chef" },
        { id: "updateCoffeeSupplier", label: "Supplier", type: "text", defaultValue: "Chappu Authorizer", placeholder: "Enter coffee supplier" },
        { id: "updateCoffeeTaste", label: "Taste", type: "text", defaultValue: "Sweet and hot", placeholder: "Enter coffee taste" },
        { id: "updateCoffeeCategory", label: "Category", type: "text", defaultValue: "Americano", placeholder: "Enter coffee category" },
        { id: "updateCoffeeDetails", label: "Details", type: "text", defaultValue: "Espresso with hot water", placeholder: "Enter coffee details" },
        { id: "updateCoffeePhoto", label: "Photo", type: "text", defaultValue: "https://i.ibb.co/hB6Tp24/11.png", placeholder: "Enter coffee photo" },
        { id: "updateCoffeePrice", label: "Price", type: "number", defaultValue: "890", placeholder: "Enter coffee price" }
    ]

    const handleSubmit = e => {
        e.preventDefault();
        const form = e.target;
        const name = form.updateCoffeeName.value;
        const chef = form.updateCoffeeChef.value;
        const supplier = form.updateCoffeeSupplier.value;
        const taste = form.updateCoffeeTaste.value;
        const category = form.updateCoffeeCategory.value;
        const details = form.updateCoffeeDetails.value;
        const photo = form.updateCoffeePhoto.value;
        const price = form.updateCoffeePrice.value;
        form.reset();
        console.log({ name, chef, supplier, taste, category, details, photo, price });
    }


    return (
        <>
            <Helmet>
                <title>Add New Coffee | Espresso Emporium</title>
            </Helmet>
            <main className="my-28 bg-cover" style={{ backgroundImage: 'url("https://i.ibb.co/hB6Tp24/11.png")' }}>
                <div className="container mx-auto px-20">
                    <section className="pt-12 pb-6">
                        <Link to="/">
                            <button className="flex items-center gap-x-3 py-4 ps-2 pe-3 rounded-lg hover:bg-[#D2B48C] duration-150 font-rancho text-2xl [text-shadow:_2px_2px_8px_#242222EE]"><MdArrowBack></MdArrowBack> Back to home</button>
                        </Link>
                    </section>
                    <section className="bg-[#F4F3F0] rounded p-12">
                        <div className="text-center my-6 space-y-6">
                            <SectionHeader
                                sectionTitle="Update Existing Coffee Details" />
                            <p className="mt-4 px-8 text-lg">Experience the art of coffee at its finest with <span className="font-rancho text-2xl">Espresso Emporium</span>. Journey begins at the world&apos;s finest coffee farms, meticulously brewed by our expert baristas. Explore a world of flavor and passion in every cup.</p>
                        </div>

                        {/* form */}
                        <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-6">
                            {
                                coffeeFormFields.map(field => <div
                                    key={field.id}
                                    className="space-y-2">
                                    <label
                                        className="font-bold"
                                        htmlFor={field.id}>{field.label}</label>
                                    <input
                                        className="p-2 w-full rounded-md"
                                        type={field.type}
                                        name={field.id}
                                        id={field.id}
                                        defaultValue={field.defaultValue}
                                        placeholder={field.placeholder}
                                        required />
                                </div>)
                            }
                            <div className="col-span-2">
                                <button className="font-rancho text-2xl text-center w-full border-2 border-[#331A15] py-2 rounded-md bg-[#D2B48C] hover:bg-[#D2B48CDD] duration-75 text-[#331A15]" type="submit">Update Coffee Info</button>
                            </div>
                        </form>
                    </section>
                </div>
            </main>
        </>
    );
};

export default UpdateExisting;