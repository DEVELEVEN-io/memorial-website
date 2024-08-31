// src/components/interface/Navbar.tsx
"use client";
import Image from "next/image";
import { usePathname } from "next/navigation";
import React, { useState } from "react";
import { FaBars, FaSearch } from "react-icons/fa";
import { FaCircleUser } from "react-icons/fa6";

// Define the prop types
interface NavbarProps {
  brand?: {
    name: string;
    logoSrc: string;
    logoAlt: string;
    href: string;
  };
  navItems: { label: string; href: string }[];
  userMenuItems: { label: string; href: string }[];
  showSearchBar?: boolean;
  userInfo?: {
    name?: string;
    email?: string;
    avatarSrc?: string;
  };
}

export const Navbar: React.FC<NavbarProps> = ({
  brand = { name: "Brand", logoSrc: "", logoAlt: "", href: "/" },
  navItems,
  userMenuItems,
  showSearchBar = false,
  userInfo = {},
}) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  const pathname = usePathname();

  return (
    <nav className="border-gray-200 bg-white dark:bg-gray-900">
      <div className="mx-auto flex max-w-screen-xl flex-wrap items-center justify-between p-4">
        {/* Brand Section */}
        <a
          href={brand.href}
          className="flex items-center space-x-3 rtl:space-x-reverse"
        >
          {brand.logoSrc && (
            <Image
              width={32}
              height={32}
              src={brand.logoSrc}
              className="h-8"
              alt={brand.logoAlt}
              priority={true}
            />
          )}
          <span className="self-center whitespace-nowrap text-2xl font-semibold dark:text-white">
            {brand.name}
          </span>
        </a>

        {/* User Menu and Hamburger Menu */}
        <div className="flex items-center space-x-3 md:order-2 md:space-x-0 rtl:space-x-reverse">
          {/* Optional Search Bar */}
          {showSearchBar && (
            <div className="relative hidden md:block">
              <div className="pointer-events-none absolute inset-y-0 start-0 flex items-center ps-3">
                <FaSearch />
              </div>
              <input
                type="text"
                id="search-navbar"
                className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2 ps-10 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                placeholder="Search..."
              />
            </div>
          )}

          {/* User Dropdown */}
          <div className="relative pl-4">
            <button
              type="button"
              onClick={toggleDropdown}
              className="flex rounded-full bg-gray-800 text-sm focus:ring-4 focus:ring-gray-300 md:me-0 dark:focus:ring-gray-600"
              id="user-menu-button"
              aria-expanded={isDropdownOpen}
            >
              <span className="sr-only">Open user menu</span>
              {userInfo.avatarSrc ? (
                <Image
                  className="h-8 w-8 rounded-full"
                  width={32}
                  height={32}
                  src={userInfo.avatarSrc}
                  alt="User"
                  priority={true}
                />
              ) : (
                <FaCircleUser className="h-8 w-8 text-gray-300" />
              )}
            </button>

            {isDropdownOpen && (
              <div
                className="absolute right-0 z-50 mt-2 w-48 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none dark:bg-gray-700"
                id="user-dropdown"
              >
                <div className="px-4 py-3">
                  <span className="block text-sm text-gray-900 dark:text-white">
                    {userInfo.name || "Guest"}
                  </span>
                  <span className="block truncate text-sm text-gray-500 dark:text-gray-400">
                    {userInfo.email || "guest@example.com"}
                  </span>
                </div>
                <ul className="py-2" aria-labelledby="user-menu-button">
                  {userMenuItems.map((item, index) => (
                    <li key={index}>
                      <a
                        href={item.href}
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white"
                      >
                        {item.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          {/* Hamburger Menu Button */}
          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-lg p-1 text-sm text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 md:hidden dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-user"
            aria-expanded={isNavOpen}
            onClick={toggleNav}
          >
            <span className="sr-only">Open main menu</span>
            <FaBars className="text-2xl" />
          </button>
        </div>

        {/* Navbar Links */}
        <div
          className={`items-center justify-between ${
            isNavOpen ? "block" : "hidden"
          } w-full md:order-1 md:flex md:w-auto`}
          id="navbar-user"
        >
          <ul className="mt-4 flex flex-col rounded-lg border border-gray-100 bg-gray-50 p-4 font-medium md:mt-0 md:flex-row md:space-x-8 md:border-0 md:bg-white md:px-0 md:py-0 rtl:space-x-reverse dark:border-gray-700 dark:bg-gray-800 md:dark:bg-gray-900">
            {navItems.map((item, index) => (
              <li key={index}>
                <a
                  href={item.href}
                  className={`block px-3 py-2 md:p-0 ${
                    pathname === item.href
                      ? "rounded bg-blue-700 text-white md:bg-transparent md:text-blue-700 md:dark:text-blue-500"
                      : "text-gray-900 hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 dark:border-gray-700 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent md:dark:hover:text-blue-500"
                  }`}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
        {/* Navbar END */}
      </div>
    </nav>
  );
};
