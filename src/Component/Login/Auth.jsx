import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Box from "@mui/material/Box";
import Backdrop from "@mui/material/Backdrop";

import Context from "./../../Context/Context";

const Login = () => {
  const context = useContext(Context);
  const [inp, setInp] = useState("");
  const [counter, setCounter] = useState(100);

  const navigate = useNavigate();

  useEffect(() => {
    counter > 0 && setTimeout(() => setCounter(counter - 1), 1000);
  }, [counter]);

  useEffect(() => {
    if (!context.emailLogin) {
      navigate("/login");
    }

    window.scrollTo(0, 0);
    setInp(context.emailLogin);
    context.setFullName("");
    context.handleClose();
  }, []);

  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>ورد به سایت | پونس</title>
        <meta name="robots" content="noindex" />
      </Helmet>
      <h1 className="">.</h1>
      <form
        onSubmit={(e) => context.handleSubmitLoginEnd(e)}
        className="mt-24 md:mt-24 mx-auto  border-2 border-gray-200 w-4/5 md:w-1/3 p-4 text-indigo-700 text-sm rounded-lg">
        <p className="text-center text-3xl font-extrabold font-yekan">
          پونس
        </p>
        <p className=" text-center p-3 mt-4 rounded-lg">
          کد تایید برای <span className="text-red-600">{inp}</span>{" "}
          ارسال شد
        </p>

        <div className="p-3 mt-6">
          <label>
            کد تایید را وارد کنید
            <br />
            <input
              type="tel"
              required
              maxLength="6"
              name="emailLogin"
              className="w-full border-2 border-gray-200 mt-2 h-11 rounded-lg"
              onChange={(e) => context.setInp(e.target.value)}
            />
          </label>
        </div>
        {counter > 0 ? (
          <div className="text-red-600 p-3">
            {counter} ثانیه دیگر تا ارسال مجدد کد
          </div>
        ) : (
          <button
            onClick={() => window.location.reload(false)}
            className="bg-red-500 rounded-lg text-white px-4 mr-3 py-2">
            ارسال مجدد کد
          </button>
        )}

        <div className="p-3">
          <button
            type="submit"
            className="w-full bg-indigo-600 text-white p-3 rounded-lg mt-3">
            ورود به پونس
          </button>
        </div>
      </form>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={context.open}
        onClose={context.handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}>
        <Fade in={context.open}>
          <Box
            sx={{
              bgcolor: "background.paper",
              position: "relative",
              top: "7%",
              height: "80vh",
              width: "80%",
              marginRight: "10%",
              p: 1,
              borderRadius: "5px",
            }}>
            <form
              onSubmit={(e) => context.handleSubmitLoginEnd(e)}
              className="mt-24 md:mt-24 mx-auto  border-2 border-gray-200 w-4/5 md:w-1/3 p-4 text-indigo-700 text-sm rounded-lg">
              <div className="p-3 mt-6">
                <label>
                  نام و نام خانوادگی :
                  <br />
                  <input
                    type="text"
                    required
                    name="fullName"
                    className="w-full border-2 border-gray-200 mt-2 h-11 rounded-lg"
                    onChange={(e) =>
                      context.setFullName(e.target.value)
                    }
                  />
                </label>
              </div>

              <div className="p-3">
                <button
                  type="submit"
                  className="w-full bg-indigo-600 text-white p-3 rounded-lg mt-3">
                  تایید
                </button>
              </div>
            </form>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
};

export default Login;
