function IndianPlayers() {

    const team = [
        "Virat Kohli",
        "Rohit Sharma",
        "Shubman Gill",
        "KL Rahul",
        "Hardik Pandya",
        "Ravindra Jadeja"
    ];

    const oddPlayers = team.filter((player, index) => index % 2 === 0);
    const evenPlayers = team.filter((player, index) => index % 2 !== 0);

    const T20players = [
        "Surya Kumar Yadav",
        "Rinku Singh",
        "Sanju Samson"
    ];

    const RanjiPlayers = [
        "Cheteshwar Pujara",
        "Hanuma Vihari",
        "Mayank Agarwal"
    ];

    const mergedPlayers = [...T20players, ...RanjiPlayers];

    return (
        <div>

            <h1>Odd Team Players</h1>

            {oddPlayers.map((player, index) => (
                <p key={index}>{player}</p>
            ))}

            <h1>Even Team Players</h1>

            {evenPlayers.map((player, index) => (
                <p key={index}>{player}</p>
            ))}

            <h1>Merged Players</h1>

            {mergedPlayers.map((player, index) => (
                <p key={index}>{player}</p>
            ))}

        </div>
    );
}

export default IndianPlayers;