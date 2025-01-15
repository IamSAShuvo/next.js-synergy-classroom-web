import AuthDescriptionText from "./components/textComponents/AuthDescriptionText";
import AuthHeadingText from "./components/textComponents/AuthHeadingText";
import DashboardCardTitle from "./components/textComponents/DashboardCardTitle";
import { TextLink } from "./components/textComponents/TextLink";

export default function Home() {
  return (
    <div className="">
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
      <DashboardCardTitle text="Electrical Circuit 01" />
    </div>
  );
}
