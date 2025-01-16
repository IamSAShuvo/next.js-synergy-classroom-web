import AuthDescriptionText from "./components/typography/AuthDescriptionText";
import AuthHeadingText from "./components/typography/AuthHeadingText";
import DashboardCardDescription from "./components/typography/DashboardCardDescription";
import DashboardCardTitle from "./components/typography/DashboardCardTitle";
import EnrolledCount from "./components/typography/EnrolledCount";
import { TextLink } from "./components/links/TextLink";
import BookList from "./components/typography/bookList/BookList";

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
          <DashboardCardTitle text="Electrical Circuit 01" />
          <DashboardCardDescription
            text={`Section - ${section}`}
            color="text-white"
          />
          <DashboardCardDescription
            text={`Course Teacher - ${teacherName}`}
            color="text-white"
          />
        </div>
        <div className="bg-white ">
          <div className="flex justify-between mt-4">
            <DashboardCardDescription
              text={`Book List`}
              color="text-headingColor"
            />
            <DashboardCardDescription
              text={`Author`}
              color="text-headingColor"
            />
          </div>
          <div className="flex justify-between mt-2 mb-4">
            <BookList lists={bookList} color="text-headingColor" />
            <BookList lists={authorList} color="text-descriptionColor" />
          </div>
        </div>
        <hr />
        <EnrolledCount count={value} />
      </div>
    </div>
  );
}
