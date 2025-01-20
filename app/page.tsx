import TextDescriptionWithChildren from "./components/typography/TextDescriptionWithChildren";
import AuthHeadingText from "./components/typography/AuthHeadingText";
import SectionDescription from "./components/typography/SectionDescription";
import SectionTitle from "./components/typography/SectionTitle";
import NumberBadge from "./components/typography/NumberBadge";
import { TextLink } from "./components/links/TextLink";
import ItemList from "./components/typography/itemsList/ItemList";
import CreateCourseTitle from "./components/typography/CreateCourseTitle";
import TextInputField from "./components/inputFields/TextInputField";
import PasswordInputField from "./components/inputFields/PasswordInputField";
import SelectTextFields from "./components/inputFields/SelectTextFields";
import TextFieldWithFilled from "./components/inputFields/TextFieldWithFilled";
import RowRadioButtonsGroup from "./components/Buttons&Icons/RadioButtons";
import FullWidthButton from "./components/Buttons&Icons/FullWidthButton";
import EnrollButton from "./components/Buttons&Icons/EnrollButton";
import ButtonWithIcons from "./components/Buttons&Icons/ButtonWithIcons";
import HomeIcon from "@mui/icons-material/Home";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import LocalLibraryRoundedIcon from "@mui/icons-material/LocalLibraryRounded";
import LogoutRoundedIcon from "@mui/icons-material/LogoutRounded";
import ActionButton from "./components/Buttons&Icons/ActionButton";

export default function Home() {
  const teacherName = "Mr. John Doe";
  const section = "A";
  const value = 235;
  const bookList = ["Book 01", "Book 02", "Book 03"];
  const authorList = ["Author 01", "Author 02", "Author 03"];
  return (
    <div className="mx-10 my-5">
      <h1>Home</h1>
      <p>Welcome to the Synergy Classroom</p>
      {/* Login and Sign up page */}
      <AuthHeadingText text="Login" />
      <AuthHeadingText text="Sign Up" />
      <TextDescriptionWithChildren
        text="Enter your details below & free sign up"
        lineHeight="leading-[21.59px]"
      />
      <TextDescriptionWithChildren
        text="Forgot PassWord?"
        lineHeight="leading-[19.19px]"
        letterSpacing="tracking-[0.48px]"
      />
      <TextDescriptionWithChildren
        text="Don't have an account?"
        lineHeight="leading-[21.59px]"
      >
        <TextLink url="/signup" text="Sign Up" />
      </TextDescriptionWithChildren>
      <TextDescriptionWithChildren
        text="Don't have an account?"
        lineHeight="leading-[1.3494rem]"
      >
        <TextLink url="/login" text="Login" />
      </TextDescriptionWithChildren>

      {/* dashboard card page */}
      <div className="bg-zinc-500 w-[354px] rounded-lg p-4 mt-4">
        <div>
          <SectionTitle text="Electrical Circuit 01" fontSize="text-2xl" />
          <SectionDescription
            text={`Section - ${section}`}
            color="text-white"
            fontSize="text-sm"
          />
          <SectionDescription
            text={`Course Teacher - ${teacherName}`}
            color="text-white"
            fontSize="text-sm"
          />
        </div>
        <div className="bg-white ">
          <div className="flex justify-between mt-4">
            <SectionDescription
              text={`Book List`}
              color="text-headingColor"
              fontSize="text-sm"
            />
            <SectionDescription
              text={`Author`}
              color="text-headingColor"
              fontSize="text-sm"
            />
          </div>
          <div className="flex justify-between mt-2 mb-4">
            <ItemList
              items={bookList}
              color="text-headingColor"
              fontWeight="font-medium"
              fontSize="text-[10px]"
              lineHeight="leading-[15px]"
            />
            <ItemList
              items={authorList}
              color="text-descriptionColor"
              fontWeight="font-normal"
              fontSize="text-[10px]"
              lineHeight="leading-[15px]"
            />
          </div>
        </div>
        <hr />
        <NumberBadge count={value} />
      </div>

      <div className="bg-zinc-500 w-10/12 rounded-lg p-4 mt-4">
        <div className="space-y-3">
          <SectionTitle text="Electrical Circuit 01" fontSize="text-[40px]" />
          <SectionDescription
            text={`Course Teacher - ${teacherName}`}
            fontSize="text-2xl"
            color="text-white"
          />
        </div>
        <div className="mt-8 bg-white space-y-5">
          <SectionDescription
            text="Book List"
            color="text-subHeadingColor"
            fontSize="text-xl"
          />
          <ItemList
            items={bookList}
            color="text-descriptionColor"
            fontWeight="font-normal"
            fontSize="text-base"
            lineHeight=" leading-[18px]"
          />
        </div>
        <div className="mt-8 bg-white space-y-5">
          <SectionDescription
            text="Uploaded file"
            color="text-subHeadingColor"
            fontSize="text-xl"
          />
        </div>
      </div>
      <div className="bg-zinc-500 w-10/12 rounded-lg p-4 mt-4">
        <div className="space-y-3">
          <SectionTitle text="Electrical Circuit 01" fontSize="text-[40px]" />
          <SectionDescription
            text={`Course Teacher - ${teacherName}`}
            fontSize="text-2xl"
            color="text-white"
          />
        </div>
        <div className="mt-8 bg-white space-y-5">
          <SectionDescription
            text="Book List"
            color="text-subHeadingColor"
            fontSize="text-xl"
          />
          <ItemList
            items={bookList}
            color="text-descriptionColor"
            fontWeight="font-normal"
            fontSize="text-base"
            lineHeight=" leading-[18px]"
          />
        </div>
        <div className="mt-8 bg-white space-y-5">
          <CreateCourseTitle />
        </div>
      </div>
      <div className="mt-8">
        <RowRadioButtonsGroup />
      </div>
      <div className="mt-6 mb-6 flex flex-col gap-4">
        <FullWidthButton text="Log In" />
        <FullWidthButton text="Sign Up" />
        <EnrollButton text="Click to Enroll" />
        <ActionButton text="Create" hoverColor="hover:bg-indigo-600" />
        <ActionButton text="Save" hoverColor="hover:bg-indigo-600" />
        <ActionButton text="Cancel" hoverColor="hover:bg-indigo-600" />
        <ButtonWithIcons
          icon={HomeIcon}
          text="Home"
          trailingIcon={ChevronRightIcon}
        />
        <ButtonWithIcons
          icon={LocalLibraryRoundedIcon}
          text="ClassWork"
          trailingIcon={ChevronRightIcon}
        />
        <ButtonWithIcons icon={LogoutRoundedIcon} text="Log out" />
      </div>
      <div className="mt-8 flex flex-col items-center space-y-5">
        <TextInputField />
        <TextFieldWithFilled />
        <PasswordInputField />
        <SelectTextFields />
      </div>
    </div>
  );
}
