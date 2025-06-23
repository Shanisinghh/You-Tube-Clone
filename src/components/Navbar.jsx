import React from "react";

import { HiOutlineBars3 } from "react-icons/hi2";
import { IoIosSearch } from "react-icons/io";
import { FaMicrophone } from "react-icons/fa";
import { MdMic } from "react-icons/md";
import { FiPlus } from "react-icons/fi";
import { GoBell } from "react-icons/go";
import { useData } from "../context/DataProvider";

function Navbar() {
  const { loading, data, value, setValue } = useData();

  function handlemenu() {
    const sidebar = document.querySelector("#sidebar");
    sidebar.classList.toggle("visiblee");
    sidebar.classList.toggle("hiddenn");
  }
  function handleSearch() {
    const searchInput = document.querySelector("#search");
    setValue(searchInput.value);
    searchInput.value = "";
  }

  // if (loading) {
  //   return (
  //     <div className="flex justify-center items-center h-screen">
  //       <img src="\src\assets\loding.webp" className="h-30" alt="Loading..." />
  //     </div>
  //   );
  // }

  return (
    <>
      <div className="flex fixed w-screen top-0 bg-white z-50 justify-between mdpx-2 px-0.5 py-2 pb-5">
        <div className="flex justify-center items-center">
          <div onClick={handlemenu}>
            <HiOutlineBars3 className="text-2xl cursor-pointer font-bold m-1 md:mx-3" />
          </div>
          <div>
            <img src="\src\assets\logo.png" className="h-8" />
            {/* <img src="\src\assets\photo.png" className="h-8" /> */}
          </div>
        </div>
        <div className="flex justify-center items-center">
          <input
            id="search"
            type="text"
            placeholder="Search"
            className="text-xl   outline-none px-3.5 border border-gray-400 md:ml-11 ml-1.5 h-10 md:w-[40vw] w-[35vw] rounded-l-3xl "
          />
          <button
            onClick={handleSearch}
            id="button"
            className="outline-none border bg-gray-100 border-gray-400 h-10  rounded-r-3xl w-10 md:w-[5vw] hover:bg-gray-300"
          >
            <IoIosSearch className="text-2xl m-auto" />
          </button>
          <div className="md:p-1.5 border  border-gray-400 hidden md:block rounded-full md:mx-4 bg-gray-100 hover:bg-gray-300">
            <MdMic className="text-2xl" />
          </div>
        </div>
        <div className="flex justify-center items-center gap-6 mx-2 md:mx-9">
          <button className="md:flex items-center justify-center  hidden gap-2 md:px-3 md:py-1.5  bg-gray-100 rounded-3xl hover:bg-gray-300">
            <FiPlus className="text-2xl" /> Create
          </button>
          <GoBell className="text-2xl hidden md:block" />
          <img
            src="\src\assets\photo.png"
            className="h-9 rounded-full  bg-gray-100"
            alt="user photo"
          />
        </div>
      </div>
    </>
  );
}

export default Navbar;
