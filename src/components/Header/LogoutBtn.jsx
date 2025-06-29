import { useDispatch } from "react-redux";
import authServices from "../../appwriteServices/authServices";
import { logout } from "../../store/authSlice";
const LogoutBtn = () => {
  const dispatch = useDispatch();

  const logoutHandler = () => {
    authServices.logOut().then(() => {
      dispatch(logout());
    });
  };

  return (
    <button
    onClick={logoutHandler}
    className="bg-red-500 border-none shadow text-white px-6 py-2 text-sm rounded hover:bg-red-600 cursor-pointer">
      Logout
    </button>
  );
};

export default LogoutBtn;
