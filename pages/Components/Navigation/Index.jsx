import style from "../../../styles/index.module.scss";
import Link from "next/link";
import Image from "next/image";
import { nav_data } from "../../../src/data/navigation/nav_data";
import { Poiret_One } from "next/font/google";
import { useState, useEffect } from "react";

export default function Navigation() {
  const [navbar, setNavbar] = useState(false);

  const handleClick = () => {
    if (navbar == false) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  const [scrollTop, setScrollTop] = useState(false);

  useEffect(() => {
    // Event listener for scroll events
    const handleScroll = () => {
      setScrollTop(window.scrollY >= 200);
    };

    // Attach the event listener
    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <main className="w-full">
      <nav
        className={`w-full ${style.nav_container} 
        `}
      >
        <div
          className={`${style.wd_full} flex ${style.center}  `}
          style={{ backgroundColor: "rgb(15, 13, 18)" }}
        >
          <div className={style.nav_brand_container}>
            <Link href="#header">
              <Image
                width="50"
                height="50"
                alt="logo"
                src="/images/logos/flowdev_logo.ico"
              />
            </Link>
          </div>

          <div
            className={`${style.nav_links_list_container} ${
              style.end_row_ver
            } ${style.flex_column_res} ${
              navbar
                ? style.nav_links_list_container_bg_black
                : style.nav_links_list_container_bg_transparent
            } ${style.flex_column_res} ${
              navbar
                ? style.nav_links_list_container_visible
                : style.nav_links_list_container_hidden
            }`}
          >
            {nav_data.map((link) => (
              <Link
                key={link}
                href={`#${link.toLowerCase()}`}
                className={style.links_container}
              >
                <p className={`${style.links} ${style.poiret_one}`}>{link}</p>
              </Link>
            ))}
          </div>
          <div className={`${style.hamburger_menu_container} `}>
            <button
              onClick={handleClick}
              className={`${style.flex_column} ${style.end_column_ver}`}
            >
              <div
                className={`${
                  navbar
                    ? style.hamburger_long_line_res
                    : style.hamburger_long_line
                }  ${style.hamburger_lines}`}
              ></div>
              <div
                className={`${
                  navbar
                    ? style.hamburger_short_line_res
                    : style.hamburger_short_line
                } ${style.hamburger_lines}`}
              ></div>
            </button>
          </div>
        </div>
      </nav>
    </main>
  );
}