import React from "react";

/* Top Rated Games component displays a list of top-rated video games */

const TopRatedGames = () => {
  // Array of objects containing each games details
    const games = [
        {
            title: "The Legend of Zelda: Breath of the Wild",
            year: 2017,
            rating: 9.8,
            cover: "https://assets.nintendo.com/image/upload/c_fill,w_1200/q_auto:best/f_auto/dpr_2.0/ncom/en_US/games/switch/t/the-legend-of-zelda-breath-of-the-wild-switch/hero",  
        },
        {
            title: "The Last of Us Part II",
            year: 2020,
            rating: 9.7,
            cover: "https://assets1.ignimgs.com/2020/03/05/last-of-us-2---button-2020-1583430650540.jpg",
        },
        {
            title: "God of War Ragnarok",
            year: 2022,
            rating: 9.6,
            cover: "https://cdn.wccftech.com/wp-content/uploads/2021/09/God-of-War-RagnarokHD-scaled.jpg",
        },
        {
            title: "Red Dead Redemption 2",
            year: 2018,
            rating: 9.7,
            cover: "https://i1.wp.com/www.lifeisxbox.eu/wp-content/uploads/2019/12/rdr2.jpg?fit=1080,1080",
        },
        {
            title: "Elden Ring",
            year: 2022,
            rating: 9.5,
            cover: "https://assets-prd.ignimgs.com/2021/06/12/elden-ring-button-03-1623460560664.jpg",
        },
    ];

    return (
        <div style={{ padding: "20px" }}>
          <h1>Top Rated Video Games</h1>
          {/* Game cards container styled as a responsive grid */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "20px" }}>
            {/* Iterate over the games array to render each game's details */}
            {games.map((game, index) => (
              <div
                key={index} //Each game card has a unique key
                style={{ // Styling for each game card
                  border: "1px solid #ccc",
                  borderRadius: "10px",
                  padding: "10px",
                  textAlign: "center",
                  backgroundColor: "#f9f9f9",
                }}
              >
                <img
                  src={game.cover} //URL for the cover image
                  alt={`${game.title} cover`}
                  style={{ width: "100%", borderRadius: "10px" }}
                />
                <h3>{game.title}</h3>
                <p>Year: {game.year}</p>
                <p>Rating: {game.rating}/10</p>
              </div>
            ))}
          </div>
        </div>
      );
};

//Exporting component
export default TopRatedGames;