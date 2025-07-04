import { createContext, useEffect, useState } from "react";
import { fetchData } from "../utills/rapidapi";
import { useContext } from "react";

export const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [value, setValue] = useState("songs ");

  useEffect(() => {
    fetchAlldata(value);
  }, [value]);

  const fetchAlldata = (query) => {
    setLoading(true);
    fetchData(`search/?q=${query}`).then(({ contents }) => {
      console.log(contents);
      setData(contents);
      setLoading(false);
    });
  };
  return (
    <DataContext.Provider value={{ loading, data, value, setValue }}>
      {children}
    </DataContext.Provider>
  );
};

export const useData = () => useContext(DataContext);
