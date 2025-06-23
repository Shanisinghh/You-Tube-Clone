import React from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
function Search() {
  return (
    <>
      <Navbar />
      <div className="mt-15">
        <Sidebar />
        <div className="absolute flex justify-center items-center gap-3  flex-wrap md:left-[17%] m-2.5">
          <div className="h-[30vh]  w-[90vw] border rounded-2xl mx-3">
            <div className="h-52  w-[90vw] rounded-2xl  md:w-[25vw] text-center border">
              <img
                src="\src\assets\ecommeree.jpeg"
                className="h-full w-full rounded-2xl"
                alt="search result"
              />
            </div>
            <div className="flex gap-3 mt-2">
              <img
                src="\src\assets\photo.png"
                className="h-14 rounded-full  bg-gray-100"
                alt="user photo"
              />
              <h2 className="text-xl">this is javascript tutorial</h2>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Search;
