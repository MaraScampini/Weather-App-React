import React, { createContext, useEffect, useState } from "react";

export const RegionContext = createContext();

export function RegionContextProvider({ children }) {
  // Sets a general state for region that will be used by the landing and dashboard containers and their children components.
  const [region, setRegion] = useState("");
  // The function to set the region that will be used by the landing page's buttons also sets said region into the localStorage so the data isn't lost when the user recharges the page.
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
