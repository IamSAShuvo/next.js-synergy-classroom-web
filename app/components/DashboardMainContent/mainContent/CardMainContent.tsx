import React from "react";
import DescriptionText from "../../typography/DescriptionText";
import ItemList from "../../typography/itemsList/ItemList";
import { Book } from "@/app/constants/constantData";

const CardMainContent: React.FC<{ books: Book[] }> = ({ books }) => (
  <>
    <div className="flex justify-between mt-5">
      <DescriptionText
        text="Book List"
        color="text-primaryColor"
        fontSize="text-sm"
        lineHeight="leading-5"
      />
      <DescriptionText
        text="Author"
        color="text-primaryColor"
        fontSize="text-sm"
        lineHeight="leading-5"
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

export default CardMainContent;
