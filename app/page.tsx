import Link from "next/link";

const Home = () => {
  return (
    <nav className="flex items-center justify-between p-5 bg-gray-100 shadow-md">
      <h1 className="text-2xl font-bold">Yumm AI</h1>

      <div className="flex gap-4">
        <Link
          href="/auth/login"
          className="px-4 py-2  text-black rounded hover:bg-blue-200 transition"
        >
          Login
        </Link>

        <Link
          href="/auth/signup"
          className="px-4 py-2  text-black rounded hover:bg-green-200 transition"
        >
          Signup
        </Link>
      </div>
    </nav>
  );
};

export default Home;
