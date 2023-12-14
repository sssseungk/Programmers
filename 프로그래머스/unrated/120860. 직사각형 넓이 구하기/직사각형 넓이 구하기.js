function solution(dots) {
    let width = 0;
    let height = 0;
    
    dots.sort((a, b) => a[0] - b[0]);
    width = dots[2][0] - dots[0][0];
    
    dots.sort((a, b) => a[1] - b[1]);
    height = dots[2][1] - dots[0][1];
    
    return width * height

}