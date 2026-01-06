import React, { memo } from "react";

function ChildComp({ Learning, add }) {
  console.log("Child Component");
  console.log(Learning);
  //   console.log(add);

  return (
    <div>
      <h1 className="font-semibold text-xl">Child Comp</h1>
    </div>
  );
}

export default memo(ChildComp);
