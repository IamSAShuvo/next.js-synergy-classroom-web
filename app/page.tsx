import AuthDescriptionText from "./components/textComponents/AuthDescriptionText";
import AuthHeadingText from "./components/textComponents/AuthHeadingText";
import DashboardCardDescription from "./components/textComponents/DashboardCardDescription";
import DashboardCardTitle from "./components/textComponents/DashboardCardTitle";
import EnrolledCount from "./components/textComponents/EnrolledCount";
import { TextLink } from "./components/textComponents/TextLink";

export default function Home() {
  const teacherName = "Mr. John Doe";
  const section = "A";
  const value = 235;
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
      <div className="bg-sky-600 w-[354px] rounded-lg p-4 mt-4">
        <DashboardCardTitle text="Electrical Circuit 01" />
        <DashboardCardDescription
          text={`Section - ${section}`}
          color="text-white"
        />
        <DashboardCardDescription
          text={`Course Teacher - ${teacherName}`}
          color="text-white"
        />
        <div className="flex justify-between mt-4">
          <DashboardCardDescription
            text={`Book List`}
            color="text-headingColor"
          />
          <DashboardCardDescription text={`Author`} color="text-headingColor" />
        </div>
        <div className="flex justify-between mt-4">
          <DashboardCardDescription text={`Book 01`} color="text-white" />
          <DashboardCardDescription text={`Author 01`} color="text-white" />
        </div>
        <hr />
        <EnrolledCount count={value} />
      </div>
    </div>
  );
}
