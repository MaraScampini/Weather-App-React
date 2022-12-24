import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom';
import { RegionContext } from "../../Context/RegionContext";

function Landing() {
  const {regionHandler} = useContext(RegionContext);
  const navigate=useNavigate();
  return (
    <div>
      <button onClick={() => regionHandler("europe")}>Europe</button>
      <button onClick={() => regionHandler("northamerica")}>North America</button>
      <button onClick={() => navigate("/dashboard")}>Go</button>
    </div>
  );
}

export default Landing