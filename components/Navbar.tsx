"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/makeup", label: "Makeup " },
  { href: "/decoration-gallery", label: "Dekorasi" },
  { href: "/contact", label: "kontak" },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <Link
            href="/"
            className="text-2xl font-bold text-purple-800"
          >
            Rama Collection
          </Link>
          <ul className="flex space-x-4">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-gray-600 hover:text-purple-800 relative"
                >
                  {item.label}
                  {pathname === item.href && (
                    <motion.div
                      className="absolute bottom-0 left-0 w-full h-0.5 bg-purple-800"
                      layoutId="underline"
                    />
                  )}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}
