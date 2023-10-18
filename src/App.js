import React from 'react';
import{add,div,mult,sub} from "./Calc";
function App(){
  return(
  <>
  <ul>
      <li> sum of two no is {add(40,4)}</li>
      <li> sub of two no is {sub(40,4)}</li>
      <li> div of two no is {div(40,4)}</li>
      <li> mult of two no is {mult(40,4)}</li>
      
    </ul>
  </>
  );
    
}
export default App
