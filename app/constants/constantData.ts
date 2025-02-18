export const allowedRoles = {
  student: "student",
  teacher: "teacher",
};
export interface Book {
  name: string;
  author: string;
}

interface ClassroomData {
  teacherName: string;
  section: string;
  studentCount: number;
  books: Book[];
}

export interface Course extends ClassroomData {
  id: number;
}

export const classroomData: ClassroomData = {
  teacherName: "Mr. John Doe",
  section: "A",
  studentCount: 235,
  books: [{ name: "Book 01", author: "Author 01" }],
};

const generateCourseList = (
  totalItems: number,
  classroomData: ClassroomData
): Course[] =>
  Array.from({ length: totalItems }, (_, index) => ({
    ...classroomData,
    id: index + 1,
  }));

export const courseList = generateCourseList(10, classroomData);
export { generateCourseList };
