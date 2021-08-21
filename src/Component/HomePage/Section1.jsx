import React from 'react';

const Section1 = () => {
    return (
        <div className="pt-20 md:flex md:pt-28">
            <img src="image/Web.png" className="w-2/3 m-auto md:w-1/4" alt="logo" />
            <div className="md:mx-auto md:my-auto ">
            <h1 className="text-xl text-center mt-5 md:text-4xl">آموزشگاه آنلاین <span style={{ color: "#ffbb00" }}>پونس</span></h1>
            <p className="text-center text-gray-700 mt-3 md:text-2xl">از صفر تا ورود به بازار کار با شما  هستیم</p>
            </div>
        </div>
    );
}

export default Section1;