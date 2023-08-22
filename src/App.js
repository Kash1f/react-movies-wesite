import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import Movie from './components/Moviee/Movie';
import movies from './movie.json'

function App() {
  return (
    <>
    <div className="App">
      <Header/>
      <div className='main'>
      <Movie/>
      
      </div>
      </div>
    </>
  );
}

export default App;
