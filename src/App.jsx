import { ToastContainer } from "react-toastify";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import authService from "./appwriteServices/authServices";
import { login, logout } from "./store/authSlice";
import { Footer, Header, Loading } from "./components";
import { Outlet } from "react-router-dom";
import { ThemeProvider } from "./context/ThemeContext/Theme";

const App = () => {
  const [loading, setLoading] = useState(true);
  const [themeMode, seThemeMode] = useState(localStorage.getItem('app-theme'));
  const dispatch = useDispatch();

  function toggleTheme() {
    seThemeMode((prev) => (prev === "light" ? "dark" : "light"));
    
  }

  useEffect(() => {
    document.querySelector("html").classList.remove("light", "dark");
    document.querySelector("html").classList.add(themeMode);
    localStorage.setItem("app-theme", themeMode);
    // console.log(themeMode);
  }, [themeMode]);

  useEffect(() => {
    authService
      .getCurrentUser()
      .then((userData) => {
        if (userData) {
          dispatch(login({ status: true, userData: userData }));
        } else {
          dispatch(logout());
        }
      })
      .catch((error) => console.log(error))
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return <Loading type="spin" color="blue" />;
  }
  return (
    <ThemeProvider value={{ themeMode, toggleTheme }}>
      <ToastContainer />
      <div className="min-h-screen flex flex-wrap content-between bg-gray-300 dark:bg-gray-900">
        <div className="w-full block">
          <Header />
          <main>
            <Outlet />
          </main>
          <Footer />
        </div>
      </div>
    </ThemeProvider>
  );
};

export default App;
