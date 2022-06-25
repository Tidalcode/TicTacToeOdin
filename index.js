function computer() {
        var randomlist = [
        "Rock"
        "Paper"
        "Scissors"
    ];

    let computerlist = randomlist[Math.floor(Math.random()*randomlist.length)];
}

computer()