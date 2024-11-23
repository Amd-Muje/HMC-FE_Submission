import React from "react";
import { useState } from "react";
import { 
  Search,
  ShoppingCart,
  Scroll,
  CircleUserRound
} from 'lucide-react';
import Cath from "./Cath";


const Navbar = ({ toggleShowCath }) => {



  return (
    <nav className= "flex flex-col border-gray-200 border-b-2 bg-white h-[10vh] p-5 flex items-center justify-center ">
      <div className="flex items-center space-x-5 ">
        <a href="">BeliSaja</a>
        <div className="p-1 border-2 rounded-full gap-4 flex">
          <button onClick={toggleShowCath} className="border-r-2 text-gray-600 px-4 py-2">
            Kategori
          </button>
          <input type="text" name="" id="" className="w-96 rounded-full p-2 focus:outline-none focus:border-transparent focus:bg-transparent" />

          <button className=" text-white flex items-center gap-4 rounded-full px-7 py-2 bg-orange-500"><span> <Search size={24} strokeWidth={2}/></span> Search</button>
        </div>
        <a href="" className="flex items-center gap-2"> <span><ShoppingCart size={20} strokeWidth={1.5} /></span> Keranjang</a>
        <a href="" className="flex items-center gap-2"> <span><Scroll size={20} strokeWidth={1.5} /></span>WishList</a>
        <a href="" className="flex items-center gap-2"> <span><CircleUserRound size={20} strokeWidth={1.5} /></span> Profile</a>
      </div>
      
    </nav>
  );
};

export default Navbar;
