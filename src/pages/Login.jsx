import { useState } from "react";
import Register from "./Register";
import s1 from "../assets/a3.jpg";
export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showRegister, setShowRegister] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle login logic here
    alert(`Username: ${username}\nPassword: ${password}`);
  };

  if (showRegister) {
    return <Register onClose={() => setShowRegister(false)} />;
  }
  return (
    <div className="flex items-center justify-center bg-transparent">
      <div className="flex bg-gradient-to-br from-black via-gray-900 to-gray-800 rounded-xl shadow-lg min-h-[320px] overflow-hidden">
        {/* Left side image */}
        
        {/* Right side form */}
        <form
          onSubmit={handleSubmit}
          className="flex flex-col items-center justify-center p-6 w-72 min-w-[220px]"
        >
          <div className="flex flex-col items-center mb-4">
            {/* Watch Icon (Heroicons outline) */}
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#f59e42" className="w-10 h-10 mb-2">
              <circle cx="12" cy="12" r="8" stroke="#f59e42" strokeWidth="1.5" fill="none" />
              <rect x="10" y="2" width="4" height="3" rx="1" fill="#f59e42" />
              <rect x="10" y="19" width="4" height="3" rx="1" fill="#f59e42" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 12V8M12 12h4" stroke="#f59e42" />
            </svg>
            <h2 className="text-xl font-bold text-amber-400">Watch Login</h2>
          </div>
          <div className="mb-3 w-full">
            <label className="block mb-1 text-gray-300 text-xs">Username</label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full px-3 py-1.5 border border-gray-700 rounded bg-gray-900 text-white focus:outline-none focus:ring-2 focus:ring-amber-400 text-sm"
              required
            />
          </div>
          <div className="mb-4 w-full">
            <label className="block mb-1 text-gray-300 text-xs">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-3 py-1.5 border border-gray-700 rounded bg-gray-900 text-white focus:outline-none focus:ring-2 focus:ring-amber-400 text-sm"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-amber-500 text-black py-2 rounded font-semibold hover:bg-amber-600 transition text-sm"
          >
            Login
          </button>
          <div className="mt-4 w-full text-center">
            <span className="text-xs text-gray-300">New user?</span>
            <button
              type="button"
              className="ml-1 text-amber-400 hover:underline text-xs font-semibold"
              onClick={() => setShowRegister(true)}
            >
              Sign up
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
