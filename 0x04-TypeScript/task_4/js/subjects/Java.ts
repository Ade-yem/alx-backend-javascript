/// <reference path="Teacher.ts" />
/// <reference path="Subject.ts" />

namespace Subjects {
    export interface Teacher {
      experienceTeachingJava?: number;
    }
    export class Java extends Subject {
      getRequirements = () => "Here is the list of requirements for Java";
      getAvailableTeacher = () => {
        if (!this.teacher.experienceTeachingJava) return "No available teacher";
        else return `Available Teacher: ${this.teacher?.firstName}`
      }
    }
    export const java: Java = new Java();
  }