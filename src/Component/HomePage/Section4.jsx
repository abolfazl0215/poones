import React from 'react';

const Section4 = () => {
    return ( 
        <div className="p-8 mt-20 flex flex-wrap w-full justify-between bg-color-fade">
            <div className="w-45/100 p-4 shadow-lg bg-white rounded-lg mt-4 md:w-22/100">
                <div className="flex justify-center"><span className="p-2 font-bold circle m-2 shadow-md  text-color">30 +</span></div>
                <p className="text-color w-2/3 mx-auto text-center">ساعت ویدیوی آموزشی</p>
            </div>
            <div className="w-45/100 p-4 shadow-lg bg-white rounded-lg mt-4 md:w-22/100">
                <div className="flex justify-center"><span className="p-2 font-bold circle m-2 shadow-md  text-color">112 +</span></div>
                <p className="text-color w-2/3 mx-auto text-center">دانشجوی آنلاین</p>
            </div>
            <div className="w-45/100 p-4 shadow-lg bg-white rounded-lg mt-4 md:w-22/100">
                <div className="flex justify-center"><span className="p-2 font-bold circle m-2 shadow-md  text-color">96% +</span></div>
                <p className="text-color w-2/3 mx-auto text-center">رضایت از آموزش</p>
            </div>
            <div className="w-45/100 p-4 shadow-lg bg-white rounded-lg mt-4 md:w-22/100">
                <div className="flex justify-center"><span className="p-2 font-bold circle m-2 shadow-md  text-color">3 +</span></div>
                <p className="text-color w-2/3 mx-auto text-center">سال سابقه فعالیت حرفه ای</p>
            </div>
        </div>
     );
}
 
export default Section4;