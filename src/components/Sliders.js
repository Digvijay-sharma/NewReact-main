 
import { useState } from "react"; 
import Data from "./data";
import DataCard from "./DataCard";
 
function SimpleSlider() { 
  const [mData, setData] = useState(Data); 
  
  return (
      <DataCard mData={mData}/>
  );
}

export default SimpleSlider; 

 