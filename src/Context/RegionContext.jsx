import React, { createContext, useEffect, useState } from "react";

export const RegionContext = createContext();

export function RegionContextProvider({ children }) {
  const [region, setRegion] = useState("");
  const regionHandler = (region) => {
    setRegion(region);
    localStorage.setItem("region", region);
  };


  return (
    <RegionContext.Provider
      value={{
        region,
        regionHandler,
      }}
    >
      {children}
    </RegionContext.Provider>
  );
}
