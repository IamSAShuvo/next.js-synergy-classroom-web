import React, { FC } from "react";

interface ItemListProps {
  items: string[];
  className?: string;
  useNumber: boolean;
}

const ItemList: FC<ItemListProps> = ({
  items,
  className = "",
  useNumber = false,
}) => {
  return (
    <div>
      <ul>
        {items.map((item, index) => (
          <li key={index} className={className}>
            <span className="mr-2">{useNumber && `${index + 1}`}</span>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ItemList;
