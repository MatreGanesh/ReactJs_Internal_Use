import axios from "axios";
import React, { useEffect, useState } from "react";

export default function Pagination() {
  const [tableData, setTableData] = useState();
  const [currPage, setCurrPage] = useState(1);
  const [rowPerPage, setRowPerPage] = useState(10);
  const indexOfLastItem = currPage * rowPerPage;
  const indexOfFirstItem = indexOfLastItem - rowPerPage;
  const currentItem = tableData?.users?.slice(
    indexOfFirstItem,
    indexOfLastItem
  );
  const totalPages = Math.ceil(tableData?.total / rowPerPage);

  useEffect(() => {
    axios.get("https://dummyjson.com/users?limit=0").then((res) => {
      console.log(res.data.users);
      //   const resp = res?.data.users;
      setTableData(res?.data);
    });
  }, []);

  const handlePrev = () => {
    setCurrPage((prev) => Math.max(prev - 1, 1));
  };

  const handleNext = () => {
    setCurrPage((prev) => Math.min(prev + 1, totalPages));
  };

  const handlePageClick = (pageNum) => {
    setCurrPage(pageNum);
  };

  return (
    <>
      <div className="p-4">
        <table className="border-collapse border border-gray-400 w-full text-left">
          <thead>
            <tr className="bg-gray-200">
              <th className="border border-gray-400 px-4 py-2">Sr. No.</th>
              <th className="border border-gray-400 px-4 py-2">Name</th>
              <th className="border border-gray-400 px-4 py-2">Email</th>
              <th className="border border-gray-400 px-4 py-2">Gender</th>
            </tr>
          </thead>
          <tbody>
            {currentItem?.map((user, index) => (
              <tr key={index} className="hover:bg-gray-100">
                <td className="border border-gray-400 px-4 py-2">
                  {index + 1}
                </td>
                <td className="border border-gray-400 px-4 py-2">
                  {user.firstName}
                  {user.lastName}
                </td>
                <td className="border border-gray-400 px-4 py-2">
                  {user.email}
                </td>
                <td className="border border-gray-400 px-4 py-2">
                  {user.gender}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="flex flex-wrap items-center justify-center gap-2 mt-4">
          <button
            onClick={() => handlePrev}
            disabled={currPage === 1} // disable on first page
            className={`px-3 py-1 border font-semibold rounded hover:bg-gray-200 ${
              currPage === 1 ? "opacity-20 cursor-not-allowed" : ""
            }`}
          >
            Prev
          </button>

          {Array.from({ length: totalPages }, (_, index) => {
            const page = index + 1;
            return (
              <button
                key={index}
                className={`px-3 py-1 border font-semibold rounded hover:bg-gray-200 ${
                  currPage === page
                    ? "bg-blue-500 text-white"
                    : "bg-green-500 text-white"
                }`}
                onClick={() => handlePageClick(index + 1)}
              >
                {index + 1}
              </button>
            );
          })}

          <button
            onClick={handleNext}
            disabled={currPage === totalPages}
            className={`px-3 py-1 border font-semibold rounded hover:bg-gray-200 ${
              currPage === totalPages ? "opacity-20 cursor-not-allowed" : ""
            }`}
          >
            Next
          </button>
        </div>
      </div>
    </>
  );
}
