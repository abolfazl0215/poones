import React, { useEffect, useRef } from "react";
import lottie from "lottie-web";

const Section2 = () => {

    const returned = useRef(null);
    const support = useRef(null);
    const quality = useRef(null);

    useEffect(() => {
        lottie.loadAnimation({
            container: returned.current,
            renderer: 'svg',
            loop: true,
            autoplay: true,
            animationData: require('./iconsJson/return.json')
        });
        lottie.loadAnimation({
            container: support.current,
            renderer: 'svg',
            loop: true,
            autoplay: true,
            animationData: require('./iconsJson/support.json')
        });
        lottie.loadAnimation({
            container: quality.current,
            renderer: 'svg',
            loop: true,
            autoplay: true,
            animationData: require('./iconsJson/quality.json')
        });
        lottie.loadAnimation({
            container: performance.current,
            renderer: 'svg',
            loop: true,
            autoplay: true,
            animationData: require('./iconsJson/performance.json')
        });
    },[])

    return (
        <div className="mt-16 flex flex-wrap justify-around p-4 md:px-28 pb-12" >
        <div className = "w-45/100 py-6 m-3 p-2 shadow-md  md:shadow-none  mx-auto rounded-xl box-collapse md:w-1/5 cursor-pointer " >
        {/* animation icon support */}
        <div className = "text-center w-10 md:w-12 mx-auto" >
            <span className="support" ref={support}></span>  
        </div> 
        {/* end animation icon support */}
        <p className = "text-center text-sm mt-2" > همراهی مربی </p> 
        <p className = "text-center text-gray-500 text-sm m-2" >
        با مربی‌های حرفه‌ای و با حوصله رفع اشکال می‌کنید 
        </p> 
        </div>

        <div className = "w-45/100 py-6 m-3 p-2 shadow-md md:shadow-none  mx-auto rounded-2xl  box-collapse md:w-1/5 cursor-pointer " >
        <div className = "text-center" >
        {/* animation icon returned */}
        <div className = "text-center w-10 md:w-12 mx-auto" >
            <span className="returned" ref={returned}></span>  
        </div> 
        {/* end animation icon returned */}
        </div> 
        <p className = "text-center text-sm mt-2" > تضمین بازگشت وجه </p> 
        <p className = "text-center text-gray-500 text-sm m-2" >
        اگه راضی نبودید تا۱۵ روز فرصت دارید انصراف بدید 
        </p>
         </div>

        <div className = "w-45/100 py-6 m-3 p-2 shadow-md md:shadow-none  mx-auto rounded-xl  box-collapse md:w-1/5 cursor-pointer " >
        <div className = "text-center" >
        {/* animation icon quality */}
        <div className = "text-center w-10 md:w-12 mx-auto" >
            <span className="quality" ref={quality}></span>  
        </div> 
        {/* end animation icon quality */}
        </div> 
        <p className = "text-center text-sm mt-2" > تضمین کیفیت </p> 
        <p className = "text-center text-gray-500 text-sm m-2" >
        بهترین پشتیبانی و به روز ترین سطح آموزش موجود در ایران رو دریافت می‌کنید 
        </p> 
        </div>

        <div className = "w-45/100 py-6 m-3 p-2 shadow-md md:shadow-none  mx-auto rounded-xl  box-collapse md:w-1/5 cursor-pointer " >
        <div className = "text-center" >
        {/* animation icon performance */}
        <div className = "text-center w-10 md:w-12 mx-auto" >
            <span className="performance" ref={performance}></span>  
        </div> 
        {/* end animation icon performance */}
        </div> 
        <p className = "text-center text-sm mt-2" > کاربردی و پروژه محور 
        </p> 
        <p className = "text-center text-gray-500 text-sm m-2" > { " " }
        با کار روی پروژه های واقعی، بازار رو از نزدیک لمس کنید 
        </p> 
        </div> 
        </div>
    );
};

export default Section2;