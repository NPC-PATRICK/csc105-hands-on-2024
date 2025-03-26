import React, { useMemo } from "react";
import { z } from "zod";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useNavigate, NavLink } from "react-router-dom";

const LogIn = () => {
  const navigate = useNavigate();
  const userSchema = useMemo(
    () =>
      z.object({
        email: z.string().email("Invalid email address"),
        password: z
          .string()
          .min(6, "Password must be at least 6 characters long"),
      }),
    []
  );

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(userSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = (data) => {
    console.log("Form data:", data);
    navigate("/");
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 shadow-lg rounded-lg w-96 transition-transform transform hover:scale-105 duration-300">
        <h2 className="text-2xl font-bold text-center mb-6 text-gray-700">
          Log In
        </h2>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div>
            <label className="block text-gray-700">Email</label>
            <Controller
              name="email"
              control={control}
              render={({ field }) => (
                <input
                  {...field}
                  type="email"
                  placeholder="Enter your email"
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  aria-invalid={errors.email ? "true" : "false"}
                />
              )}
            />
            {errors.email && (
              <p className="text-red-500 text-sm">{errors.email.message}</p>
            )}
          </div>
          <div>
            <label className="block text-gray-700">Password</label>
            <Controller
              name="password"
              control={control}
              render={({ field }) => (
                <input
                  {...field}
                  type="password"
                  placeholder="Enter your password"
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  aria-invalid={errors.password ? "true" : "false"}
                />
              )}
            />
            {errors.password && (
              <p className="text-red-500 text-sm">{errors.password.message}</p>
            )}
          </div>

          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition"
          >
            Log In
          </button>
        </form>

        <p className="mt-4 text-center text-gray-600">
          Don't have an account?{" "}
          <NavLink to="/signup" className="text-blue-500 hover:underline">
            Sign Up
          </NavLink>
        </p>
      </div>
    </div>
  );
};

export default LogIn;