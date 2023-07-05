/// <reference path="Teacher.ts" />
/// <reference path="Subject.ts" />

namespace Subjects {
  export interface Teacher {
    experienceTeachingReact?: number;
  }
  export class React extends Subject {
    getRequirements = () => "Here is the list of requirements for React";
    getAvailableTeacher = () => {
      if (!this.teacher.experienceTeachingReact) return "No available teacher";
      else return `Available Teacher: ${this.teacher?.firstName}`
    }
  }
  export const react: React = new React();
}