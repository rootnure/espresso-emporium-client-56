import PropTypes from 'prop-types';
import { AiFillEye, AiFillEdit, AiTwotoneDelete } from "react-icons/ai";
import { Link } from 'react-router-dom';


const Product = ({ product }) => {
    const { photo, name, chef, price } = product;

    return (
        <div className='bg-[#F5F4F188] flex gap-x-6 px-12 py-6 rounded-md'>
            <figure className='w-4/12'>
                <img src={photo} alt={name} className='h-52' />
            </figure>
            <div className='flex items-center w-7/12'>
                <div className='space-y-3'>
                    <p className='text-lg'>
                        <span className='font-semibold'>Name: </span>
                        <span className='text-gray-500'>{name}</span>
                    </p>
                    <p className='text-lg'>
                        <span className='font-semibold'>Chef: </span>
                        <span className='text-gray-500'>{chef}</span>
                    </p>
                    <p className='text-lg'>
                        <span className='font-semibold'>Price: </span>
                        <span className='text-gray-500'>{price} Taka</span>
                    </p>
                </div>
            </div>
            <div className='flex items-center w-1/12 justify-end'>
                <div className='flex flex-col gap-y-4 text-white text-xl'>
                    <Link to='/coffeeDetails'>
                        <button className='bg-[#D2B48C] border-2 border-[#D2B48C] hover:text-[#D2B48C] hover:bg-transparent rounded duration-150 p-1.5' title='View Details'><AiFillEye></AiFillEye></button>
                    </Link>
                    <Link to='/updateExisting'>
                        <button className='bg-[#3C393B] border-2 border-[#3C393B] hover:text-[#3C393B] hover:bg-transparent rounded duration-150 p-1.5' title='Edit/Update Information'><AiFillEdit></AiFillEdit></button>
                    </Link>
                    <button className='bg-[#EA4744] border-2 border-[#EA4744] hover:text-[#EA4744] hover:bg-transparent rounded duration-150 p-1.5' title='Delete Item'><AiTwotoneDelete></AiTwotoneDelete></button>
                </div>
            </div>
        </div>
    );
};

Product.propTypes = {
    product: PropTypes.object.isRequired
}

export default Product;