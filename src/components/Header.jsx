"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import logoImg from "../app/images/mudit-logo-new.svg";
import { expertiseCategories } from "../app/expertise/data";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [expertiseOpen, setExpertiseOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
    setExpertiseOpen(false);
  };

  return (
    <header className="site-header">
      <div className="container">
        <div className="logo-wrapper">
          <div className="logo">
            <Link href="/" aria-label="Dr Mudit Khanna Home" onClick={closeMenu}>
              <Image src={logoImg} alt="Dr Mudit logo" width={140} height={48} />
            </Link>
          </div>

          <button
            type="button"
            className={`burger-btn ${menuOpen ? "active" : ""}`}
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-label="Toggle menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>

          <nav
            className={`main-nav div ${menuOpen ? "open" : ""}`}
            aria-label="Main Navigation"
          >
            <ul>
              <li>
                <Link href="/" onClick={closeMenu}>Home</Link>
              </li>

              <li>
                <Link href="/about" onClick={closeMenu}>About</Link>
              </li>

              <li className={`has-megha-menu ${expertiseOpen ? "active" : ""}`}>
                <a
                  type="button"
                  className="megha-toggle"
                  onClick={() => setExpertiseOpen((prev) => !prev)}
                  aria-expanded={expertiseOpen}
                >
                  <span>Expertise</span>
                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                    <path
                      d="M8.41378 1L8.41378 7.93596H1M9.55814 17V10.064H17"
                      stroke="white"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </a>

                <div className="meghamenu">
                  <ul className="megha-columns">
                    {expertiseCategories.map((category) => (
                      <li className="megha-col" key={category.slug}>
                        <Link href={`/expertise/${category.slug}`} onClick={closeMenu}>
                          {category.pageTitle}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </li>

              <li>
                <Link href="/insights" onClick={closeMenu}>Insights</Link>
              </li>

              <li>
                <Link href="/patient-stories" onClick={closeMenu}>
                  Patient Stories
                </Link>
              </li>

              <li>
                <Link href="/contact" onClick={closeMenu}>Contact</Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}