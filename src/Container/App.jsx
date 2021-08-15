import React from 'react';
import Nav from '../Component/Nav/Nav';
const App = () => {
  return ( 
    <div>
      <Nav/>
      <div className="pt-20">
      <img src="image/Web.png" className="w-2/3 m-auto " alt="logo" />
      <h1 className="text-xl text-center mt-5">آموزشگاه آنلاین <span style={{color:"#ffbb00"}}>پونس</span></h1>
      <p className="text-center text-gray-700 mt-3">از صفر تا ورود به بازار کار با شما  هستیم</p>
      </div>

      
    </div>
   );
}
 
export default App;