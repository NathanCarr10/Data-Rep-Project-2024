const express = require('express'); //Express is a user-friendly framework that simplifies the development process of Node applications
const cors = require('cors');//To allow communication between your React app and Node/Express server, you need to install and configure the cors middleware
const bodyParser = require('body-parser');//Installed body-parser: To handle POST requests
const mongoose = require('mongoose'); //code to import mongoose database

const app = express();
const port = 4000;

//This middleware setup allows your frontend app (React) to make API requests to the backend (Express) without encountering CORS-related issues.
app.use(cors());

//Body parser middleware to handle JSON data in POST requests
app.use(bodyParser.json());

//added cors headers to enable cors cross origin requests
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

//Connect to Mongo DB
mongoose.connect('mongodb+srv://admin:admin@cluster10.paimy.mongodb.net/DB14')
  .then(() => {
    console.log("MongoDB connected successfully!");
  })
  .catch((err) => {
    console.log("MongoDB connection error:", err);
  });

//Variable to add game data to Mongoose Database
const gameSchema = new mongoose.Schema({
    title: String,
    releaseYear: String,
    coverURL: String,
    status: String,
});

const gameModel = new mongoose.model('Video-Games', gameSchema);

//Get method for all games
app.get('/api/games', async (req, res) => {
  const games = await gameModel.find({});
  res.status(200).json({ games });
});

//Find games by status (wishlist or completed)
app.get('/api/games/status/:status', async (req, res) => {
  const games = await gameModel.find({ status: req.params.status });
  res.status(200).json({ games });
});

//Find a game by ID
app.get('/api/games/:id', async (req, res) => {
  const game = await gameModel.findById(req.params.id);
  res.status(200).json(game);
});

//Update a game by ID
app.put('api/games/:id', async (req,res) => {
  const updatedGame = await gameModel.findById(req.params.id, req.body, {new: true});
  res.status(200).json({message: 'Game Updated!', games: updatedGame});
});

//Delete a game by ID
app.delete('/api/games/:id', async (req,res) => {
  const deletedGame = await gameModel.findByIdAndDelete(req.params.id);
  res.status(200).json({message: 'Games Deleted!', game: deletedGame});
});

//starting the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});