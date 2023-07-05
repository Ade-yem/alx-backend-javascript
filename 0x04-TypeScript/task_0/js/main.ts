interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
}  

const student1: Student = {
  firstName: "Adeyemi",
  lastName: "Adejumo",
  age: 22,
  location: "Osogbo"
}
const student2: Student = {
  firstName: "Bolarinwa",
  lastName: "Jimoh",
  age: 22,
  location: "Ibadan"
}
const studentsList: Student[] = [student1, student2];

const renderTable = (list: Student[]) => {
  const body: HTMLBodyElement = document.createElement('body');
  const table: HTMLTableElement = document.createElement('table');
  const rowHead: HTMLTableRowElement = document.createElement('tr');
  const th1: HTMLTableCellElement = document.createElement('th')
  const th2: HTMLTableCellElement = document.createElement('th')
  th1.textContent = "First Name";
  th2.textContent = "Location";
  rowHead.appendChild(th1);
  rowHead.appendChild(th2);
  table.appendChild(rowHead);
  const rows = list.map(student => {
    const row: HTMLTableRowElement = document.createElement('tr');
    const child1: HTMLTableCellElement = document.createElement('td');
    child1.textContent = student.firstName;
    row.appendChild(child1);
    const child2: HTMLTableCellElement = document.createElement('td');
    child2.textContent = student.location;
    row.appendChild(child2);
    return row;
  })
  table.append(...rows);
  body.appendChild(table);
}
renderTable(studentsList);