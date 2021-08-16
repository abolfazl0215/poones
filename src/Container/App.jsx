import React from 'react';
import Section1 from '../Component/HomePage/Section1';
import Section2 from '../Component/HomePage/Section2';
import Section3 from '../Component/HomePage/Section3';
import Nav from '../Component/Nav/Nav';
const App = () => {
  return ( 
    <div>
      <Nav/>
      <Section1/>
      <Section2/>
      <Section3/>
      
    </div>
   );
}
 
export default App;