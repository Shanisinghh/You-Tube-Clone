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
              src="\src\assets\loding.webp"
              className="h-25"
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
          <div className="absolute flex gap-1 overflow-hidden mt-15 flex-wrap md:left-[18%] ">
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
