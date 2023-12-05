function solution(n) {
    let result = Math.sqrt(n);
    if (Number.isInteger(result)){
        return 1;
    }else{
        return 2;
    }
}