"use client";
import { useParams } from "next/navigation";
import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { courseList } from "@/app/constants/constantData";
import { Box } from "@mui/material";
import SecondaryProfile from "@/app/components/UserProfile/SecondaryProfile";
import SectionHeader from "./courseDetailsHeader/SectionHeader";
import CourseDetailsSection from "./courseDetailsSection/CourseDetailsSection";

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

export default function ClassworkMenu() {
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
          <SectionHeader courseData={courseData} />
          {/* <section className="flex flex-col gap-8 p-5 border-2 rounded-md border-gray-300">
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
          </section> */}
          <CourseDetailsSection courseData={courseData} />
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
