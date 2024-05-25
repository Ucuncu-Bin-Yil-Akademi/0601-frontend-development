import Link from "next/link";

export default function RegisterPage() {
  return (
    <>
      <div className="h-screen w-screen flex justify-center items-center">
        <div className="bg-white shadow-lg rounded-lg p-5 w-1/2 flex flex-col justify-center items-center gap-10">
          <div className="flex flex-col items-center">
            <h1 className="text-5xl mt-5 mb-0 text-secondary font-bold">
              Welcome.
            </h1>
            <span>Create a new account.</span>
          </div>

          <div className="flex flex-col gap-3 w-full">
            <div className="flex w-full gap-3">
              <input
                className="border px-3 py-2 rounded w-full"
                type="email"
                placeholder="Email"
              />
              <input
                className="border px-3 py-2 rounded w-full"
                type="text"
                placeholder="Username"
              />
            </div>
            <div className="flex w-full gap-3">
              <input
                className="border px-3 py-2 rounded w-full"
                type="text"
                placeholder="First Name"
              />
              <input
                className="border px-3 py-2 rounded w-full"
                type="text"
                placeholder="Last Name"
              />
            </div>
            <textarea
              className="border px-3 py-2 rounded resize-none"
              placeholder="Bio"
            />
            <input
              type="password"
              className="border px-3 py-2 rounded"
              placeholder="Password"
            />
            <input
              type="password"
              className="border px-3 py-2 rounded"
              placeholder="Re-type your Password"
            />
            <button className="bg-secondary text-light p-3 rounded">
              Register
            </button>
            <div className="flex justify-end my-3">
              <Link className="text-gray-400" href="/login">
                Already have an account?{" "}
                <span className="underline">Sign in</span> here.
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
