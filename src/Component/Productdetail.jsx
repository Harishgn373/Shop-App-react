import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { myContext } from './Context'; 

export default function Productdetail() {
  const { single, id } = useParams();
  const { setCartsid, carts,cartsid, setCart,can } = useContext(myContext); 


  let data;
  try {
    data = require(`../data/${single}.json`);
  } catch (error) {
    console.error("Error loading product data:", error);
    return <div>Error loading product data.</div>; 
  }

  const singleProduct = data[id];
  console.log("dsffhh");
  
  if (!singleProduct) {
    return <div>Product not found.</div>; 
  }

  return (
    <div className='w-[100%] lg:h-[90vh] h-[93vh]  flex justify-center items-center  '>
        <div className='lg:w-[85%] w-[95%] lg:h-[60vh] h-[93vh]  flex lg:justify-between justify-around items-center shadow-2xl rounded-2xl bg-slate-200 lg:flex-row flex-col '>
            <div className=' lg:w-[40%] w-[100%] lg:h-[60vh] h-[40vh] flex justify-center items-center lg:rounded-tr-3xl lg:rounded-br-3xl shadow-2xl bg-white rounded-md '>
                <img src={singleProduct.image} alt="Loading" className='w[35%] lg:h-[55vh] h-[38vh]  object-cover' />
            </div>
            <div className='lg:w-[55%] w-[100%] h-[60vh]   overflow-y-auto flex justify-around items-center flex-col lg:py-5 '>
                <h1 className=' text-4xl font-bold w-[100%] h-auto'>{singleProduct.title}</h1>
                <p className=' text-2xl w-[100%]'>{singleProduct.price} $</p>
                <p className=' text-lg overflow-auto w-[100%]'>{singleProduct.description}</p>
                <div>
                {can(singleProduct.title)?<button className='w-[130px] h-[40px] bg-red-400 rounded-md text-white text-lg hover:bg-red-500'>Added</button>:
                    <button className='w-[130px] h-[40px] bg-blue-500 rounded-md text-white text-lg hover:bg-blue-700'
                    onClick={() => {setCart([...carts, { ...singleProduct, quantity: 1, amount:singleProduct.price }]);setCartsid([...cartsid,singleProduct.title])}}>Add to Cart</button>
                }
          </div>
        </div>
      </div>
    </div>
  );
}
