import React, { createContext, useState } from 'react'
import { useNavigate } from 'react-router-dom';

export const RegionContext = createContext();

export function RegionContextProvider({children}) {

  const [region, setRegion] = useState("");
  const regionHandler = (region) => {
    setRegion(region);
  }

  return (
    <RegionContext.Provider
    value={{
      region,
      regionHandler
    }}
    >
      {children}
    </RegionContext.Provider>
    )
}

