import React, { useEffect, useState } from "react";

export default function Users() {
  const [users, setUsers] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [debounceValue, setDebounceValue] = useState("");

  // Fetch users
  useEffect(() => {
    fetch("https://fakestoreapi.com/users")
      .then((res) => res.json())
      .then((data) => setUsers(data))
      .catch(console.error);
  }, []);

  // Debounce input
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebounceValue(inputValue.trim());
    }, 300);

    return () => clearTimeout(timer);
  }, [inputValue]);

  // Filter users
  const filteredUsers = users.filter((user) => {
    if (!debounceValue) return true;

    const search = debounceValue.toLowerCase();

    return (
      user.name.firstname.toLowerCase().includes(search) ||
      user.name.lastname.toLowerCase().includes(search) ||
      user.username.toLowerCase().includes(search) ||
      user.email.toLowerCase().includes(search) ||
      user.address.city.toLowerCase().includes(search)
    );
  });

  return (
    <div className="flex flex-col items-center space-y-4">
      <h1 className="text-2xl font-semibold">User Search (Debounce)</h1>

      <input
        className="border px-3 py-1"
        placeholder="Search by name, city, email..."
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />

      <ul className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-3 gap-4">
        {filteredUsers.map((user) => (
          <li
            key={user.id}
            className="border p-4 rounded shadow-sm hover:shadow-md transition"
          >
            <p>{user.id}</p>
            <p className="font-semibold text-lg">
              {user.name.firstname} {user.name.lastname}
            </p>
            <p className="text-sm text-gray-600">{user.email}</p>
            <p className="text-sm text-gray-500">{user.address.city}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
