import React from "react";
import { MdOutlineDarkMode, MdOutlineLightMode } from "react-icons/md";
import useTheme from "../context/ThemeContext/Theme";

const ThemeBtn = () => {
  const { themeMode, toggleTheme } = useTheme();
  function onChangeBtn() {
    toggleTheme();
  }

  return (
    <div onClick={onChangeBtn} className="cursor-pointer select-none">
      {themeMode === "light" ? (
        <MdOutlineLightMode size={25} />
      ) : (
        <MdOutlineDarkMode size={25} color={'white'} />
      )}
    </div>
    // <label className="relative inline-flex items-center cursor-pointer">
    //   <input
    //     type="checkbox"
    //     value=""
    //     className="sr-only peer"
    //     onChange={onChangeBtn}
    //     checked={themeMode === "dark"}
    //   />
    //   <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
    //   {/* <span className="ml-3 text-2xl font-medium text-gray-900 flex">
    //     <MdOutlineDarkMode />
    //     <MdOutlineLightMode />
    //   </span> */}
    // </label>
  );
};

export default ThemeBtn;
