import React from "react";
import { useForm } from "react-hook-form";

function Form({ handleFormSubmitData }) {
  const { register, handleSubmit, reset } = useForm();

  // local function alag naam rakha taki clash na ho
  const onSubmit = (data) => {
    handleFormSubmitData(data);
    reset();
  };

  return (
    <div className="mt-10 flex justify-center">
      <form className="flex gap-5" onSubmit={handleSubmit(onSubmit)} action="">
        <input
          {...register("name")}
          className="rounded-md bg-zinc-200 font-semibold outline-none px-2"
          type="text"
          placeholder="name"
        />

        <input
          {...register("email")}
          className="rounded-md bg-zinc-200 font-semibold outline-none px-2"
          type="email"
          placeholder="email"
        />

        <input
          {...register("image")}
          className="rounded-md bg-zinc-200 font-semibold outline-none px-2"
          type="text"
          placeholder="image url"
        />

        <input
          className="px-3 py-1 rounded-md bg-blue-500 text-white font-semibold"
          type="submit"
          value="Add User"
        />
      </form>
    </div>
  );
}

export default Form;
