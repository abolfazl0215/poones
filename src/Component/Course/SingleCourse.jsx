import React from "react";
import { CgSoftwareDownload } from "react-icons/cg";

const SingleCourse = () => {
  return (
    <div className="md:p-8 p-3 bg-color-fade">
      <h1>.</h1>
      <h1 className="mt-12 w-full text-center border-2 font-semibold text-color text-2xl p-3 bg-white">
        دوره هیولای html و css
      </h1>
      <div className="w-full flex justify-between mt-3 flex-wrap">
        <div className="md:w-1/5 w-full mt-3 md:mt-0 md:pl-3 order-2 md:order-1 ">
          <div className=" border-2 h-full text-gray-600 p-5 bg-white">
            {/* <p className="text-gray-100">.</p> */}
            <p className="font-bold text-color text-xl">
              <span className="text-orange">$ </span>
              قیمت این دوره : <span className="text-orange">رایگان</span>
            </p>
            <hr className="mt-2" />
            <p className="mt-5 mr-2">مدت زمان دوره : 23:40:00</p>
            <p className="mt-2 mr-2">تعداد دانشجو : 223</p>
            <p className="mt-2 mr-2">سطح دوه : مقدماتی تا پیشرفته</p>
            <button className="bg-color text-white p-2 w-full text-center rounded-md mt-6 text-xl">
              ثبت نام این دوره
            </button>
          </div>
        </div>
        <div className="border-2 w-full md:w-4/5 p-5  md:order-1 bg-white">
          <iframe
            className="w-full h-96"
            src="https://www.aparat.com/video/video/embed/videohash/CLrgf/vt/frame"
            allowFullScreen="true"
            webkitallowfullscreen="true"
            mozallowfullscreen="true"
          ></iframe>
        </div>
      </div>
      <div className="mt-3 border-2 p-5 text-gray-600 bg-white">
        <p className="text-2xl">توضیحات :</p>
        <br />
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cum, qui!
        Quos, quidem? Saepe tenetur exercitationem libero, corrupti ea amet est
        delectus debitis? Eos quisquam sapiente, laboriosam iste atque commodi
        alias. Blanditiis laborum inventore esse aliquam odio sint optio sit eos
        dolor minus, numquam assumenda quaerat, corrupti ad, nostrum ratione
        exercitationem. Repellat repellendus sint earum sapiente asperiores in
        expedita modi quam? Nulla, vel enim quibusdam eligendi odio unde?
        Similique corrupti aliquam maiores optio minus reprehenderit unde
        voluptates assumenda, ratione quis cupiditate voluptas, eius, vero amet
        possimus tenetur dolorum repellendus fugiat doloremque! Enim vitae
        voluptas quo facere possimus eveniet dolores in quidem similique odit
        repudiandae quos ut reprehenderit sit omnis obcaecati ad maxime culpa
        hic, alias error voluptatum tempore? Facilis, ipsum soluta. Est, iste
        nostrum officia ipsam a quae et fuga harum, consectetur architecto dolor
        unde voluptatem in cupiditate vero, aspernatur quas odit laudantium ad
        illum! Nam accusantium eligendi perferendis quas eius? Soluta error,
        eligendi dicta ad tenetur minima distinctio, asperiores sit commodi,
        quasi ut tempora expedita veniam. Consectetur, quaerat maiores quam
        voluptatem deserunt in perferendis provident quae aut repellendus!
        Distinctio, deserunt. Dignissimos id officiis debitis modi maiores saepe
        amet, facilis atque voluptatem blanditiis nihil commodi enim maxime
        tenetur labore corrupti porro voluptates. Dolores, illum placeat sit
        ullam officiis quae obcaecati rem. Voluptas modi inventore a ducimus
        beatae labore deserunt hic ipsam nihil repellat, animi earum incidunt.
        Mollitia perspiciatis nam, animi, aspernatur eaque excepturi molestiae
        eius cum aliquid, fugiat repellendus porro dolore! Cum modi, illo
        veritatis fuga tenetur dolorum facere, eius eligendi odit ut consectetur
        accusamus, quisquam debitis voluptatum veniam repellendus cumque
        incidunt reprehenderit nisi perspiciatis obcaecati. Doloribus illum
        deleniti quisquam voluptate. Ratione ducimus voluptate soluta iusto ex
        sed facere dolorem repellat quam, accusantium laudantium repellendus
        vero alias dignissimos odit possimus rerum unde sapiente quaerat facilis
        aspernatur. Qui id corporis harum ab.
      </div>
      <div className="border-2 w-full mt-3 md:p-5 p-3  bg-white">
        <div className="w-full md:h-14 h-auto flex justify-between text-xs md:text-lg text-gray-700 bg-color-fade p-2 mt-4">
          <div className="flex">
            <p className="w-8 h-8 rounded-full text-center border-2 border-purple-500 pt-1 text-white font-semibold"></p>
            <p className="pt-1 mr-4">فصل اول : آشنایی با دوره</p>
          </div>
        </div>
        <div className="w-full md:h-14 h-auto flex justify-between text-xs md:text-lg text-gray-700 shadow-sm p-2 mt-2">
          <div className="flex">
            <p className="w-8 h-8 rounded-full text-center bg-purple-600 pt-2 md:pt-1 text-white font-semibold">
              1
            </p>
            <p className="pt-1 mr-4"> معرفی دوره</p>
          </div>
          <div className="flex">
            <p className="pt-2 ml-3">00:7:00</p>
            <p className="p-2 rounded-full border-2 border-blue-500">
              <CgSoftwareDownload />
            </p>
          </div>
        </div>
        <div className="w-full md:h-14 h-auto flex justify-between text-xs md:text-lg text-gray-700 shadow-sm p-2 mt-2">
          <div className="flex">
            <p className="w-8 h-8 rounded-full text-center bg-purple-600 pt-2 md:pt-1 text-white font-semibold">
              2
            </p>
            <p className="pt-1 mr-4"> گرفتن بهترین نتیجه از این دوره</p>
          </div>
          <div className="flex">
            <p className="pt-2 ml-3">00:3:00</p>
            <p className="p-2 rounded-full border-2 border-blue-500">
              <CgSoftwareDownload />
            </p>
          </div>
        </div>
        <div className="w-full md:h-14 h-auto flex justify-between text-xs md:text-lg text-gray-700 p-2 mt-2">
          <div className="flex">
            <p className="w-8 h-8 rounded-full text-center bg-purple-600 pt-2 md:pt-1 text-white font-semibold">
              3
            </p>
            <p className="pt-1 mr-4"> آماده سازی محیط کدنویسی</p>
          </div>
          <div className="flex">
            <p className="pt-2 ml-3">00:15:00</p>
            <p className="p-2 rounded-full border-2 border-blue-500">
              <CgSoftwareDownload />
            </p>
          </div>
        </div>
        {/* session2 */}
        <div className="w-full md:h-14 h-auto flex justify-between text-xs md:text-lg text-gray-700 bg-color-fade p-2 mt-4">
          <div className="flex">
            <p className="w-8 h-8 rounded-full text-center border-2 border-purple-500 pt-1 text-white font-semibold"></p>
            <p className="pt-1 mr-4">فصل دوم : html</p>
          </div>
        </div>
        <div className="w-full md:h-14 h-auto flex justify-between text-xs md:text-lg text-gray-700 shadow-sm p-2 mt-2">
          <div className="flex">
            <p className="w-8 h-8 rounded-full text-center bg-purple-600 pt-2 md:pt-1 text-white font-semibold">
              1
            </p>
            <p className="pt-1 mr-4"> معرفی دوره</p>
          </div>
          <div className="flex">
            <p className="pt-2 ml-3">00:7:00</p>
            <p className="p-2 rounded-full border-2 border-blue-500">
              <CgSoftwareDownload />
            </p>
          </div>
        </div>
        <div className="w-full md:h-14 h-auto flex justify-between text-xs md:text-lg text-gray-700 shadow-sm p-2 mt-2">
          <div className="flex">
            <p className="w-8 h-8 rounded-full text-center bg-purple-600 pt-2 md:pt-1 text-white font-semibold">
              2
            </p>
            <p className="pt-1 mr-4"> گرفتن بهترین نتیجه از این دوره</p>
          </div>
          <div className="flex">
            <p className="pt-2 ml-3">00:3:00</p>
            <p className="p-2 rounded-full border-2 border-blue-500">
              <CgSoftwareDownload />
            </p>
          </div>
        </div>
        <div className="w-full md:h-14 h-auto flex justify-between text-xs md:text-lg text-gray-700 shadow-sm p-2 mt-2">
          <div className="flex">
            <p className="w-8 h-8 rounded-full text-center bg-purple-600 pt-2 md:pt-1 text-white font-semibold">
              3
            </p>
            <p className="pt-1 mr-4"> آماده سازی محیط کدنویسی</p>
          </div>
          <div className="flex">
            <p className="pt-2 ml-3">00:15:00</p>
            <p className="p-2 rounded-full border-2 border-blue-500">
              <CgSoftwareDownload />
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleCourse;
