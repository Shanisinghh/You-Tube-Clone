import { CgLayoutGrid } from "react-icons/cg";

// const API_KEY = '4367d43945msh367759750daee01p1a2a9ajsnddbcf4e933b1';
// const API_KEY = '19185bdde0msh14de8d5a6494666p1bf42ejsn69898c4fac2a';
// const API_KEY = 'eb7e01c3a1mshbadb66fb0efc51cp1e8eb9jsn2b0dd3645773';
// const API_KEY = '844cfe03fbmshe673c4059afda07p159098jsn15f87b57888c';
const API_KEY = '9a7827ebbdmsh0083180c2eaaac1p10fbacjsnb769bbd2e2c3';
// const API_KEY = "1ec34ce69dmsh0b28012e6a1abb5p152afbjsna54c727e1fc9";
const BASE_URL = "https://youtube138.p.rapidapi.com";

const options = {
  method: "GET",

  headers: {
    "x-rapidapi-key": API_KEY,
    "x-rapidapi-host": "youtube138.p.rapidapi.com",
  },
};

export const fetchData = async (url) => {
  try {
    const response = await fetch(`${BASE_URL}/${url}`, options);
    const data = await response.json();

    // console.log(data);
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};
