function ListofPlayers() {

    const players = [
        { name: "Virat Kohli", score: 95 },
        { name: "Rohit Sharma", score: 80 },
        { name: "Shubman Gill", score: 65 },
        { name: "KL Rahul", score: 72 },
        { name: "Hardik Pandya", score: 60 },
        { name: "Ravindra Jadeja", score: 78 },
        { name: "R Ashwin", score: 55 },
        { name: "Mohammed Shami", score: 45 },
        { name: "Jasprit Bumrah", score: 82 },
        { name: "Mohammed Siraj", score: 68 },
        { name: "Kuldeep Yadav", score: 74 }
    ];

    const lowScorePlayers = players.filter(player => player.score < 70);

    return (
        <div>
            <h1>List of Players</h1>

            {players.map((player, index) => (
                <div key={index}>
                    <h3>{player.name} - {player.score}</h3>
                </div>
            ))}

            <h2>Players with Score Below 70</h2>

            {lowScorePlayers.map((player, index) => (
                <div key={index}>
                    <h3>{player.name} - {player.score}</h3>
                </div>
            ))}
        </div>
    );
}

export default ListofPlayers;