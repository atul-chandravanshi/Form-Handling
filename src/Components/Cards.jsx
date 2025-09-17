import React from "react";
import Card from "./Card.jsx";

function Cards({ users, handleRemove }) {
  return (
    <div className="w-full h-68 max-h-96 overflow-auto flex gap-4 justify-center flex-wrap p-4 rounded-lg">
      {users.map((item, index) => {
        return (
          <Card
            handleRemove={handleRemove}
            id={index}
            user={item}
            key={index}
          />
        );
      })}
    </div>
  );
}

export default Cards;
