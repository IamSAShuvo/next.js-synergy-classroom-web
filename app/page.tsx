import AuthDescriptionText from "./components/typography/AuthDescriptionText";
import AuthHeadingText from "./components/typography/AuthHeadingText";
import SectionDescription from "./components/typography/SectionDescription";
import SectionTitle from "./components/typography/SectionTitle";
import EnrolledCount from "./components/typography/EnrolledCount";
import { TextLink } from "./components/links/TextLink";
import BookList from "./components/typography/bookList/BookList";
import CreateCourseTitle from "./components/typography/CreateCourseTitle";

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
      <AuthHeadingText text="Login" />
      <AuthHeadingText text="Sign Up" />
      <AuthDescriptionText text="Enter your details below & free sign up" />
      <AuthDescriptionText text="Don't have an account?">
        <TextLink url="/signup" text="Sign Up" />
      </AuthDescriptionText>
      <AuthDescriptionText text="Don't have an account?">
        <TextLink url="/login" text="Login" />
      </AuthDescriptionText>

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
            <BookList
              lists={bookList}
              color="text-headingColor"
              fontWeight="font-medium"
              fontSize="text-[10px]"
              lineHeight="leading-[15px]"
            />
            <BookList
              lists={authorList}
              color="text-descriptionColor"
              fontWeight="font-normal"
              fontSize="text-[10px]"
              lineHeight="leading-[15px]"
            />
          </div>
        </div>
        <hr />
        <EnrolledCount count={value} />
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
          <BookList
            lists={bookList}
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
          <BookList
            lists={bookList}
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
    </div>
  );
}
