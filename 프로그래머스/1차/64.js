// n을 입력받아 n * n 크기의 2차원 배열을 생성하여 달팽이 수열을 채우기
// 달팽이 수열: 1부터 시작하여 시계 방향 나선형으로 채우는 수열

function solution(n) {
  // 주어진 숫자에 맞는 2차원 배열 생성
  const result = Array.from({ length: n }, () => Array(n).fill(0));

  let num =1;
  let startI = startJ = 0;
  let endI = endJ = n-1;

  while (let i = 0; i < n; i++) {}
    for (let j = 0; j < n; j++) {
      // 첫번째줄 완성
      if (j <= n + 1 && i === 0) {
        result[i][j] = j + 1;
      }
    }
    // 첫번째줄 다 채우면 n.length 만큼 아래로 채우기
    if (i < n && i !== 0) {
      while (i < n) {
        result[i][n - 1] = i + n;
        i++;
      }
    }

    if()
  }
  return result;
}

console.log(solution(3));
console.log(solution(4));
