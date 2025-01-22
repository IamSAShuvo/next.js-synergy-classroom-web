import React, { FC } from "react";

interface ItemListProps {
  items: string[];
  color: string;
  fontWeight: string;
  fontSize: string;
  lineHeight: string;
}

const ItemList: FC<ItemListProps> = ({
  items,
  color,
  fontWeight,
  fontSize,
  lineHeight,
}) => {
  return (
    <ul>
      {items.map((item, index) => (
        <li
          key={index}
          className={`${color} ${fontWeight} ${fontSize} ${lineHeight}`}
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
