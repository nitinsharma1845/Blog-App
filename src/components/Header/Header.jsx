import React from "react";
import { useSelector } from "react-redux";
import { Container, Logo } from "../index";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Header = () => {
  // const navigate = useNavigate()
  const authStatus = useSelector((state) => state.auth.status);
  // console.log(authStatus)

  const navItems = [
    {
      name: "Home",
      slug: "/",
      isActive: true,
    },
    {
      name: "Login",
      slug: "/login",
      isActive: !authStatus,
    },
    {
      name: "Signup",
      slug: "/signup",
      isActive: !authStatus,
    },
    {
      name: "All Posts",
      slug: "/all-posts",
      isActive: authStatus,
    },
    {
      name: "Add Post",
      slug: "/add-post",
      isActive: authStatus,
    },
  ];

  return (
    <header className="py-3 shadow bg-gray-500">
      <Container>
        <h1>Navbar Here</h1>
      </Container>
    </header>
  );
};

export default Header;
