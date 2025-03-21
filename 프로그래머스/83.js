function solution(people, limit) {
  let count = 0;
  const sortedPeople = [...people].sort((a, b) => a - b);
  let light = 0;
  let heavy = sortedPeople.length - 1;

  while (light < heavy) {
    if (sortedPeople[light] + sortedPeople[heavy] <= limit) {
      count++;
      light++;
      heavy--;
    } else {
      heavy--;
    }
  }

  return sortedPeople.length - count;
  // 전체 사람 수 - 두 명이 함께 탄 보트 수
}

console.log(solution([20, 50, 50, 80], 100));
console.log(solution([70, 50, 80], 100));
console.log(solution([70, 50, 80, 50], 100));
