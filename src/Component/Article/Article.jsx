import React, { useContext, useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import CartContext from "./../../Context/CartContext";
import "./index.css";
import video from "./main4.mp4";
import videojs from "video.js";
import "video.js/dist/video-js.css";

const Article = (props) => {
  const location = useLocation();
  const cartContext = useContext(CartContext);
  const videoRef = useRef(null);
  const playerRef = useRef(null);
  const { options, onReady } = props;

  useEffect(() => {
    // make sure Video.js player is only initialized once
    if (!playerRef.current) {
      const videoElement = videoRef.current;
      if (!videoElement) return;

      const player = (playerRef.current = videojs(videoElement, options, () => {
        console.log("player is ready");
        onReady && onReady(player);
      }));
    }
  }, [options, videoRef]);
  return (
    <div className="md:pt-24 pt-10">
      {location.pathname === "/" ? (
        <div className="text-center">
          <h1 className="inline-block py-2 px-4 rounded-3xl text-white bg-color font-bold md:text-xl">
            آخرین مقالات
          </h1>
          <hr style={{ height: "1.9px" }} className="bg-color -mt-5" />
        </div>
      ) : (
        ""
      )}
      <div className="p-5 mt-4 md:flex md:justify-between">
        {cartContext.courses.map((p) => (
          <div className="sm:w-full pb-4  course-shadow mt-5 md:m-3 md:w-30/100 sm:text-sm text-small relative">
            <video
              ref={videoRef}
              id="video"
              className="video-js vjs-fluid w-full h-auto7"
              controls
              data-setup={{}}
              poster="/image/roadMap.jpg"
            >
              <source src={video} />
            </video>
            <h1 className="p-4 text-gray-600 font-bold text-center">
              نقشه راه طراحی وب
            </h1>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Article;
