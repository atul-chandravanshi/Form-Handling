import React from "react";

function Card({ user, handleRemove, id }) {
  return (
    <div className="w-48 h-full rounded-md bg-red-100 flex flex-col items-center">
      <div className="image w-15 h-15 rounded-full bg-zinc-300 overflow-hidden">
        <img className="w-full h-full object-cover" src={user.image} alt="" />
      </div>

      <h1 className="mt-1 font-semibold text-xl">{user.name}</h1>
      <h4 className="opacity-40 text-xs font-semibold">{user.email}</h4>
      <p className="mt-2 pb-3 text-center text-xs font-semibold tracking-tight">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel volu
      </p>
      <button
        onClick={() => handleRemove(id)}
        className="px-3 py-1 mb-2 bg-red-300 rounded-md font-semibold text-xs text-white"
      >
        Remove it
      </button>
    </div>
  );
}

export default Card;
