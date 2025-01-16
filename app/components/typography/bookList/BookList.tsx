import React from "react";

const BookList = ({
  lists,
  color,
  fontWeight,
  fontSize,
  lineHeight,
}: {
  lists: string[];
  color: string;
  fontWeight: string;
  fontSize: string;
  lineHeight: string;
}) => {
  return (
    <ul>
      {lists.map((list, index) => (
        <li
          key={index}
          className={`${color} font-poppins ${fontWeight} ${fontSize} ${lineHeight}`}
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
