"use client";
import DescriptionText from "./components/typography/DescriptionText";
import PrimaryHeading from "./components/typography/PrimaryHeading";
import SectionHeading from "./components/typography/SectionHeading";
import NumberBadge from "./components/typography/NumberBadge";
import ItemList from "./components/typography/itemsList/ItemList";
import SecondaryHeading from "./components/typography/SecondaryHeading";
import RowRadioButtonsGroup from "./components/Buttons/RadioButtons";
import SidebarMenuButton from "./components/Buttons/SidebarMenuButton";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import HomeIcon from "@mui/icons-material/Home";
import LogoutRoundedIcon from "@mui/icons-material/LogoutRounded";
import PrimaryButton from "./components/Buttons/PrimaryButton";
import LinkText from "./components/links/LinkText";
import CustomSelectField from "./components/inputFields/CustomSelectField";
import PrimaryInputField from "./components/inputFields/PrimaryInputField";
import SecondaryProfile from "./components/UserProfile/SecondaryProfile";
import PrimaryProfile from "./components/UserProfile/PrimaryProfile";
import { ChangeEvent, useState } from "react";
import { classroomData } from "./constants/classroomData";
import PrimaryCard from "./components/CardComponent/PrimaryCard";
import SecondaryCard from "./components/CardComponent/SecondaryCard";

