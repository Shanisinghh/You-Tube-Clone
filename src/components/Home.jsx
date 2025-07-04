import React from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import { useData } from "../context/DataProvider";
import { data } from "react-router-dom";
import Vedio from "./Vedio";
import ListItems from "./ListItems";

function Home() {
  const { data, loading } = useData();
  console.log(data);
  if (loading) {
    return (
      <>
        <Navbar />
        <div className="mt-17">
          <Sidebar />
          <ListItems />
          <div className="flex justify-center md:ml-[210px] items-center h-screen">
            <img
              // src="\src\assets\loding.webp"
              src="https://cdn.pixabay.com/animation/2023/08/11/21/18/21-18-05-265_512.gif"
              className="xsm:h-11 md:h-15"
              alt="Loading..."
            />
          </div>
        </div>
      </>
    );
  } else if (!data || data.length === 0) {
    return (
      <>
        <Navbar />
        <div className="mt-17">
          <Sidebar />
          <ListItems />
          <div className="flex justify-center md:ml-[210px] items-center h-screen">
            <h1 className="text-2xl md:text-3xl text-center font-bold">
              ⚠️ Unable to fetch data. Please try again later.
            </h1>
          </div>
        </div>
      </>
    );
  } else
    return (
      <>
        <Navbar />
        <div className="mt-17">
          <Sidebar />
          <ListItems />
          <div className="absolute flex md:gap-4 gap-1 overflow-hidden mt-15 flex-wrap md:left-[18%] ">
            {data.map((item) => {
              if (item.type !== "video") return false;
              return <Vedio key={item.id} video={item?.video} />;
            })}
          </div>
        </div>
      </>
    );
}

export default Home;
