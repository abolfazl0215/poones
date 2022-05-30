import React, {
  useState,
  useEffect,
  useContext,
  useRef,
} from "react";
import { BiTrash } from "react-icons/bi";
import { Helmet } from "react-helmet";
import toastr from "toastr";
import jwt from "jsonwebtoken";

import CartContext from "./../../Context/CartContext";
import courses from "./Courses.json";
import http from "../../Services/httpService";
import { Link } from "react-router-dom";

const Cart = () => {
  const [courseId, setCourseId] = useState([]);
  const [course, setCourse] = useState([]);

  const context = useContext(CartContext);

  useEffect(() => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;

    if (localStorage.getItem("cart")) {
      const getCourseId = JSON.parse(localStorage.getItem("cart"));
      setCourseId(getCourseId);
      const arr = [];
      getCourseId.map((p) => {
        courses.map((e) => {
          if (e.id == p) {
            arr.push(e);
          }
        });
        setCourse(arr);
      });
    }
  }, []);

  useEffect(() => {
    context.setCartLength(course.length);
  }, [course]);

  var totalPrice = course.reduce((acc, curr) => {
    return parseInt(acc) + parseInt(curr.price);
  }, 0);

  const removeCart = (id) => {
    const filtered = course.filter((p) => p.id != id);
    setCourse(filtered);
    const filterCourseId = courseId.filter((p) => p != id);
    if (courseId.length > 1) {
      localStorage.setItem("cart", JSON.stringify(filterCourseId));
    } else {
      localStorage.removeItem("cart");
    }
    setCourseId([id]);
    toastr.info("دوره مورد نظر از سبد خرید حذف شد");
  };

  function separate(price) {
    price += "";
    price = price.replace(",", "");
    let x = price.split(".");
    let y = x[0];
    let z = x.length > 1 ? "." + x[1] : "";
    var rgx = /(\d+)(\d{3})/;
    while (rgx.test(y)) y = y.replace(rgx, "$1" + "," + "$2");
    return y + z;
  }

  const goPayment = useRef();
  const payment = async () => {
    try {
      const { data } = await http.post(
        "https://api.pounes.ir/payment",
        JSON.stringify({ amount: 7900000 }),
      );
      console.log(data);
      window.location.replace(
        `https://www.zarinpal.com/pg/StartPay/${data.authority}`,
      );
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className=" b-8">
      <Helmet>
        <meta charSet="utf-8" />
        <title>سبدخرید</title>
        <meta name="robots" content="noindex" />
      </Helmet>

      {course.length >= 1 ? (
        <div className="flex justify-between flex-wrap px-2  md:px-12 md:mt-12 mt-6 relative">
          <div className="md:w-3/4 w-full md:px-4 ">
            {course ? (
              <>
                {course.map((p) => (
                  <div className="w-full bg-indigo-200 flex justify-between flex-wrap mt-2 p-2 rounded-lg">
                    <div className="flex items-center">
                      <img
                        onClick={() =>
                          console.log(context.cartLength)
                        }
                        className="md:w-28 w-16 rounded-lg"
                        src={p.image_url1}
                        alt=""
                      />
                      <div className="mr-3">
                        <p
                          onClick={() => console.log(course)}
                          className="py-2 font-yekan-bold md:text-sm text-xs">
                          {p.name}
                        </p>
                        <p
                          className="py-2 text-xs"
                          onClick={() => console.log(course)}>
                          ابولفضل مختاری
                        </p>
                      </div>
                    </div>
                    <div className="ml-2 flex items-center">
                      <div className="ml-6">
                        <p className="py-2 font-yekan-bold md:text-sm text-xs">
                          {separate(p.price)}
                        </p>
                        <p className="py-2 text-xs">هزار تومان</p>
                      </div>
                      <div
                        onClick={() => removeCart(p.id)}
                        className="p-2 cursor-pointer">
                        <BiTrash className="text-indigo-600" />
                      </div>
                    </div>
                  </div>
                ))}
              </>
            ) : (
              ""
            )}
          </div>
          <div className="md:w-1/4 w-full md:px-4">
            <div className="w-full bg-indigo-200 mt-2 p-2 rounded-lg pb-6">
              <p
                onClick={() => console.log(course)}
                className=" text-center font-yekan-bold mt-2">
                اطلاعات پرداخت
              </p>
              <hr className="bg-indigo-200 mt-3" />
              <div className="flex justify-between mt-6 px-2">
                <p className="font-yekan-bold text-xs md:text-sm">
                  جمع کل :
                </p>
                <p className=" text-xs md:text-sm">
                  <span className="font-yekan-bold">
                    {separate(totalPrice)}
                  </span>{" "}
                  تومان
                </p>
              </div>
              <hr className="bg-indigo-200 mt-4" />
              <div className="flex justify-between mt-6 px-2">
                <p className="font-yekan-bold text-xs md:text-sm">
                  مبلغ قابل پرداخت :
                </p>
                <p className=" text-xs md:text-sm">
                  <span className="font-yekan-bold">
                    {separate(totalPrice)}
                  </span>{" "}
                  تومان
                </p>
              </div>
              <button
                onClick={() => payment()}
                className="mt-16 px-6 py-2 bg-indigo-600 text-white w-full rounded-lg">
                تکمیل فرآیند خرید
              </button>
            </div>
          </div>
        </div>
      ) : (
        <>
          <p className="  p-4 mt-44 text-indigo-600 rounded text-center mx-auto font-yekan-bold">
            سبدخرید شما خالی است
          </p>

          <div className="text-center mt-3 pb-20">
            <Link
              to="/courses"
              className="mx-auto bg-indigo-600 text-white py-2 px-20 rounded-lg">
              برو به دوره ها
            </Link>
            <p className="mt-6 text-sm">
              <Link
                to="/"
                className="mx-auto text-indigo-600 py-2 px-20 rounded-lg">
                برو به صفحه اصلی
              </Link>
            </p>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
