// Styles //
import "../styles/mainLayout.scss";

// Component //

import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";

export default function MainLayout() {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    document.documentElement.setAttribute("color-scheme", theme);
  }, [theme]);

  return (
    <div className="main-layout">
      <header className="header">
        <h1 className="header__text">Where is the world ?</h1>
        <button
          className="header__button"
          aria-label={`Change Theme to ${
            theme === "light" ? "dark" : "light"
          } mode `}
          onClick={() => {
            setTheme(theme === "light" ? "dark" : "light");
          }}
        >
          {theme === "light" ? (
            <i className="fa-solid fa-moon"></i>
          ) : (
            <i className="fa-solid fa-sun active"></i>
          )}
          {theme === "light" ? "Dark" : "Light"} Mode
        </button>
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
}
