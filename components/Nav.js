"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/", label: "index" },
  { href: "/projects", label: "projects" },
  { href: "/about", label: "about" },
  { href: "/contact", label: "contact" },
];

export default function Nav() {
  const pathname = usePathname();

  return (
    <nav className="site-nav">
      <div className="wrap row">
        <Link href="/" className="mark">
          g<span>.</span>rahardjo
        </Link>
        <ul>
          {links.map((l) => (
            <li key={l.href}>
              <Link href={l.href} className={pathname === l.href ? "active" : ""}>
                {l.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
