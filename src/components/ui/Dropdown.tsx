"use client";

import { useRouter } from "next/navigation";
import { IoChevronDown } from "react-icons/io5";

interface DropdownItem {
  label: string;
  value: string;
}

interface DropdownProps {
  buttonText: string;
  items: DropdownItem[];
  currentSort: string;
  className?: string;
  dropdownClassName?: string;
}

export default function Dropdown({
  buttonText,
  items,
  currentSort,
  className = "",
  dropdownClassName = "",
}: DropdownProps) {
  const router = useRouter();

  const handleSortChange = (value: string) => {
    router.push(`/?sort=${value}`);
  };

  return (
    <div className="relative">
      <button
        className={`inline-flex items-center rounded-lg bg-blue-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 ${className}`}
        type="button"
      >
        {buttonText} <IoChevronDown />
      </button>

      <div
        className={`absolute z-10 mt-2 w-44 divide-y divide-gray-100 rounded-lg bg-white shadow dark:divide-gray-600 dark:bg-gray-700 ${dropdownClassName}`}
      >
        <ul
          className="py-2 text-sm text-gray-700 dark:text-gray-200"
          aria-labelledby="dropdownDividerButton"
        >
          {items.map((item, index) => (
            <li key={index}>
              <button
                onClick={() => handleSortChange(item.value)}
                className={`block w-full px-4 py-2 text-left hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white ${
                  item.value === currentSort ? "font-bold" : ""
                }`}
              >
                {item.label}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
