import React from "react";

export default function Hoisting() {
  //   console.log(a); // undefined
  //  var a = 5;

  //   var b;
  //   console.log(b); // undefined
  //   b = 5;

  //   console.log(x); // ❌ ReferenceError
  //   let x = 10;

  sayHi(); // ✅ Works
  function sayHi() {
    console.log("Hi!");
  }

  //   sayHello(); // ❌ TypeError: sayHello is not a function
  //   var sayHello = function () {
  //     console.log("Hello");
  //   };

  return (
    <div className="space-y-2">
      <p className="w-[700px]">
        Hoisting is a JavaScript behavior where variable and function
        declarations are moved to the top of their scope before the code runs.
        This means you can use functions and variables before they are declared
        — but only under certain rules.
      </p>
      <p> Moves declarations to the top</p> <p> But not their assignments</p>
    </div>
  );
}
