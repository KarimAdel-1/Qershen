import { useFormik } from 'formik';
import * as Yup from 'yup';
import Loader from '../../ui/Loader';
import { useState } from 'react';

// Validation schema using Yup
const validationSchema = Yup.object({
  email: Yup.string().email('Invalid email address').required('Required'),
  password: Yup.string().required('Required'),
});

const LogIn = () => {
  const [isLoading, setIsLoading] = useState(false);

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      setIsLoading(true);

      setTimeout(() => {
        setIsLoading(false);
      }, 3000);
    },
  });

  if (isLoading) {
    return <Loader />;
  }
  return (
    <div className="flex h-screen bg-white justify-center">
      <div className="w-full lg:w-1/2 flex items-center justify-center p-4">
        <div className="mx-auto w-[400px] p-4">
          {/* Form */}
          <form onSubmit={formik.handleSubmit}>
            <img className="mb-4 w-[140px]" src="/Asset8.png" alt="Logo" />
            <p className="mb-8 text-2xl font-bold">Welcome back</p>
            <div className="mb-3 flex flex-col gap-3">
              <label className="text-sm font-semibold">Email</label>
              <input
                className="text-sm w-full outline-none border-[#22b352] border h-9 px-2 rounded-md focus:border-[#3a9f5c]"
                type="text"
                placeholder="Email@company.com"
                name="email"
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                required
              />
              {formik.touched.email && formik.errors.email ? (
                <div className="text-red-500 text-sm">
                  {formik.errors.email}
                </div>
              ) : null}
            </div>
            <div className="mb-3 flex flex-col gap-3">
              <label className="text-sm font-semibold">Password</label>
              <input
                className="text-sm w-full outline-none border-[#22b352] border h-9 px-2 rounded-md focus:border-[#3a9f5c]"
                type="password"
                placeholder="Password"
                name="password"
                value={formik.values.password}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                required
              />
              {formik.touched.password && formik.errors.password ? (
                <div className="text-red-500 text-sm">
                  {formik.errors.password}
                </div>
              ) : null}
            </div>
            <button
              type="submit"
              className="mt-5 inline-block w-full rounded-md bg-[#22b352] px-4 py-3 text-sm font-semibold tracking-wide text-white outline-none transition-colors duration-300 hover:bg-[#3a9f5c] focus:bg-[#22b352] focus:ring disabled:cursor-not-allowed md:px-6 md:py-3"
            >
              Log in to Qershen
            </button>
          </form>
          <div className="mt-2">
            <a className="text-sm text-[#3a9f5c]">Create new account</a>
          </div>
          <div className="flex flex-col gap-2">
            <div className="my-4 flex items-center gap-1">
              <div className="flex-grow border-t border-gray-200"></div>
              <h1 className="my-5 text-center text-stone-400">
                or continue with
              </h1>
              <div className="flex-grow border-t border-gray-200"></div>
            </div>
            <div className=" flex gap-2 h-16 justify-center items-center">
              <button className="flex w-12 h-12 items-center justify-center rounded-full border text-center text-sm font-semibold tracking-wide text-blue-600 outline-none transition-colors duration-300 disabled:cursor-not-allowed">
                <img src="/icons8-google-96.png" className="w-7"></img>
              </button>
              <button className="flex w-12 h-12 items-center justify-center rounded-full border text-center text-sm font-semibold tracking-wide text-blue-600 outline-none transition-colors duration-300 disabled:cursor-not-allowed">
                <img src="/icons8-facebook-96.png" className="w-9"></img>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="hidden lg:flex lg:h-screen lg:flex-col lg:w-1/2 bg-cover border">
        test
      </div>
    </div>
  );
};

export default LogIn;
