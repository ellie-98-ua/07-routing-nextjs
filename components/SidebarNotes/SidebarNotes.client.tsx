"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import css from "./SidebarNotes.module.css";

const tags = ["All", "Work", "Personal", "Ideas", "Projects"];

export default function SidebarNotes() {
  const pathname = usePathname(); 

  return (
    <aside className={css.sidebar}>
      <ul className={css.tagList}>
        {tags.map((tag) => {
          const href = `/notes/filter/${tag}`;
          const isActive = pathname === href;

          return (
            <li key={tag} className={isActive ? css.activeTag : ""}>
              <Link href={href}>{tag}</Link>
            </li>
          );
        })}
      </ul>
    </aside>
  );
}
