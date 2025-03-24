function solution(tangerine, k) {
  let limit = k;
  let map = new Map();
  let answer = 0;

  for (tan of tangerine) {
    if (map.has(tan)) {
      map.set(tan, map.get(tan) + 1);
    } else {
      map.set(tan, 1);
    }
  }
  console.log(Array.from(map));
  const sortedByCount = Array.from(map).sort((a, b) => b[1] - a[1]);

  for (let [kg, count] of sortedByCount) {
    if (limit <= 0) break;
    limit -= count;
    answer += 1;
  }

  return answer;
}

console.log(solution([1, 3, 2, 5, 4, 5, 2, 3], 6));
console.log(solution([1, 3, 2, 5, 4, 5, 2, 3], 4));
console.log(solution([1, 1, 1, 1, 2, 2, 2, 3], 2));
