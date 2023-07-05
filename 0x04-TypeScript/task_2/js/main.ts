interface DirectorInterface {
  workFromHome(): string
  getCoffeeBreak(): string
  workDirectorTasks(): string
}

interface TeacherInterface {
  workFromHome(): string
  getCoffeeBreak(): string
  workTeacherTasks(): string
}

class Director implements DirectorInterface {
  workFromHome = () => "Working from home";
  getCoffeeBreak = () => "Getting a coffee break";
  workDirectorTasks = () => "Getting to director tasks";
}

class Teacher implements TeacherInterface {
  workFromHome = () => "Cannot work from home";
  getCoffeeBreak = () => "Cannot have a break";
  workTeacherTasks = () => "Getting to work";
}

export const createEmployee = (salary: string | number): Teacher | Director => {
  return Number(salary) < 500 ? new Teacher() : new Director();
}

export const isDirector = (employee: Teacher | Director): boolean => employee instanceof Director;

export const executeWork = (employee: Teacher | Director): void => {
  const work = employee instanceof Teacher? employee.workTeacherTasks() : employee.workDirectorTasks();
  console.log(work)
}

type Subjects = 'Math' | 'History';

export const teachClass = (todayClass: Subjects) : string => {
  return todayClass === 'Math' ? 'Teaching Math': 'Teaching History';
}