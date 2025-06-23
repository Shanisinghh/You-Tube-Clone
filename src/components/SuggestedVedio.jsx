import React from "react";
import { Link } from "react-router-dom";

function SuggestedVedio({ video }) {
  function calculateViews(views) {
    if (views >= 1000000) {
      return (views / 1000000).toFixed(1) + "M";
    } else if (views >= 1000) {
      return (views / 1000).toFixed(1) + "K";
    } else {
      return views;
    }
  }
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
  return (
    <>
      <div className="flex flex-col md:w-[30vw] gap-2 ">
        <Link to={`/video/${video?.videoId}`}>
          <div className="md:flex my-1.5   gap-2">
            <div className="md:w-45 md:h-25 w-screen relative  md:rounded-lg">
              <img
                src={video?.thumbnails[0]?.url}
                alt="Vedio Thumbnail"
                className="h-full w-full md:rounded-lg"
              />
              <span className="absolute right-[12px] md:right-[8px] md:bottom-[8px] bottom-[12px] bg-[rgba(0,0,0,0.8)] md:px-1.5 px-1 rounded-md text-gray-200 text-sm md:text-xs">
                {convertSecondstoTime(video?.lengthSeconds)}
              </span>
            </div>
            <div className="flex gap-1.5 mx-2 my-1.5">
              <div className="md:hidden">
                <img
                  src={video?.author?.avatar[0]?.url}
                  className="h-10 rounded-full  bg-gray-100"
                  alt="user photo"
                />
              </div>
              <div className="w-[90%]">
                <h3 className="text-sm  mb-1 font-medium ">{video?.title}</h3>
                <div className="flex gap-1 text-gray-600 font-semibold md:flex-col">
                  <p className="text-xs ">{video?.author?.title} </p>
                  <p className="text-xs ">
                    {calculateViews(video?.stats?.views)} |{" "}
                    {video?.publishedTimeText}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Link>
      </div>
    </>
  );
}

export default SuggestedVedio;
