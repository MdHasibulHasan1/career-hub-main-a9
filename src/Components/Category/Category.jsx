import React from "react";

const Category = ({ category }) => {
  const { id, logo, category_name, jobs_available } = category;
  return (
    <div className="bg-slate-200  w-full rounded px-3 py-3">
      <img src={logo} alt="" />
      <h2>{category_name}</h2>
      <p>{jobs_available}</p>
    </div>
  );
};

export default Category;
