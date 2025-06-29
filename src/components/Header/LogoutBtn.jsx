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
    className="bg-red-600 text-white border-none rounded hover:bg-red-800">
      Logout
    </button>
  );
};

export default LogoutBtn;
