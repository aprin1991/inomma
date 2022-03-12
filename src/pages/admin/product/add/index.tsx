import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { addToProducts } from "redux/actions";
function AddProduct() {
  const dispatch = useDispatch();
  const {
    formState: { errors },
    handleSubmit,
    register,
    reset,
  } = useForm();
  const onSubmit = (data) => {
    const productFormLocalStorage: any = localStorage.getItem("products") ?? [];
    localStorage.setItem(
      "products",
      JSON.stringify([...productFormLocalStorage, data])
    );
    dispatch(addToProducts(data));
    reset();
  };
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="w-full mb-3">
          <input
            type="text"
            {...register("name", {
              required: "Please Enter The Name of Product",
            })}
            placeholder="Name"
            className={`border  ${
              !!errors.name ? "border-red-500" : "border-gray-200"
            } rounded-full w-full py-4 px-6 text-gray-500 leading-tight focus:outline-none shadow-md`}
          />
          <span className="h-3 block pl-6 text-xs text-red-700 mt-1 font-bold">
            {errors?.name?.message}
          </span>
        </div>
        <div className="w-full grid grid-cols-2 gap-2 mb-3">
          <div>
            <input
              type="text"
              {...register("price", {
                required: "Please Enter The Price",
                pattern: {
                  value: /^[0-9]+$/i,
                  message: "you have to enter a number",
                },
              })}
              placeholder="Price"
              className={`border  ${
                !!errors.price ? "border-red-500" : "border-gray-200"
              } rounded-full w-full py-4 px-6 text-gray-500 leading-tight focus:outline-none shadow-md`}
            />
            <span className="h-3 block pl-6 text-xs text-red-700 mt-1 font-bold">
              {errors?.price?.message}
            </span>
          </div>
          <div>
            <input
              type="number"
              {...register("weight", {
                required: "Please Enter The Weight",
                pattern: {
                  value: /^[0-9]+$/i,
                  message: "you have to enter a number",
                },
              })}
              placeholder="Weight"
              className={`border  ${
                !!errors.weight ? "border-red-500" : "border-gray-200"
              } rounded-full w-full py-4 px-6 text-gray-500 leading-tight focus:outline-none shadow-md`}
            />
            <span className="h-3 block pl-6 text-xs text-red-700 mt-1 font-bold">
              {errors?.weight?.message}
            </span>
          </div>
        </div>
        <div className="w-full grid grid-cols-2 gap-2">
          <div>
            <input
              type="date"
              {...register("startDate", {
                required: "Please Enter The Start Date",
              })}
              placeholder="Start Date"
              className={`border  ${
                !!errors.startDate ? "border-red-500" : "border-gray-200"
              } rounded-full w-full py-4 px-6 text-gray-500 leading-tight focus:outline-none shadow-md`}
            />
            <span className="h-3 block pl-6 text-xs text-red-700 mt-1 font-bold">
              {errors?.startDate?.message}
            </span>
          </div>
          <div>
            <input
              type="date"
              {...register("endDate", {
                required: "Please Enter The End Date",
              })}
              placeholder="End Date"
              className={`border  ${
                !!errors.endDate ? "border-red-500" : "border-gray-200"
              } rounded-full w-full py-4 px-6 text-gray-500 leading-tight focus:outline-none shadow-md`}
            />
            <span className="h-3 block pl-6 text-xs text-red-700 mt-1 font-bold">
              {errors?.endDate?.message}
            </span>
          </div>
        </div>
        <div className="p-4">
          <button className="bg-indigo-500 text-white rounded-full p-2 px-6 hover:bg-indigo-400 focus:outline-none flex items-center justify-center">
            <PlusIcon />
            <span>Save </span>
          </button>
        </div>
      </form>
    </div>
  );
}
const PlusIcon = () => {
  return (
    <svg
      className="text-white h-8 w-8"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M12 6v6m0 0v6m0-6h6m-6 0H6"
      />
    </svg>
  );
};
export default AddProduct;
