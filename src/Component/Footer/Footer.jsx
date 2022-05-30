import { IoLogoInstagram } from "react-icons/io";
import { FaTelegramPlane } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { useLocation } from "react-router-dom";

const Footer = () => {
  const location = useLocation();
  console.log(location.pathname);
  return (
    <>
      {location.pathname === "/" ? (
        <div style={{ padding: "1rem 2%" }} className="p-2 md:px-14">
          <div
            className={
              location.pathname === "/singleCourse"
                ? "footer pb-8 p-2 text-center"
                : "footer pb-8 p-2 mt-28 text-center rounded-3xl"
            }>
            <p className="footer-radiuser font-yekan-bold rounded-3xl p-4 px-6 w-64 md:w-1/4 mx-auto -mt-6">
              درباره من
            </p>
            <p className="mt-10 text-sm px-4 md:px-32 text-blue-200 leading-6">
              با سلام . ابولفضل مختاری هستم بیش از سه ساله که تو زمینه
              طراحی وب به طور حرفه ای فعالیت دارم. عاشق برنامه نویسی
              هستم و بیشتر از اون عاشق آموزش دادن هستم. تلاش من براین
              هست که دانش پذیران عزیز با آموزش های پیچیده و غیرحرفه ای
              سردرگم نشن و بتونم به عنوان مربی کنارتون باشم چون در
              زمینه یادگیری مربی مهم ترین مساله هست تا شما از از این
              حرفه دلسرد نشین و امیدوارم که بتونم بهتون کلی انگیزه بدم
              و خیلی پرانرژی این تخصص فوق العاده لذت بخش رو یاد بگیرید
              .
            </p>
            <p className="pt-8 text-blue-100 text-sm">
              شماره تماس : 09224883894
            </p>
            <div className="flex justify-center mt-8">
              <a href="https://www.instagram.com/pounes.ir/">
                <IoLogoInstagram className="w-8 h-8 text-blue-100 mx-4" />
              </a>
              <a href="https://t.me/pounes_ir">
                <FaTelegramPlane className="w-8 h-8 text-blue-100 mx-4" />
              </a>
              <a href="https://wa.me/message/EY76CNLTMECOB1">
                <FaWhatsapp
                  id="footer"
                  className="w-8 h-8 text-blue-100 mx-4"
                />
              </a>
            </div>
          </div>
        </div>
      ) : (
        <div
          className={
            location.pathname === "/singleCourse"
              ? "bg-gray-100 pb-8 p-2 text-center border-t-2 border-gray-200"
              : "bg-gray-100 pb-8 p-2 mt-28 text-center rounded-tl-3xl rounded-tr-3xl border-t-2 border-gray-200"
          }>
          <p className="font-bold  text-color border-2 border-gray-200 rounded-3xl bg-white p-2 px-4 w-1/2 md:w-1/4 mx-auto -mt-8">
            درباره من
          </p>
          <p className="mt-6 text-sm px-4 md:px-32 text-gray-700 leading-6">
            با سلام . ابولفضل مختاری هستم بیش از سه ساله که تو زمینه
            طراحی وب به طور حرفه ای فعالیت دارم. عاشق برنامه نویسی
            هستم و بیشتر از اون عاشق آموزش دادن هستم. تلاش من براین
            هست که دانش پذیران عزیز با آموزش های پیچیده و غیرحرفه ای
            سردرگم نشن و بتونم به عنوان مربی کنارتون باشم چون در زمینه
            یادگیری مربی مهم ترین مساله هست تا شما از از این حرفه
            دلسرد نشین و امیدوارم که بتونم بهتون کلی انگیزه بدم و خیلی
            پرانرژی این تخصص فوق العاده لذت بخش رو یاد بگیرید .
          </p>
          <p className="pt-8 text-sm">شماره تماس : 09224883894</p>
          <div className="flex justify-center mt-8">
            <a href="https://www.instagram.com/pounes.ir/">
              <IoLogoInstagram className="w-8 h-8 text-gray-600 mx-4" />
            </a>
            <a href="https://t.me/pounes_ir">
              <FaTelegramPlane className="w-8 h-8 text-gray-600 mx-4" />
            </a>
            <a href="https://wa.me/message/EY76CNLTMECOB1">
              <FaWhatsapp
                id="footer"
                className="w-8 h-8 text-gray-600 mx-4"
              />
            </a>
          </div>
        </div>
      )}
    </>
  );
};

export default Footer;
