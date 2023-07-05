interface Teacher {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
  fullTimeEmployee: boolean;
}

interface Directors extends Teacher {
  numberOfReports: number;
}

const printTeacher: printTeacherFunction = (firstName: string, lastName: string): string => `${firstName.slice(0, 1)}. ${lastName}`;

interface printTeacherFunction {
  (firstName: string, lastName: string): string;
}
  
class StudentClass {
  firstName: string;
  lastName: string;
  constructor(firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;  
  }
  workOnHomework = () => "Currently working";
  displayName = () => this.firstName;
}
interface StudentClassConstructor {
  (firstName: string, lastName: string): StudentClass
}

  
const student = new StudentClass("Adeyemi", "Adejumo");
console.log(student.displayName())
console.log(student.workOnHomework())