import { createContext } from "react";

export const ItemContextRef = createContext(
    {
        buyingItemList: [],
        onAddItem: () => {},
        onHandleDelete: () => {},
        onHandleEdit: () => {}
      }
);

export const ThemeContext = createContext('bg-light');