import React, { useEffect, useState } from "react";

export default function Debouncing() {
  const [inputValue, setInputValue] = useState("");
  const [debounceValue, setDebounceValue] = useState("");
  const [usersData, setUsersData] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/users")
      .then((res) => res.json())
      .then((response) => {
        console.log(response.users);
        setUsersData(response.users);
      })
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebounceValue(inputValue.trim());
    }, 300);
    return () => clearTimeout(handler);
  }, [inputValue]);

  const filteredUsers = usersData.filter(
    (user) =>
      user.address.city.toLowerCase().includes(debounceValue.toLowerCase()) ||
      user.firstName.toLowerCase().includes(debounceValue.toLowerCase()) ||
      user.lastName.toLowerCase().includes(debounceValue.toLowerCase())
  );

  return (
    <div className="space-y-4">
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        className="w-[300px] border-2 border-green-600 bg-transparent transition-all duration-300 ease-in-out focus:outline-none focus:border-amber-500 focus:ring-2 ring-green-400 rounded-md focus:w-[400px] px-2"
        placeholder="Search by city"
      />

      <h1 className="text-green-800">
        Debounced Value: {debounceValue || "Waiting..."}
      </h1>

      <div>
        <h2 className="text-xl font-bold">Filtered Users by City:</h2>
        {filteredUsers.length > 0 ? (
          filteredUsers.map((user) => (
            <div key={user.id} className="p-2 border-b">
              <p>
                {user.firstName} {user.lastName} —{" "}
                <strong>{user.address.city}</strong>
              </p>
            </div>
          ))
        ) : (
          <p>No users found.</p>
        )}
      </div>
    </div>
  );
}
