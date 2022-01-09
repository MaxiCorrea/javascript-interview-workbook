
console.log("For Loop Example\n")
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
for( let row = 0 ; row < MAX_ROWS ; ++row) {
    let line;
    for( line = "" ; line.length <= row ; line = line += "*") {}
    console.log(line)
}
