import { useEffect, useRef } from "react";
import { LocalStoraj } from "../assets/utils/LocalStoraj";

import sun from "./../assets/img/icons/sun.svg";
import moon from "./../assets/img/icons/moon.svg";
import windowDarkMode from "../assets/utils/windowDarkMode";


export default function DarkMoodBtn() {
  
  const [darkMode, setDarkMode] = LocalStoraj("darkMode", windowDarkMode());
  const btnRef = useRef(null);

  useEffect(() => {
		window
			.matchMedia('(prefers-color-scheme: dark)')
			.addEventListener('change', (event) => {
				const newColorScheme = event.matches ? 'dark' : 'light';
				setDarkMode(newColorScheme);
			});
	}, [setDarkMode]);

  useEffect(() => {
    if (darkMode === "dark") {
      document.body.classList.add("dark");
      btnRef.current.classList.add("dark-mode-btn--active");
    } else {
      document.body.classList.remove("dark");
      btnRef.current.classList.remove("dark-mode-btn--active");
    }
  }, [darkMode]);

  function toggleDarkMode() {
    setDarkMode((current) => {
      return current === "light" ? "dark" : "light";
    });
  }

  return (
    <button ref={btnRef} className="dark-mode-btn" onClick={toggleDarkMode}>
      <img src={sun} alt="Light mode" className="dark-mode-btn__icon" />
      <img src={moon} alt="Dark mode" className="dark-mode-btn__icon" />
    </button>
  );
}
