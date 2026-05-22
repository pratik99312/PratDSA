// write a function that gives population of rabbits after n months given that each rabbit produces 2 rabbits every month and the second month the rabbit starts producing rabbits then how many rabbits will be there after n months?

function rabbitPopulation(n) {
  if (n === 0) return 1;
  if (n === 1) return 1;
  return rabbitPopulation(n - 1) + rabbitPopulation(n - 2);
}

console.log(rabbitPopulation(5));

// dry run
// rabbitPopulation(5) => rabbitPopulation(4) + rabbitPopulation(3)
// rabbitPopulation(4) => rabbitPopulation(3) + rabbitPopulation(2)
// rabbitPopulation(3) => rabbitPopulation(2) + rabbitPopulation(1)
// rabbitPopulation(2) => rabbitPopulation(1) + rabbitPopulation(0)
// rabbitPopulation(1) => 1
// rabbitPopulation(0) => 1

// so the final result will be 8

// This is the optimized solution with O(n) time complexity and O(n) space complexity due to the recursive call stack.      