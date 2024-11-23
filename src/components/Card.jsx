import React from 'react';
import { useNavigate } from 'react-router-dom';

const Card = ({ product }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/detail/${product.id}`);
  };

  return (
    <div onClick={handleClick} className='cursor-pointer bg-white font-sans justify-center border-2 w-80 flex flex-col gap-4 p-4 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300'>
      <img src={product.image} alt="gambar" className='w-full h-40 object-cover rounded-t-lg' />
      <h1 className='text-lg font-bold mt-2 text-gray-800'>{product.title}</h1>
      <p className='font-semibold text-2xl text-orange-800 '>{product.price}$</p>
      <div className='items-center flex flex-row justify-between items-center mt-2'>
        <p className='text-gray-600'>Rating: </p>
        <p className='text-gray-600'>Terjual: </p>
        <button className='mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-300'>Beli</button>
      </div>
    </div>
  );
};

export default Card;