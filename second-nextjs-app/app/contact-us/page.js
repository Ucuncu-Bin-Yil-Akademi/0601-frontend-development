"use client";
export default function ContactUs() {
  return (
    <>
      <div id="contentArea">
        <div className="w-full">
          <h1 className="text-2xl font-bold p-5">Contact Us</h1>
          <form className="p-5">
            <input
              type="text"
              className="border w-full p-3 rounded mb-5"
              placeholder="Name"
            />
            <input
              type="email"
              className="border w-full p-3 rounded mb-5"
              placeholder="Email"
            />
            <textarea
              className="border w-full p-3 rounded mb-5"
              placeholder="Message"
            ></textarea>
            <button className="bg-gray-600 text-gray-200 px-4 py-2 rounded">
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
