import { useState, useEffect } from "react";
import { ThemeProvider } from "@mui/material/styles";
import { darkTheme } from "./theme/theme";
import { RouterProvider } from "react-router-dom";
import router from "./router";
import DataContext from "./contexts/DataContext";
import jsonUrl from "./config";
import Loader from "./components/Loader";

export default function App() {
  const [data, setData] = useState(null); 
  const jsonUrlRecent = `${jsonUrl}?t=${new Date().getTime()}`;

  useEffect(() => {
    fetch(jsonUrlRecent, { cache: "no-store" })
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => console.error('Erro ao carregar os dados:', error));
  }, []);

  if (!data) {
    return (
      <ThemeProvider theme={darkTheme}>
        <Loader/>
      </ThemeProvider>
    )
  }

  return (
    <DataContext.Provider value={data}>
      <RouterProvider router={router} />
    </DataContext.Provider>
  );
}
