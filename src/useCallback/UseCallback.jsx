import React, { useCallback, useState } from "react";
import ChildComp from "./ChildComp/ChildComp";

export default function UseCallback() {
  const [count, setCount] = useState(0);
  const [add, setAdd] = useState(0);

  const Learning = useCallback(() => {
    //Some Operation
    // console.log("useCallback");
  }, [count]);

  return (
    <div className="flex items-start justify-center h-screen">
      <div className="text-center space-y-5">
        <h1 className="text-xl font-semibold">Example of Use Callback</h1>

        <div className="space-y-2">
          <button
            onClick={() => setCount((prev) => prev + 1)}
            className="px-6 py-1 border border-green-800 bg-green-500 rounded-md cursor-pointer text-white font-semibold"
          >
            Increment
          </button>
          <h1 className="text-xl font-semibold">{count}</h1>
          <button
            onClick={() =>
              setCount((prev) => {
                if (prev >= 1) {
                  return prev - 1;
                } else {
                  alert("You reach the limit");
                  return prev;
                }
              })
            }
            className="px-6 py-1 border border-green-800 bg-green-500 rounded-md cursor-pointer text-white font-semibold"
          >
            Decrement
          </button>

          <ChildComp Learning={Learning} add={add} />
          <button
            onClick={() => setAdd((prev) => prev + 1)}
            className="px-6 py-1 border border-green-800 bg-green-500 rounded-md cursor-pointer text-white font-semibold"
          >
            Increment
          </button>
          <h1 className="text-xl font-semibold">{add}</h1>
        </div>
      </div>
    </div>
  );
}
