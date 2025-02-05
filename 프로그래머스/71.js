// LIS (Longest Increasing Subsequence) 길이 구하기

function lengthOfLIS(arr) {
  const n = arr.length;
  if (n === 0) return 0;

  const dp = new Array(n).fill(1);

  for (let i = 1; i < n; i++) {
    for (let j = 0; j < i; j++) {
      if (arr[j] < arr[i]) {
        dp[i] = Math.max(dp[i], dp[j] + 1);
      }
    }
  }

  return Math.max(...dp);
}

// 테스트
console.log(lengthOfLIS([10, 20, 10, 30, 20, 50])); // 4 (10 → 20 → 30 → 50)
