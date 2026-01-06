import React, { useState } from "react";
import LiftingChildCom from "./LiftingChildCom/LiftingChildCom";

export default function LiftingStateUp() {
  const [data, setName] = useState(" ");
  function getData(data) {
    console.log(data);
    setName(data);
  }

  return (
    <>
      <div className="flex justify-center h-screen">
        <div className="space-y-4">
          <h1>LiftingStateUp</h1>
          <LiftingChildCom getData={getData} />
          {data}
        </div>
      </div>
    </>
  );
}
