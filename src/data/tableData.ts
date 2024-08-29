const columns = [
  { label: "Name", key: "name" },
  { label: "Age", key: "age" },
  { label: "Email", key: "email" },
  { label: "Status", key: "status" },
];

// Define the data for the table
const data = [
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

const filters = [
  { label: "Last 7 days", value: "7-days" },
  { label: "Last 30 days", value: "30-days" },
  { label: "Last year", value: "1-year" },
];
