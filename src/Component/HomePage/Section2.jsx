import React, { useState } from 'react'

const Section2 = () => {
    const [collapse1, setCollapse1] = useState(false);
    const [collapse2, setCollapse2] = useState(false);
    const [collapse3, setCollapse3] = useState(false);
    const [collapse4, setCollapse4] = useState(false);

    const showCollapse1 = () => setCollapse1(!collapse1);
    const showCollapse2 = () => setCollapse2(!collapse2);
    const showCollapse3 = () => setCollapse3(!collapse3);
    const showCollapse4 = () => setCollapse4(!collapse4);
        
    
    return (
        <div className="mt-24">

            <div className="w-3/4 bg-color my-3 p-2  mx-auto rounded-xl" onClick={showCollapse1}>
                <p className="text-center text-xl text-white">همراهی مربی<span className="relative top-1">&#9662;</span></p>
                <div className={collapse1 ? "showCollapse text-center text-lg mt-3 text-white" : "hideCollapse"}>بهترین پشتیبانی و به روز ترین سطح آموزش موجود در ایران رو دریافت می‌کنید</div>
            </div>


            <div className="w-3/4 bg-color my-3 p-2  mx-auto rounded-xl" onClick={showCollapse2}>
                <p className="text-center text-xl text-white"> تضمین کیفیت<span className="relative top-1">&#9662;</span></p>
                <div className={collapse2 ? "showCollapse text-center text-lg mt-3 text-white" : "hideCollapse"}>بهترین پشتیبانی و به روز ترین سطح آموزش موجود در ایران رو دریافت می‌کنید</div>
            </div>

            <div className="w-3/4 bg-color my-3 p-2  mx-auto rounded-xl" onClick={showCollapse3}>
                <p className="text-center text-xl text-white">همراهی مربی<span className="relative top-1">&#9662;</span></p>
                <div className={collapse3 ? "showCollapse text-center text-lg mt-3 text-white" : "hideCollapse"}>بهترین پشتیبانی و به روز ترین سطح آموزش موجود در ایران رو دریافت می‌کنید</div>
            </div>


            <div className="w-3/4 bg-color my-3 p-2  mx-auto rounded-xl" onClick={showCollapse4}>
                <p className="text-center text-xl text-white"> تضمین کیفیت<span className="relative top-1">&#9662;</span></p>
                <div className={collapse4 ? "showCollapse text-center text-lg mt-3 text-white" : "hideCollapse"}>بهترین پشتیبانی و به روز ترین سطح آموزش موجود در ایران رو دریافت می‌کنید</div>
            </div>
        </div>
    );
}

export default Section2;