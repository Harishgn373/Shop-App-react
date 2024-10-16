import React from 'react';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

export default function Navbar() {
    
    const [lap, setlap] = useState(true);

    function nav() {
        let b = document.getElementById('mobile');
        if (lap) {
            b.classList.add('flex');
            b.classList.remove('hidden');
            setlap(false);
        }
        else {
            b.classList.add('hidden');
            b.classList.remove('flex');
            setlap(true);
        }
    }
    return (
        <>
            <div id='cole' className='w-[100%] h-[50px] lg:h-fit flex items-center lg:flex-col justify-between px-5 lg:pt-3 bg-black lg:bg-white'>
                <div id='laptop' className=' w-[87%] lg:h-[50px] h-[40px]  bg-black text-white lg:flex justify-around items-center lg:flex-row lg:px-40  hidden'>
                    <Link to='/'><p>HOME</p></Link>
                    <Link to='/mens_outerwear'><p>Men's Outerwear</p></Link>
                    <Link to='/ladies_outerwear'><p>Ladies Outerwear</p></Link>
                    <Link to='/mens_tshirts'><p>Men's T-Shirts</p></Link>
                    <Link to='/ladies_tshirts'><p>Ladies T-Shirts</p></Link>
                    <Link to='/Cart'><p>Cart</p></Link>
                </div>
                <h1 className='lg:hidden block text-white font-bold text-2xl'>Shop</h1>
                <button className='lg:hidden block text-white font-bold text-xl bg-black' onClick={nav} ><FontAwesomeIcon icon={faBars} style={{color: "#ffffff",fontSize:'25px'}} /></button>
            </div>
            <div className='hidden' id='mobile'>
                <div className='w-[40%]  h-[300px] bg-black text-white flex justify-around  flex-col   absolute right-0'>
                    <Link to='/'><div className='w-[100%] h-[30px] text-center hover:bg-zinc-400 '><p>HOME</p></div></Link>
                    <Link to='/mens_outerwear'><div className='w-[100%] h-[30px] text-center hover:bg-zinc-400 '><p>Men's Outerwear</p></div></Link>
                    <Link to='/ladies_outerwear'><div className='w-[100%] h-[30px] text-center hover:bg-zinc-400 '><p>Ladies Outerwear</p></div></Link>
                    <Link to='/mens_tshirts'><div className='w-[100%] h-[30px] text-center hover:bg-zinc-400 '><p>Men's T-Shirts</p></div></Link>
                    <Link to='/ladies_tshirts'> <div className='w-[100%] h-[30px] text-center hover:bg-zinc-400 '><p>Ladies T-Shirts</p></div></Link>
                    <Link to='/Cart'><div className='w-[100%] h-[30px] text-center hover:bg-zinc-400 '><p>Cart</p></div></Link>
                </div>
            </div>
        </>
    )
}
