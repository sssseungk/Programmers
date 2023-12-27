function solution(numlist, n) {
    const sortedArray = numlist.sort((a, b) => {
    let distanceA = Math.abs(a - n);
    let distanceB = Math.abs(b - n);

    if (distanceA === distanceB) {
        // 거리가 같을 경우엔 더 큰 수를 앞으로 정렬하기 
        return b - a;
    }
    // 거리가 다를 땐 더 작은 수를 앞으로 정렬하기 
    return distanceA - distanceB;
  });

  return sortedArray;
}
