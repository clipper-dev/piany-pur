/*Functionality*/
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
/*Components*/
/*Styling*/
import styles from "./Navbar.module.css";
/*Icons*/
import { FaArrowDown, FaBars, FaLocationArrow, FaPhone } from "react-icons/fa";
import { IoIosArrowDown, IoIosPhonePortrait, IoIosPin } from "react-icons/io";
import { useRouter } from "next/router";
import { Navitem } from "../../types/types";
import Button from "../Button/Button";

interface Props {
  navbarData: Navitem[];
  sideBardata: Navitem[];
  favicon: string;
  title: string;
  phone: string;
}

function Navbar({ navbarData, sideBardata, favicon, title, phone }: Props) {
  const [sideBar, setSideBar] = useState(false);
  const showSideBar = () => setSideBar(!sideBar);
  const [button] = useState(true);
  const number = phone.replace(/\s/g, "").slice(3);
  const firstThree = number;
  return (
    <nav className={styles.main}>
      <>
        {" "}
        {/*Left section of the navbar, responsible for the logo or company name*/}
        <Link
          href={"/"}
          onClick={() => {
            setSideBar(false);
          }}
          passHref
          legacyBehavior
        >
          <a className={styles.logoContainer}>
            <div className={styles["logo"]}>
              <Image src={favicon} alt={`${title} logo`} fill />
            </div>
            <span>{title}</span>
          </a>
        </Link>
        {/* Middle section */}
        <div className={styles.middle}>
          <FaPhone />
          <span>
            Zadzwoń: <a href={`tel:${number}`}>{phone}</a>
          </span>
          <span className={"hide-1000"}>
            <IoIosPin /> Zachodniopomorskie
          </span>
        </div>
        {/*Right section of the navbar, responsible for the options*/}
        <div className={styles.menu}>
          <div className={styles.tabs}>
            {navbarData.map((item, index) => {
              return (
                !item.hideDesktop && (
                  <div key={index} className={styles.tabItem}>
                    {item.type === "scroll" && (
                      <a
                        href={`#${item.path}`}
                        onClick={(e) => {
                          e.preventDefault();
                          document
                            .querySelector(`#${item.path}`)
                            ?.scrollIntoView({
                              behavior: "smooth",
                            });
                        }}
                      >
                        {item.title}
                      </a>
                    )}
                    {item.type === "link" && (
                      <Link
                        href={item.path}
                        onClick={() => {
                          setSideBar(false);
                        }}
                        passHref
                        legacyBehavior
                      >
                        <a>{item.title}</a>
                      </Link>
                    )}
                    {item.type === "dropdown" && (
                      <div className={styles.dropdown}>
                        <div className={styles.dropdownTitle}>
                          {item.title} <IoIosArrowDown />
                        </div>
                        <div className={styles.dropdownMenu}>
                          {item.items?.map((ii, index) => (
                            <Link
                              key={index}
                              href={ii.path}
                              onClick={() => {
                                setSideBar(false);
                              }}
                              passHref
                              legacyBehavior
                            >
                              <a className={styles.dropdownItem}>{ii.title}</a>
                            </Link>
                          ))}
                        </div>
                      </div>
                    )}
                    {item.type === "info" && item.title}
                  </div>
                )
              );
            })}
            <Button
              size={"btn--medium"}
              style={"btn--call-to-action"}
              onClick={(e) => {
                e.preventDefault();
                document.querySelector(`#${"kontakt"}`)?.scrollIntoView({
                  behavior: "smooth",
                });
              }}
            >
              Kontakt
            </Button>
          </div>
        </div>
        {/*Right section of the navbar, CTA and mobile menu*/}
        <div className={styles.mobileMenu}>
          <Button
            size={"btn--medium"}
            style={"btn--call-to-action"}
            onClick={(e) => {
              e.preventDefault();
              document.querySelector(`#${"kontakt"}`)?.scrollIntoView({
                behavior: "smooth",
              });
            }}
          >
            Kontakt
          </Button>
          <div
            className={sideBar ? styles.menuIconActive : styles.menuIcon}
            onClick={() => {
              setSideBar(!sideBar);
            }}
          />
        </div>
      </>

      {/*Display side bar only if opened and only if on mobile*/}
      {
        <div
          className={
            sideBar
              ? [styles["sideBar"], styles["sideBar-active"]].join(" ")
              : [styles["sideBar"], styles["sideBar-hidden"]].join(" ")
          }
        >
          <div className={styles.sideBarMenu}>
            {sideBardata.map((item, index) => {
              return (
                <>
                  {item.type === "link" && (
                    <Link href={item.path} key={index} passHref>
                      <span
                        className={[
                          styles["sideBar-menu-item-text"],
                          ["p--display"],
                        ].join(" ")}
                        onClick={() => {
                          setSideBar(!sideBar);
                        }}
                      >
                        {item?.icon} {item.title}
                      </span>
                    </Link>
                  )}
                  {item.type === "scroll" && (
                    <Link
                      href={`#${item.path}`}
                      onClick={(e) => {
                        e.preventDefault();
                        document
                          .querySelector(`#${item.path}`)
                          ?.scrollIntoView({
                            behavior: "smooth",
                          });
                      }}
                      key={index}
                      passHref
                    >
                      <span
                        className={[
                          styles["sideBar-menu-item-text"],
                          ["p--display"],
                        ].join(" ")}
                        onClick={() => {
                          setSideBar(!sideBar);
                        }}
                      >
                        {item?.icon} {item.title}
                      </span>
                    </Link>
                  )}
                </>
              );
            })}
          </div>
        </div>
      }
    </nav>
  );
}

export { Navbar };
