function solution(board) {
  const dx = [-1, -1, -1, 0, 0, 1, 1, 1]; // x 좌표 이동값
  const dy = [-1, 0, 1, -1, 1, -1, 0, 1]; // y 좌표 이동값
  let count = 0; 

  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board.length; j++) {
      // 현재 칸이 지뢰인경우
      if (board[i][j] === 1) {
        // 주변 8개 칸 위험지역으로 분류하기
        for (let k = 0; k < 8; k++) {
          let nx = i + dx[k]; // 이동한 x 좌표
          let ny = j + dy[k]; // 이동한 y 좌표

          // 주변 칸이 범위 내에 존재하고, 지뢰가 없는 경우
          if (nx >= 0 && nx < board.length && ny >= 0 && ny < board.length && board[nx][ny] === 0) {
            board[nx][ny] = -1; // 위험지역으로 분류하기
          }
        }
      }
    }
  }

  // 안전한 칸 개수 구하기
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board.length; j++) {
      if (board[i][j] === 0) {
        count++; 
      }
    }
  }

  return count;
}

