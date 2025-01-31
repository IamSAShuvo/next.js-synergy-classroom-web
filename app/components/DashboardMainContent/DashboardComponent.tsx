"use client";
import React from "react";
import { useRouter } from "next/navigation";
import SecondaryCard from "../CardComponent/SecondaryCard";
import SectionHeading from "../typography/SectionHeading";
import DescriptionText from "../typography/DescriptionText";
import ItemList from "../typography/itemsList/ItemList";
import NumberBadge from "../typography/NumberBadge";
import PrimaryButton from "../Buttons/PrimaryButton";

const DashboardComponent = () => {
  const teacherName = "Mr. John Doe";
  const section = "A";
  const value = 235;
  const bookList = ["Book 01", "Book 02", "Book 03"];
  const authorList = ["Author 01", "Author 02", "Author 03"];
  const router = useRouter();

  const handleCardClick = () => {
    const queryParams = new URLSearchParams({
      teacherName,
      section,
      value: value.toString(),
      bookList: bookList.join(","),
      authorList: authorList.join(","),
    }).toString();

    router.push(`/dashboard/course-details?${queryParams}`);
  };

  return (
    <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-5">
      <SecondaryCard
        onClick={handleCardClick}
        className="w-full mx-auto bg-white rounded-2xl shadow-lg"
        header={
          <>
            <SectionHeading
              text="Electrical Circuit 01"
              className="font-medium text-2xl leading-9 text-white mb-8"
            />
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
        onClick={() => router.push("/dashboard/course-details")}
        className="w-full mx-auto bg-white rounded-2xl shadow-lg"
        header={
          <>
            <SectionHeading
              text="Electrical Circuit 01"
              className="font-medium text-2xl leading-9 text-white mb-8"
            />
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
        onClick={() => router.push("/dashboard/course-details")}
        className="w-full mx-auto bg-white rounded-2xl shadow-lg"
        header={
          <>
            <SectionHeading
              text="Electrical Circuit 01"
              className="font-medium text-2xl leading-9 text-white mb-8"
            />
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
        onClick={() => router.push("/dashboard/course-details")}
        className="w-full mx-auto bg-white rounded-2xl shadow-lg"
        header={
          <>
            <SectionHeading
              text="Electrical Circuit 01"
              className="font-medium text-2xl leading-9 text-white mb-8"
            />
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
        onClick={() => router.push("/dashboard/course-details")}
        className="w-full mx-auto bg-white rounded-2xl shadow-lg"
        header={
          <>
            <SectionHeading
              text="Electrical Circuit 01"
              className="font-medium text-2xl leading-9 text-white mb-8"
            />
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
        onClick={() => router.push("/dashboard/course-details")}
        className="w-full mx-auto bg-white rounded-2xl shadow-lg"
        header={
          <>
            <SectionHeading
              text="Electrical Circuit 01"
              className="font-medium text-2xl leading-9 text-white mb-8"
            />
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
        onClick={() => router.push("/dashboard/course-details")}
        className="w-full mx-auto bg-white rounded-2xl shadow-lg"
        header={
          <>
            <SectionHeading
              text="Electrical Circuit 01"
              className="font-medium text-2xl leading-9 text-white mb-8"
            />
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
        onClick={() => router.push("/dashboard/course-details")}
        className="w-full mx-auto bg-white rounded-2xl shadow-lg"
        header={
          <>
            <SectionHeading
              text="Electrical Circuit 01"
              className="font-medium text-2xl leading-9 text-white mb-8"
            />
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
        onClick={() => router.push("/dashboard/course-details")}
        className="w-full mx-auto bg-white rounded-2xl shadow-lg"
        header={
          <>
            <SectionHeading
              text="Electrical Circuit 01"
              className="font-medium text-2xl leading-9 text-white mb-8"
            />
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
        onClick={() => router.push("/dashboard/course-details")}
        className="w-full mx-auto bg-white rounded-2xl shadow-lg"
        header={
          <>
            <SectionHeading
              text="Electrical Circuit 01"
              className="font-medium text-2xl leading-9 text-white mb-8"
            />
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

export default DashboardComponent;
