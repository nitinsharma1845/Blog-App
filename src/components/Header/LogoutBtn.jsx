import { useDispatch } from "react-redux";
import authServices from "../../appwriteServices/authServices";
import { logout } from "../../store/authSlice";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
const LogoutBtn = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate()

  const logoutHandler = async () => {
    const logoutToast = toast.loading("Logging Out....");
    try {
      authServices.logOut().then(() => {
        toast.update(logoutToast, {
          render: "Logout Successful!",
          type: "success",
          isLoading: false,
          autoClose: 3000,
        });
        dispatch(logout());
        navigate('/login')
      });
    } catch (error) {
      throw error;
    }
  };

  return (
    <button
      onClick={logoutHandler}
      className="bg-red-500 border-none shadow text-white px-6 py-2 text-sm h-full font-semibold hover:bg-red-600 cursor-pointer"
    >
      Logout
    </button>
  );
};

export default LogoutBtn;
