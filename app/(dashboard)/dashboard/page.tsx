import PrimaryButton from "@/app/components/Buttons/PrimaryButton";
import SecondaryCard from "@/app/components/CardComponent/SecondaryCard";
import DescriptionText from "@/app/components/typography/DescriptionText";
import ItemList from "@/app/components/typography/itemsList/ItemList";
import NumberBadge from "@/app/components/typography/NumberBadge";
import SectionHeading from "@/app/components/typography/SectionHeading";
import React from "react";

const page = () => {
  const teacherName = "Mr. John Doe";
  const section = "A";
  const value = 235;
  const bookList = ["Book 01", "Book 02", "Book 03"];
  const authorList = ["Author 01", "Author 02", "Author 03"];
  return (
    <div className="grid grid-cols-3 gap-5 mt-10 ml-6">
      <SecondaryCard
        className="w-[354px] mx-auto bg-white rounded-2xl shadow-lg"
        header={
          <>
            <SectionHeading text="Electrical Circuit 01" fontSize="text-2xl" />
            <DescriptionText
              color="text-white"
              fontSize="text-sm"
              text={`Section - ${section}`}
              lineHeight="leading-5"
            />
            <DescriptionText
              color="text-white"
              fontSize="text-sm"
              text={`Course Teacher - ${teacherName}`}
              lineHeight="leading-5"
            />
          </>
        }
        content={
          <>
            <div className="flex justify-between mt-5">
              <DescriptionText
                text={`Book List`}
                color="text-primaryColor"
                fontSize="text-sm"
                lineHeight="leading-5"
              />
              <DescriptionText
                text={`Author`}
                color="text-primaryColor"
                fontSize="text-sm"
                lineHeight="leading-5"
              />
            </div>
            <div className="flex justify-between mb-6">
              <ItemList
                items={bookList}
                className="text-primaryColor font-medium text-ex_sm leading-4"
                useNumber={true}
              />
              <ItemList
                items={authorList}
                className="text-secondaryColor font-normal text-ex_sm leading-4"
                useNumber={false}
              />
            </div>
          </>
        }
        footer={<NumberBadge count={value} />}
      >
        <PrimaryButton
          text="Enroll"
          className="bg-skyBlue text-xs hover:bg-indigo-600 text-white px-6 py-3 rounded font-medium leading-5"
        />
      </SecondaryCard>
      <SecondaryCard
        className="w-[354px] mx-auto bg-white rounded-2xl shadow-lg"
        header={
          <>
            <SectionHeading text="Electrical Circuit 01" fontSize="text-2xl" />
            <DescriptionText
              color="text-white"
              fontSize="text-sm"
              text={`Section - ${section}`}
              lineHeight="leading-5"
            />
            <DescriptionText
              color="text-white"
              fontSize="text-sm"
              text={`Course Teacher - ${teacherName}`}
              lineHeight="leading-5"
            />
          </>
        }
        content={
          <>
            <div className="flex justify-between mt-5">
              <DescriptionText
                text={`Book List`}
                color="text-primaryColor"
                fontSize="text-sm"
                lineHeight="leading-5"
              />
              <DescriptionText
                text={`Author`}
                color="text-primaryColor"
                fontSize="text-sm"
                lineHeight="leading-5"
              />
            </div>
            <div className="flex justify-between mb-6">
              <ItemList
                items={bookList}
                className="text-primaryColor font-medium text-ex_sm leading-4"
                useNumber={true}
              />
              <ItemList
                items={authorList}
                className="text-secondaryColor font-normal text-ex_sm leading-4"
                useNumber={false}
              />
            </div>
          </>
        }
        footer={<NumberBadge count={value} />}
      >
        <PrimaryButton
          text="Enroll"
          className="bg-skyBlue text-xs hover:bg-indigo-600 text-white px-6 py-3 rounded font-medium leading-5"
        />
      </SecondaryCard>
      <SecondaryCard
        className="w-[354px] mx-auto bg-white rounded-2xl shadow-lg"
        header={
          <>
            <SectionHeading text="Electrical Circuit 01" fontSize="text-2xl" />
            <DescriptionText
              color="text-white"
              fontSize="text-sm"
              text={`Section - ${section}`}
              lineHeight="leading-5"
            />
            <DescriptionText
              color="text-white"
              fontSize="text-sm"
              text={`Course Teacher - ${teacherName}`}
              lineHeight="leading-5"
            />
          </>
        }
        content={
          <>
            <div className="flex justify-between mt-5">
              <DescriptionText
                text={`Book List`}
                color="text-primaryColor"
                fontSize="text-sm"
                lineHeight="leading-5"
              />
              <DescriptionText
                text={`Author`}
                color="text-primaryColor"
                fontSize="text-sm"
                lineHeight="leading-5"
              />
            </div>
            <div className="flex justify-between mb-6">
              <ItemList
                items={bookList}
                className="text-primaryColor font-medium text-ex_sm leading-4"
                useNumber={true}
              />
              <ItemList
                items={authorList}
                className="text-secondaryColor font-normal text-ex_sm leading-4"
                useNumber={false}
              />
            </div>
          </>
        }
        footer={<NumberBadge count={value} />}
      >
        <PrimaryButton
          text="Enroll"
          className="bg-skyBlue text-xs hover:bg-indigo-600 text-white px-6 py-3 rounded font-medium leading-5"
        />
      </SecondaryCard>
      <SecondaryCard
        className="w-[354px] mx-auto bg-white rounded-2xl shadow-lg"
        header={
          <>
            <SectionHeading text="Electrical Circuit 01" fontSize="text-2xl" />
            <DescriptionText
              color="text-white"
              fontSize="text-sm"
              text={`Section - ${section}`}
              lineHeight="leading-5"
            />
            <DescriptionText
              color="text-white"
              fontSize="text-sm"
              text={`Course Teacher - ${teacherName}`}
              lineHeight="leading-5"
            />
          </>
        }
        content={
          <>
            <div className="flex justify-between mt-5">
              <DescriptionText
                text={`Book List`}
                color="text-primaryColor"
                fontSize="text-sm"
                lineHeight="leading-5"
              />
              <DescriptionText
                text={`Author`}
                color="text-primaryColor"
                fontSize="text-sm"
                lineHeight="leading-5"
              />
            </div>
            <div className="flex justify-between mb-6">
              <ItemList
                items={bookList}
                className="text-primaryColor font-medium text-ex_sm leading-4"
                useNumber={true}
              />
              <ItemList
                items={authorList}
                className="text-secondaryColor font-normal text-ex_sm leading-4"
                useNumber={false}
              />
            </div>
          </>
        }
        footer={<NumberBadge count={value} />}
      >
        <PrimaryButton
          text="Enroll"
          className="bg-skyBlue text-xs hover:bg-indigo-600 text-white px-6 py-3 rounded font-medium leading-5"
        />
      </SecondaryCard>
      <SecondaryCard
        className="w-[354px] mx-auto bg-white rounded-2xl shadow-lg"
        header={
          <>
            <SectionHeading text="Electrical Circuit 01" fontSize="text-2xl" />
            <DescriptionText
              color="text-white"
              fontSize="text-sm"
              text={`Section - ${section}`}
              lineHeight="leading-5"
            />
            <DescriptionText
              color="text-white"
              fontSize="text-sm"
              text={`Course Teacher - ${teacherName}`}
              lineHeight="leading-5"
            />
          </>
        }
        content={
          <>
            <div className="flex justify-between mt-5">
              <DescriptionText
                text={`Book List`}
                color="text-primaryColor"
                fontSize="text-sm"
                lineHeight="leading-5"
              />
              <DescriptionText
                text={`Author`}
                color="text-primaryColor"
                fontSize="text-sm"
                lineHeight="leading-5"
              />
            </div>
            <div className="flex justify-between mb-6">
              <ItemList
                items={bookList}
                className="text-primaryColor font-medium text-ex_sm leading-4"
                useNumber={true}
              />
              <ItemList
                items={authorList}
                className="text-secondaryColor font-normal text-ex_sm leading-4"
                useNumber={false}
              />
            </div>
          </>
        }
        footer={<NumberBadge count={value} />}
      >
        <PrimaryButton
          text="Enroll"
          className="bg-skyBlue text-xs hover:bg-indigo-600 text-white px-6 py-3 rounded font-medium leading-5"
        />
      </SecondaryCard>
      <SecondaryCard
        className="w-[354px] mx-auto bg-white rounded-2xl shadow-lg"
        header={
          <>
            <SectionHeading text="Electrical Circuit 01" fontSize="text-2xl" />
            <DescriptionText
              color="text-white"
              fontSize="text-sm"
              text={`Section - ${section}`}
              lineHeight="leading-5"
            />
            <DescriptionText
              color="text-white"
              fontSize="text-sm"
              text={`Course Teacher - ${teacherName}`}
              lineHeight="leading-5"
            />
          </>
        }
        content={
          <>
            <div className="flex justify-between mt-5">
              <DescriptionText
                text={`Book List`}
                color="text-primaryColor"
                fontSize="text-sm"
                lineHeight="leading-5"
              />
              <DescriptionText
                text={`Author`}
                color="text-primaryColor"
                fontSize="text-sm"
                lineHeight="leading-5"
              />
            </div>
            <div className="flex justify-between mb-6">
              <ItemList
                items={bookList}
                className="text-primaryColor font-medium text-ex_sm leading-4"
                useNumber={true}
              />
              <ItemList
                items={authorList}
                className="text-secondaryColor font-normal text-ex_sm leading-4"
                useNumber={false}
              />
            </div>
          </>
        }
        footer={<NumberBadge count={value} />}
      >
        <PrimaryButton
          text="Enroll"
          className="bg-skyBlue text-xs hover:bg-indigo-600 text-white px-6 py-3 rounded font-medium leading-5"
        />
      </SecondaryCard>
      <SecondaryCard
        className="w-[354px] mx-auto bg-white rounded-2xl shadow-lg"
        header={
          <>
            <SectionHeading text="Electrical Circuit 01" fontSize="text-2xl" />
            <DescriptionText
              color="text-white"
              fontSize="text-sm"
              text={`Section - ${section}`}
              lineHeight="leading-5"
            />
            <DescriptionText
              color="text-white"
              fontSize="text-sm"
              text={`Course Teacher - ${teacherName}`}
              lineHeight="leading-5"
            />
          </>
        }
        content={
          <>
            <div className="flex justify-between mt-5">
              <DescriptionText
                text={`Book List`}
                color="text-primaryColor"
                fontSize="text-sm"
                lineHeight="leading-5"
              />
              <DescriptionText
                text={`Author`}
                color="text-primaryColor"
                fontSize="text-sm"
                lineHeight="leading-5"
              />
            </div>
            <div className="flex justify-between mb-6">
              <ItemList
                items={bookList}
                className="text-primaryColor font-medium text-ex_sm leading-4"
                useNumber={true}
              />
              <ItemList
                items={authorList}
                className="text-secondaryColor font-normal text-ex_sm leading-4"
                useNumber={false}
              />
            </div>
          </>
        }
        footer={<NumberBadge count={value} />}
      >
        <PrimaryButton
          text="Enroll"
          className="bg-skyBlue text-xs hover:bg-indigo-600 text-white px-6 py-3 rounded font-medium leading-5"
        />
      </SecondaryCard>
    </div>
  );
};

export default page;
