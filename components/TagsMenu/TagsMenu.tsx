"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import css from "./TagsMenu.module.css";

const tags = ["All", "Work", "Personal", "Ideas", "Projects"];

export default function TagsMenu() {
  const pathname = usePathname();

  return (
    <div className={css.menuContainer}>
      <button className={css.menuButton}>Notes ▾</button>
      <ul className={css.menuList}>
        {tags.map((tag) => {
          const href = tag === "All" ? "/notes/filter/All" : `/notes/filter/${tag}`;
          const isActive = pathname === href;

          return (
            <li key={tag} className={`${css.menuItem} ${isActive ? css.active : ""}`}>
              <Link href={href} className={css.menuLink}>{tag}</Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}