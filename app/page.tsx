import TextDescriptionWithChildren from "./components/typography/TextDescriptionWithChildren";
import AuthHeadingText from "./components/typography/AuthHeadingText";
import SectionDescription from "./components/typography/SectionDescription";
import SectionTitle from "./components/typography/SectionTitle";
import NumberBadge from "./components/typography/NumberBadge";
import ItemList from "./components/typography/itemsList/ItemList";
import CreateCourseTitle from "./components/typography/CreateCourseTitle";
import LinkText from "./components/links/LinkText";

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
        <LinkText url="/signup" text="Sign Up" />
      </TextDescriptionWithChildren>
      <TextDescriptionWithChildren
        text="Don't have an account?"
        lineHeight="leading-[1.3494rem]"
      >
        <LinkText url="/login" text="Login" />
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
          <CreateCourseTitle />
        </div>
      </div>
    </div>
  );
}
