import Image from "next/image";
import Link from "next/link";
import logoImg from "../app/images/mudit-logo-new.svg";
import { expertiseCategories } from "../app/expertise/data";

export default function Header() {
  return (
    <header className="site-header">
      <div className="container">
        <div className="logo-wrapper">
          <div className="logo">
            <Link href="/" aria-label="Dr Mudit Khanna Home">
              <Image src={logoImg} alt="Dr Mudit logo" width={140} height={48} />
            </Link>
          </div>

          <nav className="main-nav div" aria-label="Main Navigation">
            <ul>
              <li>
                <Link href="/">Home</Link>
              </li>

              <li>
                <Link href="/about">About</Link>
              </li>

              <li className="has-megha-menu">
                <Link
                  href="/expertise/knee-replacement"
                  className="megha-toggle"
                  aria-haspopup="true"
                >
                  <span>Expertise</span>
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 18 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M8.41378 1L8.41378 7.93596H1M9.55814 17V10.064H17"
                      stroke="white"
                      strokeWidth="2"
                      strokeMiterlimit="3.8637"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </Link>

                <div className="meghamenu">
                  <div className="container">
                    <ul className="megha-columns">
                      {expertiseCategories.map((category) => (
                        <li className="megha-col" key={category.slug}>
                          <Link href={`/expertise/${category.slug}`}>
                            {category.pageTitle}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </li>

              <li>
               <Link href="/insights">Insights</Link>
              </li>

              <li>
                <Link href="/patient-stories">
                  <span>Patient Stories</span>
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 18 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M8.41378 1L8.41378 7.93596H1M9.55814 17V10.064H17"
                      stroke="white"
                      strokeWidth="2"
                      strokeMiterlimit="3.8637"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </Link>
              </li>

              <li>
                <Link href="/contact">Contact</Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}