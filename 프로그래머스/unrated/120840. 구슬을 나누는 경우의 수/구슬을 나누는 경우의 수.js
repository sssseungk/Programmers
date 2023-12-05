function solution(balls, share) {
    let top = 1;
    for(let i=balls; i>0; i--){
        top = top * i;
    }
    
    let bottom1 = 1;
    for(let i=balls-share; i>0; i--){
        bottom1 = bottom1 * i
    }
    
    let bottom2 = 1;
    for(let i=share; i>0; i--){
        bottom2 = bottom2 * i;
    }
    
    return  Math.round(top / (bottom1*bottom2))
}