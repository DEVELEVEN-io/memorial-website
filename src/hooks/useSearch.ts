// src/hooks/useSearch.ts

import { useState } from "react";

const useSearch = (
  initialData: Array<Record<string, any>>,
  searchKeys: string[],
) => {
  const [filteredData, setFilteredData] = useState(initialData);

  const handleSearch = (query: string) => {
    if (!query) {
      setFilteredData(initialData);
      return;
    }

    const lowercasedQuery = query.toLowerCase();
    const filtered = initialData.filter((item) =>
      searchKeys.some((key) =>
        item[key].toString().toLowerCase().includes(lowercasedQuery),
      ),
    );
    setFilteredData(filtered);
  };

  return { filteredData, handleSearch };
};

export default useSearch;
