import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Loading } from "./Loading";

const AuthLayout = ({ children }) => {
  const navigate = useNavigate();
  const [loader, setLoder] = useState(true);
  const status = useSelector((state) => state.auth.status);

  useEffect(() => {
    // can do changes //
    if (status) {
      navigate("/");
    } else {
      navigate("/login");
    }

    setLoder(false);
  }, [status, navigate]);

  return loader ? <Loading /> : { children };
};

export default AuthLayout;
