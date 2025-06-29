import React from "react";
import { useSelector } from "react-redux";
import { Container, Logo, LogoutBtn } from "../index";
import { Link, NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const authStatus = useSelector((state) => state.auth.status);
  const navigate = useNavigate();
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
    <header className="py-3 shadow bg-purple-500">
      <Container>
        <nav className="flex items-center">
          <div>
            <Link to="/">
              <Logo />
            </Link>
          </div>
          <ul className="flex ml-auto">
            {navItems.map((item) =>
              item.isActive ? (
                <NavLink
                  className={({ isActive }) =>
                    [
                      "px-6 py-2 rounded-md text-sm font-semibold transition-colors",
                      isActive
                        ? "text-white bg-purple-600"
                        : "text-gray-700 hover:bg-purple-100",
                    ].join("")
                  }
                  to={`${item.slug}`}
                >
                  {item.name}
                </NavLink>
              ) : null
            )}
            {authStatus && <LogoutBtn />}
          </ul>
        </nav>
      </Container>
    </header>
  );
};

export default Header;
