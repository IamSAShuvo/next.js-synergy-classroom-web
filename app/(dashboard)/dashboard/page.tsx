import DashboardComponent from "@/app/components/DashboardMainContent/DashboardComponent";
import LinkText from "@/app/components/links/LinkText";

const page = () => {
  return (
    <div className="flex flex-col mx-7 my-6 gap-4">
      <LinkText
        className="font-normal text-sm leading-5 text-skyBlue hover:underline self-end"
        url="/dashboard/all-courses"
        text="See All"
      />
      <DashboardComponent />
    </div>
  );
};

export default page;
