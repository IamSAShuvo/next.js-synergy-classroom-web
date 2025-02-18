export const classroomData = {
  teacherName: "Mr. John Doe",
  section: "A",
  studentCount: 235,
  books: [
    { name: "Book 01", author: "Author 01" },
    // { title: "Book 02", author: "Author 02" },
    // { title: "Book 03", author: "Author 03" },
  ],
};

export const allowedRoles = {
  student: "student",
  teacher: "teacher",
};

function generateCourseList(totalItems: number) {
  return Array.from({ length: totalItems }, (_, index) => ({
    ...classroomData,
    id: index + 1,
  }));
}

export const courseList = generateCourseList(10);
