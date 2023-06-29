/* eslint-disable */
export default class HolbertonCourse {
  constructor(name, length, students) {
    if (typeof name !== 'string') throw new TypeError('Name must be a string');
    else this._name = name;

    if (typeof length !== 'number') throw new TypeError('Length must be a number');
    else this._length = length;

    if (!Array.isArray(students)) throw new TypeError('students must be an array');
    else this._students = students;
  }

  get name() {
    return this._name;
  }

  set name(value) {
    if (typeof (value) === 'string') this._name = value;
    else new TypeError('Name must be a string');
  }

  get length() {
    return this._length;
  }

  set length(value) {
    if (typeof (value) === 'number') this._length = value;
    else new TypeError('Length must be a Number');
  }

  get students() {
    return this._students;
  }

  set students(value) {
    if (Array.isArray(value) === true) this._students = value;
    else new TypeError('Students must be an array');
  }
}
