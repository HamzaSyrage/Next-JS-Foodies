"use client";
import Link from "next/link";
import classes from "./header-navbar.module.css";
import { usePathname } from "next/navigation";
export default function HeaderNavBar() {
  const path = usePathname();
  return (
    <nav className={classes.nav}>
      <ul>
        <li>
          <Link
            className={path.startsWith("/meals") ? classes.active : undefined}
            href={"/meals"}
          >
            Browse Meals
          </Link>
        </li>
        <li>
          <Link
            className={
              path.startsWith("/community") ? classes.active : undefined
            }
            href={"/community"}
          >
            Foodies Community
          </Link>
        </li>
      </ul>
    </nav>
  );
}
