import React from "react";
import { Link } from "react-router-dom";

import { BsFillCheckCircleFill } from "react-icons/bs";

function Vedio({ video }) {
  console.log(video);

  function convertSecondstoTime(givenSeconds) {
    let given_seconds = givenSeconds;

    let hours = Math.floor(given_seconds / 3600);
    let minutes = Math.floor((given_seconds - hours * 3600) / 60);
    let seconds = given_seconds - hours * 3600 - minutes * 60;

    let timeString =
      hours.toString().padStart(2, "0") +
      ":" +
      minutes.toString().padStart(2, "0") +
      ":" +
      seconds.toString().padStart(2, "0");

    return timeString;
  }
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
      <Link to={`/video/${video?.videoId}`}>
        <div className="  w-[95vw] md:w-[26vw] hover:bg-gray-200 duration-200 ease-in-out  pb-1.5 rounded-2xl mx-3 md:mx-0">
          <div className="h-60 md:h-52 relative  w-[100%] rounded-2xl p-2  md:w-[26vw] text-center ">
            <img
              src={video?.thumbnails[0]?.url}
              className="h-full w-full rounded-2xl"
              alt="search result"
            />
            <span className="absolute right-[18px] bottom-[18px] bg-[rgba(0,0,0,0.8)] px-1.5 rounded-md text-gray-200 text-sm ">
              {convertSecondstoTime(video?.lengthSeconds)}
            </span>
          </div>
          <div className="flex gap-3 pl-2 mt-2">
            <img
              src={video?.author?.avatar[0]?.url}
              className="h-10 rounded-full  bg-gray-100"
              alt="user photo"
            />
            <div>
              <h2 className="text-md space-y-8 font-medium line-clamp-2">
                {video?.title}
              </h2>
              <div className="flex text-sm items-center gap-1">
                <p className="text-gray-500">{video?.author?.title}</p>
                {video?.author?.badges[0]?.type === "VERIFIED_CHANNEL" && (
                  <BsFillCheckCircleFill className="text-gray-600 ml-1 text-[12px]" />
                )}
              </div>
              <p className="text-gray-500 text-sm">
                {calculateViews(video?.stats?.views)} |{" "}
                {video?.publishedTimeText}
              </p>
            </div>
          </div>
        </div>
      </Link>
    </>
  );
}

export default Vedio;
