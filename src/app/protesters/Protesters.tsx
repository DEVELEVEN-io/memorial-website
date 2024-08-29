// src/app/protesters/Protesters.tsx

"use client";

import { DataTable } from "@/components";
import useSearch from "@/hooks/useSearch";
import { columns, data, filters, handleFilterChange } from "./protestersData";

const Protesters = () => {
  const { filteredData, handleSearch } = useSearch(data, [
    "name",
    "email",
    "status",
    "age",
  ]);

  return (
    <div>
      <DataTable
        columns={columns}
        data={filteredData}
        onSearch={handleSearch}
        onFilterChange={handleFilterChange}
        filters={filters}
      />
    </div>
  );
};

export default Protesters;
