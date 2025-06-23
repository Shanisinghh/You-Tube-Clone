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
            <img src="https://logos-world.net/wp-content/uploads/2020/04/YouTube-Logo.png" className="md:h-14 h-13" />
            {/* <img src="\src\assets\photo.png" className="h-8" /> */}
          </div>
        </div>
        <div className="flex justify-center items-center">
          <input
            id="search"
            type="text"
            placeholder="Search"
            className="text-[16px] font-semibold  outline-none px-3.5 border border-gray-400 md:ml-11 ml-1.5 md:h-10 h-9 md:w-[40vw] w-[35vw] rounded-l-3xl "
          />
          <button
            onClick={handleSearch}
            id="button"
            className="outline-none border bg-gray-100 border-gray-400 md:h-10 h-9 rounded-r-3xl w-10 md:w-[5vw] hover:bg-gray-300"
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
            src="https://scontent.flko13-1.fna.fbcdn.net/v/t39.30808-6/453774718_849100123847724_4893929885923905717_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=aqssYXpJOh0Q7kNvwFJxDJV&_nc_oc=Admru0IzTmlFeJrBmF2Uncnab8YAdkbWM5zsb-SkbsUkbTSztQEy6q_Lbs78h4KgAoY&_nc_zt=23&_nc_ht=scontent.flko13-1.fna&_nc_gid=PJuKtOM9FQd1APlz6Ws9oQ&oh=00_AfPmRL-GD98xZpk-cGDKtvVuFJeEQdLUm5EPfxcD7IOvCA&oe=685F583B"
            className="h-9 rounded-full  bg-gray-100"
            alt="user photo"
          />
        </div>
      </div>
    </>
  );
}

export default Navbar;
