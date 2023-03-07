import { Link } from 'react-router-dom';

const Register = () => {
  return (
    <div className="max-w-[400px] block">
      <div className="text-3xl font-bold">Create an account.</div>
      <div className="text-base font-normal text-slate-500 mb-2">
        Please enter your details.
      </div>
      <input
        type="text"
        name="name"
        className="mt-4 border shadow-sm p-2 w-full rounded-md outline-none focus:border-slate-800 placeholder-slate-400"
        placeholder="Full name"
      />
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
      <input
        type="password"
        name="password-confirmation"
        className="mt-4 border shadow-sm p-2 w-full rounded-md outline-none focus:border-slate-800 placeholder-slate-400"
        placeholder="Confirm Password"
      />
      <button className="bg-black text-white w-full py-3 mt-6 mb-2 rounded-md active:bg-slate-900 text-sm font-bold">
        Register
      </button>
      <div className="w-full flex justify-center">
        <Link
          to="/auth/login"
          className="text-base font=normal text-slate-500 mt-2"
        >
          Already have an account?{' '}
          <span className="text-black font-medium">Login</span>
        </Link>
      </div>
    </div>
  );
};

export default Register;
