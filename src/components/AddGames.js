import { application } from 'express';
import React, {useState} from 'react';

const AddGames = () => {
    //Variables to store form inputs
    const [title, setTitle] = useState('');
    const [releaseYear, setReleaseYear] = useState('');
    const [coverURL, setCoverURL] = useState('');
    const [status, setStatus] = useState('');
    const [message, setMessage] = useState('wishlist');//Default to wishlist

    //Function to handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();

    //Game data to send to the server
    const gameData = {
        title,
        releaseYear,
        coverURL,
        status,
    };

    await fetch('http://localhost:4000/api/games', {
        method: 'POST',
        headers: {'Content-Type': application/json},
        body: JSON.stringify(gameData),
    });

    //Clear form after submission
    setTitle('');
    setReleaseYear('');
    setCoverURL('');
    setStatus('wishlist');
    };

    //HTML for form submission for user to enter game data
return (
    <div>
        <h2>Add a Video Game</h2>
        <form onSubmit={handleSubmit}>
            <div>
                <label>Title:</label>
                <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required />
            </div>
            <div>
                <label>Release Year:</label>
                <input
                type="text"
                value={releaseYear}
                onChange={(e) => setReleaseYear(e.target.value)}
                required />
            </div>
            <div>
                <label>Cover URL:</label>
                <input
                type="url"
                value={coverURL}
                onChange={(e) => setCoverURL(e.target.value)}
                required />
            </div>
            <div>
                <label>Status:</label>
                <select
                value={status}
                onChange={(e) => setStatus(e.target.value)}
                required >
                   <option value="wishlist">Wishlist</option>
                   <option value="completed">Completed</option>
                </select>
                <button type="submit">Add Game</button>
            </div>
        </form>
    </div>
    );
};

export default AddGames;
