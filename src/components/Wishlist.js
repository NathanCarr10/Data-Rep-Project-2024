import React, {useState, useEffect} from 'react';

const Wishlist = () => {
    // State to hold the list of games in the wishlist
    const [wishlistGames, setWishlistGames] = useState([]);

    //Get wishlist games from the server
    useEffect(() =>{
        const fetchWishlistGames = async () => {
            const response = await fetch('http://localhost:4000/api/games/status/wishlist');
            const data = await response.json();
            setWishlistGames(data.games); //Update state with the fetched data
        };

    // Call the fetch function when the component loads
    fetchWishlistGames();
    }, []); //Empty dependancy array ensures the fetch happens once on component mount

    return (
        <div>
          <h2>Wishlist</h2>
          {/* Check if there are games in the wishlist */}
          {wishlistGames.length > 0 ? (
            <ul>
            {/* Map through the games and display them as list items */}
              {wishlistGames.map((game) => (
                <li key={game._id}> {/* Use the unique game ID as the key */}
                  <h3>{game.title}</h3>
                  <p>Release Year: {game.releaseYear}</p>
                  <img src={game.coverURL} alt={game.title} style={{ width: '200px', height: 'auto' }} />
                </li>
              ))}
            </ul>
          ) : (
            <p>No games in the wishlist yet.</p>
          )}
        </div>
      )
};

export default Wishlist;