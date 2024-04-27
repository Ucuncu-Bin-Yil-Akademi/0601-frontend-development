"use client";
export default function Header() {
  return (
    <div
      id="header"
      className="w-full bg-gray-200 p-5 flex justify-between items-center"
    >
      <a href="/">
        <h1 className="text-2xl font-bold">Your Company</h1>
      </a>
      <input
        type="text"
        className="border w-1/4 p-3 rounded"
        placeholder="Search..."
      />
      <a
        href="/contact-us"
        className="bg-gray-600 text-gray-200 px-4 py-2 rounded"
      >
        Contact Us
      </a>
    </div>
  );
}
