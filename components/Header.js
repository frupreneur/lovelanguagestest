import React, { useState } from "react";
import Link from "next/link";
import { HiMenuAlt3 } from "react-icons/hi";
import { TfiClose } from "react-icons/tfi";
import { menu } from "../db";

export default function Header() {
  const [offEl, setoffEl] = useState("offEl");
  return (
    <header>
      <nav id="nav">
        <ul id="menus">
          <li className="logo">
            <Link href="/">Love Languages Test.</Link>
          </li>
          <li
            className="menu-icon"
            onClick={() => {
              if (offEl) {
                setoffEl("");
                document.documentElement.style = "overflow: hidden !important";
              } else {
                setoffEl("offEl");
                document.documentElement.style = "overflow: null !important";
              }
            }}
          >
            {!offEl ? (
              <TfiClose className="fa-solid fa-bars" />
            ) : (
              <HiMenuAlt3 className="fa-solid fa-bars" />
            )}
          </li>
          <ul className={`secondary ${offEl}`}>
            {menu.map((menuItem, i) => (
              <li key={i}>
                <Link
                  href={menuItem.path}
                  onClick={() => {
                    if (!offEl) {
                      setoffEl("offEl");
                      document.documentElement.style =
                        "overflow: null !important";
                    } else {
                      setoffEl(" ");
                    }
                  }}
                >
                  {menuItem.name}
                </Link>
              </li>
            ))}
          </ul>
        </ul>
      </nav>
    </header>
  );
}
