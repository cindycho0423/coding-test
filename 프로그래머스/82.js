function solution(d, budget) {
  let sortedD = [...d].sort((a, b) => a - b);
  let totalBudget = budget;
  let count = 0;

  for (d of sortedD) {
    if (d <= totalBudget) {
      totalBudget -= d;
      count += 1;
    } else {
      break;
    }
  }

  return count;
}

console.log(solution([1, 3, 2, 5, 4], 9));
console.log(solution([2, 2, 3, 3], 10));
