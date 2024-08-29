import React from "react";
import { FiChevronDown, FiSearch } from "react-icons/fi";
// import { AiFillCheckCircle } from 'react-icons/ai';

interface DataTableProps {
  columns: Array<{ label: string; key: string }>;
  data: Array<Record<string, any>>;
  onSearch?: (query: string) => void;
  onFilterChange?: (filter: string) => void;
  filters?: Array<{ label: string; value: string }>;
}

export const DataTable: React.FC<DataTableProps> = ({
  columns,
  data,
  onSearch,
  onFilterChange,
  filters = [],
}) => {
  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
      <div className="flex flex-col flex-wrap items-center justify-between space-y-4 pb-4 sm:flex-row sm:space-y-0">
        <div>
          {filters.length > 0 && (
            <div className="relative inline-block text-left">
              <button
                id="dropdownRadioButton"
                data-dropdown-toggle="dropdownRadio"
                className="inline-flex items-center rounded-lg border border-gray-300 bg-white px-3 py-1.5 text-sm font-medium text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-800 dark:text-white dark:hover:border-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-700"
                type="button"
              >
                Last 30 days
                <FiChevronDown className="ms-2.5 h-4 w-4" />
              </button>
              <div
                id="dropdownRadio"
                className="z-10 hidden w-48 divide-y divide-gray-100 rounded-lg bg-white shadow dark:divide-gray-600 dark:bg-gray-700"
              >
                <ul
                  className="space-y-1 p-3 text-sm text-gray-700 dark:text-gray-200"
                  aria-labelledby="dropdownRadioButton"
                >
                  {filters.map((filter) => (
                    <li key={filter.value}>
                      <div
                        className="flex items-center rounded p-2 hover:bg-gray-100 dark:hover:bg-gray-600"
                        onClick={() =>
                          onFilterChange && onFilterChange(filter.value)
                        }
                      >
                        <input
                          id={`filter-radio-${filter.value}`}
                          type="radio"
                          value={filter.value}
                          name="filter-radio"
                          className="h-4 w-4 border-gray-300 bg-gray-100 text-blue-600 focus:ring-2 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-blue-600 dark:focus:ring-offset-gray-800"
                        />
                        <label
                          htmlFor={`filter-radio-${filter.value}`}
                          className="ms-2 w-full rounded text-sm font-medium text-gray-900 dark:text-gray-300"
                        >
                          {filter.label}
                        </label>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}
        </div>
        <label htmlFor="table-search" className="sr-only">
          Search
        </label>
        <div className="relative">
          <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center ps-3">
            <FiSearch className="h-5 w-5 text-gray-500 dark:text-gray-400" />
          </div>
          <input
            type="text"
            id="table-search"
            className="block w-80 rounded-lg border border-gray-300 bg-gray-50 p-2 ps-10 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
            placeholder="Search for items"
            onChange={(e) => onSearch && onSearch(e.target.value)}
          />
        </div>
      </div>
      <table className="w-full text-left text-sm text-gray-500 rtl:text-right dark:text-gray-400">
        <thead className="bg-gray-50 text-xs uppercase text-gray-700 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="p-4">
              <div className="flex items-center">
                <input
                  id="checkbox-all-search"
                  type="checkbox"
                  className="h-4 w-4 rounded border-gray-300 bg-gray-100 text-blue-600 focus:ring-2 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-blue-600 dark:focus:ring-offset-gray-800"
                />
                <label htmlFor="checkbox-all-search" className="sr-only">
                  checkbox
                </label>
              </div>
            </th>
            {columns.map((column) => (
              <th scope="col" className="px-6 py-3" key={column.key}>
                {column.label}
              </th>
            ))}
            <th className="px-6 py-3">Actions</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, idx) => (
            <tr
              key={idx}
              className="border-b bg-white hover:bg-gray-50 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-600"
            >
              <td className="w-4 p-4">
                <div className="flex items-center">
                  <input
                    id={`checkbox-table-search-${idx}`}
                    type="checkbox"
                    className="h-4 w-4 rounded border-gray-300 bg-gray-100 text-blue-600 focus:ring-2 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-blue-600 dark:focus:ring-offset-gray-800"
                  />
                  <label
                    htmlFor={`checkbox-table-search-${idx}`}
                    className="sr-only"
                  >
                    checkbox
                  </label>
                </div>
              </td>
              {columns.map((column) => (
                <td className="px-6 py-4" key={column.key}>
                  {row[column.key]}
                </td>
              ))}
              <td className="px-6 py-4">
                <a
                  href="#"
                  className="font-medium text-blue-600 hover:underline dark:text-blue-500"
                >
                  Edit
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
