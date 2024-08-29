// src/app/protesters/protesterData.ts
export const columns = [
  { label: "Name", key: "name" },
  { label: "Age", key: "age" },
  { label: "Email", key: "email" },
  { label: "Status", key: "status" },
];

// Define the data for the table
export const data = [
  { name: "John Doe", age: 28, email: "john@example.com", status: "Active" },
  {
    name: "Jane Smith",
    age: 34,
    email: "jane@example.com",
    status: "Inactive",
  },
  { name: "Bob Johnson", age: 45, email: "bob@example.com", status: "Active" },
  {
    name: "Alice Brown",
    age: 23,
    email: "alice@example.com",
    status: "Pending",
  },
];

// Define the filters
export const filters = [
  { label: "Last 7 days", value: "7-days" },
  { label: "Last 30 days", value: "30-days" },
  { label: "Last year", value: "1-year" },
];

// Search handler function
export const handleSearch = (query: string) => {
  console.log("Search query:", query);
  // Implement your search logic here
};

// Filter change handler function
export const handleFilterChange = (filter: string) => {
  console.log("Selected filter:", filter);
  // Implement your filter logic here
};
