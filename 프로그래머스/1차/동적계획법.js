// 메모이제이션을 위한 캐시 객체
const memo = new Map();

function fibonacci(n) {
  // 기저 사례 (base cases)
  if (n <= 0) return 0;
  if (n === 1) return 1;

  // 이미 계산된 값이 있는지 확인
  if (memo.has(n)) {
    return memo.get(n);
  }

  // 새로운 값 계산 및 메모에 저장
  const result = fibonacci(n - 1) + fibonacci(n - 2);
  memo.set(n, result);

  return result;
}

// 성능 측정을 위한 테스트 함수
function testFibonacci(n) {
  console.time('실행시간');
  const result = fibonacci(n);
  console.timeEnd('실행시간');
  return result;
}

// 사용 예시
console.log('피보나치 수열의 처음 10개 숫자:');
for (let i = 0; i < 10; i++) {
  console.log(`F(${i}) = ${fibonacci(i)}`);
}

// 큰 숫자에 대한 테스트
console.log('\n큰 숫자 테스트:');
console.log('F(50) =', testFibonacci(50));
