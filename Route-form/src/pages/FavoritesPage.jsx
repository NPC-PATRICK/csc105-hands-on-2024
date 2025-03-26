import React, { useMemo } from "react";
import { z } from "zod";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useNavigate } from "react-router-dom";

const Favourite = () => {
  const navigate = useNavigate();
  const favDt = useMemo(
    () =>
      z.object({
        num: z.coerce
          .number()
          .min(1, "A number must be between 1 and 100")
          .max(100),
        fav: z.enum(["love", "like"], {
          errorMap: () => ({ message: "Select either 'love' or 'like'" }),
        }),
        size: z.enum(["small", "medium", "large"], {
          errorMap: () => ({ message: "Select a valid size" }),
        }),
      }),
    []
  );

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(favDt),
    defaultValues: {
      num: "",
      fav: "",
      size: "",
    },
  });

  const onSubmit = (data) => {
    navigate(`/fav/${data.num}?q=${data.fav}&size=${data.size}`);
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-lg rounded-lg p-8 w-96">
        <h2 className="text-2xl font-bold text-center mb-6">Favourites Page</h2>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div>
            <label className="block font-semibold">Number:</label>
            <Controller
              name="num"
              control={control}
              render={({ field }) => (
                <input
                  {...field}
                  type="number"
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter a number"
                />
              )}
            />
            {errors.num && (
              <p className="text-red-500 text-sm">{errors.num.message}</p>
            )}
          </div>
          <div>
            <label className="block font-semibold">Q:</label>
            <Controller
              name="fav"
              control={control}
              render={({ field }) => (
                <select
                  {...field}
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="" disabled>
                    Select
                  </option>
                  <option value="love">Love</option>
                  <option value="like">Like</option>
                </select>
              )}
            />
            {errors.fav && (
              <p className="text-red-500 text-sm">{errors.fav.message}</p>
            )}
          </div>
          <div>
            <label className="block font-semibold">Size:</label>
            <Controller
              name="size"
              control={control}
              render={({ field }) => (
                <select
                  {...field}
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="" disabled>
                    Select
                  </option>
                  <option value="small">Small</option>
                  <option value="medium">Medium</option>
                  <option value="large">Large</option>
                </select>
              )}
            />
            {errors.size && (
              <p className="text-red-500 text-sm">{errors.size.message}</p>
            )}
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Favourite;