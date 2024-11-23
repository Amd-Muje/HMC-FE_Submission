import Navbar from "../components/Navbar";
import Card from "../components/Card";
import React, { useState, useEffect } from "react";
import "../App.css";
import fetcher from "../fetcher";
import Sidebar from "../components/Sidebar";
import Cath from "../components/Cath";

const Home = () => {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetcher("products");
      setProducts(data);
    };
    fetchData();
  }, []);

  useEffect(() => {
    const fetchCategories = async () => {
      const data = await fetcher("products/categories");
      setCategories(data);
    };
    fetchCategories();
  }, []);

  const [showCath, setShowCath] = useState(false);

  const toggleShowCath = () => {
    setShowCath(!showCath);
  };

  const renderCard = () => {
    return products.map((p) => <Card key={p.id} product={p} />);
  };

  return (
    <div className="bg-gray-50 h-full w-[100%]">
      <Navbar toggleShowCath={toggleShowCath}/>
      {showCath && <Cath />}
      <div className="flex justify-center mx-20 gap-10 mt-8">
        <Sidebar />
        <div className="flex flex-col gap-7">
          <p className="font-bold text-2xl">
            List Produk Kami <span className=" text-orange-400">"Semua"</span>
          </p>
          <p>
            <span className="border-[2px] rounded-3xl border-gray-200 border-solid bg-slate-100 px-5 py-2">
              o Kategori
            </span>
          </p>
          <section className="flex flex-wrap gap-3">{renderCard()}</section>
        </div>
      </div>
    </div>
  );
};

export default Home;