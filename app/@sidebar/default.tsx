"use client";

import Link from "next/link";
import css from "./SidebarNotes.module.css";

export default function SidebarNotes() {
  const tags = ["All", "Work", "Personal", "Ideas", "Projects"];

  return (
    <aside className={css.sidebar}>
      <ul className={css.menuList}>
        {tags.map(tag => (
          <li key={tag} className={css.menuItem}>
            <Link
              href={
                tag === "All"
                  ? "/notes/filter"         
                  : `/notes/filter/${tag}`
              }
              className={css.menuLink}
            >
              {tag}
            </Link>
          </li>
        ))}
      </ul>
    </aside>
  );
}