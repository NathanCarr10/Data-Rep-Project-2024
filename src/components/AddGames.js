import React, {useState} from 'react';
import axios from 'axios';

const AddGames = () => {
    //Variables to store form inputs
    const [title, setTitle] = useState('');
    const [releaseYear, setReleaseYear] = useState('');
    const [coverURL, setCoverURL] = useState('');
    const [status, setStatus] = useState('');

    //Function to handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault(); // Prevent the default form submission behavior

    //Game data to send to the server
    const game = {title, releaseYear, coverURL, status};
    console.log(game); 

    //Use axios to send a POST request to the backend
    axios.post('http://localhost:4000/api/games', game)
        .then((res) => console.log(res.data))
        .catch((error) => console.log(error));

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
            <div className="form-group">
                <label>Title:</label>
                <input
                type="text"
                className ="form-control"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required />
            </div>
            <div className="form-group">
                <label>Release Year:</label>
                <input
                type="text"
                className ="form-control"
                value={releaseYear}
                onChange={(e) => setReleaseYear(e.target.value)}
                required />
            </div>
            <div className="form-group">
                <label>Cover URL:</label>
                <input
                type="url"
                className ="form-control"
                value={coverURL}
                onChange={(e) => setCoverURL(e.target.value)}
                required />
            </div>
            <div className="form-group">
                <label>Status:</label>
                <select
                className ="form-control"
                value={status}
                onChange={(e) => setStatus(e.target.value)}
                required >
                   <option value="wishlist">Wishlist</option>
                   <option value="completed">Completed</option>
                </select>
                <button type="submit" className="btn btn-primary">Add Game</button>
            </div>
        </form>
    </div>
    );
};

export default AddGames;
