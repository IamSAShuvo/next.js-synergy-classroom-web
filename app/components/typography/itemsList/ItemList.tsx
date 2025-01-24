import React, { FC } from "react";

interface ItemListProps {
  items: string[];
  className?: string;
}

const ItemList: FC<ItemListProps> = ({ items, className = "" }) => {
  return (
    <div>
      <ul>
        {items.map((item, index) => (
          <li key={index} className={className}>
            <span className="mr-2">
              {item.includes("Book") && `${index + 1}.`}
            </span>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ItemList;
