//Importing necessary components from 'react-router-dom'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

//Importing Bootstrap CSS for styling the application
import 'bootstrap/dist/css/bootstrap.min.css';

//Importing various custom components used in the app
import NavigationBar from './components/NavigationBar';
import Footer from './components/Footer';
import Content from './components/Content';
import TopRatedGames from './components/TopRatedGames';
import AddGames from './components/AddGames';
import Wishlist from './components/Wishlist';
import CompletedGames from './components/CompletedGames';
import EditGame from './components/Edit';

//App component is the main component of the application.
function App() {
  return (
   //Router provides routing functionality to the entire application.
    <Router>
      <NavigationBar />
      <Routes>
        <Route path="/Content" element={<Content />} />
        <Route path="/AddGames" element={<AddGames />} />
        <Route path="/WishList" element={<Wishlist />} />
        <Route path="/Top-Rated" element={<TopRatedGames />} />
        <Route path="/CompletedGames" element={<CompletedGames />} />
        <Route path="/edit/:id" element={<EditGame />} />
      </Routes>
      <Footer />
    </Router>
  );
}
//Exporting the App component to be rendered in the index.js file
export default App;
