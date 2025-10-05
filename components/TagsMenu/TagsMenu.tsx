"use client";

import Link from "next/link";
import css from "./TagsMenu.module.css";
import { useState } from "react";

export default function TagsMenu() {
  const tags = ["All notes", "Work", "Study", "Personal", "Ideas"];

  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={css.menuContainer}>
      <button
        className={css.menuButton}
        onClick={() => setIsOpen((prev) => !prev)}
        aria-haspopup="true"
        aria-expanded={isOpen}
      >
        Notes ▾
      </button>

      {isOpen && (
        <ul className={css.menuList}>
          {tags.map((tag) => {
            const href =
              tag === "All notes"
                ? "/notes/filter"
                : `/notes/filter/${tag}`;

            return (
              <li key={tag} className={css.menuItem}>
                <Link href={href} className={css.menuLink}>
                  {tag}
                </Link>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}
