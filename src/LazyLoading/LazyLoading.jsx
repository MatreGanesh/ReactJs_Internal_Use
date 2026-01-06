import React, { Suspense } from "react";
// import LazySample from "./LazySample";

export default function LazyLoading() {
  const LazySample = React.lazy(() => import("./LazySample"));

  return (
    <>
      <div className="space-y-4 px-4">
        <div>
          <p className="text-center text-3xl font-semibold">
            Lazy Loading Component
          </p>
        </div>

        <div>
          <Suspense
            fallback={
              <div className="flex items-center justify-center mt-50">
                <h1 className="text-3xl font-semibold">Loading...</h1>
              </div>
            }
          >
            <LazySample />
          </Suspense>
        </div>
      </div>
    </>
  );
}
