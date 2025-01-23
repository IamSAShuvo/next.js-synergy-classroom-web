// export default function Home() {}
import DescriptionWithChildren from "./components/typography/DescriptionWithChildren";
import PrimaryHeading from "./components/typography/PrimaryHeading";
import SectionDescription from "./components/typography/SectionDescription";
import SectionHeading from "./components/typography/SectionHeading";
import NumberBadge from "./components/typography/NumberBadge";
import ItemList from "./components/typography/itemsList/ItemList";
import SecondaryHeading from "./components/typography/SecondaryHeading";
import InputTextFieldWithVariant from "./components/inputFields/InputTextFieldWithVariant";
import RowRadioButtonsGroup from "./components/Buttons&Icons/RadioButtons";
import FullWidthButton from "./components/Buttons&Icons/FullWidthButton";
import ButtonWithIcons from "./components/Buttons&Icons/ButtonWithIcons";
import HomeIcon from "@mui/icons-material/Home";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import LocalLibraryRoundedIcon from "@mui/icons-material/LocalLibraryRounded";
import LogoutRoundedIcon from "@mui/icons-material/LogoutRounded";
import ActionButton from "./components/Buttons&Icons/ActionButton";
import LinkText from "./components/links/LinkText";
import InputTextFieldWithExpandable from "./components/inputFields/InputTextFieldWithExpandable";
import InputPasswordField from "./components/inputFields/InputPasswordField";
import SelectOptionTextField from "./components/inputFields/SelectOptionTextField";

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
      <PrimaryHeading text="Login" />
      <PrimaryHeading text="Sign Up" />
      <DescriptionWithChildren
        text="Enter your details below & free sign up"
        lineHeight="leading-[21.59px]"
      />
      <DescriptionWithChildren
        text="Forgot PassWord?"
        lineHeight="leading-[19.19px]"
        letterSpacing="tracking-[0.48px]"
      />
      <DescriptionWithChildren
        text="Don't have an account?"
        lineHeight="leading-[21.59px]"
      >
        <LinkText url="/signup" text="Sign Up" />
      </DescriptionWithChildren>
      <DescriptionWithChildren
        text="Don't have an account?"
        lineHeight="leading-[1.3494rem]"
      >
        <LinkText url="/login" text="Login" />
      </DescriptionWithChildren>

      {/* dashboard card page */}
      <div className="bg-zinc-500 w-[354px] rounded-lg p-4 mt-4">
        <div>
          <SectionHeading text="Electrical Circuit 01" fontSize="text-2xl" />
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
              color="text-primaryColor"
              fontSize="text-sm"
            />
            <SectionDescription
              text={`Author`}
              color="text-primaryColor"
              fontSize="text-sm"
            />
          </div>
          <div className="flex justify-between mt-2 mb-4">
            <ItemList
              items={bookList}
              color="text-primaryColor"
              fontWeight="font-medium"
              fontSize="text-[10px]"
              lineHeight="leading-[15px]"
            />
            <ItemList
              items={authorList}
              color="text-secondaryColor"
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
          <SectionHeading text="Electrical Circuit 01" fontSize="text-[40px]" />
          <SectionDescription
            text={`Course Teacher - ${teacherName}`}
            fontSize="text-2xl"
            color="text-white"
          />
        </div>
        <div className="mt-8 bg-white space-y-5">
          <SectionDescription
            text="Book List"
            color="text-steelBlue"
            fontSize="text-xl"
          />
          <ItemList
            items={bookList}
            color="text-secondaryColor"
            fontWeight="font-normal"
            fontSize="text-base"
            lineHeight=" leading-[18px]"
          />
        </div>
        <div className="mt-8 bg-white space-y-5">
          <SectionDescription
            text="Uploaded file"
            color="text-steelBlue"
            fontSize="text-xl"
          />
        </div>
      </div>
      <div className="bg-zinc-500 w-10/12 rounded-lg p-4 mt-4">
        <div className="space-y-3">
          <SectionHeading text="Electrical Circuit 01" fontSize="text-[40px]" />
          <SectionDescription
            text={`Course Teacher - ${teacherName}`}
            fontSize="text-2xl"
            color="text-white"
          />
        </div>
        <div className="mt-8 bg-white space-y-5">
          <SectionDescription
            text="Book List"
            color="text-steelBlue"
            fontSize="text-xl"
          />
          <ItemList
            items={bookList}
            color="text-secondaryColor"
            fontWeight="font-normal"
            fontSize="text-base"
            lineHeight=" leading-[18px]"
          />
        </div>
        <div className="mt-8 bg-white space-y-5">
          <SecondaryHeading />
        </div>
      </div>
      <div className="mt-8">
        <RowRadioButtonsGroup />
      </div>
      <div className="mt-6 mb-6 flex flex-col gap-4">
        <FullWidthButton text="Log In" />
        <FullWidthButton text="Sign Up" />
        <ActionButton
          text="Create"
          textColor="text-white"
          hoverColor="hover:bg-indigo-600"
          bgColor="bg-skyBlue"
          fontSize="text-xl"
        />
        <ActionButton
          text="Save"
          textColor="text-white"
          hoverColor="hover:bg-indigo-600"
          bgColor="bg-skyBlue"
          fontSize="text-xl"
        />
        <ActionButton
          text="Cancel"
          textColor="text-[#B1B1B1]"
          hoverColor="hover:bg-gray-100"
          bgColor="bg-white/[0.12]"
          borderColor="border-[#B1B1B1]"
          fontSize="text-xl"
        />
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
