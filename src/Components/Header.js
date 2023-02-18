import React from "react";
import { Link } from "react-router-dom";
import { AiOutlineShoppingCart } from 'react-icons/ai';

const Header = () => {

  return (
    <div className="bg-pink-700">
      <header className="text-white body-font">
        <div className="container mx-auto flex p-5 flex-col md:flex-row items-center font-semibold">
        <img src="https://i.pinimg.com/originals/19/6c/a5/196ca566fb772a3b736ddaf3725a0483.jpg" alt="" width={50} height={100} className='rounded-full' />
        <Link to='/'>
        <span className="ml-3 text-2xl text-white">My Shopping Cart</span>
        </Link>
          <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-lg justify-center space-x-5">
            <Link to='/' className=" hover:text-pink-900">
                Home
            </Link>
            <Link to='/category' className=" hover:text-pink-900">
                Category
            </Link>
            <Link to='/checkout' className=" hover:text-pink-900">
                Checkout
            </Link> 
          </nav>
          <Link to='/checkout' className=" text-pink-700 bg-pink-50 py-1 px-3 hover:bg-pink-200 rounded mt-4 md:mt-0 flex flex-row">
          <AiOutlineShoppingCart className="text-3xl mr-2" />
          <span className="text-xl">Cart</span>
          </Link>
          
        </div>
      </header>
    </div>
  );
};

export default Header;
