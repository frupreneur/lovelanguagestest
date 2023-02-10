import React, { createContext, useContext, useState } from "react";
import { DATABASE } from "@/db";

const AppContext = createContext();

export default function StateProvider({ children }) {
  const [state, setState] = React.useState({
    name: "",
    score: {
      a: 0,
      s: 0,
      g: 0,
      t: 0,
      pt: 0,
    },
    presentQuestion: -1,

    cache: {},
  });
  return (
    <AppContext.Provider value={{ state, setState, DATABASE }}>
      {children}
    </AppContext.Provider>
  );
}

export function useGlobalState() {
  const state = useContext(AppContext);
  return state;
}
