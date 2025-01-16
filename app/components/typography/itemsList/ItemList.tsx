import React from "react";

const ItemList = ({
  items,
  color,
  fontWeight,
  fontSize,
  lineHeight,
}: {
  items: string[];
  color: string;
  fontWeight: string;
  fontSize: string;
  lineHeight: string;
}) => {
  return (
    <ul>
      {items.map((item, index) => (
        <li
          key={index}
          className={`${color} font-poppins ${fontWeight} ${fontSize} ${lineHeight}`}
        >
          <span className="mr-2 ">
            {item.includes("Book") && `${index + 1}.`}
          </span>{" "}
          {item}
        </li>
      ))}
    </ul>
  );
};

export default ItemList;
