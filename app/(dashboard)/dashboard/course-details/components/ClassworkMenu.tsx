"use client";

import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import SectionHeading from "@/app/components/typography/SectionHeading";
import DescriptionText from "@/app/components/typography/DescriptionText";
import ItemList from "@/app/components/typography/itemsList/ItemList";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { Box } from "@mui/material";
import { useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "@/app/store/store";
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

export default function ClassworkMenu() {
  const [value, setValue] = useState(0);

  const { course, books } = useSelector(
    (state: RootState) => state.courseDetails
  );

  const { students } = useSelector(
    (state: RootState) => state.enrolledStudents
  );

  const { teacherName } = useSelector((state: RootState) => state.courses);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

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
              text={course?.title}
              className="font-medium text-4xl leading-9 text-white mb-8"
            />

            <DescriptionText
              text={`Course Teacher - ${teacherName}`}
              className="text-2xl text-white leading-5"
            />
          </header>
          <section className="flex flex-col gap-8 p-5 border-2 rounded-md border-gray-300">
            <SecondaryProfile
              avatarSrc="/femaleAvatars.png"
              className="flex items-center gap-3 text-base font-medium leading-5 text-midnightBlack"
              shouldOpenModal={false}
              avatarHeight={60}
              avatarWidth={60}
            />
            <div className="space-y-5">
              <DescriptionText
                text="Book List"
                className="text-steelBlue text-xl leading-5"
              />
              <ItemList
                items={books?.map((book) => book.name) || []}
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
          {Array.isArray(students) && students.length > 0 ? (
            students.map((student) => (
              <SecondaryProfile
                key={student.studentId}
                avatarSrc="/femaleAvatars.png"
                className="flex items-center gap-3 text-base font-medium leading-5 text-midnightBlack"
                shouldOpenModal={false}
                avatarHeight={40}
                avatarWidth={40}
              />
            ))
          ) : (
            <p className="text-gray-500">
              No students have enrolled in this course.
            </p>
          )}
        </div>
      </CustomTabPanel>
    </Box>
  );
}
