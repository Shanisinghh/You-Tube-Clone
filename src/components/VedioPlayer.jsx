import React, { useEffect } from "react";
import Navbar from "./Navbar";
import { useState } from "react";
import { fetchData } from "../utills/rapidapi";
import ReactPlayer from "react-player/youtube";
import { AiOutlineLike } from "react-icons/ai";
import { AiOutlineDislike } from "react-icons/ai";
import { PiShareFatLight } from "react-icons/pi";
import { LiaDownloadSolid } from "react-icons/lia";
import { BsThreeDots } from "react-icons/bs";
import { BsFillCheckCircleFill } from "react-icons/bs";

import { useParams } from "react-router-dom";
import SuggestedVedio from "./SuggestedVedio";
import Vedio from "./Vedio";
function VedioPlayer() {
  const [video, setVideo] = useState();
  const [realatedVideo, setRelativeVideo] = useState();
  const { id } = useParams();

  useEffect(() => {
    fetchVideoDetails();
    fetchRelatedVideo();
  }, [id]);
  // console.log(video);
  const fetchVideoDetails = () => {
    fetchData(`video/details/?id=${id}`).then((res) => {
      console.log("vedio data", res);
      setVideo(res);
    });
  };
  const fetchRelatedVideo = () => {
    fetchData(`video/related-contents/?id=${id}`).then((res) => {
      console.log("related vedio data", res);
      setRelativeVideo(res);
    });
  };
  function calculateViews(views) {
    if (views >= 1000000) {
      return (views / 1000000).toFixed(1) + "M";
    } else if (views >= 1000) {
      return (views / 1000).toFixed(1) + "K";
    } else {
      return views;
    }
  }
  return (
    <>
      <div className="hidden md:block">
        <Navbar />
      </div>
      <div className=" md:mt-20 ">
        <div className="md:flex md:mx-9 ">
          <div className="overflow-hidden md:rounded-2xl ">
            <div className="  md:w-[62vw] w-[100vw] md:h-[75vh] h-[28vh] mdd:h-[37vh] overflow-hidden md:rounded-2xl ">
              <ReactPlayer
                url={`https://www.youtube.com/watch?v=${id}`}
                height="100%"
                width="100%"
                className="md:rounded-2xl "
                controls
                style={{ backgroundColor: "#000000" }}
                playing={true}
              />
            </div>
            <div className="md:text-[20px]  text-xl font-bold mx-1.5 mt-2">
              <h2>{video?.title} </h2>
            </div>
            <div className="py-2 px-1.5 md:w-[60vw] font-semibold text-gray-600  text-sm">
              {calculateViews(video?.stats?.views)} views |{" "}
              {video?.publishedDateTime}{" "}
            </div>
            <div className="md:flex justify-between ml-1.5 xsm:mr-0.5 mr-3 items-center ">
              <div className="flex  items-center justify-between mr-5 md:mr-0 xsm:gap-0.5  gap-3 md:gap-5 md:mb-0  mb-4">
                <div className="flex items-center xsm:gap-1 gap-3 xsm:pr-0 pr-3.5">
                  <div className="h-11 w-11 rounded-full  bg-gray-700"> </div>
                  <div className="flex  items-center   gap-2 md:gap-0 md:flex-col">
                    <h3 className="text-md xsm:text-md font-semibold">
                      {" "}
                      {video?.author?.title}
                    </h3>
                    <p className="font-semibold text-gray-600 ml-3  text-sm">
                      {" "}
                      {calculateViews(video?.stats?.views)} subscribers
                    </p>
                  </div>
                </div>
                <div className="bg-black  cursor-pointer md:ml-3 ml-9 xsm:ml-0.5 font-semibold text-white px-4 py-1.5 rounded-3xl">
                  {video?.author?.stats?.subscribersText} subscribe
                </div>
              </div>
              <div className="flex xsm:overflow-x-scroll md:overflow-x-hidden  xsm:hide-scroll-bar gap-2 text-md">
                <div className="bg-gray-200 cursor-pointer flex justify-center items-center font-semibold text-sm px-3 py-1.5 rounded-3xl">
                  <AiOutlineLike className="text-xl mr-1.5" />{" "}
                  <span> {calculateViews(video?.stats?.likes)}| </span>
                  <AiOutlineDislike className="text-xl mx-1.5" />
                </div>
                <div className="bg-gray-200 cursor-pointer font-semibold px-3 py-1.5 rounded-3xl flex justify-center items-center  gap-2">
                  <PiShareFatLight className="text-2xl" /> Share
                </div>
                <div className="bg-gray-200 cursor-pointer font-semibold px-3 py-1.5 rounded-3xl flex justify-center items-center  gap-2">
                  <LiaDownloadSolid className="text-xl" />
                  Downlode
                </div>
                <div className="bg-gray-200 cursor-pointer font-semibold px-3 py-1.5 rounded-3xl items-center flex">
                  {" "}
                  <BsThreeDots className="text-2xl" />
                </div>
              </div>
            </div>
            <div className="md:w-[60vw] w-[100vw] ">
              <h2 className="text-2xl xsm:text-xl mt-5 mx-1 font-semibold">
                {video?.stats?.comments} comments ...
              </h2>
              <div className="flex items-center mx-1 gap-3 mt-2">
                <div className="h-10 w-10 rounded-full bg-gray-700">
                  <img
                    src="\src\assets\photo.png"
                    className="overflow-hidden h-10 w-10 rounded-full"
                    alt=""
                  />
                </div>
                <input
                  type="text"
                  placeholder="Add a comment..."
                  className="w-[90%] h-10 px-3 rounded-lg outline-none"
                />
              </div>
              <div>
                <button className="mx-1.5 font-semibold md:hidden cursor-pointer text-md">
                  See all comments ...
                </button>
              </div>
              <div>
                <div className="md:flex gap-5 mt-5 hidden ">
                  <div className=" h-10 w-10 rounded-full bg-gray-700">
                    <img
                      src="\src\assets\photo.png"
                      className="overflow-hidden h-10 w-10 rounded-full"
                      alt=""
                    />
                  </div>

                  <div className="w-[90%]">
                    <h3 className="text-md font-semibold text-gray-900">
                      User name
                    </h3>
                    <p className="text-sm text-gray-800">
                      content of commentwjbwdk qwudqbwkd khqwbd qwkduw diud
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="md:ml-5 ml-0 md:mt-0 mt-5">
            <div>
              <div>
                {realatedVideo?.contents?.map((item, index) => {
                  if (item?.type !== "video") return false;
                  return <SuggestedVedio key={index} video={item?.video} />;
                })}
                {/* <SuggestedVedio /> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default VedioPlayer;
