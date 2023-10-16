import PropTypes from 'prop-types';
import { AiFillEye, AiFillEdit, AiTwotoneDelete } from "react-icons/ai";


const Product = ({ product }) => {
    const { img, title, author, price } = product;

    return (
        <div className='bg-[#F5F4F188] flex gap-x-6 px-12 py-6 rounded-md'>
            <figure className='w-4/12'>
                <img src={img} alt="" className='w-full' />
            </figure>
            <div className='flex items-center w-7/12'>
                <div className='space-y-3'>
                    <p className='text-lg'>
                        <span className='font-semibold'>Name: </span>
                        <span className='text-gray-500'>{title}</span>
                    </p>
                    <p className='text-lg'>
                        <span className='font-semibold'>Chef: </span>
                        <span className='text-gray-500'>{author}</span>
                    </p>
                    <p className='text-lg'>
                        <span className='font-semibold'>Price: </span>
                        <span className='text-gray-500'>{price} Taka</span>
                    </p>
                </div>
            </div>
            <div className='flex items-center w-1/12 justify-end'>
                <div className='flex flex-col gap-y-4 text-white text-xl'>
                    <button className='bg-[#D2B48C] rounded p-2'><AiFillEye></AiFillEye></button>
                    <button className='bg-[#3C393B] rounded p-2'><AiFillEdit></AiFillEdit></button>
                    <button className='bg-[#EA4744] rounded p-2'><AiTwotoneDelete></AiTwotoneDelete></button>
                </div>
            </div>
        </div>
    );
};

Product.propTypes = {
    product: PropTypes.object.isRequired
}

export default Product;