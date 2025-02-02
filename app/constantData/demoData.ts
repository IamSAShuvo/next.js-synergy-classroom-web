export const courseDetails = {
  id: 1,
  teacherName: "Mr. John Doe",
  Section: "A",
  value: 235,
  bookList: ["Book 01", "Book 02", "Book 03"],
  authorList: ["Author 01", "Author 02", "Author 03"],
};

function generateCourseList(totalItems: number) {
  return Array.from({ length: totalItems }, (_, index) => ({
    ...courseDetails,
    id: index + 1,
  }));
}

export const courseList = generateCourseList(10);
