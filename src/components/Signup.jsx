import { useState } from "react";
import authServices from "../appwriteServices/authServices";
import { Input, Button, Logo } from "./index";
import { useNavigate, Link } from "react-router-dom";
import { toast } from "react-toastify";
import { useForm } from "react-hook-form";

const Signup = () => {
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { isValid, errors, isSubmitting },
  } = useForm({ mode: "onChange" });

  async function signup(data) {
    const signupToast = toast.loading("Creating account...");
    setError("");
    try {
      const userData = await authServices.createAccount(data);
      if (userData) {
        navigate("/login");
        toast.update(signupToast, {
          render: "Account Created Successfully ,You can Login now !",
          type: "success",
          isLoading: false,
          autoClose: 3000,
        });
      }
    } catch (error) {
      setError(error.message);
      toast.update(signupToast, {
        render: "Something went wrong!",
        type: "error",
        isLoading: false,
        autoClose: 3000,
      });
    }
  }

  return (
    <div className="flex items-center justify-centerw-full">
      <div className="mx-auto w-full max-w-lg bg-gray-200 shadow rounded-xl p-10 border border-black/10">
        <div className="mb-2 flex justify-center">
          <span className="inline-block w-full max-w-[120px]">
            <Logo />
          </span>
        </div>
        <h2 className="text-center text-2xl font-bold">
          Signup to a account
        </h2>
        <p className="mt-2 text-center text-base text-black/60">
          Already have a account &nbsp;
          <Link
            to="/login"
            className="font-medium text-primary transition-all duration-200 hover:underline"
          >
            Sign in
          </Link>
        </p>
        {error && (
          <p className="text-red-500 text-center font-xs font-semibold mt-8">
            {error}
          </p>
        )}

        <form onSubmit={handleSubmit(signup)} className="mt-8">
          <div className="space-y-5">
            <Input
              label="Full Name"
              placeholder="Enter your full name"
              type="text"
              {...register("name", { required: "Name is Required" })}
            />
            {errors.email && (
              <p className="mt-[-20px] text-red-500 text-xs">
                {errors.name?.message}
              </p>
            )}

            <Input
              label="Email"
              placeholder="Enter Your Email"
              type="email"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: new RegExp(
                    "^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,}$"
                  ),
                  message: "Email must be in valid formate",
                },
              })}
            />

            {errors.email && (
              <p className="mt-[-20px] text-red-500 text-xs">
                {errors.email?.message}
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
                {errors.password?.message}
              </p>
            )}

            <Button
              disabled={!isValid || isSubmitting}
              type="submit"
              className={`w-full ${
                !isValid || isSubmitting ? "bg-gray-400 cursor-not-allowed" : ""
              }`}
            >
              {isSubmitting ? "Creating Account..." : "Create Account"}
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
