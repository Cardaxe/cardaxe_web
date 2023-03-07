import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <div className="max-w-[400px] block">
      <div className="text-3xl font-bold">Welcome back!</div>
      <div className="text-base font-normal text-slate-500 mb-2">
        Please enter your details.
      </div>
      <input
        type="email"
        name="email"
        className="mt-4 border shadow-sm p-2 w-full rounded-md outline-none focus:border-slate-800 placeholder-slate-400"
        placeholder="Email"
      />
      <input
        type="password"
        name="password"
        className="mt-4 border shadow-sm p-2 w-full rounded-md outline-none focus:border-slate-800 placeholder-slate-400"
        placeholder="Password"
      />
      <div className="flex flex-row justify-between my-4">
        <div className="flex flex-row items-center">
          <input
            type="checkbox"
            id="rememberFor"
            className="checked:bg-blue-500"
          />
          <label htmlFor="rememberFor" className="ml-1 text-sm font-normal">
            Remember for 30 days
          </label>
        </div>
        <a href="#" className="text-base font=normal underline">
          Forgot Password?
        </a>
      </div>
      <button className="bg-black text-white w-full py-3 my-2 rounded-md active:bg-slate-900 text-sm font-bold">
        Log in
      </button>
      <div className="w-full flex justify-center">
        <Link
          to="/auth/register"
          className="text-base font=normal text-slate-500 mt-2"
        >
          Don&apos;t have an account?{' '}
          <span className="text-black font-medium">Register now</span>
        </Link>
      </div>
    </div>
  );
};

export default Login;
