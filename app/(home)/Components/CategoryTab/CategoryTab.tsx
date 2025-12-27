import React from "react";

const CategoryTab = () => {
  return (
    <div className="mt-15 flex justify-between w-340 h-6.75 ">
      <ul className="flex gap-6.5 font-pop font-normal">
        <li className="font-bold text-[#6F8A15]">Anything</li>
        <li>Breakfast</li>
        <li>Dinner</li>
        <li>Main Course</li>
        <li>Snacks</li>
        <li>Dessert</li>
        <li>Hard drinks</li>
        <li>Soft drinks</li>
      </ul>
      <button className="font-bold font-pop text-[#000AFF]">
        Explore More
      </button>
    </div>
  );
};

export default CategoryTab;
