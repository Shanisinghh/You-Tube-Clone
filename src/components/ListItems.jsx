import React from "react";

function ListItems() {
  const categories = [
    "All",
    "Music",
    "React routers",
    "Computer programming",
    "Reverberation",
    "Movie musicals",
    "India national cricket team",
    "News",
    "Mixes",
    "1990s",
    "Telugu cinema",
    "Live",
    "Dramedy",
    "Dubbing",
    "Indian soap opera",
    "Cricket",
    "Football",
    "Learn Coding",
  ];
  return (
    <div className="myscrolbar  flex fixed z-50 bg-white md:left-[18%] overflow-x-scroll hide-scroll-bar px-1">
      <div className="flex space-x-3 flex-nowrap">
        {categories.map((category) => {
          return (
            <div
              key={category}
              className=" flex-none bg-gray-100 hover:bg-gray-300 duration-300 rounded-xl px-4 py-1 font-semibold text-black cursor-pointer"
            >
              {category}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default ListItems;
