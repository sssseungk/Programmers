function solution(hp) {
    let ant1 = Math.floor(hp / 5);
    let ant2 = Math.floor((hp%5) / 3);
    let ant3 = Math.floor(((hp%5)%3));
    
    return (ant1 + ant2 + ant3);
}