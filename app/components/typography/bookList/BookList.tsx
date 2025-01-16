import React from "react";

const BookList = ({ lists, color }: { lists: string[]; color: string }) => {
  return (
    <ul>
      {lists.map((list, index) => (
        <li
          key={index}
          className={`${color} font-poppins font-normal text-[10px] leading-[15px]`}
        >
          <span className="mr-2 ">
            {list.includes("Book") && `${index + 1}.`}
          </span>{" "}
          {list}
        </li>
      ))}
    </ul>
  );
};

export default BookList;
