function solution(arr) {
  let answer = 0;
  let max = 0;
  for (let i = 0; i < arr.length; i++) {
    if (max < arr[i]) {
      max = arr[i];
      answer++;
    }
  }
  return answer;
}

console.log(solution([130, 135, 148, 140, 145, 150, 150, 153]));
console.log(solution([136, 135, 148, 140, 145, 150, 150, 153]));
console.log(solution([136, 137, 148, 140, 145, 150, 150, 153]));
console.log(solution([136, 137, 137, 140, 145, 150, 150, 153]));
