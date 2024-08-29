import logo from './logo.svg';
import './App.css';
import { Route } from 'react-router-dom';
import AppLayout from './layout/AppLayout';
import Hompage from './pages/Homepage/Hompage';
import MoviePage from './pages/Movies/MoviePage';
import MovieDetail from './pages/ModiveDetail/MovieDetail';
import NotFoundPage from './pages/NotFoundPage/NotFoundPage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<AppLayout/>}>
        <Route index element={<Hompage/>}></Route>
        {/* <Route path="/movies" element={<MoviePage/>}></Route>
        <Route path="/movies/:id" element={<MovieDetail/>}></Route> */}
        <Route path="movies"> 
           <Route path=":id" element={<MovieDetail/>}></Route>
           <Route index element={<MoviePage/>}></Route> 
        </Route>
      </Route>
      <Route path="*" element={<NotFoundPage/>}></Route>
    </Routes>
  );
}

export default App;
