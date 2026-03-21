import React, { useState, useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);

  const menuRef = useRef();

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setMenuOpen(false);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  const handleLogin = () => {
    setUser({ name: "User" });
    setMenuOpen(false);
  };

  const handleGetApiKey = () => {
    if (!user) {
      alert("Please login first!");
      return;
    }
    navigate("/api-keys");
    setMenuOpen(false);
  };

  return (
    <div className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-6xl">
      <div ref={menuRef}>
        {/* Navbar */}
        <div
          className="flex items-center justify-between px-6 py-3 rounded-2xl 
        bg-white/5 backdrop-blur-xl border border-white/10 shadow-lg"
        >
          {/* Left */}
          <div className="flex items-center gap-6">
            <h1
              onClick={() => {
                navigate("/");
                setMenuOpen(false);
              }}
              className="text-white font-semibold text-lg cursor-pointer"
            >
              RAG API
            </h1>

            {/* Desktop */}
            <div className="hidden md:flex items-center gap-5">
              <Link to="/" className="text-gray-300 hover:text-white text-sm">
                Docs
              </Link>
              <Link
                to="/pricing"
                className="text-gray-300 hover:text-white text-sm"
              >
                Pricing
              </Link>
              <Link
                to="/try"
                className="text-gray-300 hover:text-white text-sm"
              >
                Playground
              </Link>
            </div>
          </div>

          {/* Desktop Right */}
          <div className="hidden md:flex items-center gap-4">
            {!user ? (
              <button
                onClick={handleLogin}
                className="bg-gray-800/80 hover:bg-gray-700 text-white px-4 py-2 rounded-lg text-sm"
              >
                Sign in
              </button>
            ) : (
              <span className="text-sm text-gray-300">{user.name}</span>
            )}

            <button
              onClick={handleGetApiKey}
              className="bg-linear-to-r from-blue-500 via-indigo-500 to-cyan-400 
              hover:opacity-90 text-white px-4 py-2 rounded-lg text-sm shadow-md"
            >
              Get API Key
            </button>
          </div>

          {/* Mobile Button */}
          <button
            className="md:hidden text-white text-xl"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            ☰
          </button>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="mt-3 rounded-xl bg-white/5 backdrop-blur-xl border border-white/10 p-4 flex flex-col gap-3 md:hidden transition-all duration-200">
            <Link
              to="/"
              onClick={() => setMenuOpen(false)}
              className="text-gray-300 hover:text-white"
            >
              Docs
            </Link>

            <Link
              to="/pricing"
              onClick={() => setMenuOpen(false)}
              className="text-gray-300 hover:text-white"
            >
              Pricing
            </Link>

            <Link to="/try" className="text-gray-300 hover:text-white text-sm">
              Playground
            </Link>

            {!user ? (
              <button
                onClick={handleLogin}
                className="bg-gray-800 text-white px-4 py-2 rounded-lg text-sm"
              >
                Sign in
              </button>
            ) : (
              <span className="text-gray-300">{user.name}</span>
            )}

            <button
              onClick={handleGetApiKey}
              className="bg-indigo-500 text-white px-4 py-2 rounded-lg text-sm"
            >
              Get API Key
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
