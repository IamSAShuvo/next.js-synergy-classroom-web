"use client";
import { useParams } from "next/navigation";
import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import SectionHeading from "@/app/components/typography/SectionHeading";
import DescriptionText from "@/app/components/typography/DescriptionText";
// import CardProfile from "@/app/components/UserProfile/CardProfile";
import ItemList from "@/app/components/typography/itemsList/ItemList";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { courseList } from "@/app/constants/constantData";
import { Box } from "@mui/material";
import SecondaryProfile from "@/app/components/UserProfile/SecondaryProfile";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function CustomTabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const params = useParams();
  const courseIndex = parseInt(params.id as string) - 1;
  const courseData = courseList[courseIndex];

  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          <Tab label="ClassWork" {...a11yProps(0)} />
          <Tab label="Enrolled" {...a11yProps(1)} />
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
        <div className="p-6 flex flex-col gap-8">
          <header
            className="relative bg-cover bg-center px-8 pt-7 pb-20  rounded-md"
            style={{ backgroundImage: "url(/card_bg.jpeg)" }}
          >
            <div className="absolute top-8 right-4 text-white cursor-pointer">
              <MoreVertIcon className="hover:bg-gray-200/45 rounded-full" />
            </div>
            <SectionHeading
              text="Electrical Circuit 01"
              className="font-medium text-4xl leading-9 text-white mb-8"
            />
            <DescriptionText
              text={`Course Teacher - ${courseData.teacherName}`}
              fontSize="text-2xl"
              color="text-white"
              lineHeight="leading-5"
            />
          </header>
          <section className="flex flex-col gap-8 p-5 border-2 rounded-md border-gray-300">
            <SecondaryProfile
              name={courseData.teacherName}
              avatarSrc="/profile_avatar.png"
              avatarHeight={60}
              avatarWidth={60}
              shouldOpenModal={false}
              className="flex items-center gap-3 text-xl font-normal leading-5 text-midnightBlack"
            />
            <div className="space-y-5">
              <DescriptionText
                text="Book List"
                color="text-steelBlue"
                fontSize="text-xl"
                lineHeight="leading-5"
              />
              <ItemList
                items={courseData.books.map((book) => book.name)}
                className="text-secondaryColor font-normal text-base leading-5"
                useNumber={true}
              />
            </div>
          </section>
        </div>
      </CustomTabPanel>

      <CustomTabPanel value={value} index={1}>
        <h3 className="font-semibold text-3xl text-primaryColor border-b-2 p-6">
          Students
        </h3>
        <div className="mt-3 p-6 flex flex-col gap-5">
          <SecondaryProfile
            name="Alexandra Alison"
            avatarSrc="/femaleAvatars.png"
            shouldOpenModal={false}
            className="flex items-center gap-3 text-base font-medium leading-5 text-midnightBlack"
          />
          <SecondaryProfile
            name="Salman Aziz"
            avatarSrc="/femaleAvatars.png"
            shouldOpenModal={false}
            className="flex items-center gap-3 text-base font-medium leading-5 text-midnightBlack"
          />
          <SecondaryProfile
            name="Synergy Solution"
            avatarSrc="/femaleAvatars.png"
            shouldOpenModal={false}
            className="flex items-center gap-3 text-base font-medium leading-5 text-midnightBlack"
          />
        </div>
      </CustomTabPanel>
    </Box>
  );
}
