import Image from "next/image";
import Link from "next/link";
import logo from "@/assets/logo.png";
import classes from "./header-navbar.module.css";
import HeaderNavBar from "./header-navbar";
import HeaderBackground from "./header-background";
export default function MainHeader() {
  return (
    <>
      <HeaderBackground />
      <header className={classes.header}>
        <Link draggable="false" href={"/"} className={classes.logo}>
          <Image
            src={logo}
            alt={"NextLevel Food App logo"}
            draggable={"false"}
            priority
          />
          NextLevel Foodies
        </Link>
        <HeaderNavBar />
      </header>
    </>
  );
}
