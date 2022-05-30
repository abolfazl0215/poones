import { useEffect } from "react";

const RegisterCourse = () => {
  useEffect(() => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }, []);
  return (
    <div className="mt-10 p-2">
      <div className="md:w-96 w-full  h-52 bg-blue-900 rounded-lg mx-auto p-6">
        <p className="text-white font-yekan text-sm text-center">
          بانک آینده
        </p>
        <p className="text-white font-yekan text-center mt-12">
          6362-1418-0304-8603
        </p>
        <p className="text-white font-yekan text-sm text-center mt-4">
          ابوالفضل مختاری
        </p>
      </div>
      <div className="md:pr-12">
        <p className="mt-8 font-yekan text-sm">
          1- ابتدا هزینه دوره را به شماره کارت بالا واریز کنید
        </p>
        <p className="mt-4 font-yekan text-sm">
          2- سپس عکس تراکنش موردنظر را برای من در تلگرام ، اینستاگرام
          یا واتساپ ارسال کنید .
        </p>
      </div>
    </div>
  );
};

export default RegisterCourse;
