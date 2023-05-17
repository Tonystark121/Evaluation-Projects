import logo from './logo.svg';
import './App.css';
import {useEffect, useState} from 'react'
import axios from 'axios';
import MovieCard from './Components/MovieCard/MovieCard';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

const App = () => {

  const [movies, setMovies] = useState([]);

   const getMovies = async () =>{
    try{const {data} = await axios.get('https://movies-app.prakashsakari.repl.co/api/movies');
    setMovies(data);
    console.log(data)
  }
    catch(err){
      console.log(err);
    }
   }
  //  to reload the moveis  only once
   useEffect(()=>{
    getMovies(); 
   },[])

  return (
    <div>
      <header className='header'><h1 className='heading'>Movies</h1></header>
      
      <main className="movie-card">
          { movies && movies.length>0 && movies.map(movie => (<MovieCard key={movie.id} movie={movie}/>))}
     </main>
    </div>
  )
}

export default App;
