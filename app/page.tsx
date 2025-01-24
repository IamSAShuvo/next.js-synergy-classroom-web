// export default function Home() {}
import DescriptionText from "./components/typography/DescriptionText";
import PrimaryHeading from "./components/typography/PrimaryHeading";
import SectionHeading from "./components/typography/SectionHeading";
import NumberBadge from "./components/typography/NumberBadge";
import ItemList from "./components/typography/itemsList/ItemList";
import SecondaryHeading from "./components/typography/SecondaryHeading";
import LinkText from "./components/links/LinkText";

export default function Home() {
  const teacherName = "Mr. John Doe";
  const section = "A";
  const value = 235;
  const bookList = ["Book 01", "Book 02", "Book 03"];
  const authorList = ["Author 01", "Author 02", "Author 03"];
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

      {/* dashboard card page */}
      <div className="bg-zinc-500 w-[354px] rounded-lg p-4 mt-4">
        <div>
          <SectionHeading text="Electrical Circuit 01" fontSize="text-2xl" />
          {/* <h1 className={`font-normal ${fontSize} leading-5 ${color}`}>{text}</h1> */}
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
            />
            <ItemList
              items={authorList}
              className="text-secondaryColor font-normal text-ex_sm leading-4"
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
          />
        </div>
        <div className="mt-8 bg-white space-y-5">
          <SecondaryHeading text="Create Course" />
        </div>
      </div>
    </div>
  );
}
