console.log("For Loop Example\n");
const STOP = 10;
for (let i = 0; i < STOP; ++i) {
  console.log(i);
}

console.log("Employee Salaries (Exercise)\n");
let employees = ["Lara", "Sukhi", "Evee", "Simi", "Beno", "Jay"];
let employeeSalary = [1000, 1300, 957.89, 3230.14, 750, 13900];
for (let index = 0; index < employees.length; ++index) {
  let name = employees[index];
  let salary = employeeSalary[index];
  console.log(`${name} $${salary}`);
}

console.log("Print Triangle (Exercise)\n");
const MAX_ROWS = 6;
for (let row = 0; row < MAX_ROWS; ++row) {
  let line;
  for (line = ""; line.length <= row; line = line += "*") {}
  console.log(line);
}

/** ************************************************************** */

console.log("While Loop Example\n");
const STOP_2 = 10;
let i2 = 0;
while (i2 < STOP_2) {
  console.log(i2++);
}

console.log("Employee Salaries (Exercise)\n");
let index_2 = 0;
while (index_2 < employees.length) {
  let name = employees[index_2];
  let salary = employeeSalary[index_2];
  console.log(`${name} $${salary}`);
  index_2++;
}

console.log("Print Triangle (Exercise)\n");
const MAX_ROWS_2 = 6;
let row_2 = 0;
let line_2 = "";
while (row_2++ < MAX_ROWS_2) {
  line_2 += "*";
  console.log(line_2);
}
