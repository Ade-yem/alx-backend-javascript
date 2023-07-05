/// <reference path="Teacher.ts" />
/// <reference path="Subject.ts" />

namespace Subjects {
  export interface Teacher {
    experienceTeachingC: number;
  }
  export class Cpp extends Subject {
    getRequirements = () => "Here is the list of requirements for Cpp";
    getAvailableTeacher = () =>{
      if (this.teacher?.experienceTeachingC) return `Available Teacher: ${this.teacher?.firstName}`;
      else return "No available teacher"
    }
  }
  export const cpp: Cpp = new Cpp();
}