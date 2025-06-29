import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import authServices from "../appwriteServices/authServices";
import { login as authLogin } from "../store/authSlice";
import { Input, Button, Logo } from "./index";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors, isValid , isSubmitting },
  } = useForm({ mode: "onChange" });

  const [error, setError] = useState("");

  const login = async (data) => {
    const loginToast = toast.loading("Loging in to account...");
    setError("");
    try {
      const session = await authServices.login(data);
      if (session) {
        const userData = await authServices.getCurrentUser();
        if (userData) {
          toast.update(loginToast, {
            render: "Login Successfully!",
            type: "success",
            isLoading: false,
            autoClose: 3000,
          });

          dispatch(authLogin({ status: true, userData: userData }));
          navigate("/");
        }
      }
    } catch (error) {
      toast.update(loginToast, {
        render: "Something went wrong!",
        type: "error",
        isLoading: false,
        autoClose: 3000,
      });
      setError(error.message);
    }
  };

  return (
    <div className="flex items-center justify-centerw-full">
      <div className="mx-auto w-full max-w-lg-bg-gray-100 rounded-xl p-10 border border-black/10">
        <div className="mb-2 flex justify-center">
          <span className="inline-block w-full max-w-[100px]">
            <Logo />
          </span>
        </div>
        <h2 className="text-center text-2xl font-bold">
          Sign in to your account
        </h2>
        <p className="mt-2 text-center text-base text-black/60">
          Don&apos;t have any account &nbsp;
          <Link
            to="/signup"
            className="font-medium text-primary transition-all duration-200 hover:underline"
          >
            Sign up
          </Link>
        </p>
        {error && (
          <p className="text-red-500 text-center font-xs font-semibold mt-8">
            {error}
          </p>
        )}

        <form onSubmit={handleSubmit(login)} className="mt-8">
          <div className="space-y-5">
            <Input
              label="Email"
              placeholder="Enter Your Email"
              type="email"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: new RegExp("^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,}$") , 
                  message: "Email must be in valid formate",
                },
              })}
            />

            {errors.email && (
              <p className="mt-[-20px] text-red-500 text-xs">
                {errors.email.message}
              </p>
            )}

            <Input
              label="Password"
              placeholder="Enter Your Password"
              type="password"
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 8,
                  message: "Password must be length of 8",
                },
              })}
            />
            {errors.password && (
              <p className="mt-[-20px] text-red-500 text-xs">
                {errors.password.message}
              </p>
            )}

            <Button
              disabled={!isValid || isSubmitting}
              type="submit"
              className={`w-full ${
                !isValid||isSubmitting ? "bg-gray-400 cursor-not-allowed" : ""
              }`}
            >
              {isSubmitting ? "Logging in.." : "Login" }
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
