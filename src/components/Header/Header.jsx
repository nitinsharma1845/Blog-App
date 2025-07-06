import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { Container, Logo, LogoutBtn, Button } from "../index";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdClose } from "react-icons/md";

const Header = () => {
  const authStatus = useSelector((state) => state.auth.status);


  const [showNav, setShowNav] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const navItems = [
    { name: "Home", slug: "/", isActive: true },
    { name: "Login", slug: "/login", isActive: !authStatus },
    { name: "Signup", slug: "/signup", isActive: !authStatus },
    { name: "All Posts", slug: "/all-posts", isActive: authStatus },
    { name: "Add Post", slug: "/add-post", isActive: authStatus },
    { name: "Account", slug: "/profile", isActive: authStatus },
  ];

  const toggleNavBar = () => {
    setShowNav((prev) => !prev);
    document.body.style.overflow = showNav ? "auto" : "hidden"; 
  };

  const closeNavBar = () => {
    setShowNav(false);
    document.body.style.overflow = "auto";
  };

  const handleScroll = () => {
    setIsScrolled(window.scrollY > 100);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`shadow-xl fixed top-0 left-0 w-full z-50 transition-colors duration-300 ${
        isScrolled ? "bg-blue-400" : "bg-gray-400"
      }`}
    >
      <Container>
        <nav className="flex items-center justify-between h-16 relative">
          <Link to="/">
            <Logo />
          </Link>

          <ul className="hidden md:flex items-center gap-4 ml-auto h-full">
            {navItems.map(
              (item) =>
                item.isActive && (
                  <NavLink
                    key={item.slug}
                    to={item.slug}
                    className={({ isActive }) =>
                      [
                        "px-4 py-2 h-full flex items-center text-sm transition-colors",
                        isActive
                          ? "border-b-2 border-black text-white font-semibold"
                          : "text-gray-700 hover:text-white",
                      ].join(" ")
                    }
                  >
                    {item.name}
                  </NavLink>
                )
            )}
            {authStatus && <LogoutBtn />}
          </ul>

          <div className="md:hidden ml-auto z-50">
            <Button
              onClick={toggleNavBar}
              type="button"
              aria-label="Toggle Menu"
              className="text-3xl text-white bg-transparent"
            >
              {showNav ? <MdClose /> : <GiHamburgerMenu />}
            </Button>
          </div>

          {/* Mobile Menu */}
          <ul
            className={`
              fixed top-16 right-0 w-3/4 h-screen bg-gray-100 shadow-md flex-col gap-6 px-6 py-8
              transition-transform duration-300 ease-in-out
              ${showNav ? "flex translate-x-0" : "translate-x-full hidden"}
              md:hidden
            `}
          >
            {navItems.map(
              (item) =>
                item.isActive && (
                  <NavLink
                    key={item.slug}
                    to={item.slug}
                    onClick={closeNavBar}
                    className={({ isActive }) =>
                      [
                        "block text-lg transition-colors",
                        isActive
                          ? "font-bold text-blue-700"
                          : "text-gray-700 hover:text-blue-500",
                      ].join(" ")
                    }
                  >
                    {item.name}
                  </NavLink>
                )
            )}
            {authStatus && <div className="h-fit"><LogoutBtn /></div>}
          </ul>
        </nav>
      </Container>
    </header>
  );
};

export default Header;
