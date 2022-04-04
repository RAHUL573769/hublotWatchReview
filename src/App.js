
import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './Components/About/About';
import Blogs from './Components/Blogs/Blogs';
import Dash from './Components/Dashboard/Dash';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import Error from './Components/NotFound/Error';
import Review from './Components/Review/Review';

function App() {
  return (
    <div className="App">
   
      <Header></Header>



      <Routes>

        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/review' element={<Review></Review>}></Route>
        <Route path='/dashboard' element={<Dash></Dash>}></Route>
        <Route path='/blogs' element={<Blogs></Blogs>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='*' element={<Error></Error>}></Route>
      </Routes>
    </div>
  );
}

export default App;
