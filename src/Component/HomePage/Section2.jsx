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
        <div className="mt-24 md:flex md:justify-around">

            <div className="w-3/4 my-3 p-2  mx-auto rounded-xl box-collapse md:w-1/5 cursor-pointer " onClick={showCollapse1}>
                <p className="text-center text-xl text-color">همراهی مربی</p>
            </div>


            <div className="w-3/4 my-3 p-2  mx-auto rounded-xl  box-collapse md:w-1/5 cursor-pointer " onClick={showCollapse2}>
                <p className="text-center text-xl text-color"> تضمین کیفیت</p>
            </div>

            <div className="w-3/4 my-3 p-2  mx-auto rounded-xl  box-collapse md:w-1/5 cursor-pointer " onClick={showCollapse3}>
                <p className="text-center text-xl text-color">همراهی مربی</p>
            </div>


            <div className="w-3/4 my-3 p-2  mx-auto rounded-xl  box-collapse md:w-1/5 cursor-pointer " onClick={showCollapse4}>
                <p className="text-center text-xl text-color"> تضمین کیفیت</p>
            </div>
        </div>
    );
}

export default Section2;