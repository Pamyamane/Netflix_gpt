import React from "react";

const GptSearchbar = () => {
  return (
    <div className="pt-[5%] flex justify-center">
      <form className=" w-1/2  bg-black grid grid-cols-12">
        <input
          className=" p-4 m-4  col-span-9"
          type="text"
          placeholder=" What you like to watch today..."
        />
        <button
          className="py-2 px-4 m-4 bg-red-600 text-white rounded-lg   col-span-3 "
          type="submit"
        >
          Search
        </button>
      </form>
    </div>
  );
};

export default GptSearchbar;
