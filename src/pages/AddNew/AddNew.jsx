import { Helmet } from "react-helmet-async";
import { MdArrowBack } from "react-icons/md";
import SectionHeader from "../../components/SectionHeader/SectionHeader";


const AddNew = () => {

    const coffeeFormFields = [
        { id: "coffeeName", label: "Name", type: "text", defaultValue: "", placeholder: "Enter coffee name" },
        { id: "coffeeChef", label: "Chef", type: "text", defaultValue: "", placeholder: "Enter coffee chef" },
        { id: "coffeeSupplier", label: "Supplier", type: "text", defaultValue: "", placeholder: "Enter coffee supplier" },
        { id: "coffeeTaste", label: "Taste", type: "text", defaultValue: "", placeholder: "Enter coffee taste" },
        { id: "coffeeCategory", label: "Category", type: "text", defaultValue: "", placeholder: "Enter coffee category" },
        { id: "coffeeDetails", label: "Details", type: "text", defaultValue: "", placeholder: "Enter coffee details" },
        { id: "coffeePhoto", label: "Photo", type: "text", defaultValue: "", placeholder: "Enter coffee photo" },
        { id: "coffeePrice", label: "Price", type: "number", defaultValue: "", placeholder: "Enter coffee price" }
    ]

    const handleSubmit = e => {
        e.preventDefault();
        const form = e.target;
        const name = form.coffeeName.value;
        const chef = form.coffeeChef.value;
        const supplier = form.coffeeSupplier.value;
        const taste = form.coffeeTaste.value;
        const category = form.coffeeCategory.value;
        const details = form.coffeeDetails.value;
        const photo = form.coffeePhoto.value;
        const price = form.coffeePrice.value;
        form.reset();
        console.log({ name, chef, supplier, taste, category, details, photo, price });
    }


    return (
        <>
            <Helmet>
                <title>Add New Coffee | Espresso Emporium</title>
            </Helmet>
            <main className="my-28 container mx-auto px-20">
                <div className="pt-12 pb-6">
                    <button className="flex items-center gap-x-3 py-4 ps-2 pe-3 rounded-lg hover:bg-[#D2B48C] duration-150 font-rancho text-2xl [text-shadow:_2px_2px_8px_#242222EE]"><MdArrowBack></MdArrowBack> Back to home</button>
                </div>
                <div className="bg-[#F4F3F0] rounded p-12">
                    <div className="text-center my-4">
                        <SectionHeader
                            sectionTitle="Add New Coffee" />
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
                            <button className="font-rancho text-2xl text-center w-full border-2 border-[#331A15] py-2 rounded-md bg-[#D2B48C] hover:bg-[#D2B48CDD] duration-75 text-[#331A15]" type="submit">Add Coffee</button>
                        </div>
                    </form>
                </div>
            </main>
        </>
    );
};

export default AddNew;