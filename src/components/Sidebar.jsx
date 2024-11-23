import React from "react";

const Sidebar = () => {
  return (
    <div className="w-[100%] bg-white rounded-lg p-4 h-full shadow-md">
      <h1 className="text-4xl font-semibold pb-6">Filter</h1>

      <h2 className="pb-3 text-xl font-semibold">Supplies Type</h2>
      <div className="flex flex-col text-lg ml-5 pb-3 gap-2">
        <div className="flex flex-row gap-5">
          <input type="checkbox" className="transform scale-150" />{" "}
          <label> Trade Assurance </label>
        </div>
        <div className="flex flex-row gap-5">
          <input type="checkbox" className="transform scale-150" />{" "}
          <label> Verified Supplies </label>
        </div>
      </div>
      <h2 className="pb-3 text-xl font-semibold">Supplies Type</h2>
      <div className="flex flex-col text-lg ml-5 pb-3 gap-2">
        <div className="flex flex-row gap-5">
          <input type="checkbox" className="transform scale-150" />{" "}
          <label> Trade Assurance </label>
        </div>
        <div className="flex flex-row gap-5">
          <input type="checkbox" className="transform scale-150" />{" "}
          <label> Verified Supplies </label>
        </div>
      </div>
      <h2 className="pb-3 text-xl font-semibold">Supplies Type</h2>
      <div className="flex flex-col text-lg ml-5 pb-3 gap-2">
        <div className="flex flex-row gap-5">
          <input type="checkbox" className="transform scale-150" />{" "}
          <label> Trade Assurance </label>
        </div>
        <div className="flex flex-row gap-5">
          <input type="checkbox" className="transform scale-150" />{" "}
          <label> Verified Supplies </label>
        </div>
      </div>
      <h2 className="pb-3 text-xl font-semibold">Min Order</h2>
      <input
        type="range"
        min="1"
        max="100"
        className="ml-12 transform scale-150 pb-3"
      />
    </div>
  );
};

export default Sidebar;
