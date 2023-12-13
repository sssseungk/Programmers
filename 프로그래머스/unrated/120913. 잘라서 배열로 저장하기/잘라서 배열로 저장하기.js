function solution(my_str, n) {
    let answer = [];

    while (my_str.length > 0) {
        if (my_str.length > n) {
            answer.push(my_str.substr(0, n)); 
            my_str = my_str.substr(n); 
        } else {
            answer.push(my_str);
            my_str = ""; 
        }
    }

    return answer;
}
