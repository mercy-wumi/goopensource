"use client";

export default function Filter() {
  return (
    <div className="border-b pb-6 border-gray-600 flex">
      <div className="py-2 px-4 border rounded-lg ">
        <span>Filter</span>
      </div>
      <div className="py-2 px-4 border rounded-lg md:min-w-[300px] ml-4">
        <input
          type="text"
          placeholder="Search"
          className="outline-none w-full bg-transparent"
        />
      </div>
    </div>
  );
}
