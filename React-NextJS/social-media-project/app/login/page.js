import Link from "next/link";

export default function LoginPage() {
  return (
    <>
      <div className="h-screen w-screen flex justify-center items-center">
        <div className="bg-white shadow-lg rounded-lg p-5 w-1/2 flex flex-col justify-center items-center gap-10">
          <div className="flex flex-col items-center">
            <h1 className="text-5xl mt-5 mb-0 text-secondary font-bold">
              Welcome.
            </h1>
            <span>Sign in to continue.</span>
          </div>

          <div className="flex flex-col gap-3 w-full">
            <input
              className="border px-3 py-2 rounded"
              type="email"
              placeholder="Email"
            />
            <input
              type="password"
              className="border px-3 py-2 rounded"
              placeholder="Password"
            />
            <button className="bg-secondary text-light p-3 rounded">
              Sign In
            </button>
            <div className="flex justify-end my-3">
              <Link className="text-gray-400" href="/register">
                Don`t have an account?{" "}
                <span className="underline">Sign up</span> here.
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
