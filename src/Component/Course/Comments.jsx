import React, { useEffect, useState, useContext } from "react";
import toastr from "toastr";
import jwt from "jsonwebtoken";

import http from "../../Services/httpService";
import Context from "./../../Context/Context";
import "./index.css";

const Comments = () => {
  const [comment, setComment] = useState("");
  const [comments, setComments] = useState([]);
  console.log("comment is :", comment);
  const context = useContext(Context);

  useEffect(async () => {
    try {
      const getComment = await http.get("https://api.pounes.ir/getComment");
      setComments(getComment.data.comments);
      console.log("data is :", getComment.data.message);
    } catch (err) {
      console.log(err);
    }
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = context.token;
    try {
      if (token) {
        const fullName = await jwt.decode(localStorage.getItem("token"));
        await http.post(
          "https://api.pounes.ir/setComment",
          JSON.stringify({ comment, fullName: fullName.user.fullName })
        );
        toastr.success("نظر شما به زودی ثبت میشود");
        setComment("");
      } else {
        toastr.warning("برای ثبت نظر ابتدا در سایت ثبت نام کنید");
      }
    } catch (err) {
      console.log(err);
      toastr.error("فکر کنم اینترنتت خاموش شده");
    }
  };
  return (
    <div className="shadow-xl w-full mt-3 md:p-5 p-3  bg-white rounded pb-32">
      <h3 className="font-bold p-2 text-gray-700">نظرات :</h3>
      <form onSubmit={(e) => handleSubmit(e)} className="pb-6">
        <textarea
          required
          onChange={(e) => setComment(e.target.value)}
          value={comment}
          name="comment"
          rows="6"
          className="w-full p-2 borderSingleCourse"
          placeholder="نظرت رو برام بنویس ..."
        ></textarea>
        {context.token ? (
          <button
            className="bg-indigo-600 mt-2 text-white font-bold px-4 py-2 rounded w-full md:w-1/5"
            type="submit"
          >
            ارسال نظر
          </button>
        ) : (
          <button className="bg-color text-white font-bold px-4 py-2 rounded w-full md:w-1/5">
            برای ارسال نظر در سایت ثبت نام کنید
          </button>
        )}
      </form>
      {comments ? (
        <div>
          {comments
            .filter((p) => p.isAllowed === true)
            .reverse()
            .map((c) => (
              <div>
                <div className="w-full borderSingleCourse mt-4 p-2">
                  <div className="flex">
                    <div className="w-12 h-12 circle bg-gray-200"></div>
                    <p className="mt-4 mr-2 text-sm font-bold">{c.fullName}</p>
                  </div>
                  <p className="m-2 mt-4 text-sm">{c.comment}</p>
                </div>
                {c.response ? (
                  <div className="pr-4">
                    <div className="w-full borderSingleCourseResponse mt-2 p-2">
                      <div className="flex">
                        <img
                          src="image/avatar.png"
                          alt="avatar"
                          className="w-12 h-12 circle border-2 "
                        ></img>
                        <p className="mt-4 mr-2 text-sm font-bold">
                          ابوالفضل مختاری{" "}
                          <span className="text-sm font-light">(مدیرسایت)</span>
                        </p>
                      </div>
                      <p className="m-2 mt-4 text-sm">{c.response}</p>
                    </div>
                  </div>
                ) : (
                  ""
                )}
              </div>
            ))}
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default Comments;
