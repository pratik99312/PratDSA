// ****
// ****
// ****
// ****

let n2 = 5;

for (let i = 0; i < n2; i++) {
  let row = "";
  for (let j = 0; j < n2; j++) {
    row = row + "*";
  }
  console.log(row);
}

// New Pattern
// *
// **
// ***
// ****

let n = 8;

for (let i = 0; i < n; i++) {
  let row = "";
  for (let j = 0; j < i + 1; j++) {
    row = row + "*";
  }
  console.log(row);
}

for (let i = 0; i < n; i++) {
  let row = "";
  for (let j = 0; j <= i; j++) {
    row = row + "*";
  }
  console.log(row);
}

// New Pattern
// 1
// 1 2
// 1 2 3
// 1 2 3 4
// 1 2 3 4 5

let a = 5;

for (let i = 0; i < a; i++) {
    let row = "";
    for (let j = 0; j <= i; j++) {
        row = row + (j + 1)
    }

    console.log(row)
}
