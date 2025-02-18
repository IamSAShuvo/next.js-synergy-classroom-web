interface Book {
  name: string;
  author: string;
}

interface ClassroomData {
  teacherName: string;
  section: string;
  studentCount: number;
  books: Book[];
}

export const classroomData: ClassroomData = {
  teacherName: "Mr. John Doe",
  section: "A",
  studentCount: 235,
  books: [{ name: "Book 01", author: "Author 01" }],
};

export const allowedRoles = {
  student: "student",
  teacher: "teacher",
};

const generateCourseList = (totalItems: number, classroomData: ClassroomData) =>
  Array.from({ length: totalItems }, (_, index) => ({
    ...classroomData,
    id: index + 1,
  }));

export const courseList = generateCourseList(10, classroomData);
