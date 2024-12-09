import React from "react";

export default function Form() {
  return (
    <div className="">
      <form className="flex gap-4 items-start">
        <div className="flex flex-col gap-2">
          <input
            type="text"
            className="bg-gray-100 rounded-md outline-none p-2 text-xl"
          />

          <select
            name="category"
            className="bg-gray-100 rounded-md outline-none p-2 text-xl"
          >
            <option value="1" className="">
              Income
            </option>
            <option value="2">Expense</option>
          </select>
        </div>
        <button className="bg-blue-500 rounded-md p-2 text-white">Add</button>
      </form>
    </div>
  );
}
