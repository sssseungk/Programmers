function solution(keyinput, board) {
    let x = 0;
    let y = 0;
    let keyboard = {
        'up': [0, 1],
        'down': [0, -1],
        'left': [-1, 0],
        'right': [1, 0],
    };

    for (let move of keyinput) {
        let [move_x, move_y] = keyboard[move];
        x += move_x;
        y += move_y;

        let maxX = Math.floor(board[0] / 2);
        let maxY = Math.floor(board[1] / 2);

        if (x < -maxX) x = -maxX;
        if (x > maxX) x = maxX;
        if (y < -maxY) y = -maxY;
        if (y > maxY) y = maxY;
    }

    return [x, y];
}
