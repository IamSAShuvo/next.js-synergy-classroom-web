import React, { FC } from "react";
import DescriptionText from "@/app/components/typography/DescriptionText";
import ItemList from "@/app/components/typography/itemsList/ItemList";

interface Book {
  name: string;
  author: string;
}

interface CardContentProps {
  books: Book[];
}

const CardContent: FC<CardContentProps> = ({ books }) => {
  return (
    <>
      <div className="flex justify-between mt-5">
        <DescriptionText
          text="Book List"
          className="text-primaryColor text-sm leading-5"
        />
        <DescriptionText
          text="Author"
          className="text-primaryColor text-sm leading-5"
        />
      </div>
      <div className="flex justify-between mb-6">
        <ItemList
          items={books.map((book) => book.name)}
          className="text-primaryColor font-medium text-ex_sm leading-4"
          useNumber={true}
        />
        <ItemList
          items={books.map((book) => book.author)}
          className="text-secondaryColor font-normal text-ex_sm leading-4"
          useNumber={false}
        />
      </div>
    </>
  );
};

export default CardContent;
