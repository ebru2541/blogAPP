import AppRouter from "./router/AppRouter";
import { Provider } from "react-redux";
import store, { persistor } from "./app/store";
import { ToastContainer } from "react-toastify";
import { PersistGate } from "redux-persist/integration/react";
import { ThemeProvider } from "@mui/material";
import { useState } from "react";
import { lightTheme } from "./styles/theme";

function App() {
  const [theme, setTheme] = useState(lightTheme);

  return (
    <>
      <ThemeProvider theme={theme}>
        <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
            <AppRouter theme={theme} setTheme={setTheme} />
          </PersistGate>
        </Provider>
        <ToastContainer />
      </ThemeProvider>
    </>
  );
}

export default App;
