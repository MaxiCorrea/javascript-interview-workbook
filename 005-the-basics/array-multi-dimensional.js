// Multi-Dimensional Arrays!
let arra1 = [1, 2, 3, 4, 5];
let arra2 = [6, 7, 8, 9, 10];
let matrix1 = [arra1, arra2];
console.log(matrix1);

let matrix2 = [
  [1, 2, 3, 4, 5],
  [6, 7, 8, 9, 10],
];
console.log(matrix2);

// Iteration
for( let rowIdx = 0 ; rowIdx < matrix2.length ; ++rowIdx) {
  let rowData = matrix2[rowIdx];
  for( let colIdx = 0; colIdx < rowData.length ; ++colIdx) {
    console.log(`matrix[${rowIdx}][${colIdx}] = ${matrix2[rowIdx][colIdx]}`)
  }
}