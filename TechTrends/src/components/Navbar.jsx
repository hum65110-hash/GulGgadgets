import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import {
  getCart,
  getWishlist,
} from "../components/utils/storage";

export default function Navbar() {
  const [cartCount, setCartCount] =
    useState(0);
  const [wishlistCount, setWishlistCount] =
    useState(0);
  const [menuOpen, setMenuOpen] =
    useState(false);

  /* ---------------- LOAD COUNTS ---------------- */

  const loadCounts = () => {
    const cart = getCart();
    const wishlist = getWishlist();

    setCartCount(
      cart.reduce(
        (sum, item) => sum + item.qty,
        0
      )
    );

    setWishlistCount(wishlist.length);
  };

  /* ---------------- EVENTS ---------------- */

  useEffect(() => {
    loadCounts();

    window.addEventListener(
      "cartUpdated",
      loadCounts
    );
    window.addEventListener(
      "wishlistUpdated",
      loadCounts
    );
    window.addEventListener(
      "storage",
      loadCounts
    );

    return () => {
      window.removeEventListener(
        "cartUpdated",
        loadCounts
      );
      window.removeEventListener(
        "wishlistUpdated",
        loadCounts
      );
      window.removeEventListener(
        "storage",
        loadCounts
      );
    };
  }, []);

  /* ---------------- UI ---------------- */

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border-dark bg-background-dark/80 backdrop-blur-md">

      <div className="px-4 md:px-10 lg:px-40 flex justify-center">

        <div className="max-w-[1280px] w-full flex items-center justify-between py-3">

          {/* ---------------- LEFT ---------------- */}

          <div className="flex items-center gap-8">

            {/* Logo */}
            <Link
              to="/"
              className="flex items-center gap-3 text-white"
            >
              <span className="material-symbols-outlined text-3xl text-primary">
                bolt
              </span>
              <h2 className="text-xl font-bold tracking-tight">
                GulfGadgets
              </h2>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-8 text-sm font-medium">

              <Link
                to="/categories"
                className="text-slate-300 hover:text-primary transition"
              >
                Products
              </Link>

              <Link
                to="/smartphones"
                className="text-slate-300 hover:text-primary transition"
              >
                Smartphones
              </Link>

              <Link
                to="/audio"
                className="text-slate-300 hover:text-primary transition"
              >
                Audio
              </Link>

              <Link
                to="/wearables"
                className="text-slate-300 hover:text-primary transition"
              >
                Wearables
              </Link>

              <Link
                to="/laptops"
                className="text-slate-300 hover:text-primary transition"
              >
                Laptops
              </Link>

            </nav>
          </div>

          {/* ---------------- RIGHT ---------------- */}

          <div className="flex items-center gap-3">

            {/* Search */}
            <div className="hidden md:flex h-10 border border-border-dark rounded-lg bg-surface-dark/50">
              <span className="material-symbols-outlined px-3 flex items-center text-[#90bccb]">
                search
              </span>
              <input
                placeholder="Search gadgets..."
                className="bg-transparent text-white text-sm outline-none px-2"
              />
            </div>

            {/* Cart */}
            <Link
              to="/cart"
              className="relative size-10 bg-surface-dark rounded-lg hover:bg-border-dark flex items-center justify-center"
            >
              <span className="material-symbols-outlined text-[#90bccb]">
                shopping_cart
              </span>

              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-primary text-background-dark text-[10px] font-bold rounded-full px-1.5">
                  {cartCount}
                </span>
              )}
            </Link>

            {/* Wishlist */}
            <Link
              to="/wishlist"
              className="relative hidden sm:flex size-10 bg-surface-dark rounded-lg hover:bg-border-dark items-center justify-center"
            >
              <span className="material-symbols-outlined text-[#90bccb]">
                favorite
              </span>

              {wishlistCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-[10px] font-bold rounded-full px-1.5">
                  {wishlistCount}
                </span>
              )}
            </Link>

            {/* Auth Buttons (Desktop) */}
            <div className="hidden lg:flex items-center gap-2 ml-2">

              <Link
                to="/login"
                className="px-4 py-2 text-sm border border-border-dark rounded-lg text-white hover:border-primary hover:text-primary transition"
              >
                Login
              </Link>

              <Link
                to="/signup"
                className="px-4 py-2 text-sm bg-primary text-background-dark rounded-lg font-bold hover:bg-opacity-90 transition"
              >
                Sign Up
              </Link>

            </div>

            {/* Hamburger */}
            <button
              onClick={() =>
                setMenuOpen(!menuOpen)
              }
              className="lg:hidden size-10 flex items-center justify-center bg-surface-dark rounded-lg"
            >
              <span className="material-symbols-outlined text-white">
                {menuOpen ? "close" : "menu"}
              </span>
            </button>

          </div>
        </div>
      </div>

      {/* ---------------- MOBILE MENU ---------------- */}

      {menuOpen && (
        <div className="lg:hidden border-t border-border-dark bg-background-dark px-6 py-6 space-y-4">

          <Link
            to="/categories"
            className="block text-slate-300 hover:text-primary"
            onClick={() =>
              setMenuOpen(false)
            }
          >
            Products
          </Link>

          <Link
            to="/smartphones"
            className="block text-slate-300 hover:text-primary"
            onClick={() =>
              setMenuOpen(false)
            }
          >
            Smartphones
          </Link>

          <Link
            to="/audio"
            className="block text-slate-300 hover:text-primary"
            onClick={() =>
              setMenuOpen(false)
            }
          >
            Audio
          </Link>

          <Link
            to="/wearables"
            className="block text-slate-300 hover:text-primary"
            onClick={() =>
              setMenuOpen(false)
            }
          >
            Wearables
          </Link>

          <Link
            to="/laptops"
            className="block text-slate-300 hover:text-primary"
            onClick={() =>
              setMenuOpen(false)
            }
          >
            Laptops
          </Link>

          {/* Auth Mobile */}
          <div className="pt-4 border-t border-border-dark flex gap-3">

            <Link
              to="/login"
              className="flex-1 text-center border border-border-dark rounded-lg py-2 text-white"
              onClick={() =>
                setMenuOpen(false)
              }
            >
              Login
            </Link>

            <Link
              to="/signup"
              className="flex-1 text-center bg-primary text-background-dark rounded-lg py-2 font-bold"
              onClick={() =>
                setMenuOpen(false)
              }
            >
              Sign Up
            </Link>

          </div>
        </div>
      )}
    </header>
  );
}
