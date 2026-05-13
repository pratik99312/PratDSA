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
// New Pattern
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
// New Pattern
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
    row = row + (j + 1);
  }

  console.log(row);
}

// New Pattern
// New Pattern
// New Pattern
// 1
// 2 2
// 3 3 3
// 4 4 4 4
// 5 5 5 5 5

let b = 5;

for (let i = 0; i < b; i++) {
  let row = "";
  for (let j = 0; j <= i; j++) {
    row = row + (i + 1);
  }

  console.log(row);
}

// Similar to above pattern but with different variable name and solution
let c = 5;

for (let i = 1; i <= c; i++) {
  let row = "";
  for (let j = 1; j <= i; j++) {
    row = row + i;
  }
  console.log(row);
}

// New Pattern
// New Pattern
// New Pattern
//1,2,3,4,5
//1,2,3,4
//1,2,3
//1,2
//1

let d = 5;

for (let i = 0; i < d; i++) {
  let row = "";
  for (let j = 0; j < d - i; j++) {
    row = row + (j + 1);
  }
  console.log(row);
}

// New Pattern
// New Pattern
// New Pattern
// *****
// ****
// ***
// **
// *

let e = 5;

for (let i = 0; i < e; i++) {
  let row = "";
  for (let j = 0; j < e - i; j++) {
    row = row + "*";
  }
  console.log(row);
}

// New Pattern
// New Pattern
// New Pattern
//     *
//    **
//   ***
//  ****
// *****

let f = 5;

for (let i = 0; i < f; i++) {
  let row = "";
  // j loop adding spaces
  for (let j = 0; j < f - i - 1; j++) {
    row = row + " ";
  }
  // k loop adding stars
  for (let k = 0; k <= i; k++) {
    row = row + "*";
  }
  console.log(row);
}

// New Pattern
// New Pattern
// New Pattern
// 1
// 1 0
// 1 0 1
// 1 0 1 0
// 1 0 1 0 1
// 1 0 1 0 1 0

let g = 5;

for (let i = 0; i < g; i++) {
  let row = "";
  let toggle = 1;
  for (let j = 0; j <= i; j++) {
    row = row + toggle + " ";
    toggle = toggle === 1 ? 0 : 1;
  }
  console.log(row);
}

// New Pattern
// New Pattern
// New Pattern
// 1
// 0 1
// 0 1 0
// 1 0 1 0
// 1 0 1 0 1

let h = 5;
let toggle = 1;

for (let i = 0; i < h; i++) {
  let row = "";
  for (let j = 0; j <= i; j++) {
    row = row + toggle + " ";
    toggle = toggle === 1 ? 0 : 1;
  }
  console.log(row);
}

