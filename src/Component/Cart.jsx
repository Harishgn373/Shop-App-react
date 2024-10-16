import React, { useContext, useEffect, useState } from 'react';
import { myContext } from './Context';
import { Link } from 'react-router-dom';


export default function Cart() {

  let { carts, setCart, setCartsid, cartsid } = useContext(myContext);

  const [total, setTotal] = useState(0);
  const [items, setitems] = useState(0);


  function remove(title) {
    let abc = carts.filter((ele) => {
      return ele.title !== title;
    })

    let updatedCartsid = cartsid.filter((ele) => {
      return ele !== title;
    });
    setCartsid(updatedCartsid);
    setCart(abc);
  }
  function inc(name) {
    const updatedCarts = carts.map(item => {
      if (item.title === name.title) {
        return { ...item, quantity: item.quantity + 1, amount: item.price * (item.quantity + 1) };
      }
      return item;
    });
    setCart(updatedCarts);
  }
  useEffect(() => {
    let a = 0;
    let total = 0;
    carts.forEach(element => {
      a += element.quantity
      total += element.amount
      setTotal(total.toFixed(2));
      setitems(a);
    });
  }, [carts])

  function dec(name) {
    if (name.quantity > 1) {
      const updatedCarts = carts.map(item => {
        if (item.title === name.title) {
          return { ...item, quantity: item.quantity - 1, amount: item.price * (item.quantity - 1) };
        }
        return item;
      });
      setCart(updatedCarts);
    }
  }
  if (carts.length === 0) {
    return (<div className='w-[100%] h-[100px]  flex justify-center items-center flex-col '>
      <div className='lg:w-[85%] w-[100%] h-[100px] shadow-sm flex items-center '>
        <div className='w-[85%] h-[100px] shadow-sm flex justify-around flex-col '>
          <h1 className='font-bold text-2xl '>Shoping Cart</h1>
          <h1 className='text-start'>Your cart is Empty</h1>
        </div>
      </div>
    </div>)
  }
  else {
    return (
      <div className='w-[100%] lg:h-auto h-[93vh] flex justify-center items-center flex-col '>
        <div className='lg:w-[85%] w-[100%] shadow-sm flex items-center justify-between px-1'>
          <h1 className='font-bold lg:text-2xl text-xl'>Shoping Cart</h1>
          <div>
            <h1 className='lg:text-2xl text-lg font-bold lg:mr-5'>Total items :- {items}</h1>
            <h1 className='lg:text-2xl text-lg font-bold lg:mr-5'>Total amount :- {total} $</h1>
          </div>
        </div>
        <div className='lg:w-[85%] w-[100%] lg:h-[575px] h-[100vh] flex flex-wrap lg:justify-start justify-center overflow-x-auto '>
          {carts.map((ele) => {
            return (<div className='w-[270px] h-[360px]  mx-6 my-10 shadow-xl rounded-lg '>
              <Link to={`/${ele.category}/${ele.id}`}><div className='w-[100%] h-[220px] flex justify-center items-center '>
                <img src={ele.image} alt="Wait" className='w-[100%] h-[220px] object-contain ' />
              </div></Link>
              <div className='w-[100%] h-[130px]  flex flex-col justify-around items-center '>
                <div>
                  <p className='font-bold text-sm text-center'>df{ele.title}</p>
                  <p className='text-[18px] text-center'>${ele.amount.toFixed(2)}</p>
                </div>
                <div className='flex  w-[100%] h-[40px] justify-center items-center'>
                  <button className='w-[20%] h-[40px]  text-2xl font-bold' onClick={() => { inc(ele) }}>+</button>
                  <button className='w-[15%] h-[40px] text-2xl font-bold'>{ele.quantity}</button>
                  <button className='w-[20%] h-[40px] text-2xl font-bold' onClick={() => { dec(ele) }}>-</button>
                </div>
                <button className='w-[35%] h-[40px] bg-red-500 text-xl text-white' onClick={() => remove(ele.title)}>Remove</button>
              </div>
            </div>
            )
          })}
        </div>
      </div>
    )
  }
}
