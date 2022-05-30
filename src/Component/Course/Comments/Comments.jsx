import React, { useEffect, useState, useContext } from "react";
import toastr from "toastr";
import jwt from "jsonwebtoken";
import moment from "jalali-moment";

import http from "../../../Services/httpService";
import Context from "../../../Context/Context";
import "../index.css";

const Comments = () => {
  const [comment, setComment] = useState("");
  const [comments, setComments] = useState([]);
  const [courseId, setCourseId] = useState();

  const context = useContext(Context);

  useEffect(async () => {
    // get comments from database
    try {
      const getComment = await http.get(
        "https://api.pounes.ir/getComment",
      );
      setComments(getComment.data.comments);
    } catch (err) {
      console.log(err);
    }

    const cId = await localStorage.getItem("singleCourse");
    setCourseId(cId);
    // End get comments from database
  }, []);

  // set comment in database
  const createComment = async (e) => {
    e.preventDefault();
    const token = context.token;
    try {
      if (token) {
        const fullName = await jwt.decode(
          localStorage.getItem("token"),
        );
        await http.post(
          "https://api.pounes.ir/setComment",
          JSON.stringify({
            comment,
            fullName: fullName.user.fullName,
            createAt: Date.now(),
            number: courseId,
          }),
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
  // End set comment in database
  return (
    <div className="shadow-xl mb-28 w-full mt-3 md:p-5 p-3  bg-white rounded pb-32">
      <h3 className="font-bold p-2 text-gray-700">نظرات :</h3>
      <form onSubmit={(e) => createComment(e)} className="pb-6">
        <textarea
          required
          onChange={(e) => setComment(e.target.value)}
          value={comment}
          name="comment"
          rows="6"
          className="w-full p-2 borderSingleCourse"
          placeholder="نظرت رو برام بنویس ..."></textarea>
        {context.token ? (
          <button
            className="bg-indigo-600 mt-2 text-white font-bold px-4 py-2 rounded w-full md:w-1/5"
            type="submit">
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
            .filter((p) => p.number == courseId)
            .map((c) => (
              <div>
                <div className="w-full borderSingleCourse mt-4 p-2">
                  <div className="flex">
                    <div className="w-12 h-12 circle bg-gray-200"></div>
                    <div>
                      <p className="mt-2 mr-2 text-sm">
                        {c.fullName}
                      </p>
                      {c.createAt > 100 ? (
                        <p className=" mr-2 text-sm text-gray-400">
                          {/* {c.createAt} */}
                          {moment(parseInt(c.createAt))
                            .locale("fa")
                            .format("YYYY/MM/DD")}
                        </p>
                      ) : (
                        ""
                      )}
                    </div>
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
                          className="w-12 h-12 circle border-2 "></img>
                        <p className="mt-4 mr-2 text-sm">
                          ابوالفضل مختاری{" "}
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
