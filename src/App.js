//Importing necessary components from 'react-router-dom'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

//Importing Bootstrap CSS for styling the application
import 'bootstrap/dist/css/bootstrap.min.css';

//Importing various custom components used in the app
import NavigationBar from './components/NavigationBar';
import Footer from './components/Footer';
import Content from './components/Content';
import TopRatedGames from './components/TopRatedGames';

//App component is the main component of the application.
function App() {
  return (
   //Router provides routing functionality to the entire application.
    <Router>
      <NavigationBar />
      <Routes>
        <Route path="/" element={<Content />} />
        <Route path="/Read" element={<h1>Read Component</h1>} />
        <Route path="/Create" element={<h1>Create Component</h1>} />
        <Route path="/Top-Rated" element={<TopRatedGames />} />
      </Routes>
      <Footer />
    </Router>
  );
}
//Exporting the App component to be rendered in the index.js file
export default App;
