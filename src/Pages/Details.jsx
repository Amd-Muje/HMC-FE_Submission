import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import fetcher from "../fetcher";
import Navbar from "../components/Navbar";
import { MapPinned } from "lucide-react";

const Detail = () => {
  return (
    <div className="bg-slate-100 h-[100vh]">
      <Navbar />
      <div className="flex flex-row py-10 px-32 ">
        <div className="flex w-[30%] justify-center bg-white rounded-lg">
          <img src="" alt="gambar.png" />
        </div>

        <div className="flex flex-col w-[40%] px-12">
          <h1>Judul</h1>
          <h1>Deskripsi</h1>
          <h1>harga</h1>
        </div>

        <div className="flex justify-center flex-col w-[30%] align-middle p-6 bg-white rounded-lg justify-items-center ">
          <p className="mb-4 text-lg font-semibold ">Delivery</p>
          <div>
            <div className="flex flex-row border-gray-100 border-2 w-fit px-6 gap-32 rounded-lg py-2">
              <MapPinned />
              <select name="" id="">
                <option value="">palu</option>
                <option value="">sigi</option>
              </select>
            </div>
          </div>
          <p className="mb-4 text-lg font-semibold ">Stok </p>
          <div className="flex flex-row  mb-4 border-gray-100 border-2 w-fit gap-32 rounded-xl">
            <button className="bg-gray-100 px-4 font-bold text-2xl">-</button>
            <p className="mb-4 text-lg font-semibold  text-gray-600 ">1</p>
            <button className="bg-orange-400 px-4 font-bold text-white text-2xl ">
              +
            </button>
          </div>
          <div className="flex flex-row justify-between">
            <p className="mb-4 text-lg font-semibold  text-gray-600  ">PRICE</p>
            <p className="mb-4 text-lg font-semibold text-orange-700">0000$</p>
          </div>
          <div className="flex flex-row justify-between">
            <p className="mb-4 text-lg font-semibold text-gray-600 ">ONGKIR</p>
            <p className="mb-4 text-lg font-semibold text-orange-700 ">0000$</p>
          </div>
          <div>
            <p className="flex justify-center w-64 mb-3 text-2xl bg-orange-400 text-white border-gray-100 border-2 w-fit px-6 gap-32 rounded-lg py-2">
              add to card
            </p>
            <p className="flex justify-center w-64 mb-3 text-2xl border-gray-100 border-2 w-fit px-6 gap-32 rounded-lg py-2">
              Buy Now
            </p>
          </div>
          <div>
            <p className="text-lg font-semibold ">Chat</p>
            <p className=" text-lg font-semibold ">Share</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Detail;