export default function Home() {
  const [selectedRole, setSelectedRole] = useState<string>(
    classroomData.roles[0]
  );
  const handleRoleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSelectedRole(event.target.value);
  };

  return (
    <div className="mx-10 my-5">
      <h1 className="tracking-normal leading-5">Home</h1>
      <p>Welcome to the Synergy Classroom</p>
      <PrimaryHeading text="Login" />
      <PrimaryHeading text="Sign Up" />
      <DescriptionText
        text="Enter your details below & free sign up"
        color="text-secondaryColor"
        fontSize="text-sm"
        lineHeight="leading-6"
      />
      <DescriptionText
        text="Forgot Password?"
        color="text-secondaryColor"
        fontSize="text-sm"
        lineHeight="leading-5"
        letterSpacing="tracking-[0.48px]"
      />
      <DescriptionText
        text="Don't have an account?"
        color="text-secondaryColor"
        fontSize="text-sm"
        lineHeight="leading-6"
      >
        <LinkText url="/signup" text="Sign Up" />
      </DescriptionText>
      <DescriptionText
        text="Don't have an account?"
        color="text-secondaryColor"
        fontSize="text-sm"
        lineHeight="leading-5"
      >
        <LinkText url="/login" text="Login" />
      </DescriptionText>

      <div className="flex flex-col items-center justify-center m-14 p-6 space-y-8">
        <PrimaryCard
          className="max-w-lg mx-auto bg-white rounded-2xl shadow-lg p-8"
          header={
            <>
              <PrimaryHeading text="Login" />
              <DescriptionText
                text="Welcome back! Enter your details to proceed."
                color="text-secondaryColor"
                fontSize="text-sm"
                lineHeight="leading-6"
              />
            </>
          }
          content={
            <>
              <PrimaryInputField
                label="Username"
                placeholder="Enter Your UserName"
                variant="outlined"
              />
              <PrimaryInputField
                label="Password"
                isPassword
                variant="outlined"
              />
            </>
          }
          aside={
            <DescriptionText
              text="Forgot Password?"
              color="text-secondaryColor"
              fontSize="text-sm"
              lineHeight="leading-5"
              letterSpacing="tracking-wider"
            />
          }
          footer={
            <DescriptionText
              text="Don't have an account?"
              color="text-secondaryColor"
              fontSize="text-sm"
              lineHeight="leading-6"
            >
              <LinkText url="/signup" text="Sign Up" />
            </DescriptionText>
          }
        >
          <PrimaryButton
            text="Log In"
            className="w-full hover:bg-indigo-600 bg-skyBlue px-7 py-3 rounded text-white font-medium text-base leading-6"
          />
        </PrimaryCard>

        <PrimaryCard
          className="max-w-lg mx-auto bg-white rounded-2xl shadow-lg p-8"
          header={
            <>
              <PrimaryHeading text="Sign Up" />
              <DescriptionText
                text="Enter your details below & free sign up"
                color="text-secondaryColor"
                fontSize="text-sm"
                lineHeight="leading-6"
              />
            </>
          }
          content={
            <>
              <PrimaryInputField
                label="Username"
                placeholder="Enter Your UserName"
                variant="outlined"
              />
              <PrimaryInputField
                label="Name"
                placeholder="Enter Your Name"
                variant="outlined"
              />
              <PrimaryInputField
                label="Password"
                isPassword
                variant="outlined"
              />
              <PrimaryInputField
                label="Email"
                placeholder="Please Provide Your Email"
                variant="outlined"
              />
              <div>
                <RowRadioButtonsGroup />
              </div>
            </>
          }
          footer={
            <DescriptionText
              text="Already have an account?"
              color="text-secondaryColor"
              fontSize="text-sm"
              lineHeight="leading-6"
            >
              <LinkText url="/login" text="Login" />
            </DescriptionText>
          }
        >
          <PrimaryButton
            text="Sign Up"
            className="w-full hover:bg-indigo-600 bg-skyBlue px-7 py-3 rounded text-white font-medium text-base leading-6"
          />
        </PrimaryCard>
        <SecondaryCard
          className="w-[354px] mx-auto bg-white rounded-2xl shadow-lg"
          header={
            <>
              <SectionHeading
                text="Electrical Circuit 01"
                fontSize="text-2xl"
              />
              <DescriptionText
                color="text-white"
                fontSize="text-sm"
                text={`Section - ${classroomData.section}`}
                lineHeight="leading-5"
              />
              <DescriptionText
                color="text-white"
                fontSize="text-sm"
                text={`Course Teacher - ${classroomData.teacherName}`}
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
                  items={classroomData.books.map((book) => book.title)}
                  className="text-primaryColor font-medium text-ex_sm leading-4"
                  useNumber={true}
                />
                <ItemList
                  items={classroomData.books.map((book) => book.author)}
                  className="text-secondaryColor font-normal text-ex_sm leading-4"
                  useNumber={false}
                />
              </div>
            </>
          }
          footer={<NumberBadge count={classroomData.value} />}
        >
          <PrimaryButton
            text="Enroll"
            className="bg-skyBlue text-xs hover:bg-indigo-600 text-white px-6 py-3 rounded font-medium leading-5"
          />
        </SecondaryCard>
      </div>

      <div className="flex flex-col border-4 border-gray-800 p-4 w-2/4 space-y-5 mt-4">
        <SecondaryProfile
          name="Salman Aziz"
          avatarSrc="/profile_avatar.png"
          avatarHeight={60}
          avatarWidth={60}
          className="flex items-center gap-3 text-xl font-normal leading-5 text-midnightBlack"
        />
        <hr className="border-slate-800" />
        <SecondaryProfile
          name="Alexandra Alison"
          avatarSrc="/femaleAvatars.png"
          className="flex items-center gap-3 text-base font-medium leading-5 text-midnightBlack"
        />
        <hr className="border-slate-800" />
        <SecondaryProfile
          placeOrder="order-1"
          avatarSrc="/profile_avatar.jpeg"
          name="Salman Aziz"
          avatarHeight={50}
          avatarWidth={50}
          className="flex items-center gap-8 text-lg font-medium leading-5 text-midnightBlack"
        />
        <hr className="border-slate-800" />
        <PrimaryProfile
          name="Eduardo V. Kozak"
          avatarSrc="/maleAvatar.png"
          className="flex flex-col items-center gap-7"
        />
      </div>

      <div className="bg-zinc-500 w-96 rounded-lg p-4 mt-4">
        <div>
          <SectionHeading text="Electrical Circuit 01" fontSize="text-2xl" />
          <DescriptionText
            color="text-white"
            fontSize="text-sm"
            text={`Section - ${classroomData.section}`}
            lineHeight="leading-5"
          />
          <DescriptionText
            color="text-white"
            fontSize="text-sm"
            text={`Course Teacher - ${classroomData.teacherName}`}
            lineHeight="leading-5"
          />
        </div>
        <div className="bg-white ">
          <div className="flex justify-between mt-4">
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
          <div className="flex justify-between mt-2 mb-4">
            <ItemList
              items={classroomData.books.map((book) => book.title)}
              className="text-primaryColor font-medium text-ex_sm leading-4"
              useNumber={true}
            />
            <ItemList
              items={classroomData.books.map((book) => book.author)}
              className="text-secondaryColor font-normal text-ex_sm leading-4"
              useNumber={false}
            />
          </div>
        </div>
        <hr />
        <NumberBadge count={classroomData.value} />
      </div>

      <div className="bg-zinc-500 w-10/12 rounded-lg p-4 mt-4">
        <div className="space-y-3">
          <SectionHeading text="Electrical Circuit 01" fontSize="text-[40px]" />
          <DescriptionText
            text={`Course Teacher - ${classroomData.teacherName}`}
            fontSize="text-2xl"
            color="text-white"
            lineHeight="leading-5"
          />
        </div>
        <div className="mt-8 bg-white space-y-5">
          <DescriptionText
            text="Book List"
            color="text-steelBlue"
            fontSize="text-xl"
            lineHeight="leading-5"
          />
          <ItemList
            items={classroomData.books.map((book) => book.title)}
            className="text-secondaryColor font-normal text-base leading-5"
            useNumber={true}
          />
        </div>
        <div className="mt-8 bg-white space-y-5">
          <DescriptionText
            text="Uploaded file"
            color="text-steelBlue"
            fontSize="text-xl"
            lineHeight="leading-5"
          />
        </div>
      </div>

      <div className="bg-zinc-500 w-10/12 rounded-lg p-4 mt-4">
        <div className="space-y-3">
          <SectionHeading text="Electrical Circuit 01" fontSize="text-[40px]" />
          <DescriptionText
            text={`Course Teacher - ${classroomData.teacherName}`}
            fontSize="text-2xl"
            color="text-white"
            lineHeight="leading-5"
          />
        </div>
        <div className="mt-8 bg-white space-y-5">
          <DescriptionText
            text="Book List"
            color="text-steelBlue"
            fontSize="text-xl"
            lineHeight="leading-5"
          />
          <ItemList
            items={classroomData.books.map((book) => book.title)}
            className="text-secondaryColor font-normal text-base leading-5"
            useNumber={true}
          />
        </div>
        <div className="mt-8 bg-white space-y-5">
          <SecondaryHeading text="Create Course" />
        </div>
      </div>
      <div className="mt-6 mb-6 flex flex-col gap-4">
        <PrimaryButton
          text="Log In"
          className="hover:bg-indigo-600 bg-skyBlue px-7 py-3 rounded text-white font-medium text-base leading-6"
        />
        <PrimaryButton
          text="Sign Up"
          className="hover:bg-indigo-600 bg-skyBlue px-7 py-3 rounded text-white font-medium text-base leading-6"
        />
        <PrimaryButton
          text="Create"
          className="text-white hover:bg-indigo-600 bg-skyBlue text-xl px-6 py-3 rounded font-medium leading-5"
        />

        <PrimaryButton
          text="Save"
          className="text-white hover:bg-indigo-600 bg-skyBlue text-xl px-6 py-3 rounded font-medium leading-5"
        />
        <PrimaryButton
          text="Cancel"
          className="text-ashGray hover:bg-gray-100 bg-white/[0.12] text-xl px-6 py-3 rounded font-medium leading-5"
          borderColor="border-ashGray"
        />
        <SidebarMenuButton
          icon={HomeIcon}
          text="Home"
          trailingIcon={ChevronRightIcon}
          className="bg-skyBlue hover:bg-indigo-600 text-white px-7 py-5 rounded-full font-medium text-sm leading-3 flex justify-between"
        />
        <SidebarMenuButton
          icon={LogoutRoundedIcon}
          text="Log out"
          className="text-cosmicBlue hover:border-2 border-cosmicBlue px-7 py-5 rounded-full font-medium text-sm leading-3 flex justify-between"
        />
      </div>
      <div className="mt-8 flex flex-col items-center space-y-5">
        <div className="flex flex-col items-center gap-6 border-4 border-dashed border-gray-300 w-full lg:p-8 md:p-8 p-8">
          <PrimaryInputField
            label="Password"
            isPassword
            placeholder="Put your Password"
          />
          <PrimaryInputField
            label="username"
            placeholder="Enter your username"
          />
          <PrimaryInputField
            label="Book Name"
            hasExpandableFields
            placeholder="Add your book name"
            variant="standard"
          />
        </div>

        <PrimaryInputField
          label="Username"
          placeholder="Enter Your UserName"
          variant="outlined"
        />
        <PrimaryInputField
          label="Course Name"
          placeholder="Enter Your Course Name"
          variant="filled"
        />
        <CustomSelectField value={selectedRole} onChange={handleRoleChange} />
      </div>
    </div>
  );
}
