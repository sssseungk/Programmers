function solution(order) {
    let array = String(order).split("");
    let newArray = array.filter((v) => v === '3' || v === '6' || v === '9');
    return newArray.length;
}