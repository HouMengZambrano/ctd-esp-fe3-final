import React, { createContext, useMemo, useReducer } from "react";

export const initialState = { theme: localStorage.getItem("theme") === "dark", data: [], favs: JSON.parse(localStorage.getItem("favs")) || [] };

export const ContextGlobal = createContext(undefined);

const reducer = (state, action) => {
  switch (action.type) {
    case "updateTheme":
      const newTheme = !state.theme;
      localStorage.setItem("theme", newTheme ? "dark" : "light");
      document.body.classList.toggle("dark", newTheme);
      return { ...state, theme: newTheme };
    case "updateData":
      return { ...state, data: action.payload };
    case "storeFavs":
      const newFavs = [... state.favs, action.payload];
      localStorage.setItem("favs", JSON.stringify(newFavs));
      return {...state, favs: newFavs}
    default:
      return state;
  }
};

export const ContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const contextValue = useMemo(() => {
    const updateTheme = (newTheme) => {
      dispatch({ type: "updateTheme", payload: newTheme });
    };
    const updateData = (newData) => {
      dispatch({ type: "updateData", payload: newData });
    };
    const storeFavs = (newFavs) => {
      dispatch({ type: "storeFavs", payload: newFavs});
    };

    return { state, updateTheme, updateData, storeFavs };
  }, [state]);

  return (
    <ContextGlobal.Provider value={contextValue}>
      {children}
    </ContextGlobal.Provider>
  );
};