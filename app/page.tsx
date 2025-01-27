// export default function Home() {}
"use client";
import DescriptionText from "./components/typography/DescriptionText";
import PrimaryHeading from "./components/typography/PrimaryHeading";
import SectionHeading from "./components/typography/SectionHeading";
import NumberBadge from "./components/typography/NumberBadge";
import ItemList from "./components/typography/itemsList/ItemList";
import SecondaryHeading from "./components/typography/SecondaryHeading";
import RowRadioButtonsGroup from "./components/Buttons/RadioButtons";
import SidebarMenuButton from "./components/Buttons/SidebarMenuButton";
import InputTextFieldWithVariant from "./components/inputFields/InputTextFieldWithVariant";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import HomeIcon from "@mui/icons-material/Home";
import LogoutRoundedIcon from "@mui/icons-material/LogoutRounded";
import PrimaryButton from "./components/Buttons/PrimaryButton";
import LinkText from "./components/links/LinkText";
import InputTextFieldWithExpandable from "./components/inputFields/InputTextFieldWithExpandable";
import InputPasswordField from "./components/inputFields/InputPasswordField";
import SelectOptionTextField from "./components/inputFields/SelectOptionTextField";
import CardProfile from "./components/UserProfile/CardProfile";
import NavBarProfile from "./components/UserProfile/NavBarProfile";
import UserProfile from "./components/UserProfile/UserProfile";

export default function Home() {
  const teacherName = "Mr. John Doe";
  const section = "A";
  const value = 235;
  const bookList = ["Book 01", "Book 02", "Book 03"];
  const authorList = ["Author 01", "Author 02", "Author 03"];
  const role = ["Software Engineer", "Frontend Developer", "Backend Developer"];
  return (
    <div className="mx-10 my-5">
      <h1 className="tracking-normal leading-5">Home</h1>
      <p>Welcome to the Synergy Classroom</p>
      {/* Login and Sign up page */}
      <PrimaryHeading text="Login" />
      <PrimaryHeading text="Sign Up" />
      <DescriptionText
        text="Enter your details below & free sign up"
        color="text-secondaryColor"
        fontSize="text-sm"
        lineHeight="leading-6"
      />
      <DescriptionText
        text="Forgot PassWord?"
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

      {/* User Profile */}
      <div className="flex flex-col border-4 border-gray-800 p-4 w-2/4 space-y-5">
        <CardProfile
          name="Salman Aziz"
          avatarSrc="/profile_avatar.png"
          avatarHeight={60}
          avatarWidth={60}
          fontSize="text-xl"
          fontWeight="font-normal"
        />
        <hr className="border-slate-800" />
        <CardProfile
          name="Random Name"
          avatarSrc="/femaleAvatar.png"
          fontSize="text-base"
          fontWeight="font-medium"
        />
        <hr className="border-slate-800" />
        <NavBarProfile
          avatarSrc="/profile_avatar.jpeg"
          name="Salman Aziz"
          avatarHeight={50}
          avatarWidth={50}
        />
        <hr className="border-slate-800" />
        <UserProfile
          name="Salman Aziz"
          role={role[1]}
          avatarSrc="/profile_picture.png"
        />
      </div>
      {/* dashboard card page */}
      <div className="bg-zinc-500 w-[354px] rounded-lg p-4 mt-4">
        <div>
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
        </div>
        <hr />
        <NumberBadge count={value} />
      </div>

      <div className="bg-zinc-500 w-10/12 rounded-lg p-4 mt-4">
        <div className="space-y-3">
          <SectionHeading text="Electrical Circuit 01" fontSize="text-[40px]" />
          <DescriptionText
            text={`Course Teacher - ${teacherName}`}
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
            items={bookList}
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
            text={`Course Teacher - ${teacherName}`}
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
            items={bookList}
            className="text-secondaryColor font-normal text-base leading-5"
            useNumber={true}
          />
        </div>
        <div className="mt-8 bg-white space-y-5">
          <SecondaryHeading text="Create Course" />
        </div>
      </div>
      <div className="mt-8">
        <RowRadioButtonsGroup />
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
          className="text-[#B1B1B1] hover:bg-gray-100 bg-white/[0.12] text-xl px-6 py-3 rounded font-medium leading-5"
          borderColor="border-[#B1B1B1]"
        />
        <SidebarMenuButton
          icon={HomeIcon}
          text="Home"
          trailingIcon={ChevronRightIcon}
        />
        <SidebarMenuButton icon={LogoutRoundedIcon} text="Log out" />
      </div>
      <div className="mt-8 flex flex-col items-center space-y-5">
        <InputTextFieldWithVariant
          label="Username"
          placeholder="Enter Your UserName"
          variant="outlined"
        />
        <InputTextFieldWithVariant
          label="Course Name"
          placeholder="Enter Your Course Name"
          variant="filled"
        />
        <InputTextFieldWithExpandable />
        <InputPasswordField />
        <SelectOptionTextField />
      </div>
    </div>
  );
}
