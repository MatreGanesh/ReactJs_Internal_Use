import React, { useState } from "react";

export default function LiftingChildCom(props) {
  const [name, setName] = useState(" ");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(name);
    props.getData(name);
  };

  return (
    <div className="space-y-4">
      <h1>LiftingChildCom</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          className="border px-4 py-1 rounded-sm text-sm font-semibold"
          value={name}
          onChange={(e) => setName(e.target.value)}
          autoComplete="off"
          autoCorrect="off"
          spellCheck="false"
        />
        <button
          className="border px-4 py-1 rounded-sm text-sm font-semibold"
          type="submit"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
