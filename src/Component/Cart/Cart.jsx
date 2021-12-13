import React, { useContext, useEffect } from "react";
import { BiTrash } from "react-icons/bi";
import CartContext from "./../../Context/CartContext";
const Cart = () => {
  const cartContext = useContext(CartContext);
  useEffect(() => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }, []);
  return (
    <div className="pt-24 b-8">
      {cartContext.cartShop && cartContext.cartShop.length > 0 ? (
        <div className="w-full px-2 flex flex-wrap">
          {cartContext.cartShop.map((p) => (
            <section
              //   style={{ zIndex: "-1" }} 
              className="p-4 w-full md:w-1/2 text-sm"
            >
              <div className=" border-2 rounded flex flex-wrap p-3 ">
                <h1 className="w-full text-center font-bold border-b-2 pb-2 mb-2 text-sm">
                  {p.name}
                </h1>
                <div className="relative">
                  <BiTrash
                    onClick={() => cartContext.deleteFromCart(p.id)}
                    className="cursor-pointer absolute left-2 text-red-400 text-xl"
                  />
                </div>
                <img className="w-28 md:w-32 h-auto" src={p.image_url} alt="" />
                <div className="text-gray-800 float-right mr-3 text-xs md:text-sm">
                  <p className="flex">
                    <span className="absolute mt-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="#9966ff"
                        stroke-width="1.5"
                        stroke-linecap="butt"
                        stroke-linejoin="round"
                      >
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                    </span>
                    <span className=" mr-5 mt-2">مشاوره رایگان</span>
                  </p>
                  <p className="flex">
                    <span className="absolute mt-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="#9966ff"
                        stroke-width="1.5"
                        stroke-linecap="butt"
                        stroke-linejoin="round"
                      >
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                    </span>
                    <span className=" mr-5 mt-2">پشتیبانی فوق العاده</span>
                  </p>
                  <p className="flex">
                    <span className="absolute mt-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="#9966ff"
                        stroke-width="1.5"
                        stroke-linecap="butt"
                        stroke-linejoin="round"
                      >
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                    </span>
                    <span className=" mr-5 mt-2">تضمین کیفیت</span>
                  </p>
                  <p className="flex">
                    <span className="absolute mt-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="#9966ff"
                        stroke-width="1.5"
                        stroke-linecap="butt"
                        stroke-linejoin="round"
                      >
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                    </span>
                    <span className=" mr-5 mt-2">ارایه محتوای باارزش</span>
                  </p>
                </div>
              </div>
            </section>
          ))}
        </div>
      ) : (
        <div className="w-2/3 p-4 text-white rounded text-center mx-auto font-bold bg-color">
          سبدخرید شما خالی است
        </div>
      )}
    </div>
  );
};

export default Cart;
