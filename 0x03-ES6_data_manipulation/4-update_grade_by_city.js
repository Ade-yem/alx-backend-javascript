export default function updateStudentGradeByCity (list, city, newGrades) {
  return list.filter(student => student.location === city)
    .map(student => {
      const match = newGrades.find(key => key.studentId === student.id);
      const grade = match ? match.grade : 'N/A';
      return { ...student, grade };
    });
}
