import React,{useContext} from 'react';
import { useParams,Link } from 'react-router-dom';
import { myContext } from './Context';

export default function Product() {
    let {single} = useParams(); 
    let data = require(`../data/${single}.json`);
    
    let {carts,setCart,cartsid,setCartsid,can} = useContext(myContext);

 
  return (
    <div className='w-[100%] lg:h-[633px] h-[93vh]  flex justify-center items-center flex-col '>
        <div className='lg:w-[85%] w-[100%] shadow-sm flex items-center h-auto lg:pl-0 pl-2 '>
            <h1 className='font-bold lg:text-2xl text-lg'>{data[0].category}</h1>
        </div>
        <div className='lg:w-[85%] w-[100%] lg:h-auto h-[100vh] flex justify-around flex-wrap overflow-y-scroll '>
           {data.map((each)=>{
               return ( <div className='w-[350px] h-[490px]  my-5 shadow-xl rounded-xl'>
                <Link to={`/${single}/${each.id}`}><div className='w-[100%] h-[350px] flex justify-center items-center'>
                    <img src={each.image} alt="Wait" />
                </div></Link>
                <div className='w-[100%] h-[130px]  flex flex-col justify-around pl-5'>
                  <div>
                    <p className='font-bold text-lg'>{each.title}</p>
                    <p className='text-[18px]'>{each.price} $</p>
                  </div>
                  <div>
                    {can(each.title)?<button className='w-[130px] h-[40px] bg-red-400 rounded-md text-white text-lg hover:bg-red-500 '>Added</button>:
                    <button className='w-[130px] h-[40px] bg-blue-500 rounded-md text-white text-lg hover:bg-blue-700'
                    onClick={() => {setCart([...carts, { ...each, quantity: 1, amount:each.price }]);setCartsid([...cartsid,each.title])}}>Add to Cart</button>
                    }
                  </div>
                </div>
            </div>)
           })}
        </div>
    </div>
  )
}

