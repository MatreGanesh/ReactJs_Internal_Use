import React, { useEffect, useRef, useState } from "react";

export default function UseEffectThrottling() {
  const [users, setUsers] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [throttleValue, setThrottleValue] = useState("");

  const throttleRef = useRef(false);

  // Fetch users
  useEffect(() => {
    fetch("https://fakestoreapi.com/users")
      .then((res) => res.json())
      .then((data) => setUsers(data))
      .catch(console.error);
  }, []);

  // Throttle handler
  const handleChange = (e) => {
    const value = e.target.value;
    setInputValue(value);

    if (!throttleRef.current) {
      throttleRef.current = true;

      setThrottleValue(value);

      setTimeout(() => {
        throttleRef.current = false;
      }, 300);
    }
  };

  // Filter users
  const filteredUsers = users.filter((user) => {
    if (!throttleValue) return true;

    const search = throttleValue.toLowerCase();

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
      <h1 className="text-2xl font-semibold">User Search (Throttle)</h1>

      <input
        className="border px-3 py-1"
        placeholder="Search by name, city, email..."
        value={inputValue}
        onChange={handleChange}
      />

      <ul className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {filteredUsers.map((user) => (
          <li
            key={user.id}
            className="border p-4 rounded shadow-sm hover:shadow-md transition"
          >
            <p className="text-sm text-gray-500">ID: {user.id}</p>
            <p className="font-semibold text-lg">
              {user.name.firstname} {user.name.lastname}
            </p>
            <p className="text-sm">{user.email}</p>
            <p className="text-sm">{user.address.city}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
