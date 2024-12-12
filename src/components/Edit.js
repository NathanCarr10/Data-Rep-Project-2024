import React, {useState, useEffect} from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function EditGame() {

    //Get game ID from URL
    const {id} = useParams();

    //Game state variables
    const [title, setTitle] = useState('');
    const [releaseYear, setReleaseYear] = useState('');
    const [coverURL, setCoverURL] = useState('');
    const [status, setStatus] = useState('wishlist'); // Default to wishlist

    const navigate = useNavigate();

    //Fetch game data when the component starts
    useEffect(() => {
        axios.get(`http://localhost:4000/api/games/${id}`)
        .then((response) => {
            const game = response.data;
            setTitle(game.title);
            setReleaseYear(game.releaseYear);
            setCoverURL(game.coverURL);
            setStatus(game.status);
        })
        .catch((error) => {
            console.error('Error fetching game: ', error);//Send error message to console if cannot retrieve data
        });
    }, [id]);

    const handleSubmit = (event) => {
        event.preventDefault();
        const updatedGame = { title, releaseYear, coverURL, status};

        axios.put(`http://localhost:4000/api/games/${id}`, updatedGame)
        .then((response) => {
            console.log('Game updated:', response.data);
            navigate('/Wishlist');
        })
        .catch((error) => {
            console.error('Error updating game:', error);
        });
    };

    return (
        <div>
          <h2>Edit Game</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Game Title:</label>
              <input
                type="text"
                className="form-control"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label>Release Year:</label>
              <input
                type="text"
                className="form-control"
                value={releaseYear}
                onChange={(e) => setReleaseYear(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label>Cover URL:</label>
              <input
                type="text"
                className="form-control"
                value={coverURL}
                onChange={(e) => setCoverURL(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label>Status:</label>
              <select
                className="form-control"
                value={status}
                onChange={(e) => setStatus(e.target.value)}
                required
              >
                <option value="wishlist">Wishlist</option>
                <option value="completed">Completed</option>
              </select>
            </div>
            <div className="form-group">
              <button type="submit" className="btn btn-primary">Update Game</button>
            </div>
          </form>
        </div>
      );

};